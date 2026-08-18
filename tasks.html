<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="manifest" href="manifest.json">
<link rel="icon" href="icon-192.jpg">
<title>مساحة العمل - Gmail</title>
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script src="https://apis.google.com/js/api.js" async defer></script>
<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'IBM Plex Sans Arabic',sans-serif}
body{background:#FBF9F6;height:100dvh;overflow:hidden;display:flex;flex-direction:column}
#app{flex:1;display:flex;flex-direction:column;background:#fff;overflow:hidden}
.nu-scroll::-webkit-scrollbar{width:0}
.color-dot{width:22px;height:22px;border-radius:6px;border:2px solid #fff;box-shadow:0 0 0 1px #E7E5E4;cursor:pointer}
.excel-grid{display:grid;grid-template-columns:repeat(10,1fr);gap:4px}
.excel-cell{width:100%;aspect-ratio:1;border-radius:6px;border:1px solid #eee;cursor:pointer}
.tab{flex:1;padding:8px 3px;border:none;border-radius:10px;background:transparent;font-size:10px;font-weight:600}
.tab.active{background:#111;color:#fff;font-weight:800}
#cameraVideo{width:100%;border-radius:12px;background:#000;aspect-ratio:3/4;object-fit:cover}
.hidden-note{background:#111;color:#fff;border-radius:14px;padding:12px;margin-bottom:8px;border:1px solid #222;line-height:1.8}
.filter-chip{padding:7px 12px;border-radius:20px;border:1px solid #E7E5E4;background:#fff;font-size:11px;font-weight:700;cursor:pointer}
.filter-chip.active{background:#111;color:#fff;border-color:#111}
#deleteWarningModal,#secretCodeModal,#gmailModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:11000;align-items:center;justify-content:center;padding:16px}
#deleteWarningModal.show,#secretCodeModal.show,#gmailModal.show{display:flex}
.rich-toolbar{display:flex;gap:6px;padding:10px;background:#F5F5F4;border-radius:12px;margin-bottom:8px;overflow:auto;align-items:center;flex-shrink:0}
.rich-toolbar button{border:1px solid #E7E5E4;background:#fff;padding:7px 12px;border-radius:8px;font-weight:800;flex-shrink:0}
.dot{width:24px;height:24px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #ccc;cursor:pointer;flex-shrink:0}
#pNote{flex:1;display:flex;flex-direction:column;min-height:0}
.rich-editor{flex:1;min-height:45vh;max-height:65vh;border:1px solid #E7E5E4;border-radius:12px;padding:14px;outline:none;background:#fff;line-height:2;overflow:auto;direction:rtl;text-align:right;unicode-bidi:plaintext;white-space:pre-wrap;word-break:break-word}
.rich-editor:focus{min-height:68vh;max-height:75vh;border-color:#111}
.gmail-connected{background:#E8F5E9;color:#2E7D32!important;border-color:#A5D6A7!important}
</style>
</head>
<body>
<div id="app">
<div style="padding:14px 16px;border-bottom:1px solid #F2EFEA;display:flex;justify-content:space-between;align-items:center;">
<div style="display:flex;gap:10px;align-items:center;"><div id="vaultTrigger" style="width:40px;height:40px;background:#111;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff">✦</div><div><div style="font-weight:700;">مساحة العمل</div><div id="stats" style="font-size:11px;color:#888;"></div><div id="gmailStatus" style="font-size:10px;color:#2E7D32;display:none">● مربوط بجيميل</div></div></div>
<div style="display:flex;gap:6px;"><button id="gmailBtn" onclick="handleGmailAuth()" style="background:#fff;border:1px solid #E7E5E4;padding:9px 12px;border-radius:10px;font-size:12px;font-weight:700">📧 ربط جيميل</button><button onclick="openManager()" style="background:#F5F5F4;border:none;padding:9px 12px;border-radius:10px">⚙ إدارة</button><button onclick="addQuick()" style="background:#111;color:#fff;border:none;padding:9px 14px;border-radius:10px;font-weight:700">+ جديد</button></div>
</div>
<div style="padding:12px;background:#FAFAF9;border-bottom:1px solid #F2EFEA;">
<input id="mainInput" placeholder="ابحث... اكتب رمزك الخاص للخفي" style="width:100%;background:#fff;border:1px solid #E7E5E4;padding:12px;border-radius:12px;outline:none">
<div style="display:flex;gap:8px;margin-top:10px;align-items:center;"><select id="cat" style="flex:1;background:#fff;border:1px solid #E7E5E4;border-radius:10px;padding:10px"></select><div id="quickColors" style="display:flex;gap:6px;flex:1;overflow:auto" class="nu-scroll"></div><button onclick="doAdd()" style="background:#111;color:#fff;border:none;border-radius:10px;padding:10px 16px;font-weight:700">إضافة</button></div>
</div>
<div style="background:#fff;border-bottom:1px solid #F2EFEA;padding:10px 12px;display:flex;gap:6px;align-items:center">
<div id="taskTabsFilter" style="display:flex;gap:6px;overflow:auto;flex:1" class="nu-scroll">
<button onclick="filterTasksTab('all')" id="tt_all" class="filter-chip active">الكل</button>
<button onclick="filterTasksTab('صيدلية')" id="tt_صيدلية" class="filter-chip">💊 صيدلية</button>
<button onclick="filterTasksTab('شغل')" id="tt_شغل" class="filter-chip">💻 شغل</button>
<button onclick="filterTasksTab('شخصي')" id="tt_شخصي" class="filter-chip">🏠 شخصي</button>
<button onclick="filterTasksTab('done')" id="tt_done" class="filter-chip">✓ منجز</button>
</div>
<button onclick="openGmailImport()" style="background:#111;color:#fff;border:none;padding:7px 12px;border-radius:20px;font-size:11px;white-space:nowrap">📥 من الإيميل</button>
</div>
<div id="board" style="flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:10px;background:#FBF9F6" class="nu-scroll"></div>
</div>

<div id="gmailModal" onclick="if(event.target==this)closeGmailImport()"><div style="background:#fff;width:100%;max-width:420px;border-radius:20px;overflow:hidden;max-height:85vh;display:flex;flex-direction:column"><div style="padding:16px;border-bottom:1px solid #eee;display:flex;justify-content:space-between"><b>📧 استيراد من Gmail</b><button onclick="closeGmailImport()" style="border:none;background:#F5F5F4;width:28px;height:28px;border-radius:8px">✕</button></div><div style="padding:12px;display:flex;gap:6px"><button onclick="fetchGmailEmails()" style="flex:1;background:#111;color:#fff;border:none;padding:10px;border-radius:10px;font-weight:700">🔄 تحديث الإيميلات</button><button onclick="exportTasksToGmail()" style="flex:1;background:#F5F5F4;border:none;padding:10px;border-radius:10px">📤 تصدير مهامي</button></div><div id="gmailList" style="flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:8px" class="nu-scroll"><div style="text-align:center;color:#888;padding:20px">اربط جيميل أولاً</div></div></div></div>

<div id="secretCodeModal" onclick="if(event.target==this)closeSecretModal()"><div style="background:#111;color:#fff;width:100%;max-width:340px;border-radius:20px;padding:20px"><div style="text-align:center"><div style="font-size:36px">🔑</div><div style="font-weight:800">رمزك الخاص للخفي</div><div style="font-size:11px;color:#777;margin-top:4px">دوسة 3 ثواني على ✦</div></div><input id="secretInput" type="password" placeholder="رقمك السري" style="width:100%;background:#1A1A1A;border:1px solid #333;padding:13px;border-radius:11px;color:#fff;text-align:center;margin-top:12px"><div style="display:flex;gap:8px;margin-top:12px"><button onclick="closeSecretModal()" style="flex:1;background:#222;color:#fff;border:none;padding:11px;border-radius:10px">إلغاء</button><button onclick="saveSecretCode()" style="flex:1;background:#fff;color:#000;border:none;padding:11px;border-radius:10px;font-weight:800">حفظ</button></div></div></div>
<div id="deleteWarningModal" onclick="if(event.target==this)closeDeleteWarning()"><div style="background:#fff;width:100%;max-width:360px;border-radius:22px;overflow:hidden"><div style="background:#FEF2F2;padding:18px;text-align:center"><div style="font-size:36px">⚠️</div><div style="font-weight:900;color:#991B1B">هتحذف؟</div></div><div style="padding:16px"><div id="delTaskPreview" style="background:#FAFAF9;border:1px solid #eee;border-radius:12px;padding:12px;margin-bottom:10px"></div><label style="display:flex;gap:8px;align-items:center;background:#F9FAFB;border:1px solid #E7E5E4;border-radius:10px;padding:10px"><input type="checkbox" id="delConfirmCheck" onchange="toggleDelBtn()"><span style="font-size:12px;font-weight:700">أنا متأكد</span></label><div style="display:flex;gap:8px;margin-top:12px"><button onclick="closeDeleteWarning()" style="flex:1;background:#F5F5F4;border:none;padding:12px;border-radius:11px">إلغاء</button><button id="finalDelBtn" onclick="confirmDelete()" disabled style="flex:1;background:#E5E7EB;color:#9CA3AF;border:none;padding:12px;border-radius:11px;font-weight:800">حذف</button></div></div></div></div>
<div id="managerModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10000;align-items:center;justify-content:center;padding:16px"><div style="background:#fff;width:100%;max-width:420px;border-radius:20px;overflow:hidden;max-height:90vh;display:flex;flex-direction:column"><div style="display:flex;gap:4px;background:#F5F5F4;margin:12px;padding:4px;border-radius:12px"><button onclick="mTab('cats')" id="mTabCats" style="flex:1;padding:10px;border:none;border-radius:8px;background:#fff;font-weight:700">📁 التصنيفات</button><button onclick="mTab('colors')" id="mTabColors" style="flex:1;padding:10px;border:none;border-radius:8px;background:transparent">🎨 الألوان</button></div><div style="flex:1;overflow:auto;padding:0 16px 16px" class="nu-scroll"><div id="mCats"><div style="display:flex;gap:6px;margin-bottom:14px"><input id="newCatEmoji" placeholder="💊" style="width:50px;text-align:center;border:1px solid #E7E5E4;border-radius:10px;padding:10px"><input id="newCatName" placeholder="اسم التصنيف" style="flex:1;border:1px solid #E7E5E4;border-radius:10px;padding:10px"><button onclick="addCategory()" style="background:#111;color:#fff;border:none;padding:10px 14px;border-radius:10px">+</button></div><div id="catList"></div></div><div id="mColors" style="display:none"><div id="excelTheme" class="excel-grid" style="margin-bottom:12px"></div><div id="excelStandard" class="excel-grid"></div><div id="colorList" style="margin-top:10px"></div></div></div><div style="padding:12px 16px;border-top:1px solid #F2EFEA"><button onclick="closeManager()" style="width:100%;background:#F5F5F4;border:none;padding:11px;border-radius:12px">إغلاق</button></div></div></div>

<div id="modal" style="display:none;position:fixed;inset:0;background:#fff;z-index:9999;flex-direction:column">
<div id="modalCover" style="height:70px;position:relative;flex-shrink:0"><button onclick="closeModal()" style="position:absolute;top:14px;left:14px;background:rgba(0,0,0,.2);border:none;width:32px;height:32px;border-radius:50%;color:#fff">✕</button></div>
<div style="padding:12px;flex:1;overflow:auto;display:flex;flex-direction:column" class="nu-scroll">
<h2 id="modalTitle" contenteditable="true" style="font-size:15px;font-weight:700;outline:none;border-bottom:1px dashed #E7E5E4;padding-bottom:6px;margin-bottom:10px;flex-shrink:0"></h2>
<div style="background:#fff;border:1px solid #F2EFEA;border-radius:16px;padding:10px;margin-bottom:12px;flex-shrink:0"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="font-size:12px">✔ مهام فرعية</b><span id="subProgress" style="font-size:11px;background:#F5F5F4;padding:2px 8px;border-radius:20px">0/0</span></div><div id="subList" style="display:flex;flex-direction:column;gap:6px;margin-bottom:6px"></div><div style="display:flex;gap:6px"><input id="subInput" placeholder="مهمة فرعية + Enter" style="flex:1;border:1px solid #F2EFA;border-radius:10px;padding:8px 10px"><button onclick="addSub()" style="background:#111;color:#fff;border:none;padding:8px 12px;border-radius:10px">+</button></div><div style="height:4px;background:#F5F5F4;border-radius:10px;margin-top:8px;overflow:hidden"><div id="subBar" style="height:100%;width:0%;background:#111"></div></div></div>
<div style="display:flex;gap:4px;background:#F5F5F4;padding:4px;border-radius:12px;margin-bottom:10px;overflow:auto;flex-shrink:0" class="nu-scroll">
<button onclick="tab('colors')" id="tColors" class="tab">🎨 ألوان</button>
<button onclick="tab('camera')" id="tCamera" class="tab">📷 كاميرا</button>
<button onclick="tab('draw')" id="tDraw" class="tab">✏ رسم</button>
<button onclick="tab('voice')" id="tVoice" class="tab">🎙 فويس</button>
<button onclick="tab('note')" id="tNote" class="tab active">📝 نوت</button>
<button onclick="tab('rem')" id="tRem" class="tab">⏰ منبه</button>
<button onclick="tab('hidden')" id="tHidden" class="tab" style="display:none;background:#000;color:#fff">🔒 الخفي</button>
</div>
<div id="pColors" style="display:none"><div style="display:flex;gap:8px;align-items:center;background:#F5F5F4;padding:10px;border-radius:12px;margin-bottom:8px"><div style="font-size:11px;font-weight:700">اللون الحالي:</div><div id="currentColorPreview" style="width:28px;height:28px;border-radius:8px;border:1px solid #ddd;background:#fff"></div><button onclick="toggleAllColors()" style="margin-right:auto;background:#fff;border:1px solid #E7E5E4;padding:6px 10px;border-radius:8px;font-size:11px">عرض كل الألوان ▼</button></div><div id="allColorsBox" style="display:none;max-height:220px;overflow:auto;background:#FAFAF9;padding:8px;border-radius:12px;border:1px solid #F2EFEA" class="nu-scroll"><div id="modalColorsTheme" class="excel-grid" style="margin-bottom:8px"></div><div id="modalColorsStandard" class="excel-grid"></div></div></div>
<div id="pCamera" style="display:none"><div style="display:flex;gap:6px;margin-bottom:8px"><button onclick="openCamera()" style="flex:1;background:#111;color:#fff;border:none;padding:10px;border-radius:10px">📷 فتح الكاميرا</button><button onclick="document.getElementById('task-photo-file').click()" style="flex:1;background:#F5F5F4;border:none;padding:10px;border-radius:10px">🖼 من المعرض</button><input type="file" id="task-photo-file" accept="image/*" style="display:none" onchange="handleFile(this)"></div><div id="cameraBox" style="display:none"><video id="cameraVideo" autoplay playsinline></video><canvas id="cameraCanvas" style="display:none"></canvas><div style="display:flex;gap:8px;margin-top:8px"><button onclick="closeCamera()" style="flex:1;background:#F5F5F4;border:none;padding:9px;border-radius:8px">إلغاء</button><button onclick="takePhoto()" style="flex:1;background:#111;color:#fff;border:none;padding:9px;border-radius:8px">التقاط</button></div></div><div id="photoGallery" style="display:flex;gap:8px;overflow:auto;flex-wrap:wrap;margin-top:10px"></div></div>
<div id="pDraw" style="display:none"><canvas id="canvas" style="width:100%;height:180px;border:2px dashed #E7E5E4;border-radius:12px"></canvas><div style="display:flex;gap:8px;margin-top:8px;align-items:center"><input type="color" id="penColor" value="#111111" style="width:40px;height:36px;border:none;border-radius:8px"><input type="range" id="penSize" min="1" max="15" value="4" style="flex:1"><button onclick="clearCanvas()" style="background:#FEE2E2;border:none;padding:8px 12px;border-radius:8px">مسح</button></div><button onclick="saveDraw()" style="width:100%;margin-top:8px;background:#111;color:#fff;border:none;padding:10px;border-radius:10px">💾 حفظ</button><div id="drawGallery" style="display:flex;gap:8px;overflow:auto;margin-top:10px"></div></div>
<div id="pVoice" style="display:none"><div style="background:#F5F5F4;border-radius:16px;padding:16px;text-align:center"><div id="timer" style="font-size:22px;font-weight:800">00:00</div><button id="recBtn" onclick="toggleRec()" style="width:64px;height:64px;border-radius:50%;background:#ef4444;border:none;color:#fff;font-size:24px;margin-top:8px">●</button></div><div id="voiceList" style="margin-top:10px;display:flex;flex-direction:column;gap:8px"></div></div>
<div id="pNote">
<div class="rich-toolbar">
<button onclick="formatNote('bold')"><b>B</b></button>
<button onclick="formatNote('insertUnorderedList')">• نقط</button>
<button onclick="formatNote('insertOrderedList')">1. ترقيم</button>
<div class="dot" style="background:#ef4444" onclick="applyNoteColor('#ef4444')"></div>
<div class="dot" style="background:#f59e0b" onclick="applyNoteColor('#f59e0b')"></div>
<div class="dot" style="background:#22c55e" onclick="applyNoteColor('#22c55e')"></div>
<div class="dot" style="background:#3b82f6" onclick="applyNoteColor('#3b82f6')"></div>
<div class="dot" style="background:#8b5cf6" onclick="applyNoteColor('#8b5cf6')"></div>
<div class="dot" style="background:#111" onclick="applyNoteColor('#111111')"></div>
<input type="color" value="#ef4444" style="width:26px;height:26px;border-radius:50%" onchange="applyNoteColor(this.value)">
</div>
<div id="noteEditor" class="rich-editor" contenteditable="true"></div>
<div style="font-size:10px;color:#888;margin-top:6px;flex-shrink:0">💡 المربع بيكبر لآخر الصفحة - اللون في نفس مكان المؤشر</div>
<button onclick="saveNote()" style="width:100%;margin-top:8px;background:#111;color:#fff;border:none;padding:12px;border-radius:12px;font-weight:700;flex-shrink:0">حفظ النوت بالألوان</button>
</div>
<div id="pRem" style="display:none"><div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:12px;padding:10px"><label style="display:flex;align-items:center;gap:6px;font-size:12px;margin-bottom:8px"><input type="checkbox" id="remEnabled" onchange="toggleRem()"> تفعيل المنبه</label><div id="remBox" style="display:none"><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px"><input type="date" id="remDate" style="border:1px solid #E7E5E4;border-radius:8px;padding:8px"><input type="time" id="remTime" style="border:1px solid #E7E5E4;border-radius:8px;padding:8px"></div><select id="remRepeat" style="width:100%;border:1px solid #E7E5E4;border-radius:8px;padding:8px;margin-bottom:6px"><option value="none">لا يتكرر</option><option value="daily">يومياً</option><option value="weekly">أسبوعياً</option></select><div id="remNext" style="font-size:10px;color:#92400E"></div><button onclick="saveReminder()" style="width:100%;margin-top:8px;background:#f59e0b;color:#fff;border:none;padding:8px;border-radius:8px;font-weight:700">حفظ المنبه</button></div></div></div>
<div id="pHidden" style="display:none">
<div id="hiddenAuth" style="background:#0F0F0F;border-radius:16px;padding:16px;color:#fff;border:1px solid #222">
<div style="text-align:center;padding:10px"><div style="font-size:40px">🔒</div><div style="font-weight:800;margin-top:6px">الخفي محمي - بيقفل تلقائي</div></div>
<input id="hPass" type="password" placeholder="رمز الخفي" style="width:100%;background:#1A1A1A;border:1px solid #2A2A2A;padding:13px;border-radius:11px;color:#fff;text-align:center;margin-top:12px">
<button onclick="unlockHidden()" style="width:100%;margin-top:10px;background:#fff;color:#000;border:none;padding:12px;border-radius:11px;font-weight:800">فتح 🔓</button>
<div id="hErr" style="color:#ff5a5a;font-size:11px;text-align:center;margin-top:8px;display:none"></div>
</div>
<div id="hiddenContent" style="display:none">
<div style="background:#0F0F0F;border-radius:16px;padding:12px;border:1px solid #222">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px"><b style="font-size:13px;color:#fff">📓 نوتس الخفي</b><div style="display:flex;gap:6px"><button onclick="openChangePassword()" style="background:#1A1A1A;border:1px solid #333;color:#aaa;padding:7px 10px;border-radius:8px;font-size:11px">🔑 تغيير الرمز</button><button onclick="openHiddenEditor()" style="background:#fff;color:#000;border:none;padding:7px 12px;border-radius:8px;font-weight:800;font-size:11px">+ نوت</button><button onclick="hideHiddenTab()" style="background:#1A1A1A;border:1px solid #2A2A2A;color:#fff;padding:7px 10px;border-radius:8px;font-size:11px">إخفاء</button></div></div>
<div id="hiddenEditorBox" style="display:none;background:#1A1A1A;border:1px solid #2A2A2A;border-radius:12px;padding:10px;margin-bottom:10px">
<div class="rich-toolbar" style="background:#222"><button onclick="formatHidden('bold')"><b>B</b></button><div class="dot" style="background:#ef4444" onclick="applyHiddenColor('#ef4444')"></div><div class="dot" style="background:#22c55e" onclick="applyHiddenColor('#22c55e')"></div><div class="dot" style="background:#3b82f6" onclick="applyHiddenColor('#3b82f6')"></div><div class="dot" style="background:#f59e0b" onclick="applyHiddenColor('#f59e0b')"></div><div class="dot" style="background:#fff" onclick="applyHiddenColor('#ffffff')"></div></div>
<input id="hiddenTitle" placeholder="عنوان..." style="width:100%;background:#111;border:1px solid #333;padding:10px;border-radius:8px;color:#fff;margin-bottom:8px">
<div id="hiddenBody" class="rich-editor" contenteditable="true" style="background:#111;color:#fff;border-color:#333;min-height:30vh"></div>
<div style="display:flex;gap:6px;margin-top:8px"><button onclick="saveHiddenRich()" style="flex:1;background:#fff;color:#000;border:none;padding:10px;border-radius:8px;font-weight:800">حفظ ملون</button><button onclick="closeHiddenEditor()" style="flex:1;background:#222;color:#fff;border:1px solid #333;padding:10px;border-radius:8px">إلغاء</button></div>
</div>
<input id="hSearch" placeholder="بحث..." oninput="renderHidden()" style="width:100%;background:#1A1A1A;border:1px solid #2A2A2A;padding:9px 12px;border-radius:9px;color:#fff;font-size:12px;margin-bottom:10px">
<div id="hList" style="max-height:52vh;overflow:auto" class="nu-scroll"></div>
</div>
</div>
</div>
</div>
<div style="padding:10px 12px;border-top:1px solid #F2EFEA;display:flex;gap:8px;flex-shrink:0"><button onclick="deleteCurrent()" style="background:#FFF1F2;color:#ef4444;border:1px solid #FECDD3;padding:10px 14px;border-radius:10px;flex:1;font-weight:700">🗑 حذف</button><button onclick="toggleDone()" id="doneBtn" style="background:#111;color:#fff;border:none;padding:10px 14px;border-radius:10px;font-weight:700;flex:2">تم ✓</button></div>
</div>

<script>
/* ===== GMAIL INTEGRATION - جديد ===== */
const GMAIL_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'; // <-- حط الـ Client ID بتاعك هنا
const GMAIL_SCOPES = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send';
let tokenClient, gapiInited=false, gisInited=false, gmailAccessToken=null;

window.onload = () => {
  gapi.load('client', async () => {
    await gapi.client.init({});
    await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest');
    gapiInited=true;
  });
}
window.onGsiLoad = () => {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GMAIL_CLIENT_ID,
    scope: GMAIL_SCOPES,
    callback: (resp) => {
      if(resp.access_token){
        gmailAccessToken = resp.access_token;
        localStorage.setItem('gmail_token', resp.access_token);
        document.getElementById('gmailBtn').innerText='✓ مربوط';
        document.getElementById('gmailBtn').classList.add('gmail-connected');
        document.getElementById('gmailStatus').style.display='block';
        fetchGmailEmails();
      }
    }
  });
  gisInited=true;
}
function handleGmailAuth(){
  if(!gisInited ||!gapiInited){ alert('جاري تحميل جوجل... حاول تاني'); return; }
  if(GMAIL_CLIENT_ID.includes('YOUR_GOOGLE')){ alert('لازم تحط الـ Google Client ID في أول السكربت\nمن console.cloud.google.com'); return; }
  const saved = localStorage.getItem('gmail_token');
  if(saved && gmailAccessToken){ openGmailImport(); fetchGmailEmails(); return; }
  tokenClient.requestAccessToken({prompt:'consent'});
}
function openGmailImport(){ document.getElementById('gmailModal').classList.add('show'); if(gmailAccessToken) fetchGmailEmails(); }
function closeGmailImport(){ document.getElementById('gmailModal').classList.remove('show'); }
async function fetchGmailEmails(){
  if(!gmailAccessToken){ document.getElementById('gmailList').innerHTML='<div style="text-align:center;padding:20px">مش مربوط</div>'; return; }
  document.getElementById('gmailList').innerHTML='<div style="text-align:center;padding:20px">⏳ بيحمل...</div>';
  try{
    const res = await gapi.client.gmail.users.messages.list({userId:'me', maxResults:10, q:'newer_than:7d'});
    const msgs = res.result.messages || [];
    if(!msgs.length){ document.getElementById('gmailList').innerHTML='<div style="text-align:center;padding:20px;color:#888">مفيش إيميلات جديدة</div>'; return; }
    let html='';
    for(let m of msgs){
      const detail = await gapi.client.gmail.users.messages.get({userId:'me', id:m.id, format:'metadata', metadataHeaders:['Subject','From','Date']});
      const headers = detail.result.payload.headers;
      const subj = headers.find(h=>h.name==='Subject')?.value || '(بدون عنوان)';
      const from = headers.find(h=>h.name==='From')?.value || '';
      html+=`<div style="background:#FAFAF9;border:1px solid #eee;border-radius:12px;padding:10px"><div style="font-weight:700;font-size:13px">${subj}</div><div style="font-size:11px;color:#888">${from}</div><button onclick="addEmailAsTask('${subj.replace(/'/g,"\\'")}', '${from.replace(/'/g,"")}')" style="margin-top:8px;background:#111;color:#fff;border:none;padding:6px 12px;border-radius:8px;font-size:11px">+ حول لمهمة</button></div>`;
    }
    document.getElementById('gmailList').innerHTML=html;
  }catch(e){ console.error(e); document.getElementById('gmailList').innerHTML='<div style="color:#ef4444;text-align:center">خطأ في التحميل - اعمل تسجيل خروج ودخول تاني</div>'; }
}
function addEmailAsTask(subj, from){
  tasks.unshift({id:Date.now(), text:subj+' - '+from, cat:cats[0].name, color:selectedHex, done:false, drawings:[], photos:[], voices:[], note:`<div>من الإيميل: ${from}<br>${subj}</div>`, subtasks:[], reminder:null, source:'gmail'});
  save(); alert('✅ اتضافت كمهمة'); closeGmailImport();
}
async function exportTasksToGmail(){
  if(!gmailAccessToken){ alert('اربط جيميل الأول'); return; }
  const summary = tasks.slice(0,20).map(t=>`• [${t.done?'✓':' '}] ${t.text} (${t.cat})`).join('\\n');
  const raw = btoa(unescape(encodeURIComponent(`To: me\\nSubject: ملخص مهامي - مساحة العمل\\nContent-Type: text/plain; charset=utf-8\\n\\n${summary}`))).replace(/\\+/g,'-').replace(/\\//g,'_');
  try{
    await gapi.client.gmail.users.messages.send({userId:'me', resource:{raw}});
    alert('📧 اتبعت ملخص مهامك لإيميلك');
  }catch(e){ alert('فشل الإرسال'); console.error(e); }
}

/* ===== كودك الأصلي كامل بدون تغيير ===== */
function fmt(n){if(n===''||n==null)return'';let x=typeof n==='string'?parseFloat(n.toString().replace(/,/g,'')):n;if(isNaN(x))return n;return x.toLocaleString('en-US')}
function formatTextNumbers(t){return t.replace(/\\b\\d{4,}\\b/g,m=>fmt(m))}
const themeColors=[["#70AD47","#5B9BD5","#FFC000","#A5A5A5","#ED7D31","#4472C4","#2F5597","#D9D9D9","#000000","#FFFFFF"],["#E2EFDA","#D6EAF8","#FFF2CC","#F2F2F2","#FCE4D6","#D9E2F3","#D6DCE4","#EDEDED","#808080","#F2F2F2"],["#C6E0B4","#BDD7EE","#FFE699","#D9D9D9","#F8CBAD","#B4C6E7","#ACB9CA","#BFBFBF","#595959","#D9D9D9"],["#A9D08E","#9BC2E6","#FFD966","#BFBFBF","#F4B084","#8EA9DB","#7F8EA6","#808080","#262626","#BFBFBF"],["#548235","#2E75B6","#BF8F00","#7F7F7F","#C55A11","#305496","#203764","#404040","#0D0D0D","#7F7F7F"],["#375623","#1F4E79","#7F6003","#595959","#833C0B","#203764","#152238","#000000","#404040"]];
const standardColors=["#7030A0","#002060","#0070C0","#00B0F0","#00B050","#92D050","#FFFF00","#FFC000","#FF0000","#C00000"];
let defaultCats=[{id:1,emoji:'💊',name:'صيدلية'},{id:2,emoji:'💻',name:'شغل'},{id:3,emoji:'🏠',name:'شخصي'}];
let defaultColorsList=[{id:1,name:'أبيض',hex:'#ffffff'}];
let cats=JSON.parse(localStorage.getItem('cats_v5')||JSON.stringify(defaultCats));
let colors=JSON.parse(localStorage.getItem('colors_v5')||JSON.stringify(defaultColorsList));
let tasks=JSON.parse(localStorage.getItem('tasks_v6')||'[]');
let cur=null,rec=null,chunks=[],timerInt=null,sec=0,stream=null,cameraStream=null;
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
let drawing=false,lx=0,ly=0,selectedHex='#ffffff';
let activeTaskTab='all', boardSearch='';
let currentNoteColor='#111111';
let currentHiddenColor='#ffffff';
let currentActiveTab='note';
function save(){localStorage.setItem('tasks_v6',JSON.stringify(tasks));localStorage.setItem('cats_v5',JSON.stringify(cats));localStorage.setItem('colors_v5',JSON.stringify(colors));render()}
function renderExcelTheme(){const c1=document.getElementById('excelTheme');if(c1){c1.innerHTML='';themeColors.flat().forEach(hex=>{const d=document.createElement('div');d.className='excel-cell';d.style.background=hex;d.onclick=()=>selectColor(hex);c1.appendChild(d);});}const c2=document.getElementById('excelStandard');if(c2){c2.innerHTML='';standardColors.forEach(hex=>{const d=document.createElement('div');d.className='excel-cell';d.style.background=hex;d.onclick=()=>selectColor(hex);c2.appendChild(d);});}const m1=document.getElementById('modalColorsTheme');if(m1){m1.innerHTML='';themeColors.flat().forEach(hex=>{const d=document.createElement('div');d.className='excel-cell';d.style.background=hex;d.style.height='24px';if(cur&&cur.color===hex)d.style.outline='2px solid #111';d.onclick=()=>selectModalColor(hex);m1.appendChild(d);});}const m2=document.getElementById('modalColorsStandard');if(m2){m2.innerHTML='';standardColors.forEach(hex=>{const d=document.createElement('div');d.className='excel-cell';d.style.background=hex;d.style.height='24px';if(cur&&cur.color===hex)d.style.outline='2px solid #111';d.onclick=()=>selectModalColor(hex);m2.appendChild(d);});}}
function renderManagerLists(){document.getElementById('cat').innerHTML=cats.map(c=>`<option value="${c.name}">${c.emoji} ${c.name}</option>`).join('');document.getElementById('catList').innerHTML=cats.map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;background:#FAFAF9;padding:10px;border-radius:10px;margin-bottom:6px"><div>${c.emoji} <b>${c.name}</b></div><button onclick="delCat(${c.id})" style="border:none;background:#FEE2E2;width:28px;height:28px;border-radius:6px;color:#ef4444;">✕</button></div>`).join('');document.getElementById('colorList').innerHTML=colors.map(col=>`<div style="display:flex;justify-content:space-between;align-items:center;background:#FAFAF9;padding:10px;border-radius:10px;margin-bottom:6px"><div style="display:flex;gap:8px;align-items:center;"><div style="width:24px;height:24px;border-radius:4px;background:${col.hex};border:1px solid #ddd;"></div><div>${col.name}</div></div><button onclick="delColor(${col.id})" style="border:none;background:#FEE2E2;width:28px;height:28px;border-radius:6px;">✕</button></div>`).join('');renderQuickColors();renderExcelTheme()}
function renderQuickColors(){const row=document.getElementById('quickColors');const all=[...standardColors,...themeColors[0]];row.innerHTML=all.slice(0,8).map(c=>`<div onclick="selectColor('${c}')" class="color-dot ${selectedHex===c?'active':''}" style="background:${c};flex-shrink:0;"></div>`).join('')}
function selectColor(hex){selectedHex=hex;renderQuickColors()}
function selectModalColor(hex){cur.color=hex;document.getElementById('modalCover').style.background=hex==='transparent'?'#fff':hex;document.getElementById('currentColorPreview').style.background=hex==='transparent'?'#fff':hex;renderExcelTheme();save()}
function toggleAllColors(){const box=document.getElementById('allColorsBox');box.style.display=box.style.display==='none'?'block':'none'}
function openManager(){document.getElementById('managerModal').style.display='flex';mTab('colors')}
function closeManager(){document.getElementById('managerModal').style.display='none'}
function mTab(t){document.getElementById('mCats').style.display=t==='cats'?'block':'none';document.getElementById('mColors').style.display=t==='colors'?'block':'none'}
function addCategory(){const n=document.getElementById('newCatName').value.trim(),e=document.getElementById('newCatEmoji').value.trim()||'📌';if(!n)return;cats.push({id:Date.now(),emoji:e,name:n});document.getElementById('newCatName').value='';renderManagerLists();save();}
function delCat(id){cats=cats.filter(c=>c.id!==id);renderManagerLists();save();}
function delColor(id){colors=colors.filter(c=>c.id!==id);renderManagerLists();save();}
function addQuick(){document.getElementById('mainInput').focus()}
function filterTasksTab(cat){activeTaskTab=cat;document.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));document.getElementById('tt_'+cat)?.classList.add('active');render();}
function getSecretCode(){try{const v=localStorage.getItem('__my_secret_num__');if(!v)return null;return atob(v)}catch{return null}}
function doAdd(){const inp=document.getElementById('mainInput');const val=inp.value.trim();const secret=getSecretCode();if(val && secret && val===secret){inp.value='';boardSearch='';revealHiddenTab();return}if(['خفي'].includes(val.toLowerCase())){inp.value='';boardSearch='';revealHiddenTab();return}if(!val)return;tasks.unshift({id:Date.now(),text:val,cat:document.getElementById('cat').value,color:selectedHex,done:false,drawings:[],photos:[],voices:[],note:'',subtasks:[],reminder:null});inp.value='';boardSearch='';save();}
document.getElementById('mainInput').addEventListener('input',e=>{const v=e.target.value.trim().toLowerCase();const secret=getSecretCode();if(secret && v===secret.toLowerCase()){revealHiddenTab();return}if(v==='خفي'){revealHiddenTab();return}boardSearch=v;render();});
document.getElementById('mainInput').addEventListener('keydown',e=>{if(e.key==='Enter')doAdd()});
document.getElementById('subInput').addEventListener('keydown',e=>{if(e.key==='Enter')addSub()});
function render(){
  renderManagerLists();
  let filtered=tasks;
  if(activeTaskTab!=='all'){
    if(activeTaskTab==='done')filtered=filtered.filter(t=>t.done);
    else if(activeTaskTab==='todo')filtered=filtered.filter(t=>!t.done);
    else filtered=filtered.filter(t=>t.cat===activeTaskTab);
  }
  if(boardSearch)filtered=filtered.filter(t=>t.text.toLowerCase().includes(boardSearch));
  document.getElementById('stats').innerText=`${fmt(filtered.length)}/${fmt(tasks.length)} • ${activeTaskTab}`;
  const board=document.getElementById('board');
  if(!filtered.length){board.innerHTML=`<div style="text-align:center;padding:30px;color:#999"><div style="font-size:32px">🔍</div><div style="margin-top:8px;font-size:13px">مفيش مهام</div></div>`;return}
  board.innerHTML=filtered.map(t=>{
    const catObj=cats.find(c=>c.name===t.cat)||{emoji:'📌'};const total=t.subtasks?.length||0,done=t.subtasks?.filter(s=>s.done).length||0;
    return `<div onclick="openCard(${t.id})" style="background:${t.color==='transparent'?'#fff':t.color};border:1px solid rgba(0,0,0,.06);border-radius:16px;padding:14px;cursor:pointer">
      <div style="display:flex;justify-content:space-between;"><div style="font-size:14px;font-weight:600;">${formatTextNumbers(t.text)}</div><div style="display:flex;gap:6px"><div style="width:10px;height:10px;border-radius:50%;background:${t.done?'#22c55e':'#111'};"></div>${t.source==='gmail'?'<span style="font-size:10px">📧</span>':''}</div></div>
      <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;"><span style="font-size:11px;background:#fff;padding:4px 8px;border-radius:20px;">${catObj.emoji} ${t.cat}</span>${total?`<span style="font-size:11px;background:#fff;padding:4px 8px;border-radius:20px;">✔ ${fmt(done)}/${fmt(total)}</span>`:''}</div>
    </div>`;
  }).join('');
}
async function openCamera(){const box=document.getElementById('cameraBox');box.style.display='block';try{cameraStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}}});document.getElementById('cameraVideo').srcObject=cameraStream;}catch(e){alert('الكاميرا غير مسموحة');}}
function closeCamera(){document.getElementById('cameraBox').style.display='none';if(cameraStream){cameraStream.getTracks().forEach(t=>t.stop());cameraStream=null;}}
function takePhoto(){const v=document.getElementById('cameraVideo');const c=document.getElementById('cameraCanvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);const d=c.toDataURL('image/jpeg',0.8);if(!cur.photos)cur.photos=[];cur.photos.unshift(d);refreshPhotos();closeCamera();save();}
function handleFile(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{if(!cur.photos)cur.photos=[];cur.photos.unshift(e.target.result);refreshPhotos();save();};r.readAsDataURL(f);}
function refreshPhotos(){const g=document.getElementById('photoGallery');if(!cur||!cur.photos){g.innerHTML='';return;}g.innerHTML=cur.photos.map((d,i)=>`<div style="position:relative;"><img src="${d}" style="width:70px;height:70px;object-fit:cover;border-radius:10px;border:1px solid #eee;"><button onclick="delPhoto(${i})" style="position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:#ef4444;color:#fff;border:none;font-size:10px;">✕</button></div>`).join('');}
function delPhoto(i){cur.photos.splice(i,1);refreshPhotos();save();}
function toggleRem(){document.getElementById('remBox').style.display=document.getElementById('remEnabled').checked?'block':'none';}
function saveReminder(){cur.reminder={enabled:document.getElementById('remEnabled').checked,date:document.getElementById('remDate').value,time:document.getElementById('remTime').value,repeat:document.getElementById('remRepeat').value,lastNotified:null};const next=getNextReminderTime(cur.reminder);document.getElementById('remNext').innerText=next?`القادم: ${next.toLocaleString('ar-EG')}`:'';save();if(Notification&&Notification.permission!=='granted')Notification.requestPermission();alert('تم حفظ المنبه ✅');}
function getNextReminderTime(rem){if(!rem||!rem.enabled||!rem.date||!rem.time)return null;let dt=new Date(rem.date+'T'+rem.time);const now=new Date();if(rem.repeat==='none')return dt>now?dt:null;while(dt<=now){if(rem.repeat==='daily')dt.setDate(dt.getDate()+1);else if(rem.repeat==='weekly')dt.setDate(dt.getDate()+7);else break;}return dt;}
function openCard(id){
  cur=tasks.find(x=>x.id===id);if(!cur.photos)cur.photos=[];
  document.getElementById('modalTitle').innerText=cur.text;
  document.getElementById('modalCover').style.background=cur.color==='transparent'?'#fff':cur.color;
  document.getElementById('currentColorPreview').style.background=cur.color==='transparent'?'#fff':cur.color;
  document.getElementById('noteEditor').innerHTML=cur.note||'';
  currentNoteColor='#111111';
  currentActiveTab='note';
  document.getElementById('doneBtn').innerText=cur.done?'إعادة فتح':'تم ✓';
  document.getElementById('allColorsBox').style.display='none';
  if(cur.reminder){document.getElementById('remEnabled').checked=cur.reminder.enabled;document.getElementById('remDate').value=cur.reminder.date||'';document.getElementById('remTime').value=cur.reminder.time||'';document.getElementById('remRepeat').value=cur.reminder.repeat||'none';toggleRem();}else{document.getElementById('remEnabled').checked=false;toggleRem();}
  refreshSubtasks();refreshDrawGallery();refreshVoiceList();refreshPhotos();renderExcelTheme();document.getElementById('modal').style.display='flex';tab('note');setTimeout(resizeCanvas,100);
}
function closeModal(){
  if(currentActiveTab==='hidden'){ lockHidden(); }
  document.getElementById('modal').style.display='none';
  closeCamera();
  if(cur){cur.text=document.getElementById('modalTitle').innerText.trim()||cur.text;cur.note=document.getElementById('noteEditor').innerHTML;save();}
}
function tab(t){
  if(currentActiveTab==='hidden' && t!=='hidden'){ lockHidden(); }
  currentActiveTab=t;
  ['Colors','Camera','Draw','Voice','Note','Rem','Hidden'].forEach(k=>{
    const p=document.getElementById('p'+k);const b=document.getElementById('t'+k);
    if(p){ p.style.display=(k.toLowerCase()===t.toLowerCase()?(k.toLowerCase()==='note'?'flex':'block'):'none'); }
    if(b&&k!=='Hidden')b.classList.toggle('active',k.toLowerCase()===t.toLowerCase());
    if(k==='Hidden'&&b)b.classList.toggle('active',t.toLowerCase()==='hidden');
  });
}
function isCaretAtEnd(editor){
  const sel=window.getSelection();
  if(!sel.rangeCount) return true;
  const range=sel.getRangeAt(0);
  try{
    const testRange=range.cloneRange();
    testRange.setEndAfter(editor.lastChild || editor);
    testRange.setStart(range.endContainer, range.endOffset);
    return testRange.toString().length===0;
  }catch(e){ return true; }
}
function applyNoteColor(color){
  currentNoteColor=color;
  const editor=document.getElementById('noteEditor');
  editor.focus();
  const sel=window.getSelection();
  if(!sel.rangeCount) return;
  const range=sel.getRangeAt(0);
  if(sel.isCollapsed){
    const span=document.createElement('span');
    span.style.color=color;
    span.appendChild(document.createTextNode('\u200B'));
    if(isCaretAtEnd(editor) ||!editor.lastChild){ editor.appendChild(span); }else{ range.insertNode(span); }
    const newRange=document.createRange(); newRange.setStart(span.firstChild, 1); newRange.collapse(true); sel.removeAllRanges(); sel.addRange(newRange);
  }else{
    const span=document.createElement('span'); span.style.color=color; span.appendChild(range.extractContents()); range.insertNode(span);
    const newRange=document.createRange(); newRange.setStartAfter(span); newRange.collapse(true); sel.removeAllRanges(); sel.addRange(newRange);
  }
}
function formatNote(cmd){document.execCommand(cmd,false,null);document.getElementById('noteEditor').focus();}
function applyHiddenColor(color){
  currentHiddenColor=color;
  const editor=document.getElementById('hiddenBody'); editor.focus();
  const sel=window.getSelection(); if(!sel.rangeCount) return; const range=sel.getRangeAt(0);
  if(sel.isCollapsed){
    const span=document.createElement('span'); span.style.color=color; span.appendChild(document.createTextNode('\u200B'));
    if(isCaretAtEnd(editor)){ editor.appendChild(span); }else{ range.insertNode(span); }
    const newRange=document.createRange(); newRange.setStart(span.firstChild, 1); newRange.collapse(true); sel.removeAllRanges(); sel.addRange(newRange);
  }else{
    const span=document.createElement('span'); span.style.color=color; span.appendChild(range.extractContents()); range.insertNode(span);
    const newRange=document.createRange(); newRange.setStartAfter(span); newRange.collapse(true); sel.removeAllRanges(); sel.addRange(newRange);
  }
}
function formatHidden(cmd){document.execCommand(cmd,false,null);document.getElementById('hiddenBody').focus();}
function handleColoredInput(editorId, getColor){
  const editor=document.getElementById(editorId); if(!editor) return;
  editor.addEventListener('beforeinput', (e)=>{
    if(e.inputType==='insertText'){
      const sel=window.getSelection(); if(!sel.isCollapsed) return; const color=getColor();
      if(!color || color==='#111111' || color==='#ffffff') return;
      const parent=sel.anchorNode?.parentElement; if(parent && parent.tagName==='SPAN' && parent.style.color===color) return;
      e.preventDefault(); const span=document.createElement('span'); span.style.color=color; span.textContent=e.data;
      const range=sel.getRangeAt(0); const last=editor.lastChild;
      if(isCaretAtEnd(editor) && last && last.tagName==='SPAN' && last.style.color===color){ last.textContent+=e.data; const newRange=document.createRange(); newRange.setStartAfter(last); newRange.collapse(true); sel.removeAllRanges(); sel.addRange(newRange); }
      else{ range.insertNode(span); const newRange=document.createRange(); newRange.setStartAfter(span); newRange.collapse(true); sel.removeAllRanges(); sel.addRange(newRange); }
    }
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  handleColoredInput('noteEditor', ()=>currentNoteColor);
  handleColoredInput('hiddenBody', ()=>currentHiddenColor);
  const savedTok = localStorage.getItem('gmail_token');
  if(savedTok){ gmailAccessToken=savedTok; document.getElementById('gmailBtn').innerText='✓ مربوط'; document.getElementById('gmailBtn').classList.add('gmail-connected'); document.getElementById('gmailStatus').style.display='block'; }
  setTimeout(()=>{ if(window.google) window.onGsiLoad(); },1500);
});
function refreshSubtasks(){const total=cur.subtasks.length,done=cur.subtasks.filter(s=>s.done).length,perc=total?Math.round(done/total*100):0;document.getElementById('subProgress').innerText=`${fmt(done)}/${fmt(total)}`;document.getElementById('subBar').style.width=perc+'%';document.getElementById('subList').innerHTML=cur.subtasks.map(s=>`<div style="display:flex;gap:8px;align-items:center;background:#FAFAF9;padding:8px 10px;border-radius:10px;"><input type="checkbox" ${s.done?'checked':''} onchange="toggleSub(${s.id})"><div contenteditable="true" onblur="editSub(${s.id},this.innerText)" style="flex:1;font-size:13px;">${formatTextNumbers(s.text)}</div><button onclick="delSub(${s.id})" style="border:none;background:#fff;width:26px;height:26px;border-radius:6px;color:#ef4444;">✕</button></div>`).join('')||`<div style="text-align:center;color:#aaa;font-size:12px;padding:8px;">مفيش مهام</div>`;}
function addSub(){const inp=document.getElementById('subInput');if(!inp.value.trim())return;cur.subtasks.push({id:Date.now(),text:inp.value.trim(),done:false});inp.value='';refreshSubtasks();save();}
function toggleSub(sid){const s=cur.subtasks.find(x=>x.id===sid);s.done=!s.done;refreshSubtasks();save();}
function delSub(sid){cur.subtasks=cur.subtasks.filter(x=>x.id!==sid);refreshSubtasks();save();}
function editSub(sid,txt){const s=cur.subtasks.find(x=>x.id===sid);if(s){s.text=txt.trim()||s.text;save();}}
function resizeCanvas(){const r=canvas.getBoundingClientRect();canvas.width=r.width*2;canvas.height=180*2;ctx.setTransform(1,0,0,1,0,0);ctx.scale(2,2);ctx.lineCap='round';ctx.lineJoin='round';}
function pos(e){const rect=canvas.getBoundingClientRect();const pt=e.touches?e.touches[0]:e;return{x:pt.clientX-rect.left,y:pt.clientY-rect.top};}
canvas.addEventListener('mousedown',e=>{drawing=true;const p=pos(e);lx=p.x;ly=p.y;});canvas.addEventListener('mousemove',e=>{if(!drawing)return;const p=pos(e);ctx.strokeStyle=document.getElementById('penColor').value;ctx.lineWidth=document.getElementById('penSize').value;ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(p.x,p.y);ctx.stroke();lx=p.x;ly=p.y;});window.addEventListener('mouseup',()=>drawing=false);
canvas.addEventListener('touchstart',e=>{e.preventDefault();drawing=true;const p=pos(e);lx=p.x;ly=p.y;},{passive:false});canvas.addEventListener('touchmove',e=>{e.preventDefault();if(!drawing)return;const p=pos(e);ctx.strokeStyle=document.getElementById('penColor').value;ctx.lineWidth=document.getElementById('penSize').value;ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(p.x,p.y);ctx.stroke();lx=p.x;ly=p.y;},{passive:false});canvas.addEventListener('touchend',()=>drawing=false);
function clearCanvas(){ctx.clearRect(0,0,canvas.width,canvas.height);}function saveDraw(){const d=canvas.toDataURL();cur.drawings.unshift(d);clearCanvas();refreshDrawGallery();save();}function refreshDrawGallery(){document.getElementById('drawGallery').innerHTML=cur.drawings.map((d,i)=>`<div style="position:relative;"><img src="${d}" style="width:70px;height:70px;object-fit:cover;border-radius:10px;border:1px solid #eee;"><button onclick="delDraw(${i})" style="position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:#ef4444;color:#fff;border:none;">✕</button></div>`).join('');}function delDraw(i){cur.drawings.splice(i,1);refreshDrawGallery();save();}
async function toggleRec(){const btn=document.getElementById('recBtn');if(!rec||rec.state==='inactive'){try{stream=await navigator.mediaDevices.getUserMedia({audio:true});rec=new MediaRecorder(stream);chunks=[];rec.ondataavailable=e=>chunks.push(e.data);rec.onstop=()=>{const blob=new Blob(chunks,{type:'audio/webm'});const r=new FileReader();r.onloadend=()=>{cur.voices.unshift(r.result);refreshVoiceList();save();};r.readAsDataURL(blob);};rec.start();btn.style.background='#111';btn.innerHTML='■';sec=0;timerInt=setInterval(()=>{sec++;document.getElementById('timer').innerText=String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');},1000);}catch{alert('فعل الميكروفون');}}else{rec.stop();stream.getTracks().forEach(t=>t.stop());clearInterval(timerInt);btn.style.background='#ef4444';btn.innerHTML='●';document.getElementById('timer').innerText='00:00';}}
function refreshVoiceList(){document.getElementById('voiceList').innerHTML=cur.voices.map((v,i)=>`<div style="display:flex;gap:8px;align-items:center;background:#fff;border:1px solid #F2EFEA;padding:10px;border-radius:12px;"><audio src="${v}" controls style="flex:1;height:36px;"></audio><button onclick="delVoice(${i})" style="background:#FEE2E2;border:none;width:36px;height:36px;border-radius:10px;color:#ef4444;">✕</button></div>`).join('');}function delVoice(i){cur.voices.splice(i,1);refreshVoiceList();save();}function saveNote(){cur.note=document.getElementById('noteEditor').innerHTML;save();}
function toggleDone(){cur.done=!cur.done;save();document.getElementById('doneBtn').innerText=cur.done?'إعادة فتح':'تم ✓';}
function deleteCurrent(){if(!cur)return;document.getElementById('delTaskPreview').innerHTML=`<div style="font-weight:800">${formatTextNumbers(cur.text)}</div><div style="font-size:11px;color:#777">${cur.cat}</div>`;document.getElementById('delConfirmCheck').checked=false;toggleDelBtn();document.getElementById('deleteWarningModal').classList.add('show');}
function closeDeleteWarning(){document.getElementById('deleteWarningModal').classList.remove('show')}
function toggleDelBtn(){const c=document.getElementById('delConfirmCheck').checked;const b=document.getElementById('finalDelBtn');b.disabled=!c;b.style.background=c?'#ef4444':'#E5E7EB';b.style.color=c?'#fff':'#9CA3AF';}
function confirmDelete(){if(!cur)return;tasks=tasks.filter(x=>x.id!==cur.id);closeDeleteWarning();closeModal();save();}
render();
function openSecretModal(){document.getElementById('secretCod
