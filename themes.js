const THEMES = [
  {id:'amber', name:'عنبر دافئ 🌅', hero:'#D97706', bg:'#FDF6E3', bgSoft:'#FFF7ED', card:'#FFFFFF', border:'#F5E6C8', text:'#1C1917', soft:'#A16207'},
  {id:'dark', name:'ليلي 🌙', hero:'#111111', bg:'#121212', bgSoft:'#1E1E1E', card:'#1A1A1A', border:'#2A2A2A', text:'#FFFFFF', soft:'#888888'},
  {id:'pharmacy', name:'صيدلية 💊', hero:'#0EA5E9', bg:'#F0F9FF', bgSoft:'#E0F2FE', card:'#FFFFFF', border:'#BAE6FD', text:'#0C4A6E', soft:'#0284C7'},
  {id:'forest', name:'غابة 🌿', hero:'#16A34A', bg:'#F0FDF4', bgSoft:'#DCFCE7', card:'#FFFFFF', border:'#BBF7D0', text:'#14532D', soft:'#15803D'},
  {id:'rose', name:'وردي 🌸', hero:'#E11D48', bg:'#FFF1F2', bgSoft:'#FFE4E6', card:'#FFFFFF', border:'#FECDD3', text:'#881337', soft:'#BE123C'},
];
function applyTheme(t){
  const r=document.documentElement;
  r.style.setProperty('--hero', t.hero);
  r.style.setProperty('--bg', t.bg);
  r.style.setProperty('--bg-soft', t.bgSoft);
  r.style.setProperty('--card', t.card);
  r.style.setProperty('--card-border', t.border);
  r.style.setProperty('--text', t.text);
  r.style.setProperty('--text-soft', t.soft);
  r.style.setProperty('--primary', t.hero);
  localStorage.setItem('selectedTheme', t.id);
}
function renderThemesList(){
  const box=document.getElementById('themesList');
  if(!box) return;
  const curId=localStorage.getItem('selectedTheme')||'amber';
  box.innerHTML=THEMES.map(t=>`
    <div onclick="applyThemeById('${t.id}')" style="display:flex;justify-content:space-between;align-items:center;padding:10px;border-radius:10px;border:1px solid ${t.id===curId?'var(--hero)':'var(--card-border)'};background:${t.bg};cursor:pointer">
      <div style="display:flex;gap:8px;align-items:center"><div style="width:22px;height:22px;border-radius:6px;background:${t.hero}"></div><span style="font-size:11px;font-weight:700;color:${t.text}">${t.name}</span></div>
      <span style="font-size:10px">${t.id===curId?'✓':''}</span>
    </div>
  `).join('');
}
function applyThemeById(id){
  const t=THEMES.find(x=>x.id===id);
  if(t){ applyTheme(t); renderThemesList(); }
}
(function(){
  const saved=localStorage.getItem('selectedTheme')||'amber';
  const t=THEMES.find(x=>x.id===saved);
  if(t) applyTheme(t);
})();
