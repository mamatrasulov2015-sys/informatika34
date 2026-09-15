import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // 1. Multiple Choice & Direct
  {
    id: "q-1",
    type: "multiple-choice",
    category: "file-explorer",
    difficulty: "beginner",
    question: {
      uz: "Windows-da Fayl menejerini (File Explorer) ochish uchun qaysi kombinatsiya ishlatiladi?",
      en: "Which shortcut opens File Explorer in Windows?",
      ru: "Какое сочетание клавиш открывает Проводник (File Explorer) в Windows?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + E", en: "Ctrl + E", ru: "Ctrl + E" }, keys: ["Ctrl", "E"] },
      { id: "b", text: { uz: "Win + E", en: "Win + E", ru: "Win + E" }, keys: ["Win", "E"] },
      { id: "c", text: { uz: "Alt + E", en: "Alt + E", ru: "Alt + E" }, keys: ["Alt", "E"] },
      { id: "d", text: { uz: "Win + F", en: "Win + F", ru: "Win + F" }, keys: ["Win", "F"] }
    ],
    correctAnswerId: "b",
    explanation: {
      uz: "Win + E kombinatsiyasi Windows-da File Explorer (Fayl menejeri)ni darhol ochadi. 'E' harfi Explorer so'zidan olingan.",
      en: "Win + E opens File Explorer immediately. The 'E' stands for Explorer.",
      ru: "Сочетание Win + E мгновенно запускает Проводник. Буква 'E' означает Explorer."
    },
    shortcutId: "win-e"
  },
  {
    id: "q-2",
    type: "multiple-choice",
    category: "windows-system",
    difficulty: "beginner",
    question: {
      uz: "Barcha ochiq oynalarni minimallashtirib, Ish stolini (Desktop) ko'rsatish kombinatsiyasi qaysi?",
      en: "Which shortcut displays and hides the desktop by minimizing all open windows?",
      ru: "Какая комбинация сворачивает все открытые окна и показывает рабочий стол?"
    },
    options: [
      { id: "a", text: { uz: "Win + D", en: "Win + D", ru: "Win + D" }, keys: ["Win", "D"] },
      { id: "b", text: { uz: "Win + M", en: "Win + M", ru: "Win + M" }, keys: ["Win", "M"] },
      { id: "c", text: { uz: "Ctrl + D", en: "Ctrl + D", ru: "Ctrl + D" }, keys: ["Ctrl", "D"] },
      { id: "d", text: { uz: "Alt + D", en: "Alt + D", ru: "Alt + D" }, keys: ["Alt", "D"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + D ish stolini (Desktop) ko'rsatadi va qayta bosilganda barcha oynalarni o'z joyiga qaytaradi.",
      en: "Win + D displays the Desktop and toggles them back upon pressing again.",
      ru: "Win + D показывает рабочий стол, а повторное нажатие восстанавливает окна."
    },
    shortcutId: "win-d"
  },
  {
    id: "q-3",
    type: "multiple-choice",
    category: "windows-system",
    difficulty: "beginner",
    question: {
      uz: "Kompyuterni tark etganda ekranni tezda bloklash (Lock) uchun nima bosiladi?",
      en: "How do you quickly lock your PC when stepping away?",
      ru: "Как быстро заблокировать ПК, когда отходите от рабочего места?"
    },
    options: [
      { id: "a", text: { uz: "Win + L", en: "Win + L", ru: "Win + L" }, keys: ["Win", "L"] },
      { id: "b", text: { uz: "Ctrl + L", en: "Ctrl + L", ru: "Ctrl + L" }, keys: ["Ctrl", "L"] },
      { id: "c", text: { uz: "Alt + L", en: "Alt + L", ru: "Alt + L" }, keys: ["Alt", "L"] },
      { id: "d", text: { uz: "Win + K", en: "Win + K", ru: "Win + K" }, keys: ["Win", "K"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + L kompyuterni bloklaydi ('L' = Lock). Shaxsiy ma'lumotlarni begonalardan himoyalashda juda muhim.",
      en: "Win + L locks your PC ('L' for Lock). Critical for privacy in public/office spaces.",
      ru: "Win + L мгновенно блокирует рабочую станцию ('L' = Lock)."
    },
    shortcutId: "win-l"
  },
  {
    id: "q-4",
    type: "multiple-choice",
    category: "settings",
    difficulty: "beginner",
    question: {
      uz: "Windows Sozlamalari (Settings) ilovasini ochish kombinatsiyasi qaysi?",
      en: "Which shortcut opens the Windows Settings app?",
      ru: "Какая комбинация открывает «Параметры» Windows?"
    },
    options: [
      { id: "a", text: { uz: "Win + S", en: "Win + S", ru: "Win + S" }, keys: ["Win", "S"] },
      { id: "b", text: { uz: "Win + I", en: "Win + I", ru: "Win + I" }, keys: ["Win", "I"] },
      { id: "c", text: { uz: "Win + C", en: "Win + C", ru: "Win + C" }, keys: ["Win", "C"] },
      { id: "d", text: { uz: "Ctrl + I", en: "Ctrl + I", ru: "Ctrl + I" }, keys: ["Ctrl", "I"] }
    ],
    correctAnswerId: "b",
    explanation: {
      uz: "Win + I Windows Settings (Sozlamalar) ilovasini bevosita ochadi.",
      en: "Win + I launches Windows Settings directly.",
      ru: "Win + I открывает приложение «Параметры» Windows."
    },
    shortcutId: "win-i"
  },
  {
    id: "q-5",
    type: "multiple-choice",
    category: "screenshots",
    difficulty: "beginner",
    question: {
      uz: "Ekranning tanlangan qismini qirqib rasmga olish (Snipping Tool) kombinatsiyasi qaysi?",
      en: "What is the official shortcut to open the Snipping Tool for region capture?",
      ru: "Какое официальное сочетание открывает инструмент захвата области экрана?"
    },
    options: [
      { id: "a", text: { uz: "Win + Shift + S", en: "Win + Shift + S", ru: "Win + Shift + S" }, keys: ["Win", "Shift", "S"] },
      { id: "b", text: { uz: "Ctrl + Shift + S", en: "Ctrl + Shift + S", ru: "Ctrl + Shift + S" }, keys: ["Ctrl", "Shift", "S"] },
      { id: "c", text: { uz: "Alt + Shift + S", en: "Alt + Shift + S", ru: "Alt + Shift + S" }, keys: ["Alt", "Shift", "S"] },
      { id: "d", text: { uz: "PrtScn + S", en: "PrtScn + S", ru: "PrtScn + S" }, keys: ["PrtScn", "S"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + Shift + S ekran qirqish rejimini faollashtiradi (to'rtburchak, erkin shakl yoki to'liq ekran).",
      en: "Win + Shift + S activates the Snip overlay to capture rectangular or custom regions.",
      ru: "Win + Shift + S активирует инструмент фрагментов для захвата нужной области."
    },
    shortcutId: "win-shift-s"
  },
  {
    id: "q-6",
    type: "multiple-choice",
    category: "clipboard",
    difficulty: "beginner",
    question: {
      uz: "Oldin nusxalangan bir nechta matn va rasmlar tarixini (Clipboard History) ochish uchun nima bosiladi?",
      en: "Which shortcut opens Clipboard History with recently copied items?",
      ru: "Что нужно нажать, чтобы открыть журнал скопированных ранее элементов буфера обмена?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + V", en: "Ctrl + V", ru: "Ctrl + V" }, keys: ["Ctrl", "V"] },
      { id: "b", text: { uz: "Win + V", en: "Win + V", ru: "Win + V" }, keys: ["Win", "V"] },
      { id: "c", text: { uz: "Alt + V", en: "Alt + V", ru: "Alt + V" }, keys: ["Alt", "V"] },
      { id: "d", text: { uz: "Shift + V", en: "Shift + V", ru: "Shift + V" }, keys: ["Shift", "V"] }
    ],
    correctAnswerId: "b",
    explanation: {
      uz: "Win + V Clipboard History panelini ochadi va avval nusxalangan istalgan elementni qo'yish imkonini beradi.",
      en: "Win + V opens the Clipboard history flyout to paste prior clips.",
      ru: "Win + V вызывает журнал буфера обмена со списком всех недавних копий."
    },
    shortcutId: "win-v"
  },
  {
    id: "q-7",
    type: "multiple-choice",
    category: "windows-system",
    difficulty: "beginner",
    question: {
      uz: "Vazifalar menejeri (Task Manager) ni bevosita ochishning eng tezkor kombinatsiyasi qaysi?",
      en: "Which shortcut opens Task Manager directly without going through the lock screen?",
      ru: "Какое сочетание открывает Диспетчер задач напрямую без экрана блокировки?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + Alt + Delete", en: "Ctrl + Alt + Delete", ru: "Ctrl + Alt + Delete" }, keys: ["Ctrl", "Alt", "Delete"] },
      { id: "b", text: { uz: "Ctrl + Shift + Esc", en: "Ctrl + Shift + Esc", ru: "Ctrl + Shift + Esc" }, keys: ["Ctrl", "Shift", "Esc"] },
      { id: "c", text: { uz: "Win + Shift + Esc", en: "Win + Shift + Esc", ru: "Win + Shift + Esc" }, keys: ["Win", "Shift", "Esc"] },
      { id: "d", text: { uz: "Alt + Shift + Esc", en: "Alt + Shift + Esc", ru: "Alt + Shift + Esc" }, keys: ["Alt", "Shift", "Esc"] }
    ],
    correctAnswerId: "b",
    explanation: {
      uz: "Ctrl + Shift + Esc Task Managerni hech qanday xavfsizlik menyusisiz darhol ochadi.",
      en: "Ctrl + Shift + Esc launches Task Manager directly.",
      ru: "Ctrl + Shift + Esc мгновенно открывает Диспетчер задач напрямую."
    },
    shortcutId: "ctrl-shift-esc"
  },
  {
    id: "q-8",
    type: "multiple-choice",
    category: "window-management",
    difficulty: "beginner",
    question: {
      uz: "Oynani ekranning chap yarmiga joylashtirish (Snap) uchun nima bosiladi?",
      en: "Which shortcut snaps the current window to the left half of your screen?",
      ru: "Какая комбинация прикрепляет окно к левой половине экрана?"
    },
    options: [
      { id: "a", text: { uz: "Win + Left Arrow", en: "Win + Left Arrow", ru: "Win + Стрелка влево" }, keys: ["Win", "Left"] },
      { id: "b", text: { uz: "Alt + Left Arrow", en: "Alt + Left Arrow", ru: "Alt + Стрелка влево" }, keys: ["Alt", "Left"] },
      { id: "c", text: { uz: "Ctrl + Left Arrow", en: "Ctrl + Left Arrow", ru: "Ctrl + Стрелка влево" }, keys: ["Ctrl", "Left"] },
      { id: "d", text: { uz: "Shift + Left Arrow", en: "Shift + Left Arrow", ru: "Shift + Стрелка влево" }, keys: ["Shift", "Left"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + Chap strelka oynani chap qismga qadaydi. O'ng tomonga o'rnatish uchun esa Win + O'ng strelka bosiladi.",
      en: "Win + Left snaps window to the left half. Win + Right snaps to the right.",
      ru: "Win + Стрелка влево фиксирует окно на левой половине экрана."
    },
    shortcutId: "win-left"
  },
  {
    id: "q-9",
    type: "multiple-choice",
    category: "virtual-desktops",
    difficulty: "intermediate",
    question: {
      uz: "Yangi virtual ish stoli (Virtual Desktop) yaratish kombinatsiyasi qaysi?",
      en: "How do you create a new virtual desktop in Windows?",
      ru: "Как создать новый виртуальный рабочий стол в Windows?"
    },
    options: [
      { id: "a", text: { uz: "Win + Ctrl + D", en: "Win + Ctrl + D", ru: "Win + Ctrl + D" }, keys: ["Win", "Ctrl", "D"] },
      { id: "b", text: { uz: "Win + Alt + D", en: "Win + Alt + D", ru: "Win + Alt + D" }, keys: ["Win", "Alt", "D"] },
      { id: "c", text: { uz: "Ctrl + Shift + D", en: "Ctrl + Shift + D", ru: "Ctrl + Shift + D" }, keys: ["Ctrl", "Shift", "D"] },
      { id: "d", text: { uz: "Win + Shift + D", en: "Win + Shift + D", ru: "Win + Shift + D" }, keys: ["Win", "Shift", "D"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + Ctrl + D yangi toza virtual ish stolini yaratadi.",
      en: "Win + Ctrl + D adds a new virtual workspace desktop.",
      ru: "Win + Ctrl + D создает новое виртуальное рабочее пространство."
    },
    shortcutId: "win-ctrl-d"
  },
  {
    id: "q-10",
    type: "multiple-choice",
    category: "file-explorer",
    difficulty: "beginner",
    question: {
      uz: "File Explorer yoki ish stolida yangi papka (folder) yaratish kombinatsiyasi qaysi?",
      en: "What shortcut creates a new folder in File Explorer or on Desktop?",
      ru: "Какое сочетание создает новую папку в Проводнике или на рабочем столе?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + Shift + N", en: "Ctrl + Shift + N", ru: "Ctrl + Shift + N" }, keys: ["Ctrl", "Shift", "N"] },
      { id: "b", text: { uz: "Ctrl + N", en: "Ctrl + N", ru: "Ctrl + N" }, keys: ["Ctrl", "N"] },
      { id: "c", text: { uz: "Alt + Shift + N", en: "Alt + Shift + N", ru: "Alt + Shift + N" }, keys: ["Alt", "Shift", "N"] },
      { id: "d", text: { uz: "Win + Shift + N", en: "Win + Shift + N", ru: "Win + Shift + N" }, keys: ["Win", "Shift", "N"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Ctrl + Shift + N darhol yangi papka yaratadi va nomini tahrirlashga tayyorlaydi.",
      en: "Ctrl + Shift + N instantly creates a new directory folder.",
      ru: "Ctrl + Shift + N мгновенно создает новую папку."
    },
    shortcutId: "ctrl-shift-n"
  },

  // 2. True / False Questions
  {
    id: "q-11",
    type: "true-false",
    category: "file-explorer",
    difficulty: "beginner",
    question: {
      uz: "Win + E kombinatsiyasi File Explorer-ni ochadi.",
      en: "Win + E opens File Explorer.",
      ru: "Сочетание Win + E открывает Проводник."
    },
    options: [
      { id: "t", text: { uz: "To'g'ri (True)", en: "True", ru: "Верно (True)" } },
      { id: "f", text: { uz: "Noto'g'ri (False)", en: "False", ru: "Неверно (False)" } }
    ],
    correctAnswerId: "t",
    explanation: {
      uz: "To'g'ri. Win + E rasmiy Microsoft Windows qoidalariga ko'ra File Explorer-ni chaqiradi.",
      en: "True. Win + E is the official shortcut for launching File Explorer.",
      ru: "Верно. Win + E является стандартной командой открытия Проводника."
    },
    shortcutId: "win-e"
  },
  {
    id: "q-12",
    type: "true-false",
    category: "text-editing",
    difficulty: "beginner",
    question: {
      uz: "Ctrl + Z oxirgi bekor qilingan amalni qaytaradi (Redo).",
      en: "Ctrl + Z redoes the last undone action (Redo).",
      ru: "Ctrl + Z повторяет ранее отмененное действие (Redo)."
    },
    options: [
      { id: "t", text: { uz: "To'g'ri (True)", en: "True", ru: "Верно (True)" } },
      { id: "f", text: { uz: "Noto'g'ri (False)", en: "False", ru: "Неверно (False)" } }
    ],
    correctAnswerId: "f",
    explanation: {
      uz: "Noto'g'ri! Ctrl + Z amalni bekor qiladi (Undo). Bekor qilingan amalni qaytarish (Redo) esa Ctrl + Y orqali amalga oshiriladi.",
      en: "False! Ctrl + Z performs Undo. Redo is accomplished via Ctrl + Y.",
      ru: "Неверно! Ctrl + Z отменяет действие (Undo). Для повтора (Redo) используется Ctrl + Y."
    },
    shortcutId: "ctrl-z"
  },
  {
    id: "q-13",
    type: "true-false",
    category: "power-user",
    difficulty: "advanced",
    question: {
      uz: "Win + Ctrl + Shift + B kompyuterning videokarta drayverini qayta ishga tushiradi.",
      en: "Win + Ctrl + Shift + B restarts the graphics display driver in Windows.",
      ru: "Win + Ctrl + Shift + B перезапускает графический видеодрайвер в Windows."
    },
    options: [
      { id: "t", text: { uz: "To'g'ri (True)", en: "True", ru: "Верно (True)" } },
      { id: "f", text: { uz: "Noto'g'ri (False)", en: "False", ru: "Неверно (False)" } }
    ],
    correctAnswerId: "t",
    explanation: {
      uz: "To'g'ri! Ushbu kombinatsiya ekran qorayib qotib qolganda videodrayverni xavfsiz qayta yuklaydi va ovozli signal beradi.",
      en: "True! It beeps and resets the GPU video driver to recover from black screens without rebooting.",
      ru: "Верно! Сочетание подает сигнал и сбрасывает зависший графический драйвер без перезагрузки компьютера."
    },
    shortcutId: "win-ctrl-shift-b"
  },
  {
    id: "q-14",
    type: "true-false",
    category: "browser",
    difficulty: "beginner",
    question: {
      uz: "Ctrl + Shift + T tasodifan yopilgan oxirgi vkladkani qayta ochadi.",
      en: "Ctrl + Shift + T reopens the last closed browser tab.",
      ru: "Ctrl + Shift + T восстанавливает последнюю случайно закрытую вкладку в браузере."
    },
    options: [
      { id: "t", text: { uz: "To'g'ri (True)", en: "True", ru: "Верно (True)" } },
      { id: "f", text: { uz: "Noto'g'ri (False)", en: "False", ru: "Неверно (False)" } }
    ],
    correctAnswerId: "t",
    explanation: {
      uz: "To'g'ri! Ctrl + Shift + T barcha mashhur brauzerlarda oxirgi yopilgan vkladkani to'liq tiklaydi.",
      en: "True! Ctrl + Shift + T revives recently dismissed tabs across modern browsers.",
      ru: "Верно! Это один из самых полезных браузерных шорткатов."
    },
    shortcutId: "ctrl-shift-t-browser"
  },
  {
    id: "q-15",
    type: "true-false",
    category: "file-explorer",
    difficulty: "beginner",
    question: {
      uz: "F2 tugmasi tanlangan faylni butunlay o'chirib yuboradi.",
      en: "Pressing F2 permanently deletes the highlighted file.",
      ru: "Клавиша F2 безвозвратно удаляет выбранный файл."
    },
    options: [
      { id: "t", text: { uz: "To'g'ri (True)", en: "True", ru: "Верно (True)" } },
      { id: "f", text: { uz: "Noto'g'ri (False)", en: "False", ru: "Неверно (False)" } }
    ],
    correctAnswerId: "f",
    explanation: {
      uz: "Noto'g'ri! F2 tanlangan fayl yoki papka nomini o'zgartirish (Rename) rejimini yoqadi.",
      en: "False! F2 initiates rename mode. Permanent delete is Shift + Delete.",
      ru: "Неверно! F2 служит для переименования элемента. Безвозвратное удаление — Shift + Delete."
    },
    shortcutId: "f2-rename"
  },

  // 3. Missing Key Questions
  {
    id: "q-16",
    type: "missing-key",
    category: "file-explorer",
    difficulty: "beginner",
    question: {
      uz: "File Explorer-ni ochish formulasi: Win + [ ? ]",
      en: "Formula to open File Explorer: Win + [ ? ]",
      ru: "Формула открытия Проводника: Win + [ ? ]"
    },
    partialKeys: ["Win"],
    options: [
      { id: "e", text: { uz: "E", en: "E", ru: "E" }, keys: ["E"] },
      { id: "f", text: { uz: "F", en: "F", ru: "F" }, keys: ["F"] },
      { id: "x", text: { uz: "X", en: "X", ru: "X" }, keys: ["X"] },
      { id: "o", text: { uz: "O", en: "O", ru: "O" }, keys: ["O"] }
    ],
    correctAnswerId: "e",
    explanation: {
      uz: "To'g'ri javob 'E'. Win + E Explorer uchun ishlatiladi.",
      en: "Correct key is 'E'. Win + E triggers File Explorer.",
      ru: "Правильная клавиша — 'E'. Win + E вызывает Проводник."
    },
    shortcutId: "win-e"
  },
  {
    id: "q-17",
    type: "missing-key",
    category: "clipboard",
    difficulty: "beginner",
    question: {
      uz: "Almashish buferi tarixini (Clipboard History) ko'rish: Win + [ ? ]",
      en: "View Clipboard History: Win + [ ? ]",
      ru: "Просмотр журнала буфера обмена: Win + [ ? ]"
    },
    partialKeys: ["Win"],
    options: [
      { id: "v", text: { uz: "V", en: "V", ru: "V" }, keys: ["V"] },
      { id: "c", text: { uz: "C", en: "C", ru: "C" }, keys: ["C"] },
      { id: "h", text: { uz: "H", en: "H", ru: "H" }, keys: ["H"] },
      { id: "x", text: { uz: "X", en: "X", ru: "X" }, keys: ["X"] }
    ],
    correctAnswerId: "v",
    explanation: {
      uz: "Win + V bufer tarixini ochadi.",
      en: "Win + V reveals clipboard history.",
      ru: "Win + V открывает журнал буфера обмена."
    },
    shortcutId: "win-v"
  },
  {
    id: "q-18",
    type: "missing-key",
    category: "screenshots",
    difficulty: "intermediate",
    question: {
      uz: "Ekran bo'lagini rasmga olish: Win + [ ? ] + S",
      en: "Region screen snip: Win + [ ? ] + S",
      ru: "Снимок фрагмента экрана: Win + [ ? ] + S"
    },
    partialKeys: ["Win", "S"],
    options: [
      { id: "shift", text: { uz: "Shift", en: "Shift", ru: "Shift" }, keys: ["Shift"] },
      { id: "ctrl", text: { uz: "Ctrl", en: "Ctrl", ru: "Ctrl" }, keys: ["Ctrl"] },
      { id: "alt", text: { uz: "Alt", en: "Alt", ru: "Alt" }, keys: ["Alt"] },
      { id: "tab", text: { uz: "Tab", en: "Tab", ru: "Tab" }, keys: ["Tab"] }
    ],
    correctAnswerId: "shift",
    explanation: {
      uz: "Yetishmayotgan tugma Shift. Win + Shift + S qirqib olish vositasini ochadi.",
      en: "Missing key is Shift. Win + Shift + S triggers region clipping.",
      ru: "Пропущенная клавиша — Shift. Win + Shift + S активирует захват области."
    },
    shortcutId: "win-shift-s"
  },
  {
    id: "q-19",
    type: "missing-key",
    category: "text-editing",
    difficulty: "beginner",
    question: {
      uz: "Emoji va belgilar panelini ochish: Win + [ ? ]",
      en: "Open Emoji and Symbol panel: Win + [ ? ]",
      ru: "Открыть панель эмодзи и символов: Win + [ ? ]"
    },
    partialKeys: ["Win"],
    options: [
      { id: "dot", text: { uz: "Nuqta (.)", en: "Period (.)", ru: "Точка (.)" }, keys: ["."] },
      { id: "comma", text: { uz: "Vergul (,)", en: "Comma (,)", ru: "Запятая (,)" }, keys: [","] },
      { id: "e", text: { uz: "E", en: "E", ru: "E" }, keys: ["E"] },
      { id: "slash", text: { uz: "Slesh (/)", en: "Slash (/)", ru: "Слэш (/)" }, keys: ["/"] }
    ],
    correctAnswerId: "dot",
    explanation: {
      uz: "Win + . (nuqta) emojilar va belgilar panelini ochadi (yoki Win + ;).",
      en: "Win + . (period) opens the Windows emoji and symbol picker.",
      ru: "Win + . (точка) открывает окно смайликов и символов."
    },
    shortcutId: "win-period"
  },

  // 4. Scenario Questions
  {
    id: "q-20",
    type: "scenario",
    category: "window-management",
    difficulty: "intermediate",
    question: {
      uz: "Vaziyat: Siz ikkita monitor ulangan noutbukda ishlayapsiz. Ochiq Word dasturini sichqonchasiz o'ngdagi monitorga o'tkazmoqchisiz. Qaysi kombinatsiyani bosasiz?",
      en: "Scenario: You are working on dual monitors and want to fling Word to your right display without touching the mouse. What shortcut do you press?",
      ru: "Сценарий: Вы работаете с двумя мониторами и хотите перебросить окно Word на монитор справа без мыши. Какую комбинацию вы нажмете?"
    },
    options: [
      { id: "a", text: { uz: "Win + Shift + Right", en: "Win + Shift + Right", ru: "Win + Shift + Стрелка вправо" }, keys: ["Win", "Shift", "Right"] },
      { id: "b", text: { uz: "Win + Right", en: "Win + Right", ru: "Win + Стрелка вправо" }, keys: ["Win", "Right"] },
      { id: "c", text: { uz: "Alt + Shift + Right", en: "Alt + Shift + Right", ru: "Alt + Shift + Стрелка вправо" }, keys: ["Alt", "Shift", "Right"] },
      { id: "d", text: { uz: "Ctrl + Win + Right", en: "Ctrl + Win + Right", ru: "Ctrl + Win + Стрелка вправо" }, keys: ["Ctrl", "Win", "Right"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + Shift + O'ng/Chap strelkalar oynani qo'shni monitorga darhol sakratadi.",
      en: "Win + Shift + Arrow moves active windows directly between physical displays.",
      ru: "Win + Shift + Стрелки перемещают окна между физическими мониторами."
    },
    shortcutId: "win-shift-right"
  },
  {
    id: "q-21",
    type: "scenario",
    category: "text-editing",
    difficulty: "intermediate",
    question: {
      uz: "Vaziyat: Siz kod yozayotganda butun bitta xato so'zni o'chirib yubormoqchisiz. Harflab Backspace bosish o'rniga nima bosish eng tez usul?",
      en: "Scenario: You misspelled a word while typing and want to erase the whole preceding word in a single strike. What shortcut does this?",
      ru: "Сценарий: Вы опечатались в длинном слове и хотите стереть его целиком одним нажатием. Какое сочетание это делает?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + Backspace", en: "Ctrl + Backspace", ru: "Ctrl + Backspace" }, keys: ["Ctrl", "Backspace"] },
      { id: "b", text: { uz: "Shift + Backspace", en: "Shift + Backspace", ru: "Shift + Backspace" }, keys: ["Shift", "Backspace"] },
      { id: "c", text: { uz: "Alt + Backspace", en: "Alt + Backspace", ru: "Alt + Backspace" }, keys: ["Alt", "Backspace"] },
      { id: "d", text: { uz: "Ctrl + Delete", en: "Ctrl + Delete", ru: "Ctrl + Delete" }, keys: ["Ctrl", "Delete"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Ctrl + Backspace chapdagi butun so'zni bir zumda o'chiradi. Ctrl + Delete esa o'ngdagi keyingi so'zni o'chiradi.",
      en: "Ctrl + Backspace deletes preceding whole words at once.",
      ru: "Ctrl + Backspace удаляет все слово слева от курсора за один раз."
    },
    shortcutId: "ctrl-backspace"
  },
  {
    id: "q-22",
    type: "scenario",
    category: "windows-system",
    difficulty: "beginner",
    question: {
      uz: "Vaziyat: Kompyuteringizda og'ir dastur qotib qoldi va sichqoncha harakatiga javob bermayapti. Uni majburan to'xtatish uchun Task Managerni qanday chaqirasiz?",
      en: "Scenario: An app has frozen and isn't responding. How do you summon Task Manager directly to terminate it?",
      ru: "Сценарий: Программа зависла и не отвечает на клики мыши. Как напрямую вызвать Диспетчер задач для ее завершения?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + Shift + Esc", en: "Ctrl + Shift + Esc", ru: "Ctrl + Shift + Esc" }, keys: ["Ctrl", "Shift", "Esc"] },
      { id: "b", text: { uz: "Alt + F4", en: "Alt + F4", ru: "Alt + F4" }, keys: ["Alt", "F4"] },
      { id: "c", text: { uz: "Win + R", en: "Win + R", ru: "Win + R" }, keys: ["Win", "R"] },
      { id: "d", text: { uz: "Ctrl + Esc", en: "Ctrl + Esc", ru: "Ctrl + Esc" }, keys: ["Ctrl", "Esc"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Ctrl + Shift + Esc Task Managerni to'g'ridan-to'g'ri ochadi, bu eng tezkor yo'ldir.",
      en: "Ctrl + Shift + Esc is the most direct way to open Task Manager.",
      ru: "Ctrl + Shift + Esc — самый быстрый прямой путь к Диспетчеру задач."
    },
    shortcutId: "ctrl-shift-esc"
  },
  {
    id: "q-23",
    type: "multiple-choice",
    category: "window-management",
    difficulty: "intermediate",
    question: {
      uz: "Windows 11-da oynalarni 2, 3 yoki 4 qismga avtomatik taqsimlaydigan Snap Layouts menyusini qaysi tugmalar chaqiradi?",
      en: "Which shortcut opens the Snap Layouts grid menu in Windows 11?",
      ru: "Какая комбинация вызывает меню макетов Snap Layouts в Windows 11?"
    },
    options: [
      { id: "a", text: { uz: "Win + Z", en: "Win + Z", ru: "Win + Z" }, keys: ["Win", "Z"] },
      { id: "b", text: { uz: "Win + S", en: "Win + S", ru: "Win + S" }, keys: ["Win", "S"] },
      { id: "c", text: { uz: "Ctrl + Win + Z", en: "Ctrl + Win + Z", ru: "Ctrl + Win + Z" }, keys: ["Ctrl", "Win", "Z"] },
      { id: "d", text: { uz: "Alt + Z", en: "Alt + Z", ru: "Alt + Z" }, keys: ["Alt", "Z"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + Z Windows 11-da Snap Layouts menyusini ochadi, so'ngra raqam orqali maketni tanlash mumkin.",
      en: "Win + Z opens the Snap Layouts menu in Windows 11.",
      ru: "Win + Z открывает меню разметки окон Snap Layouts в Windows 11."
    },
    shortcutId: "win-z"
  },
  {
    id: "q-24",
    type: "multiple-choice",
    category: "terminal",
    difficulty: "intermediate",
    question: {
      uz: "Windows Terminal-da yangi vkladka ochish uchun nima bosiladi?",
      en: "Which shortcut opens a new tab in Windows Terminal?",
      ru: "Как открыть новую вкладку в Windows Terminal?"
    },
    options: [
      { id: "a", text: { uz: "Ctrl + Shift + T", en: "Ctrl + Shift + T", ru: "Ctrl + Shift + T" }, keys: ["Ctrl", "Shift", "T"] },
      { id: "b", text: { uz: "Ctrl + T", en: "Ctrl + T", ru: "Ctrl + T" }, keys: ["Ctrl", "T"] },
      { id: "c", text: { uz: "Win + T", en: "Win + T", ru: "Win + T" }, keys: ["Win", "T"] },
      { id: "d", text: { uz: "Alt + T", en: "Alt + T", ru: "Alt + T" }, keys: ["Alt", "T"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Windows Terminal-da yangi vkladka ochish Ctrl + Shift + T kombinatsiyasidir.",
      en: "Ctrl + Shift + T creates a new tab in Windows Terminal.",
      ru: "Ctrl + Shift + T открывает новую вкладку консоли в Windows Terminal."
    },
    shortcutId: "ctrl-shift-t-terminal"
  },
  {
    id: "q-25",
    type: "multiple-choice",
    category: "settings",
    difficulty: "beginner",
    question: {
      uz: "Windows 11-da Wi-Fi, Bluetooth va ovoz balandligi kabi Tezkor Sozlamalarni (Quick Settings) qaysi kombinatsiya ochadi?",
      en: "Which shortcut opens the Quick Settings flyout (Wi-Fi, Bluetooth, volume slider) in Windows 11?",
      ru: "Какое сочетание открывает панель быстрых настроек (Wi-Fi, Bluetooth, звук) в Windows 11?"
    },
    options: [
      { id: "a", text: { uz: "Win + A", en: "Win + A", ru: "Win + A" }, keys: ["Win", "A"] },
      { id: "b", text: { uz: "Win + Q", en: "Win + Q", ru: "Win + Q" }, keys: ["Win", "Q"] },
      { id: "c", text: { uz: "Win + S", en: "Win + S", ru: "Win + S" }, keys: ["Win", "S"] },
      { id: "d", text: { uz: "Alt + A", en: "Alt + A", ru: "Alt + A" }, keys: ["Alt", "A"] }
    ],
    correctAnswerId: "a",
    explanation: {
      uz: "Win + A Quick Settings (Tezkor sozlamalar) panelini ochadi. Bildirishnomalar esa Win + N orqali ochiladi.",
      en: "Win + A triggers Quick Settings. Notifications are Win + N.",
      ru: "Win + A открывает панель быстрых параметров (Action Center / Quick Settings)."
    },
    shortcutId: "win-a"
  }
];

// Dynamically generate additional quiz questions from the official shortcuts to guarantee 105+ unique questions
export const getAllQuizQuestions = (allShortcuts: { id: string; keys: string[]; title: { uz: string; en: string; ru: string }; description: { uz: string; en: string; ru: string }; category: any; difficulty: any }[]): QuizQuestion[] => {
  const bank: QuizQuestion[] = [...QUIZ_QUESTIONS];
  const existingIds = new Set(bank.map(q => q.id));

  allShortcuts.forEach((sc, idx) => {
    const qId = `gen-q-${sc.id}`;
    if (existingIds.has(qId)) return;

    // Distribute among multiple question types
    const questionType = idx % 4 === 0 
      ? "correct-shortcut" 
      : idx % 4 === 1 
      ? "true-false" 
      : idx % 4 === 2 
      ? "missing-key" 
      : "multiple-choice";

    if (questionType === "true-false") {
      const isTrue = idx % 2 === 0;
      const displayKey = isTrue 
        ? sc.keys.join(" + ") 
        : (sc.keys[0] === "Win" ? ["Ctrl", ...sc.keys.slice(1)].join(" + ") : ["Win", ...sc.keys.slice(1)].join(" + "));

      bank.push({
        id: qId,
        type: "true-false",
        category: sc.category,
        difficulty: sc.difficulty,
        question: {
          uz: `"${displayKey}" kombinatsiyasi quyidagi vazifani bajaradimi: "${sc.title.uz}"?`,
          en: `Does the shortcut "${displayKey}" perform this task: "${sc.title.en}"?`,
          ru: `Выполняет ли сочетание клавиш "${displayKey}" следующее действие: "${sc.title.ru}"?`
        },
        options: [
          { id: "t", text: { uz: "To'g'ri (True)", en: "True", ru: "Верно (True)" } },
          { id: "f", text: { uz: "Noto'g'ri (False)", en: "False", ru: "Неверно (False)" } }
        ],
        correctAnswerId: isTrue ? "t" : "f",
        explanation: {
          uz: `To'g'ri javob: "${sc.title.uz}" uchun rasmiy kombinatsiya "${sc.keys.join(" + ")}" hisoblanadi.`,
          en: `Correct answer: the official combination for "${sc.title.en}" is "${sc.keys.join(" + ")}".`,
          ru: `Правильный ответ: официальное сочетание для "${sc.title.ru}" — это "${sc.keys.join(" + ")}".`
        },
        shortcutId: sc.id
      });
    } else if (questionType === "missing-key" && sc.keys.length >= 2) {
      const missingIndex = sc.keys.length - 1;
      const targetKey = sc.keys[missingIndex];
      const partial = sc.keys.slice(0, missingIndex);

      // Create dummy distractor options
      const distractors = ["E", "D", "S", "L", "Tab", "Esc", "Enter", "Space", "Shift"]
        .filter(k => k.toLowerCase() !== targetKey.toLowerCase())
        .slice(0, 3);

      const options = [
        { id: targetKey.toLowerCase(), text: { uz: targetKey, en: targetKey, ru: targetKey }, keys: [targetKey] },
        ...distractors.map(d => ({ id: d.toLowerCase(), text: { uz: d, en: d, ru: d }, keys: [d] }))
      ].sort(() => 0.5 - Math.random());

      bank.push({
        id: qId,
        type: "missing-key",
        category: sc.category,
        difficulty: sc.difficulty,
        question: {
          uz: `"${sc.title.uz}" uchun yetishmayotgan tugmani toping: ${partial.join(" + ")} + [ ? ]`,
          en: `Find the missing key for "${sc.title.en}": ${partial.join(" + ")} + [ ? ]`,
          ru: `Найдите пропущенную клавишу для "${sc.title.ru}": ${partial.join(" + ")} + [ ? ]`
        },
        partialKeys: partial,
        options,
        correctAnswerId: targetKey.toLowerCase(),
        explanation: {
          uz: `To'liq rasmiy kombinatsiya: ${sc.keys.join(" + ")}. ${sc.description.uz}`,
          en: `Complete official shortcut: ${sc.keys.join(" + ")}. ${sc.description.en}`,
          ru: `Полное официальное сочетание: ${sc.keys.join(" + ")}. ${sc.description.ru}`
        },
        shortcutId: sc.id
      });
    } else {
      // Multiple Choice / Select correct shortcut
      // Find 3 distractors from other shortcuts
      const otherShortcuts = allShortcuts.filter(o => o.id !== sc.id);
      const distractors = otherShortcuts
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = [
        { id: sc.id, text: { uz: sc.keys.join(" + "), en: sc.keys.join(" + "), ru: sc.keys.join(" + ") }, keys: sc.keys },
        ...distractors.map(d => ({
          id: d.id,
          text: { uz: d.keys.join(" + "), en: d.keys.join(" + "), ru: d.keys.join(" + ") },
          keys: d.keys
        }))
      ].sort(() => 0.5 - Math.random());

      bank.push({
        id: qId,
        type: "correct-shortcut",
        category: sc.category,
        difficulty: sc.difficulty,
        question: {
          uz: `Qaysi kombinatsiya quyidagi amalni bajaradi: "${sc.title.uz}"?`,
          en: `Which shortcut performs this action: "${sc.title.en}"?`,
          ru: `Какое сочетание клавиш выполняет действие: "${sc.title.ru}"?`
        },
        options,
        correctAnswerId: sc.id,
        explanation: {
          uz: `${sc.keys.join(" + ")}: ${sc.description.uz}`,
          en: `${sc.keys.join(" + ")}: ${sc.description.en}`,
          ru: `${sc.keys.join(" + ")}: ${sc.description.ru}`
        },
        shortcutId: sc.id
      });
    }
  });

  return bank;
};
