
const CACHE_NAME = "omar-onedrive-v3-apk";
const urlsToCache = [
  "./",
  "./index.html",
  "./home.html",
  "./daily.html",
  "./attendance.html",
  "./tasks.html",
  "./google-drive.js",
  "./themes.js",
  "./manifest.json"
];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if(e.request.url.includes('graph.microsoft') || e.request.url.includes('login.microsoft')) return;
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).then(r=>{
      if(e.request.method==='GET' && e.request.url.startsWith(self.location.origin)){
        const clone=r.clone(); caches.open(CACHE_NAME).then(c=>c.put(e.request, clone));
      }
      return r;
    })).catch(()=>caches.match('./index.html'))
  );
});
