# Windows Shortcut Master 🚀

**Windows Shortcut Master** — Rasmiy Microsoft Windows hujjatlariga asoslangan, klaviatura tezkor tugmalarini (keyboard shortcuts) o'rganish, mashq qilish, test topshirish va ko'nikmalarni oshirish uchun mo'ljallangan zamonaviy ta'limiy veb-platforma.

100% oflayn rejimda ishlaydi, hech qanday shaxsiy ma'lumotlarni yig'maydi va barcha natijalarni mahalliy brauzerda (`LocalStorage`) xavfsiz saqlaydi.

---

## 🌟 Asosiy Imkoniyatlar (Features)

### 1. 110+ Rasmiy va Tasdiqlangan Kombinatsiyalar
- **Manba**: Microsoft Support rasmiy hujjatlari va Microsoft PowerToys Shortcut Guide.
- **16 ta ixtisoslashtirilgan toifalar**:
  - Windows tizim tugmalari (`Win`, `Win+L`, `Win+I`, `Win+X`, `Ctrl+Shift+Esc`...)
  - Oynalarni boshqarish (`Win+Arrow`, `Win+M`, `Win+Home`, `Alt+Tab`, `Alt+F4`...)
  - File Explorer fayl menejeri (`Win+E`, `Alt+Enter`, `Ctrl+Shift+N`, `Alt+P`...)
  - Matn bilan ishlash (`Ctrl+A`, `Ctrl+Z`, `Ctrl+Backspace`, `Ctrl+Delete`...)
  - Bufer (Clipboard) va xotira (`Win+V`, `Win+.` Emoji panel...)
  - Skrinshot va yozib olish (`Win+Shift+S`, `Win+G`, `Win+PrtScn`...)
  - Virtual ish stollari (`Win+Ctrl+D`, `Win+Ctrl+Arrow`, `Win+Tab`...)
  - Maxsus imkoniyatlar / Accessibility (`Win++`, `Win+Enter`, `Win+Ctrl+C`...)
  - Dasturchilar va Terminal (`Win+X`, `Ctrl+Shift+T`...)
  - Va boshqa ko'plab amaliy buyruqlar.

### 2. Interaktiv Klaviatura Mashq Markazi (Practice Arena)
- **Haqiqiy klaviatura deteksiyasi**: Brauzer real vaqtda `keydown`/`keyup` orqali bosilgan tugmalarni aniqlaydi.
- **Interaktiv virtual klaviatura**: Ekranda ko'rsatiladigan klaviatura tugmalari foydalanuvchi bosgan tugmalarga parallel ravishda reaksiyaga kirishadi.
- **Xavfsizlik himoyasi (Browser Interception Fallback)**: Brauzerlar xavfsizlik maqsadida `Win+L` (qulflash), `Ctrl+Alt+Del` yoki `Ctrl+W` kabi tizim tugmalarini to'liq ushlab qolishga yo'l qo'ymaydi. Ilovada buni tushuntiruvchi va amalda bosilganini tasdiqlovchi qulay **"Men ushbu tugmani bosdim"** tugmasi mavjud.
- **4 xil mashq rejimi**:
  - *Beginner (Boshlang'ich)*: Har bir tugma vizual ko'rsatiladi, vaqt cheklovisiz.
  - *Normal (Standart)*: 10 soniyalik dinamik taymer, streak multiplikatori.
  - *Hard (Qiyin)*: Ko'rsatmalarsiz, faqat vazifa nomi, 6 soniya.
  - *Speed Run (Chaqqonlik)*: 60 soniyalik rekordlar jangi.

### 3. 100+ Savolli Test Tizimi (Quiz System)
- Ko'p variantli (Multiple Choice) savollar.
- Formulada yetishmayotgan tugmani topish (`Win + [ ? ] = Sozlamalar`).
- To'g'ri / Noto'g'ri (True/False) savollari.
- Real keyslar va stsenariylar (2 ta monitor, muzlab qolgan dastur, skrinshot).
- Har bir javobdan so'ng tushuntirish beriladi.
- Baholash tizimi (A+, A, B, C, F) va zaif kombinatsiyalarni qayta mashq qilish tavsiyasi.

### 4. 10 ta Aqliy O'yinlar (Brain Games)
1. **Key Match**: Kombinatsiyalarni vazifalari bilan juftlash.
2. **Memory Flip**: Xotira kartalari — bir xil juftliklarni topish.
3. **Speed Typer**: Vaqtga qarshi tezkor tugmalar sinovi.
4. **Missing Key**: Yetishmayotgan kalit tugmani aniqlash.
5. **Boss Challenge**: 5 bosqichli murakkab tizim kombinatsiyalari jangi.
6. **Categorize It**: Kombinatsiyani to'g'ri toifaga saralash.
7. **Shortcut Detective**: Hayotiy muammolarga yechim topish.
8. **Key Reflex**: Ko'z chaqnashi tezligidagi refleks testi.
9. **Win Key Blitz**: 60 soniya ichida Windows tugmali barcha buyruqlar.
10. **Survival Mode**: 3 ta jon, oshib boruvchi tezlik va qiyinlik.

### 5. Ko'p Tillilik (Localization)
- 🇺🇿 **O'zbekcha** (standart)
- 🇬🇧 **English**
- 🇷🇺 **Русский**

### 6. Analitika va O'sish Ko'rsatkichlari (Progress Dashboard)
- Gamifikatsiya: XP ballari, Darajalar (Level 1: Novice dan Level 5: Shortcut Master gacha).
- 30 kunlik faollik taqvimi (GitHub uslubidagi faollik katakchalari).
- Zaif nuqtalar tahlili (eng ko'p xato qilingan kombinatsiyalarni aniqlash).
- Chop etishga tayyor шпаргалка (Printable Cheat Sheet).

### 7. Ovozlar va Nozik Sintezator
- Web Audio API orqali dasturiy ravishda yaratilgan yengil ovozlar (klaviatura chertilishi, to'g'ri/noto'g'ri javoblar, yutuq konfetilari).
- Hech qanday tashqi katta `.mp3` fayllarga bog'liq emas.

---

## 🛠 Texnologiyalar (Tech Stack)

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide Icons
- **Animation & Confetti**: Canvas Confetti, CSS keyframes
- **State & Storage**: React Context + LocalStorage
- **Audio**: Web Audio API Sound Synthesizer

---

## 🔒 Xavfsizlik va Maxfiylik

- Hech qanday serverga shaxsiy ma'lumotlar uzatilmaydi.
- Parollar yoki loginlar talab qilinmaydi.
- Brauzer yopilganda ham natijalaringiz saqlanib qoladi.
- Istalgan vaqtda ma'lumotlarni JSON fayl sifatida eksport qilish yoki yangi qurilmaga import qilish mumkin.
