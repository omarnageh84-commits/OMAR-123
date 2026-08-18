// Google Drive Sync - Omar Workspace - Final Clean Version
const GDRIVE_CONFIG = {
  clientId: "430114765758-pcre3l9eegi2iuhk3761k2t5irafs30o.apps.googleusercontent.com",
  fileName: "OmarWorkspace.json",
  keys: ['omar_tx_v3','omar_master_bands','omar_wallets_v3','att_fixed_final','att_hols_fixed','att_notes','attendance_log','tasks_v6','debts_pro_v2','omar_important','omar_theme','theme','att_settings','att_active_month','att_closed']
};

let tokenClient = null;
let accessToken = null;
let gapiInited = false;
let gisInited = false;
let fileId = null;
let pushTimer = null;

function loadGapi(){
  return new Promise((res,rej)=>{
    if(window.gapi) return res();
    const s=document.createElement('script');
    s.src="https://apis.google.com/js/api.js";
    s.onload=()=>{ gapi.load('client', async ()=>{
      await gapi.client.init({ discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"] });
      gapiInited=true; res();
    });};
    s.onerror=rej;
    document.head.appendChild(s);
  });
}

function loadGis(){
  return new Promise((res,rej)=>{
    if(window.google?.accounts) return res();
    const s=document.createElement('script');
    s.src="https://accounts.google.com/gsi/client";
    s.onload=()=>{ gisInited=true; res(); };
    s.onerror=rej;
    document.head.appendChild(s);
  });
}

async function initGoogleDrive(){
  if(GDRIVE_CONFIG.clientId.includes('YOUR_GOOGLE')){
    updateUIStatus('not-configured'); return;
  }
  await Promise.all([loadGapi(), loadGis()]);
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GDRIVE_CONFIG.clientId,
    scope: "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.readonly",
    callback: async (resp)=>{
      if(resp.error){ console.error(resp); updateUIStatus('disconnected'); return; }
      accessToken = resp.access_token;
      gapi.client.setToken({access_token: accessToken});
      localStorage.setItem('_gdrive_token', accessToken);
      updateUIStatus('connected');
      document.dispatchEvent(new CustomEvent('gdrive-ready'));
      await pullFromDrive();
    }
  });
  const saved = localStorage.getItem('_gdrive_token');
  if(saved){
    accessToken = saved;
    gapi.client.setToken({access_token: saved});
    updateUIStatus('connected');
    try{ await pullFromDrive(); }catch(e){ updateUIStatus('disconnected'); }
  } else {
    updateUIStatus('disconnected');
  }
}

function signInGoogle(){
  if(!tokenClient){ initGoogleDrive().then(()=> tokenClient.requestAccessToken({prompt: 'consent'})); return; }
  tokenClient.requestAccessToken({prompt: 'consent'});
}

function signOutGoogle(){
  if(accessToken){
    try{ google.accounts.oauth2.revoke(accessToken); }catch(e){}
    accessToken=null; fileId=null;
    localStorage.removeItem('_gdrive_token');
    gapi.client.setToken(null);
    updateUIStatus('disconnected');
  }
}

function updateUIStatus(state){
  const el=document.getElementById('gdrive-status') || document.getElementById('onedrive-status');
  if(!el) return;
  if(state==='connected'){
    el.innerHTML = '☁️ مربوط بـ Gmail Drive ✅ - الداتا في Drive';
    el.style.background='#DCFCE7'; el.style.color='#14532D';
    el.onclick=null;
  } else if(state==='disconnected'){
    el.innerHTML = '⚠️ مش مربوط - اضغط لربط Google Drive';
    el.style.background='#FEF3C7'; el.style.color='#92400E';
    el.onclick=signInGoogle;
  }
}

async function pushToDrive(){
  if(!accessToken) return;
  const payload={};
  GDRIVE_CONFIG.keys.forEach(k=>{ payload[k]=localStorage.getItem(k); });
  payload._lastSync = new Date().toISOString();
  const fileContent = JSON.stringify(payload);
  const blob = new Blob([fileContent], {type:'application/json'});
  try{
    if(!fileId){
      const list = await gapi.client.drive.files.list({ spaces:'appDataFolder', q: `name='${GDRIVE_CONFIG.fileName}'`, fields:'files(id,name)' });
      if(list.result.files.length>0) fileId = list.result.files[0].id;
    }
    if(fileId){
      await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
        method:'PATCH',
        headers:{'Authorization':'Bearer '+accessToken},
        body: blob
      });
    } else {
      const metadata = { name: GDRIVE_CONFIG.fileName, parents:['appDataFolder'] };
      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], {type:'application/json'}));
      form.append('file', blob);
      const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method:'POST',
        headers:{'Authorization':'Bearer '+accessToken},
        body: form
      });
      const j = await res.json();
      fileId = j.id;
    }
    localStorage.setItem('_gdrive_last_push', new Date().toISOString());
  }catch(e){ console.error('push failed',e); }
}

async function pullFromDrive(){
  if(!accessToken) return false;
  try{
    const list = await gapi.client.drive.files.list({ spaces:'appDataFolder', q: `name='${GDRIVE_CONFIG.fileName}'`, fields:'files(id,name,modifiedTime)' });
    if(list.result.files.length===0){ await pushToDrive(); return false; }
    fileId = list.result.files[0].id;
    const res = await gapi.client.drive.files.get({ fileId, alt:'media' });
    let jsonData = res.result;
    if(typeof jsonData === 'string'){ try{ jsonData = JSON.parse(jsonData); }catch(e){} }
    GDRIVE_CONFIG.keys.forEach(k=>{ if(jsonData[k]!==undefined && jsonData[k]!==null) localStorage.setItem(k, jsonData[k]); });
    document.dispatchEvent(new CustomEvent('gdrive-data-updated'));
    document.dispatchEvent(new CustomEvent('onedrive-data-updated'));
    return true;
  }catch(e){ console.error('pull failed',e); return false; }
}

window.saveData = async function(){ await pushToDrive(); }
window.GoogleDrive = { init:initGoogleDrive, signIn:signInGoogle, signOut:signOutGoogle, push:pushToDrive, pull:pullFromDrive };
window.OneDrive = window.GoogleDrive;

const origSet = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(k,v){ origSet(k,v); if(GDRIVE_CONFIG.keys.includes(k)){ clearTimeout(pushTimer); pushTimer=setTimeout(()=>pushToDrive(), 1200); } };

window.addEventListener('DOMContentLoaded', initGoogleDrive);
