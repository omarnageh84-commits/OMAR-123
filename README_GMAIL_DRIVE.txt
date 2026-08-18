
# نسخة Gmail Google Drive - بدون Firebase

## الفرق بين النسختين:
- النسخة القديمة: تسجيل بـ Gmail + تخزين في Firebase (جوجل بتدفعك)
- النسخة دي: تسجيل بـ Gmail + تخزين في Google Drive بتاع نفس الايميل (ببلاش ومساحتك الخاصة)

الداتا بتتخزن في مكان مخفي في Drive اسمه AppData - محدش يشوفه غير التطبيق

## 1- ازاي تجيب Client ID (دقيقتين)

1. ادخل https://console.cloud.google.com
2. New Project > اسم: OmarWorkspace
3. APIs & Services > Enabled APIs > Enable API > ابحث عن Google Drive API > Enable
4. Credentials > Create Credentials > OAuth client ID
   - Application type: Web application
   - Name: Omar Web
   - Authorized JavaScript origins:
     https://your-site.netlify.app
     http://localhost:7700
     http://localhost:5500
   - Authorized redirect URIs: نفسهم + /index.html
5. انسخ Client ID اللي شكله xxxxx.apps.googleusercontent.com
6. افتح ملف google-drive.js وحط ال ID مكان YOUR_GOOGLE_CLIENT_ID

## 2- ازاي يبقى APK من كروم؟

نفس الخطوات:
- ارفعه على Netlify
- من كروم موبايل > Add to Home Screen = بقى APK
- أو من pwabuilder.com يحولك لـ APK حقيقي

## 3- فين الداتا؟
- افتح https://drive.google.com
- مش هتشوف الملف (مخفي AppData) - ده امان
- عشان تتأكد: https://www.googleapis.com/drive/v3/files?spaces=appDataFolder
  هتلاقي OmarWorkspace.json

لو عاوز تشوفه: في الكود غير parents من appDataFolder لـ root وشوفه في My Drive

## التشغيل المحلي:
python -m http.server 7700

اول مرة هيطلب تسجيل دخول جيميل وموافقة على Drive
بعدها كل تعديل بيتسجل تلقائي في Drive
