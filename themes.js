// themes.js - Omar System
(function(){
  const themes = {
    green: { bg:'#F0FDF4', card:'#ffffff', 'card-border':'#BBF7D0', text:'#14532D', 'text-soft':'#4ADE80', hero:'#16A34A', 'bg-soft':'#DCFCE7', 'nav-bg':'rgba(255,255,255,0.9)' },
    dark: { bg:'#0f172a', card:'#1e293b', 'card-border':'#334155', text:'#f1f5f9', 'text-soft':'#94a3b8', hero:'#22c55e', 'bg-soft':'#1e293b', 'nav-bg':'rgba(30,41,59,0.9)' },
    blue: { bg:'#eff6ff', card:'#ffffff', 'card-border':'#bfdbfe', text:'#1e3a8a', 'text-soft':'#93c5fd', hero:'#2563eb', 'bg-soft':'#dbeafe', 'nav-bg':'rgba(255,255,255,0.9)' }
  };
  function apply(name){
    const t = themes[name] || themes.green;
    Object.keys(t).forEach(k=>{ document.documentElement.style.setProperty('--'+k, t[k]); });
    localStorage.setItem('omar_theme', name);
    localStorage.setItem('theme', name);
  }
  window.applyTheme = apply;
  window.setTheme = apply;
  const saved = localStorage.getItem('omar_theme') || localStorage.getItem('theme') || 'green';
  apply(saved);
  document.addEventListener('gdrive-data-updated', ()=>{
    const s = localStorage.getItem('omar_theme') || localStorage.getItem('theme');
    if(s) apply(s);
  });
})();
