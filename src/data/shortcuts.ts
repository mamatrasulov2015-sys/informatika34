import { Shortcut } from '../types';

export const SHORTCUTS: Shortcut[] = [
  // 1. Windows & System
  {
    id: "win-key",
    keys: ["Win"],
    title: {
      uz: "Boshlash (Start) menyusini ochish/yopish",
      en: "Open or close Start menu",
      ru: "Открыть или закрыть меню Пуск"
    },
    description: {
      uz: "Ilovalar, qidiruv va tizim sozlamalarini ko'rsatadigan Start menyusini ochadi.",
      en: "Opens the Start menu showing applications, pinned items, and system power options.",
      ru: "Открывает главное меню «Пуск» с приложениями, закрепленными элементами и питанием."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["start", "menu", "system", "windows"],
    example: {
      uz: "Dasturlarni tezda topish uchun Win tugmasini bosing va ilova nomini yoza boshlang.",
      en: "Press Win and start typing to instantly search and launch any app.",
      ru: "Нажмите Win и сразу начните вводить название программы для её запуска."
    },
    systemLevel: true
  },
  {
    id: "win-l",
    keys: ["Win", "L"],
    title: {
      uz: "Kompyuterni bloklash",
      en: "Lock your PC",
      ru: "Заблокировать компьютер"
    },
    description: {
      uz: "Ish o'rnini tark etganda shaxsiy ma'lumotlarni himoya qilish uchun tizimni bir zumda bloklaydi.",
      en: "Instantly locks your workstation or switches accounts to protect privacy.",
      ru: "Мгновенно блокирует экран системы или переключает учетную запись."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["lock", "security", "privacy", "workstation"],
    example: {
      uz: "Stoldan turishdan oldin Win + L ni bosib kompyuterni xavfsiz qoldiring.",
      en: "Press Win + L right before stepping away from your computer.",
      ru: "Нажмите Win + L перед тем, как отойти от рабочего места."
    },
    systemLevel: true
  },
  {
    id: "win-d",
    keys: ["Win", "D"],
    title: {
      uz: "Ish stolini ko'rsatish yoki yashirish",
      en: "Display and hide the desktop",
      ru: "Отобразить или скрыть рабочий стол"
    },
    description: {
      uz: "Barcha ochiq oynalarni bir zumda kichraytiradi va qayta bosilganda ularni tiklaydi.",
      en: "Minimizes all open windows to reveal the desktop; press again to restore them.",
      ru: "Сворачивает все открытые окна, показывая рабочий стол; повторное нажатие восстанавливает их."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["desktop", "minimize", "workspace"],
    example: {
      uz: "Ish stolidagi faylga tezda kirish uchun Win + D bosing.",
      en: "Quickly access a file on your desktop by pressing Win + D.",
      ru: "Быстро доберитесь до файлов на рабочем столе с помощью Win + D."
    }
  },
  {
    id: "win-m",
    keys: ["Win", "M"],
    title: {
      uz: "Barcha ochiq oynalarni minimallashtirish",
      en: "Minimize all windows",
      ru: "Свернуть все окна"
    },
    description: {
      uz: "Barcha faol dasturlarni vazifalar paneliga (Taskbar) tushiradi.",
      en: "Minimizes all currently active application windows.",
      ru: "Сворачивает все активные окна на панель задач."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["minimize", "windows", "clean"],
    example: {
      uz: "Chalg'ituvchi barcha oynalarni yashirish uchun Win + M ni bosing.",
      en: "Press Win + M to clear clutter across all screens.",
      ru: "Нажмите Win + M, чтобы свернуть все окна."
    }
  },
  {
    id: "win-shift-m",
    keys: ["Win", "Shift", "M"],
    title: {
      uz: "Minimallashtirilgan oynalarni qayta tiklash",
      en: "Restore minimized windows on desktop",
      ru: "Восстановить свернутые окна на рабочем столе"
    },
    description: {
      uz: "Win + M orqali kichraytirilgan barcha oynalarni avvalgi holatiga qaytaradi.",
      en: "Restores windows minimized via Win + M to their previous layout.",
      ru: "Возвращает в исходное состояние окна, свернутые сочетанием Win + M."
    },
    category: "windows-system",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["restore", "minimize", "windows"],
    example: {
      uz: "Barcha oynalarni bir harakat bilan ekranga qaytarish.",
      en: "Instantly bring back your entire minimized workspace.",
      ru: "Мгновенно разверните все свернутые окна обратно."
    }
  },
  {
    id: "win-r",
    keys: ["Win", "R"],
    title: {
      uz: "\"Ishga tushirish\" (Run) oynasini ochish",
      en: "Open Run dialog box",
      ru: "Открыть диалоговое окно «Выполнить»"
    },
    description: {
      uz: "Tizim dasturlari, buyruqlar va fayllarni bevosita ishga tushirish uchun muloqot oynasi.",
      en: "Opens the command execution prompt to quickly run programs, control panels, or utilities.",
      ru: "Открывает окно быстрого запуска программ, утилит и команд."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["run", "command", "cmd", "services"],
    example: {
      uz: "Win + R bosing, 'cmd' yoki 'calc' yozib Enter bosing.",
      en: "Press Win + R, type 'notepad' or 'cmd', and hit Enter.",
      ru: "Нажмите Win + R, введите 'cmd' или 'calc' и нажмите Enter."
    }
  },
  {
    id: "win-x",
    keys: ["Win", "X"],
    title: {
      uz: "Tezkor havolalar (Quick Link) menyusi",
      en: "Open Quick Link / Power User menu",
      ru: "Открыть меню быстрых ссылок (WinX)"
    },
    description: {
      uz: "Tizim boshqaruvi, Disk menejeri, Terminal, Qurilmalar menejeriga tezkor kirish menyusi.",
      en: "Opens system administrative menu offering Device Manager, Disk Management, Terminal, and Power.",
      ru: "Вызывает системное меню с доступом к Диспетчеру устройств, Терминалу и управлению дисками."
    },
    category: "windows-system",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["power", "admin", "quick-link", "system"],
    example: {
      uz: "Win + X bosing va 'Qurilmalar menejeri' yoki 'Terminal'ni tezda tanlang.",
      en: "Press Win + X for fast access to administrator tools without searching.",
      ru: "Нажмите Win + X для быстрого вызова утилит администрирования."
    }
  },
  {
    id: "ctrl-shift-esc",
    keys: ["Ctrl", "Shift", "Esc"],
    title: {
      uz: "Vazifalar menejeri (Task Manager) ni ochish",
      en: "Open Task Manager directly",
      ru: "Открыть Диспетчер задач напрямую"
    },
    description: {
      uz: "Jarayonlar, unumdorlik va qotib qolgan dasturlarni to'xtatish uchun to'g'ridan-to'g'ri Task Managerni chaqiradi.",
      en: "Opens Task Manager immediately without entering the security lock screen.",
      ru: "Мгновенно открывает Диспетчер задач без промежуточного экрана безопасности."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["task-manager", "performance", "processes", "kill"],
    example: {
      uz: "Qotib qolgan dasturni yopish uchun Ctrl + Shift + Esc bosing.",
      en: "Press Ctrl + Shift + Esc to terminate frozen applications.",
      ru: "Нажмите Ctrl + Shift + Esc для остановки зависших приложений."
    }
  },
  {
    id: "ctrl-alt-del",
    keys: ["Ctrl", "Alt", "Delete"],
    title: {
      uz: "Windows xavfsizlik menyusi",
      en: "Open Windows Security options",
      ru: "Открыть экран безопасности Windows"
    },
    description: {
      uz: "Tizimni bloklash, hisobni almashtirish, chiqish va Task Managerga o'tish ekrani.",
      en: "Hardware-level security interrupt offering Lock, Switch User, Sign Out, and Task Manager.",
      ru: "Системный экран прерывания: блокировка, смена пользователя, выход и диспетчер."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["security", "signout", "interrupt", "reboot"],
    example: {
      uz: "Tizim to'liq qotib qolganda majburiy xavfsizlik menyusini chaqirish.",
      en: "Use Ctrl + Alt + Delete when an app freezes the whole display.",
      ru: "Используйте Ctrl + Alt + Delete при критическом зависании интерфейса."
    },
    systemLevel: true
  },
  {
    id: "alt-f4",
    keys: ["Alt", "F4"],
    title: {
      uz: "Faol oynani yopish yoki kompyuterni o'chirish",
      en: "Close the active window or shut down",
      ru: "Закрыть активное окно или выключить ПК"
    },
    description: {
      uz: "Hozirgi faol ilovani yopadi; agar ish stolida bosilsa kompyuterni o'chirish oynasini ochadi.",
      en: "Closes the current active window. If pressed on the desktop, brings up the shutdown dialog.",
      ru: "Закрывает активную программу. На рабочем столе вызывает меню выключения компьютера."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["close", "shutdown", "exit", "window"],
    example: {
      uz: "Ilovani darhol yopish uchun Alt + F4 bosing.",
      en: "Close unwanted apps quickly with Alt + F4.",
      ru: "Быстро закройте окно или вкладку сочетанием Alt + F4."
    }
  },
  {
    id: "win-pause",
    keys: ["Win", "Pause"],
    title: {
      uz: "Tizim xususiyatlari (System About) sahifasi",
      en: "Open System Properties / About",
      ru: "Открыть сведения о системе («О системе»)"
    },
    description: {
      uz: "Protsessor, operativ xotira (RAM) va Windows versiyasi haqidagi ma'lumotlarni ko'rsatadi.",
      en: "Directly opens the Windows Settings 'About' page with processor, RAM, and OS specifications.",
      ru: "Открывает раздел параметров «О системе» с характеристиками процессора и памяти."
    },
    category: "windows-system",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["specs", "hardware", "ram", "cpu", "about"],
    example: {
      uz: "Kompyuter texnik ko'rsatkichlarini bir zumda bilish.",
      en: "Quickly verify system hardware specifications.",
      ru: "Мгновенно узнайте объем оперативной памяти и модель процессора."
    }
  },

  // 2. File Explorer
  {
    id: "win-e",
    keys: ["Win", "E"],
    title: {
      uz: "Fayl menejeri (File Explorer) ni ochish",
      en: "Open File Explorer",
      ru: "Открыть Проводник (File Explorer)"
    },
    description: {
      uz: "Fayllar va papkalarni ko'rish uchun yangi Explorer oynasini ochadi.",
      en: "Opens a new File Explorer window to navigate your drives, folders, and documents.",
      ru: "Открывает окно Проводника для работы с дисками, файлами и папками."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["files", "folders", "explorer", "drives"],
    example: {
      uz: "Fayllarga kirish uchun Win + E bosing.",
      en: "Press Win + E to quickly browse your documents.",
      ru: "Нажмите Win + E для быстрого перехода к папкам."
    }
  },
  {
    id: "ctrl-n-explorer",
    keys: ["Ctrl", "N"],
    title: {
      uz: "Yangi Explorer oynasini ochish",
      en: "Open a new window in File Explorer",
      ru: "Открыть новое окно в Проводнике"
    },
    description: {
      uz: "Hozirgi papka joylashuvida xuddi shunday yangi oyna ochadi.",
      en: "Opens an additional window identical to the current folder location.",
      ru: "Открывает дублирующее окно Проводника в текущей папке."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["explorer", "new-window", "files"],
    example: {
      uz: "Fayllarni ikki papka orasida ko'chirish uchun yangi oyna oching.",
      en: "Open a side-by-side window to move files between folders.",
      ru: "Откройте второе окно для удобного перетаскивания файлов."
    }
  },
  {
    id: "ctrl-t-explorer",
    keys: ["Ctrl", "T"],
    title: {
      uz: "File Explorer-da yangi ichki vkladka ochish",
      en: "Open a new tab in File Explorer",
      ru: "Открыть новую вкладку в Проводнике"
    },
    description: {
      uz: "Windows 11 Explorer-da ko'p oynalik o'rniga ichki vkladka (tab) ochadi.",
      en: "Opens a new browser-style tab inside the same File Explorer window (Windows 11).",
      ru: "Создает новую вкладку внутри текущего окна Проводника (Windows 11)."
    },
    category: "file-explorer",
    difficulty: "intermediate",
    winVersion: "win11",
    tags: ["tabs", "win11", "explorer", "productivity"],
    example: {
      uz: "Bitta oynada bir nechta papkalar bilan qulay ishlash.",
      en: "Organize folder browsing neatly using modern tabs in Windows 11.",
      ru: "Удобно работайте с несколькими папками в одном окне с помощью вкладок."
    }
  },
  {
    id: "ctrl-w-explorer",
    keys: ["Ctrl", "W"],
    title: {
      uz: "Joriy vkladka yoki Explorer oynasini yopish",
      en: "Close the current tab or window",
      ru: "Закрыть текущую вкладку или окно Проводника"
    },
    description: {
      uz: "Ochiq turgan vkladkani yoki oxirgi vkladka bo'lsa butun oynani yopadi.",
      en: "Closes the focused tab, or the entire window if no tabs remain.",
      ru: "Закрывает активную вкладку или окно Проводника."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["close", "tab", "window", "explorer"],
    example: {
      uz: "Papkada ishni tugatib, uni tezda yopish.",
      en: "Quickly dismiss completed folders.",
      ru: "Закройте ненужную папку одним нажатием."
    }
  },
  {
    id: "ctrl-shift-n",
    keys: ["Ctrl", "Shift", "N"],
    title: {
      uz: "Yangi papka (folder) yaratish",
      en: "Create a new folder",
      ru: "Создать новую папку"
    },
    description: {
      uz: "File Explorer yoki ish stolida bir zumda yangi papka hosil qiladi.",
      en: "Creates a brand new directory folder in File Explorer or on the desktop.",
      ru: "Мгновенно создает новую папку в Проводнике или на рабочем столе."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["folder", "create", "new", "files"],
    example: {
      uz: "Sichqonchasiz tezkor yangi papka yaratish uchun Ctrl + Shift + N bosing.",
      en: "Press Ctrl + Shift + N and type the folder name immediately.",
      ru: "Нажмите Ctrl + Shift + N и сразу введите имя новой папки."
    }
  },
  {
    id: "alt-d",
    keys: ["Alt", "D"],
    title: {
      uz: "Manzil qatorini tanlash (Address bar)",
      en: "Select the address bar",
      ru: "Выделить адресную строку"
    },
    description: {
      uz: "Papka manzilini nusxalash yoki to'g'ridan-to'g'ri yo'lni kiritish uchun manzil satriga fokus beradi.",
      en: "Selects and focuses the address bar to copy the path or type a new directory.",
      ru: "Фокусирует и выделяет адресную строку для копирования пути или ввода адреса."
    },
    category: "file-explorer",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["address", "path", "url", "navigation"],
    example: {
      uz: "Alt + D bosing, 'cmd' deb yozib Enter bosing — joriy papkada terminal ochiladi.",
      en: "Press Alt + D, type 'cmd', and press Enter to launch terminal right here.",
      ru: "Нажмите Alt + D, введите 'cmd' и нажмите Enter, чтобы открыть консоль в этой папке."
    }
  },
  {
    id: "alt-p",
    keys: ["Alt", "P"],
    title: {
      uz: "Oldindan ko'rish panelini (Preview pane) yoqish/o'chirish",
      en: "Toggle Preview pane",
      ru: "Включить/выключить панель предварительного просмотра"
    },
    description: {
      uz: "Rasmlar, PDF va hujjatlarni ochmasdan o'ng panelda ko'rish imkonini beradi.",
      en: "Displays or hides the right-side preview pane for images, PDFs, and text files.",
      ru: "Показывает или скрывает область предпросмотра файлов справа."
    },
    category: "file-explorer",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["preview", "pane", "inspector", "view"],
    example: {
      uz: "Suratlar yoki hujjatlarni tez ko'rib chiqish uchun Alt + P bosing.",
      en: "Quickly inspect photos or documents without opening dedicated apps.",
      ru: "Быстро просматривайте содержимое файлов без их открытия."
    }
  },
  {
    id: "alt-enter",
    keys: ["Alt", "Enter"],
    title: {
      uz: "Tanlangan element xususiyatlari (Properties) ni ochish",
      en: "Open Properties for selected item",
      ru: "Открыть свойства выбранного элемента"
    },
    description: {
      uz: "Fayl yoki papka hajmi, joylashuvi va xavfsizlik sozlamalarini ko'rsatadi.",
      en: "Displays the Properties dialog showing file size, permissions, and creation date.",
      ru: "Открывает окно свойств файла или папки с размером и правами доступа."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["properties", "details", "size", "attributes"],
    example: {
      uz: "Faylni tanlang va Alt + Enter bosing.",
      en: "Select a file and press Alt + Enter to check exact byte size.",
      ru: "Выберите файл и нажмите Alt + Enter для проверки размера."
    }
  },
  {
    id: "alt-up",
    keys: ["Alt", "Up"],
    title: {
      uz: "Bitta daraja yuqoridagi papkaga o'tish",
      en: "Go up one folder level",
      ru: "Перейти на один уровень вверх"
    },
    description: {
      uz: "Ierarxiya bo'yicha joriy papkadan uni o'z ichiga olgan asosiy papkaga ko'tariladi.",
      en: "Navigates to the parent folder containing the current directory.",
      ru: "Переходит в родительскую папку текущего каталога."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["navigation", "parent", "folder", "up"],
    example: {
      uz: "Ichki papkadan asosiy katalogga qaytish.",
      en: "Navigate up directory trees effortlessly.",
      ru: "Быстрый переход вверх по дереву каталогов."
    }
  },
  {
    id: "alt-left",
    keys: ["Alt", "Left"],
    title: {
      uz: "Oldingi papkaga qaytish (Orqaga)",
      en: "View the previous folder (Back)",
      ru: "Перейти назад к предыдущей папке"
    },
    description: {
      uz: "Ko'rishlar tarixida oldingi ochilgan papkaga qaytaradi.",
      en: "Navigates back to the previously visited folder in navigation history.",
      ru: "Возвращается к предыдущей просмотренной папке."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["back", "history", "navigate"],
    example: {
      uz: "Tasodifan boshqa papkaga kirib ketganda orqaga qaytish.",
      en: "Step back to your previous folder quickly.",
      ru: "Вернитесь назад, если перешли не в ту папку."
    }
  },
  {
    id: "shift-delete",
    keys: ["Shift", "Delete"],
    title: {
      uz: "Faylni savatga (Recycle Bin) tashlamasdan butunlay o'chirish",
      en: "Delete permanently without Recycle Bin",
      ru: "Удалить безвозвратно мимо корзины"
    },
    description: {
      uz: "Faylni to'g'ridan-to'g'ri o'chiradi, uni savat orqali tiklab bo'lmaydi.",
      en: "Bypasses the Recycle Bin and deletes the selected file or folder permanently.",
      ru: "Удаляет выбранный файл или папку навсегда, не перемещая в корзину."
    },
    category: "file-explorer",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["delete", "permanent", "cleanup"],
    example: {
      uz: "Keraksiz katta fayllarni diskdan darhol o'chirish.",
      en: "Free up disk space immediately when sure a file is unneeded.",
      ru: "Очищайте место на диске от мусорных файлов без засорения корзины."
    }
  },
  {
    id: "f2-rename",
    keys: ["F2"],
    title: {
      uz: "Tanlangan element nomini o'zgartirish (Rename)",
      en: "Rename the selected item",
      ru: "Переименовать выбранный элемент"
    },
    description: {
      uz: "Fayl yoki papka nomini tahrirlash rejimiga o'tkazadi.",
      en: "Instantly enters rename edit mode for the highlighted file or folder.",
      ru: "Активирует режим редактирования имени выбранного файла или папки."
    },
    category: "file-explorer",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["rename", "edit", "name", "file"],
    example: {
      uz: "Faylni tanlab F2 bosing va yangi nom kiriting.",
      en: "Highlight a document, press F2, and type a fresh name.",
      ru: "Выделите документ, нажмите F2 и напечатайте новое имя."
    }
  },

  // 3. Window Management
  {
    id: "alt-tab",
    keys: ["Alt", "Tab"],
    title: {
      uz: "Ochiq ilovalar o'rtasida tezkor almashish",
      en: "Switch between open apps",
      ru: "Переключение между открытыми приложениями"
    },
    description: {
      uz: "Alt-ni bosib turgan holda Tab bosib dasturlar orasida tezda o'ting.",
      en: "Cycle smoothly between running applications and windows.",
      ru: "Переключайтесь между окнами запущенных приложений при удерживании Alt."
    },
    category: "window-management",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["switch", "multitask", "apps", "task-switch"],
    example: {
      uz: "Brauzer va matn muharriri o'rtasida bir zumda almashish.",
      en: "Flip back and forth between browser and code editor.",
      ru: "Быстро переключайтесь между браузером и редактором кода."
    }
  },
  {
    id: "win-tab",
    keys: ["Win", "Tab"],
    title: {
      uz: "Vazifalar ko'rinishi (Task View) ni ochish",
      en: "Open Task View",
      ru: "Открыть представление задач (Task View)"
    },
    description: {
      uz: "Barcha faol oynalar va virtual ish stollarini to'liq ko'rish ekranini ochadi.",
      en: "Shows an overview of all active windows and virtual desktops on screen.",
      ru: "Показывает обзор всех открытых окон и виртуальных рабочих столов."
    },
    category: "window-management",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["task-view", "desktops", "overview", "multitasking"],
    example: {
      uz: "Bir nechta ish stollari va oynalarni boshqarish uchun Win + Tab bosing.",
      en: "Press Win + Tab to see your workspaces and drag windows between them.",
      ru: "Нажмите Win + Tab для управления рабочими пространствами."
    }
  },
  {
    id: "win-left",
    keys: ["Win", "Left"],
    title: {
      uz: "Oynani ekranning chap yarmiga qadash (Snap Left)",
      en: "Snap window to the left half",
      ru: "Прикрепить окно к левой половине экрана"
    },
    description: {
      uz: "Oynani ekranning aniq 50% chap qismiga qadab, ko'p oynali ishni osonlashtiradi.",
      en: "Snaps the current application to the left half of the display screen.",
      ru: "Прикрепляет текущее окно к левой половине экрана для мультизадачности."
    },
    category: "window-management",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["snap", "split-screen", "layout", "multitask"],
    example: {
      uz: "Chap tomonga hujjatni, o'ng tomonga qidiruvni qo'yish.",
      en: "Snap reading notes to the left and research browser to the right.",
      ru: "Разместите документ слева, а браузер справа для удобной работы."
    }
  },
  {
    id: "win-right",
    keys: ["Win", "Right"],
    title: {
      uz: "Oynani ekranning o'ng yarmiga qadash (Snap Right)",
      en: "Snap window to the right half",
      ru: "Прикрепить окно к правой половине экрана"
    },
    description: {
      uz: "Oynani ekranning aniq 50% o'ng qismiga joylashtiradi.",
      en: "Snaps the current application to the right half of the display screen.",
      ru: "Прикрепляет текущее окно к правой половине экрана."
    },
    category: "window-management",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["snap", "split-screen", "layout", "multitask"],
    example: {
      uz: "Ekranni teng ikkiga bo'lib ishlash.",
      en: "Achieve ideal 50/50 dual window productivity.",
      ru: "Разделите монитор пополам для комфортной многозадачности."
    }
  },
  {
    id: "win-up",
    keys: ["Win", "Up"],
    title: {
      uz: "Oynani to'liq ekranga yoyish (Maximize)",
      en: "Maximize the active window",
      ru: "Развернуть активное окно на весь экран"
    },
    description: {
      uz: "Oynani butun monitor bo'ylab ochadi; agar burchakda bo'lsa yuqori chorakka joylaydi.",
      en: "Maximizes the active window to fill the entire display area.",
      ru: "Разворачивает активное окно на весь экран."
    },
    category: "window-management",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["maximize", "fullscreen", "window"],
    example: {
      uz: "Kichraytirilgan oynani to'liq kengaytirish uchun Win + Up bosing.",
      en: "Expand any window instantly to full screen.",
      ru: "Разверните окно на полный экран одним нажатием."
    }
  },
  {
    id: "win-down",
    keys: ["Win", "Down"],
    title: {
      uz: "Oynani kichraytirish yoki minimallashtirish",
      en: "Restore or minimize the active window",
      ru: "Восстановить или свернуть активное окно"
    },
    description: {
      uz: "To'liq ekrandagi oynani o'rtacha hajmga qaytaradi; qayta bosilganda vazifalar paneliga tushiradi.",
      en: "Restores a maximized window down, or minimizes it to the taskbar if already restored.",
      ru: "Уменьшает развернутое окно, а при повторном нажатии сворачивает его."
    },
    category: "window-management",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["minimize", "restore", "window"],
    example: {
      uz: "Oynani tezda ekrandan yashirish.",
      en: "Quickly tuck away focused windows.",
      ru: "Быстро скройте текущее окно с экрана."
    }
  },
  {
    id: "win-z",
    keys: ["Win", "Z"],
    title: {
      uz: "Snap Layouts (Qadash maketlari) menyusini ochish",
      en: "Open Snap Layouts menu",
      ru: "Открыть меню макетов прикрепления (Snap Layouts)"
    },
    description: {
      uz: "Windows 11-da oynalarni 2, 3 yoki 4 qismga avtomatik bo'lish maketlarini ko'rsatadi.",
      en: "Activates Snap Assist overlays in Windows 11 to organize windows into custom grids.",
      ru: "Открывает меню макетов Snap в Windows 11 для разделения экрана на 2, 3 или 4 зоны."
    },
    category: "window-management",
    difficulty: "intermediate",
    winVersion: "win11",
    tags: ["snap", "layouts", "grid", "win11"],
    example: {
      uz: "Win + Z bosing va raqam tanlab ekranni 3 qismga ajrating.",
      en: "Press Win + Z then press a number key to snap into 3-column layouts.",
      ru: "Нажмите Win + Z и выберите цифру для разделения на несколько зон."
    }
  },
  {
    id: "win-shift-left",
    keys: ["Win", "Shift", "Left"],
    title: {
      uz: "Oynani chap tomondagi monitorga o'tkazish",
      en: "Move active window to the left monitor",
      ru: "Переместить окно на монитор слева"
    },
    description: {
      uz: "Ko'p monitorli tizimlarda oynani qo'shni chap ekranga bir harakat bilan o'tkazadi.",
      en: "Transfers the current window to the adjacent monitor on the left.",
      ru: "Мгновенно переносит активное окно на соседний монитор слева."
    },
    category: "window-management",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["monitors", "multiscreen", "display"],
    example: {
      uz: "Ikkinchi monitorda ishlovchilar uchun oynani tezda ko'chirish.",
      en: "Fling documents across multiple screens without dragging the mouse.",
      ru: "Перебрасывайте окна между несколькими мониторами без мыши."
    }
  },
  {
    id: "win-shift-right",
    keys: ["Win", "Shift", "Right"],
    title: {
      uz: "Oynani o'ng tomondagi monitorga o'tkazish",
      en: "Move active window to the right monitor",
      ru: "Переместить окно на монитор справа"
    },
    description: {
      uz: "Ko'p monitorli tizimlarda faol oynani qo'shni o'ng ekranga ko'chiradi.",
      en: "Transfers the current window to the adjacent monitor on the right.",
      ru: "Мгновенно переносит активное окно на соседний монитор справа."
    },
    category: "window-management",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["monitors", "multiscreen", "display"],
    example: {
      uz: "Dasturchilar va dizaynerlar uchun ko'p ekranli qulaylik.",
      en: "Move preview windows over to secondary display instantly.",
      ru: "Удобно для разработчиков и дизайнеров с несколькими экранами."
    }
  },
  {
    id: "win-home",
    keys: ["Win", "Home"],
    title: {
      uz: "Barcha boshqa nofaol oynalarni minimallashtirish (Aero Shake)",
      en: "Minimize all except active window",
      ru: "Свернуть все окна, кроме активного"
    },
    description: {
      uz: "Faqat hozirgi diqqat qaratilgan oynani qoldirib, orqadagi hamma oynalarni yashiradi.",
      en: "Clears visual distractions by minimizing every window except the one you are using.",
      ru: "Сворачивает все фоновые окна, оставляя только текущее активное."
    },
    category: "window-management",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["focus", "aero-shake", "minimize"],
    example: {
      uz: "Diqqatni faqat bitta muhim vazifaga qaratish uchun Win + Home bosing.",
      en: "Press Win + Home to focus purely on your active document.",
      ru: "Нажмите Win + Home, чтобы убрать весь лишний визуальный шум."
    }
  },

  // 4. Virtual Desktops
  {
    id: "win-ctrl-d",
    keys: ["Win", "Ctrl", "D"],
    title: {
      uz: "Yangi virtual ish stoli yaratish",
      en: "Create a new virtual desktop",
      ru: "Создать новый виртуальный рабочий стол"
    },
    description: {
      uz: "Turli vazifalar (ish, o'qish, shaxsiy) uchun alohida yangi ish maydoni ochadi.",
      en: "Adds a clean, independent virtual desktop workspace.",
      ru: "Создает чистое независимое виртуальное рабочее пространство."
    },
    category: "virtual-desktops",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["desktops", "workspace", "virtual"],
    example: {
      uz: "Ish va dam olish dasturlarini alohida stollarga ajrating.",
      en: "Separate your work apps from personal browsing.",
      ru: "Разделяйте рабочие и личные задачи по отдельным столам."
    }
  },
  {
    id: "win-ctrl-left",
    keys: ["Win", "Ctrl", "Left"],
    title: {
      uz: "Chapdagi virtual ish stoliga o'tish",
      en: "Switch to virtual desktop on the left",
      ru: "Переключиться на виртуальный стол слева"
    },
    description: {
      uz: "Virtual ish stollari ro'yxatida chap tomondagi ish maydoniga silliq o'tadi.",
      en: "Slides to the adjacent virtual desktop on the left.",
      ru: "Переключает на соседний рабочий стол слева."
    },
    category: "virtual-desktops",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["virtual-desktops", "navigation", "switch"],
    example: {
      uz: "Ish stollari o'rtasida klaviaturada tez o'tish.",
      en: "Quickly slide back to your primary project desktop.",
      ru: "Быстро переходите к основному проекту."
    }
  },
  {
    id: "win-ctrl-right",
    keys: ["Win", "Ctrl", "Right"],
    title: {
      uz: "O'ngdagi virtual ish stoliga o'tish",
      en: "Switch to virtual desktop on the right",
      ru: "Переключиться на виртуальный стол справа"
    },
    description: {
      uz: "O'ng tomonda joylashgan keyingi virtual ish stoliga o'tadi.",
      en: "Slides to the adjacent virtual desktop on the right.",
      ru: "Переключает на следующий рабочий стол справа."
    },
    category: "virtual-desktops",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["virtual-desktops", "navigation", "switch"],
    example: {
      uz: "Keyingi ish maydoniga o'tish.",
      en: "Glide over to your secondary workspace.",
      ru: "Легко переключайтесь на дополнительное пространство."
    }
  },
  {
    id: "win-ctrl-f4",
    keys: ["Win", "Ctrl", "F4"],
    title: {
      uz: "Joriy virtual ish stolini yopish",
      en: "Close the current virtual desktop",
      ru: "Закрыть текущий виртуальный рабочий стол"
    },
    description: {
      uz: "Ushbu stoldagi ochiq oynalar avtomatik ravishda qo'shni ish stoliga birlashtiriladi.",
      en: "Closes the active virtual desktop and moves its apps to the previous desktop.",
      ru: "Закрывает активный виртуальный стол, перемещая его окна на соседний."
    },
    category: "virtual-desktops",
    difficulty: "advanced",
    winVersion: "all",
    tags: ["close", "virtual-desktop", "cleanup"],
    example: {
      uz: "Vazifa tugagach ortiqcha virtual stolni yopish.",
      en: "Clean up finished virtual desktops with Win + Ctrl + F4.",
      ru: "Удаляйте ненужные рабочие пространства после завершения работы."
    }
  },

  // 5. Screenshots & Snip
  {
    id: "win-shift-s",
    keys: ["Win", "Shift", "S"],
    title: {
      uz: "Snipping Tool orqali ekranni qirqib olish (Skrinshot)",
      en: "Open Snipping Tool to take a screenshot",
      ru: "Открыть «Ножницы» для создания скриншота"
    },
    description: {
      uz: "Ekranning to'rtburchak, erkin shakl, alohida oyna yoki butun qismini rasmga olib nusxalaydi.",
      en: "Opens the Snip overlay to capture rectangular, freeform, window, or full-screen screenshots.",
      ru: "Вызывает инструмент фрагментов для захвата прямоугольной области, окна или всего экрана."
    },
    category: "screenshots",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["screenshot", "snip", "capture", "image"],
    example: {
      uz: "Ekranning kerakli qismini tanlab nusxalash uchun Win + Shift + S bosing.",
      en: "Capture any region and paste it directly into chat or email.",
      ru: "Сделайте быстрый снимок любой части экрана и вставьте в чат."
    }
  },
  {
    id: "print-screen",
    keys: ["PrtScn"],
    title: {
      uz: "Butun ekranni rasmga olish (Print Screen)",
      en: "Capture entire screen to clipboard",
      ru: "Снимок всего экрана в буфер обмена"
    },
    description: {
      uz: "Butun ekranning rasmini vaqtinchalik xotiraga (Clipboard) nusxalaydi.",
      en: "Captures your entire display image directly to the clipboard.",
      ru: "Копирует изображение всего экрана прямо в буфер обмена."
    },
    category: "screenshots",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["prtscn", "screenshot", "screen"],
    example: {
      uz: "PrtScn bosing va Paint yoki Word dasturiga Ctrl + V orqali qo'ying.",
      en: "Press PrtScn and paste with Ctrl + V anywhere.",
      ru: "Нажмите PrtScn и вставьте скриншот через Ctrl + V."
    }
  },
  {
    id: "win-print-screen",
    keys: ["Win", "PrtScn"],
    title: {
      uz: "Ekranni rasmga olib to'g'ridan-to'g'ri fayl sifatida saqlash",
      en: "Capture full screen and save directly to file",
      ru: "Снимок экрана с автоматическим сохранением в файл"
    },
    description: {
      uz: "Skrinshotni darhol 'Rasmlar / Ekran tasvirlari' (Screenshots) papkasiga PNG formatida saqlaydi.",
      en: "Instantly captures and saves a PNG file into your Pictures/Screenshots folder.",
      ru: "Мгновенно сохраняет снимок экрана в папку «Изображения / Снимки экрана»."
    },
    category: "screenshots",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["save", "screenshot", "pictures", "png"],
    example: {
      uz: "O'yin yoki videodan lahzani avtomatik fayl qilib saqlash.",
      en: "Save proof without needing to paste into an image editor.",
      ru: "Сохраняйте скриншоты сразу на диск без необходимости вставки."
    }
  },
  {
    id: "alt-print-screen",
    keys: ["Alt", "PrtScn"],
    title: {
      uz: "Faqat faol oynaning skrinshotini olish",
      en: "Capture only the active window",
      ru: "Снимок только активного окна"
    },
    description: {
      uz: "Butun ekranni emas, aynan siz ishlayotgan bitta oyna konturini rasmga oladi.",
      en: "Captures solely the currently focused window without background wallpapers.",
      ru: "Делает скриншот исключительно активного окна без лишнего фона."
    },
    category: "screenshots",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["window", "screenshot", "focus"],
    example: {
      uz: "Faqat bitta dastur xatolik oynasini rasmga olib jo'natish.",
      en: "Capture clean software dialogs for documentation.",
      ru: "Сделайте снимок отдельного окна для документации или отчета."
    }
  },

  // 6. Clipboard
  {
    id: "win-v",
    keys: ["Win", "V"],
    title: {
      uz: "Almashish buferi tarixi (Clipboard History) ni ochish",
      en: "Open Clipboard history",
      ru: "Открыть журнал буфера обмена"
    },
    description: {
      uz: "Oxirgi nusxalangan matnlar, rasmlar ro'yxatini ko'rsatadi va qadab qo'yish imkonini beradi.",
      en: "Displays a list of recently copied text items and images to paste any previous item.",
      ru: "Показывает историю скопированных текстов и картинок с возможностью вставки любого."
    },
    category: "clipboard",
    difficulty: "beginner",
    winVersion: "win10-11",
    tags: ["clipboard", "history", "paste", "copy"],
    example: {
      uz: "Bir nechta matnlarni nusxalab, Win + V orqali navbatma-navbat qo'yish.",
      en: "Copy multiple snippets, then press Win + V to paste older ones.",
      ru: "Скопируйте несколько фрагментов и вставляйте их через Win + V."
    }
  },
  {
    id: "ctrl-c",
    keys: ["Ctrl", "C"],
    title: {
      uz: "Nusxalash (Copy)",
      en: "Copy selected item to clipboard",
      ru: "Копировать в буфер обмена"
    },
    description: {
      uz: "Tanlangan matn, fayl yoki ob'ektni xotiraga nusxalaydi.",
      en: "Copies the highlighted text, file, or object to the clipboard.",
      ru: "Копирует выделенный текст, файл или объект в буфер обмена."
    },
    category: "clipboard",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["copy", "clipboard", "text"],
    example: {
      uz: "Matnni belgilab Ctrl + C bosing.",
      en: "Highlight words and press Ctrl + C.",
      ru: "Выделите фрагмент и нажмите Ctrl + C."
    }
  },
  {
    id: "ctrl-x",
    keys: ["Ctrl", "X"],
    title: {
      uz: "Qirqib olish (Cut)",
      en: "Cut selected item",
      ru: "Вырезать в буфер обмена"
    },
    description: {
      uz: "Tanlangan elementni o'z joyidan olib tashlab, xotiraga joylaydi.",
      en: "Removes the selected item from its original position and stores it in clipboard.",
      ru: "Удаляет выбранный элемент из исходного места и помещает в буфер."
    },
    category: "clipboard",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["cut", "move", "clipboard"],
    example: {
      uz: "Fayl yoki matnni boshqa joyga ko'chirish uchun qirqib olish.",
      en: "Move paragraphs or files cleanly.",
      ru: "Вырезайте абзацы или файлы для перемещения."
    }
  },
  {
    id: "ctrl-v",
    keys: ["Ctrl", "V"],
    title: {
      uz: "Qo'yish / Joylashtirish (Paste)",
      en: "Paste copied item",
      ru: "Вставить из буфера обмена"
    },
    description: {
      uz: "Xotiradagi eng oxirgi nusxalangan elementni kursor turgan joyga qo'yadi.",
      en: "Inserts the content of the clipboard at the current cursor position.",
      ru: "Вставляет последнее скопированное содержимое в текущую позицию курсора."
    },
    category: "clipboard",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["paste", "insert", "clipboard"],
    example: {
      uz: "Nusxalangan matnni hujjatga joylashtirish.",
      en: "Paste content into any input field or document.",
      ru: "Вставьте скопированный текст в документ или поле ввода."
    }
  },

  // 7. Text Editing
  {
    id: "ctrl-a",
    keys: ["Ctrl", "A"],
    title: {
      uz: "Barchasini tanlash (Select All)",
      en: "Select all items or text",
      ru: "Выделить всё"
    },
    description: {
      uz: "Hujjat, papka yoki sahifadagi barcha matn yoki fayllarni bir harakatda belgilaydi.",
      en: "Selects all content, text, or files in the current document or window.",
      ru: "Выделяет весь текст на странице или все файлы в открытой папке."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["select-all", "select", "highlight"],
    example: {
      uz: "Butun matnni o'chirish yoki nusxalash uchun Ctrl + A bosing.",
      en: "Press Ctrl + A to quickly highlight an entire document.",
      ru: "Нажмите Ctrl + A для выделения всего текста."
    }
  },
  {
    id: "ctrl-z",
    keys: ["Ctrl", "Z"],
    title: {
      uz: "Oxirgi amalni bekor qilish (Undo)",
      en: "Undo the last action",
      ru: "Отменить последнее действие (Undo)"
    },
    description: {
      uz: "Xato yozilgan matn yoki o'chirilgan faylni avvalgi holatiga qaytaradi.",
      en: "Reverses the most recent action, typo, or file change.",
      ru: "Отменяет последнее действие, опечатку или удаление."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["undo", "revert", "history"],
    example: {
      uz: "Tasodifan matn o'chib ketganda darhol Ctrl + Z bosing.",
      en: "Accidentally erased a paragraph? Ctrl + Z brings it back instantly.",
      ru: "Случайно стёрли важный абзац? Ctrl + Z мгновенно вернет его."
    }
  },
  {
    id: "ctrl-y",
    keys: ["Ctrl", "Y"],
    title: {
      uz: "Bekor qilingan amalni qaytarish (Redo)",
      en: "Redo an action",
      ru: "Повторить отмененное действие (Redo)"
    },
    description: {
      uz: "Ctrl + Z bilan bekor qilingan o'zgarishni yana qayta tiklaydi.",
      en: "Re-applies an action that was previously reversed by Undo.",
      ru: "Повторно применяет действие, которое было отменено с помощью Ctrl + Z."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["redo", "repeat", "history"],
    example: {
      uz: "Bekor qilingan matn kerak bo'lib qolsa Ctrl + Y bosing.",
      en: "Step forward in edit history.",
      ru: "Верните отмененное изменение обратно."
    }
  },
  {
    id: "ctrl-f",
    keys: ["Ctrl", "F"],
    title: {
      uz: "Qidirish (Find)",
      en: "Find text in document or page",
      ru: "Найти текст в документе или на странице"
    },
    description: {
      uz: "Hujjat, brauzer sahifasi yoki dastur ichida qidiruv panelini ochadi.",
      en: "Opens in-document search to find specific words or phrases.",
      ru: "Открывает панель поиска нужного слова или фразы в документе или на странице."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["find", "search", "text"],
    example: {
      uz: "Katta maqoladan kerakli so'zni topish uchun Ctrl + F bosing.",
      en: "Locate any keyword across long web articles.",
      ru: "Быстро найдите ключевое слово в длинной статье."
    }
  },
  {
    id: "ctrl-h",
    keys: ["Ctrl", "H"],
    title: {
      uz: "Almashtirish (Find and Replace)",
      en: "Find and Replace text",
      ru: "Найти и заменить текст"
    },
    description: {
      uz: "Matn muharrirlarida so'zni qidirib, uni boshqa so'zga almashtirish oynasini ochadi.",
      en: "Finds words and replaces them with new text across your file.",
      ru: "Открывает диалог поиска и массовой автозамены слов в документе."
    },
    category: "text-editing",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["replace", "find", "edit"],
    example: {
      uz: "Hujjatdagi eski sanalarni yangisiga ommaviy almashtirish.",
      en: "Replace outdated terms throughout a contract.",
      ru: "Замените устаревший термин во всем документе за секунду."
    }
  },
  {
    id: "ctrl-backspace",
    keys: ["Ctrl", "Backspace"],
    title: {
      uz: "Bitta butun so'zni chapdan o'chirish",
      en: "Delete previous word",
      ru: "Удалить слово слева от курсора"
    },
    description: {
      uz: "Harfma-harf emas, kursor chapidagi butun so'zni bir bosishda o'chiradi.",
      en: "Deletes the entire previous word instead of a single letter.",
      ru: "Удаляет целое слово перед курсором вместо одного символа."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["delete", "word", "typing", "speed"],
    example: {
      uz: "Yozish tezligini 3 baravarga oshirish uchun so'zni Ctrl + Backspace bilan o'chiring.",
      en: "Triple your typing editing speed by erasing whole words.",
      ru: "Ускорьте редактирование текста, стирая целые слова одним нажатием."
    }
  },
  {
    id: "ctrl-delete",
    keys: ["Ctrl", "Delete"],
    title: {
      uz: "Bitta butun so'zni o'ngdan o'chirish",
      en: "Delete next word",
      ru: "Удалить слово справа от курсора"
    },
    description: {
      uz: "Kursor o'ngida turgan keyingi butun so'zni o'chiradi.",
      en: "Erases the entire next word ahead of the text cursor.",
      ru: "Стирает следующее слово целиком справа от курсора."
    },
    category: "text-editing",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["delete", "word", "speed"],
    example: {
      uz: "Oldindagi keraksiz so'zni bir lahzada tozalash.",
      en: "Clear upcoming phrases swiftly.",
      ru: "Быстро удалите следующее слово в строке."
    }
  },
  {
    id: "ctrl-left-arrow",
    keys: ["Ctrl", "Left"],
    title: {
      uz: "Kursorni so'zma-so'z chapga o'tkazish",
      en: "Move cursor to the beginning of the previous word",
      ru: "Переместить курсор на слово влево"
    },
    description: {
      uz: "Kursorni bitta harf emas, so'zning boshiga sakratadi.",
      en: "Jumps the text cursor back by one entire word.",
      ru: "Перемещает текстовый курсор к началу предыдущего слова."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["navigation", "words", "cursor"],
    example: {
      uz: "Matn ichida sichqonchasiz tez harakatlanish.",
      en: "Navigate paragraphs fast without reaching for the mouse.",
      ru: "Быстро перемещайтесь по тексту без использования мыши."
    }
  },
  {
    id: "ctrl-right-arrow",
    keys: ["Ctrl", "Right"],
    title: {
      uz: "Kursorni so'zma-so'z o'ngga o'tkazish",
      en: "Move cursor to the beginning of the next word",
      ru: "Переместить курсор на слово вправо"
    },
    description: {
      uz: "Kursorni oldindagi keyingi so'zning boshiga o'tkazadi.",
      en: "Jumps the text cursor forward to the next word.",
      ru: "Перемещает курсор к началу следующего слова."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["navigation", "words", "cursor"],
    example: {
      uz: "So'zma-so'z oldinga o'tish.",
      en: "Skip forward across sentences quickly.",
      ru: "Быстро перескакивайте через слова вперед."
    }
  },
  {
    id: "ctrl-shift-arrows",
    keys: ["Ctrl", "Shift", "Left"],
    title: {
      uz: "Butun so'zni belgilash (Select word by word)",
      en: "Select text word by word",
      ru: "Выделять текст по словам"
    },
    description: {
      uz: "Harflab emas, butun so'zlarni ketma-ketlikda belgilab boradi.",
      en: "Highlights full words in blocks in the direction pressed.",
      ru: "Выделяет текст блоками целых слов в выбранном направлении."
    },
    category: "text-editing",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["select", "words", "highlight"],
    example: {
      uz: "Bir nechta so'zni bir necha millisekundda belgilash.",
      en: "Select three words cleanly in three keystrokes.",
      ru: "Выделите несколько слов тремя быстрыми нажатиями."
    }
  },
  {
    id: "win-period",
    keys: ["Win", "."],
    title: {
      uz: "Emoji va maxsus belgilar panelini ochish",
      en: "Open Emoji, Kaomoji, and Symbol panel",
      ru: "Открыть панель эмодзи, каомодзи и символов"
    },
    description: {
      uz: "Har qanday matn maydonida kulgichlar, belgilar (€, ™, §) va GIF-larni kiritish oynasini ochadi.",
      en: "Opens the Windows emoji picker, math/currency symbols, and GIF keyboard.",
      ru: "Открывает окно вставки эмодзи, математических и специальных символов (€, ©, ±) и GIF."
    },
    category: "text-editing",
    difficulty: "beginner",
    winVersion: "win10-11",
    tags: ["emoji", "symbols", "special-characters", "icons"],
    example: {
      uz: "Win + . bosing va matningizga qiziqarli emojilar yoki © belgisini qo'ying.",
      en: "Press Win + . to insert degrees, currency symbols, or emojis anywhere.",
      ru: "Нажмите Win + . для вставки знака градуса, валют или эмодзи."
    }
  },

  // 8. Search
  {
    id: "win-s",
    keys: ["Win", "S"],
    title: {
      uz: "Windows qidiruvini ochish (Search)",
      en: "Open Windows Search",
      ru: "Открыть поиск Windows"
    },
    description: {
      uz: "Ilovalar, fayllar, sozlamalar va internetdan qidirish panelini ochadi.",
      en: "Opens the search box to find files, programs, emails, and web queries.",
      ru: "Открывает панель поиска для файлов, программ, параметров и веб-запросов."
    },
    category: "search",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["search", "find", "cortana", "files"],
    example: {
      uz: "Win + S bosing va kerakli dastur nomini yozing.",
      en: "Press Win + S and start typing any keyword.",
      ru: "Нажмите Win + S и найдите любую утилиту или документ."
    }
  },
  {
    id: "f3-search",
    keys: ["F3"],
    title: {
      uz: "File Explorer yoki brauzerda qidiruvni boshlash",
      en: "Search for a file or folder in File Explorer",
      ru: "Начать поиск в Проводнике или браузере"
    },
    description: {
      uz: "Qidiruv maydoniga to'g'ridan-to'g'ri fokus beradi.",
      en: "Places the cursor straight into the search box.",
      ru: "Устанавливает фокус ввода в строку поиска."
    },
    category: "search",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["search", "f3", "files"],
    example: {
      uz: "Katta papkada fayl nomini qidirish uchun F3 bosing.",
      en: "Press F3 in any folder to filter contents instantly.",
      ru: "Нажмите F3 в любой папке для быстрого поиска файлов."
    }
  },

  // 9. Settings & Notifications
  {
    id: "win-i",
    keys: ["Win", "I"],
    title: {
      uz: "Windows Sozlamalarini (Settings) ochish",
      en: "Open Windows Settings",
      ru: "Открыть «Параметры» Windows"
    },
    description: {
      uz: "Tizim, tarmoq, displey, ilovalar va yangilanishlar sozlamalari markazini ochadi.",
      en: "Directly opens the Windows Settings app.",
      ru: "Мгновенно открывает главное приложение «Параметры» Windows."
    },
    category: "settings",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["settings", "preferences", "system", "control"],
    example: {
      uz: "Wi-Fi, Bluetooth yoki displeyni sozlash uchun Win + I bosing.",
      en: "Press Win + I to change display scaling, Bluetooth, or Wi-Fi.",
      ru: "Нажмите Win + I для настройки сети, звука или экрана."
    }
  },
  {
    id: "win-a",
    keys: ["Win", "A"],
    title: {
      uz: "Tezkor sozlamalar panelini ochish (Quick Settings)",
      en: "Open Quick Settings panel",
      ru: "Открыть панель быстрых настроек"
    },
    description: {
      uz: "Wi-Fi, Bluetooth, ovoz balandligi, ekran yorqinligi va tungi rejim panelini chiqaradi.",
      en: "Opens the flyout for Wi-Fi toggles, sound slider, brightness, and airplane mode.",
      ru: "Открывает панель быстрых переключателей: Wi-Fi, звук, яркость, Bluetooth."
    },
    category: "settings",
    difficulty: "beginner",
    winVersion: "win11",
    tags: ["quick-settings", "wifi", "sound", "bluetooth"],
    example: {
      uz: "Quloqchinni ulash yoki ovozni tezda pasaytirish.",
      en: "Adjust volume or toggle Wi-Fi in one keystroke.",
      ru: "Регулируйте громкость или подключайте наушники за секунду."
    }
  },
  {
    id: "win-n",
    keys: ["Win", "N"],
    title: {
      uz: "Bildirishnomalar va Taqvim panelini ochish",
      en: "Open Notification center and Calendar",
      ru: "Открыть центр уведомлений и календарь"
    },
    description: {
      uz: "Windows 11-da o'tkazib yuborilgan xabarlar va oylik taqvimni ko'rsatadi.",
      en: "Displays your recent notifications and monthly calendar flyout in Windows 11.",
      ru: "Показывает панель пропущенных уведомлений и календарь в Windows 11."
    },
    category: "settings",
    difficulty: "beginner",
    winVersion: "win11",
    tags: ["notifications", "calendar", "alerts", "win11"],
    example: {
      uz: "Kelgan so'nggi xabarlarni tekshirish.",
      en: "Check what alerts you missed while away.",
      ru: "Проверьте входящие уведомления или дату."
    }
  },
  {
    id: "win-k",
    keys: ["Win", "K"],
    title: {
      uz: "Simsiz displey va audio qurilmalarga ulanish (Cast)",
      en: "Open Cast quick settings",
      ru: "Открыть меню подключения беспроводных дисплеев («Передать»)"
    },
    description: {
      uz: "Smart TV yoki simsiz proyektorlarga ekranni uzatish oynasini ochadi.",
      en: "Connects to wireless Miracast displays, smart TVs, or Bluetooth audio.",
      ru: "Открывает панель трансляции экрана на телевизор или беспроводной монитор."
    },
    category: "settings",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["cast", "miracast", "display", "tv", "wireless"],
    example: {
      uz: "Taqdimotni televizorga simsiz uzatish uchun Win + K bosing.",
      en: "Mirror your screen to a conference room TV effortlessly.",
      ru: "Транслируйте экран на ТВ или проектор без проводов."
    }
  },
  {
    id: "win-p",
    keys: ["Win", "P"],
    title: {
      uz: "Proyektor va monitor rejimini tanlash (Project)",
      en: "Choose a presentation display mode",
      ru: "Выбрать режим проецирования экрана"
    },
    description: {
      uz: "Ekranni kengaytirish (Extend), takrorlash (Duplicate) yoki faqat bitta ekranni qoldirish.",
      en: "Switches between PC Screen Only, Duplicate, Extend, or Second Screen Only.",
      ru: "Переключает режимы: только экран компьютера, дублирование, расширение."
    },
    category: "settings",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["project", "monitors", "extend", "duplicate"],
    example: {
      uz: "Ikkinchi monitor ulanganda ekranni kengaytirish uchun Win + P bosing.",
      en: "Press Win + P to switch to 'Extend' mode for multi-monitor work.",
      ru: "Нажмите Win + P для расширения рабочего стола на второй монитор."
    }
  },

  // 10. Taskbar
  {
    id: "win-1-9",
    keys: ["Win", "1...9"],
    title: {
      uz: "Vazifalar panelidagi raqamli ilovani ochish/faollashtirish",
      en: "Launch or switch to app pinned at position # on taskbar",
      ru: "Запустить или открыть приложение под номером # на панели задач"
    },
    description: {
      uz: "Taskbar-da chapdan o'ngga 1 dan 9 gacha turgan ilovalarni bir zumda chaqiradi.",
      en: "Launches the app pinned at position 1 to 9, or switches to it if already running.",
      ru: "Запускает или разворачивает программу, закрепленную на позиции от 1 до 9."
    },
    category: "taskbar",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["taskbar", "number", "launch", "speed"],
    example: {
      uz: "Agar brauzer birinchi o'rinda tursa, Win + 1 uni darhol ochadi.",
      en: "Pin your browser as 1st item and press Win + 1 to open it instantly.",
      ru: "Закрепите браузер первым и нажимайте Win + 1 для его мгновенного вызова."
    }
  },
  {
    id: "win-shift-1-9",
    keys: ["Win", "Shift", "1...9"],
    title: {
      uz: "Ilovaning yangi nusxasini ochish",
      en: "Open a new instance of the app at position #",
      ru: "Открыть новый экземпляр программы на позиции #"
    },
    description: {
      uz: "Ilova allaqachon ochiq bo'lsa ham, uning yangi mustaqil oynasini ishga tushiradi.",
      en: "Launches a brand-new separate window for the app at that taskbar position.",
      ru: "Запускает новое отдельное окно приложения, закрепленного на этой позиции."
    },
    category: "taskbar",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["taskbar", "instance", "new"],
    example: {
      uz: "Yangi alohida brauzer oynasini ochish uchun Win + Shift + 1 bosing.",
      en: "Open a fresh browser profile window with Win + Shift + 1.",
      ru: "Откройте новое чистое окно браузера сочетанием Win + Shift + 1."
    }
  },
  {
    id: "win-t",
    keys: ["Win", "T"],
    title: {
      uz: "Vazifalar panelidagi ilovalar bo'ylab sikl aylanish",
      en: "Cycle through apps on the taskbar",
      ru: "Перемещение по значкам панели задач"
    },
    description: {
      uz: "Sichqonchasiz Taskbar-dagi ilovalar ustida yurish va Enter bilan ochish.",
      en: "Sets focus to the taskbar and cycles through running applications.",
      ru: "Устанавливает фокус на панель задач и перемещается по приложениям."
    },
    category: "taskbar",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["taskbar", "keyboard-navigation", "focus"],
    example: {
      uz: "Sichqoncha ishlamay qolganda Taskbar-dagi ilovani ochish.",
      en: "Navigate taskbar apps completely hands-free.",
      ru: "Управляйте панелью задач полностью без мыши."
    }
  },
  {
    id: "win-b",
    keys: ["Win", "B"],
    title: {
      uz: "Tizim treyiga (System Tray / Bildirishnomalar sohasi) fokus berish",
      en: "Set focus to the notification area / system tray",
      ru: "Переместить фокус в область уведомлений (системный трей)"
    },
    description: {
      uz: "Soat yonidagi yashirin piktogrammalar va fon ilovalariga klaviaturada o'tish.",
      en: "Highlights the system tray icons near the clock for keyboard selection.",
      ru: "Выделяет значки в трее возле часов для выбора с клавиатуры."
    },
    category: "taskbar",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["tray", "system-tray", "notification-area"],
    example: {
      uz: "Win + B bosing, so'ng Enter bosib treydagi yashirin dasturni oching.",
      en: "Press Win + B and hit Enter to access background utilities.",
      ru: "Нажмите Win + B и Enter для доступа к фоновым значкам."
    }
  },

  // 11. Accessibility
  {
    id: "win-plus",
    keys: ["Win", "+"],
    title: {
      uz: "Ekran kattalashtirgichini (Magnifier) yoqish va yaqinlashtirish",
      en: "Turn on Magnifier and zoom in",
      ru: "Включить экранную лупу и приблизить"
    },
    description: {
      uz: "Kichik matnlar yoki detallarni ko'rish uchun ekranni masshtabini oshiradi.",
      en: "Activates the Windows Magnifier tool and increases screen zoom level.",
      ru: "Включает инструмент «Экранная лупа» и увеличивает масштаб экрана."
    },
    category: "accessibility",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["magnifier", "zoom", "vision", "accessibility"],
    example: {
      uz: "Kichik shriftlarni yaqindan o'qish uchun Win va + bosing.",
      en: "Zoom into fine details during design reviews.",
      ru: "Приближайте мелкий текст или графику во время работы."
    }
  },
  {
    id: "win-minus",
    keys: ["Win", "-"],
    title: {
      uz: "Kattalashtirgichda uzoqlashtirish (Zoom out)",
      en: "Zoom out in Magnifier",
      ru: "Уменьшить масштаб в экранной лупе"
    },
    description: {
      uz: "Ekran masshtabini me'yoriy o'lchamga qaytaradi.",
      en: "Decreases magnification level back toward standard resolution.",
      ru: "Уменьшает масштаб экранной лупы обратно к стандартному."
    },
    category: "accessibility",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["zoom-out", "magnifier", "accessibility"],
    example: {
      uz: "Masshtabni asl holiga qaytarish.",
      en: "Return to normal view after inspecting details.",
      ru: "Вернитесь к стандартному масштабу после просмотра деталей."
    }
  },
  {
    id: "win-esc",
    keys: ["Win", "Esc"],
    title: {
      uz: "Kattalashtirgichni yopish (Close Magnifier)",
      en: "Close Magnifier",
      ru: "Закрыть экранную лупу"
    },
    description: {
      uz: "Magnifier vositasini to'liq o'chiradi va ekranni 100% holatiga tushiradi.",
      en: "Exits Magnifier and restores normal display scale.",
      ru: "Полностью отключает экранную лупу и возвращает 100% масштаб."
    },
    category: "accessibility",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["exit", "magnifier", "accessibility"],
    example: {
      uz: "Yaqinlashtirish rejimidan darhol chiqish.",
      en: "Quickly exit zoom mode.",
      ru: "Быстро выйдите из режима приближения."
    }
  },
  {
    id: "win-ctrl-enter",
    keys: ["Win", "Ctrl", "Enter"],
    title: {
      uz: "Ekran suxandoni (Narrator) ni yoqish/o'chirish",
      en: "Turn Narrator on or off",
      ru: "Включить или выключить «Экранный диктор»"
    },
    description: {
      uz: "Ekranda ko'ringan barcha matn va tugmalarni ovoz chiqarib o'qib beruvchi tizim.",
      en: "Toggles the screen reader that vocalizes text and interface elements.",
      ru: "Включает или выключает встроенную читалку с экрана вслух."
    },
    category: "accessibility",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["narrator", "screen-reader", "speech", "accessibility"],
    example: {
      uz: "Ko'rish imkoniyati cheklangan foydalanuvchilar uchun qulay ovozli yordamchi.",
      en: "Toggle screen audio feedback for visually impaired users.",
      ru: "Полезный инструмент для слабовидящих пользователей."
    }
  },
  {
    id: "win-u",
    keys: ["Win", "U"],
    title: {
      uz: "Maxsus imkoniyatlar (Accessibility) sozlamalarini ochish",
      en: "Open Accessibility Settings",
      ru: "Открыть параметры специальных возможностей"
    },
    description: {
      uz: "Shrift o'lchami, kursor qalinligi, kontrast mavzular va ovozli boshqaruv sozlamalari.",
      en: "Opens Settings directly to Accessibility options including text size, contrast, and audio.",
      ru: "Открывает раздел специальных возможностей: размер шрифта, контрастность, мышь."
    },
    category: "accessibility",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["accessibility", "text-size", "contrast", "settings"],
    example: {
      uz: "Tizim shriftlarini kattalashtirish uchun Win + U bosing.",
      en: "Quickly increase system-wide font size.",
      ru: "Увеличьте системный размер шрифта для комфортного чтения."
    }
  },
  {
    id: "win-h",
    keys: ["Win", "H"],
    title: {
      uz: "Ovoz bilan yozish (Voice Typing / Diktovka)",
      en: "Launch Voice Typing / Dictation",
      ru: "Запустить голосовой ввод (диктовать текст)"
    },
    description: {
      uz: "Mikrofon orqali gapirgan so'zlaringizni matnga aylantiradi.",
      en: "Launches speech-to-text voice typing with automatic punctuation.",
      ru: "Запускает систему распознавания речи для голосового набора текста."
    },
    category: "accessibility",
    difficulty: "beginner",
    winVersion: "win10-11",
    tags: ["voice", "dictation", "speech-to-text", "microphone"],
    example: {
      uz: "Uzun xabarni qo'lda yozmasdan gapirib kiritish.",
      en: "Dictate emails hands-free with high accuracy.",
      ru: "Диктуйте длинные письма голосом без клавиатуры."
    }
  },

  // 12. Command Prompt & Terminal
  {
    id: "ctrl-shift-t-terminal",
    keys: ["Ctrl", "Shift", "T"],
    title: {
      uz: "Windows Terminal-da yangi vkladka ochish",
      en: "Open a new tab in Windows Terminal",
      ru: "Открыть новую вкладку в Windows Terminal"
    },
    description: {
      uz: "Standart profil (masalan, PowerShell yoki WSL) bilan yangi konsol vkladkasini ochadi.",
      en: "Opens a fresh tab with your default shell profile in Windows Terminal.",
      ru: "Открывает новую вкладку с профилем по умолчанию в Windows Terminal."
    },
    category: "terminal",
    difficulty: "intermediate",
    winVersion: "win10-11",
    tags: ["terminal", "tab", "wsl", "powershell", "dev"],
    example: {
      uz: "Yangi server yoki buyruqni alohida vkladkada yurgizish.",
      en: "Run parallel build tasks across terminal tabs.",
      ru: "Запускайте параллельные процессы в разных вкладках терминала."
    }
  },
  {
    id: "alt-shift-plus-terminal",
    keys: ["Alt", "Shift", "+"],
    title: {
      uz: "Terminal oynasini gorizontal bo'lish (Split Horizontal)",
      en: "Split terminal pane horizontally",
      ru: "Разделить панель терминала по горизонтали"
    },
    description: {
      uz: "Bitta oyna ichida ekranni ikkiga bo'lib, ikkinchi konsolni yonma-yon ochadi.",
      en: "Splits the focused pane horizontally into two side-by-side terminal panes.",
      ru: "Делит текущую вкладку терминала на две параллельные панели."
    },
    category: "terminal",
    difficulty: "advanced",
    winVersion: "win10-11",
    tags: ["terminal", "split", "panes", "developer"],
    example: {
      uz: "Bir tomonda loglarni kuzatib, ikkinchi tomonda buyruq kiritish.",
      en: "Monitor logs in one pane while typing commands in the other.",
      ru: "Смотрите логи в одной панели, вводя команды в другой."
    }
  },
  {
    id: "alt-shift-minus-terminal",
    keys: ["Alt", "Shift", "-"],
    title: {
      uz: "Terminal oynasini vertikal bo'lish (Split Vertical)",
      en: "Split terminal pane vertically",
      ru: "Разделить панель терминала по вертикали"
    },
    description: {
      uz: "Terminal oynasini yuqori va pastki qismlarga ajratadi.",
      en: "Splits the current pane vertically into top and bottom console panes.",
      ru: "Разделяет панель терминала на верхнюю и нижнюю области."
    },
    category: "terminal",
    difficulty: "advanced",
    winVersion: "win10-11",
    tags: ["terminal", "split", "vertical", "developer"],
    example: {
      uz: "Docker konteynerlarini kuzatishda qulay vertikal taqsimot.",
      en: "Run top/bottom command split layouts.",
      ru: "Удобно для отслеживания процессов Docker."
    }
  },
  {
    id: "ctrl-shift-w-terminal",
    keys: ["Ctrl", "Shift", "W"],
    title: {
      uz: "Terminaldagi faol panelni yopish (Close Pane)",
      en: "Close focused pane in Windows Terminal",
      ru: "Закрыть активную панель в Windows Terminal"
    },
    description: {
      uz: "Bo'lingan ko'p panelli terminaldagi aynan faol bo'lgan qismini yopadi.",
      en: "Closes solely the currently active pane in Windows Terminal.",
      ru: "Закрывает только текущую разделенную панель в терминале."
    },
    category: "terminal",
    difficulty: "intermediate",
    winVersion: "win10-11",
    tags: ["terminal", "close", "pane", "dev"],
    example: {
      uz: "Tugallangan konsol panelini yopish.",
      en: "Dismiss an inactive console pane quickly.",
      ru: "Закройте завершившийся сеанс в терминале."
    }
  },
  {
    id: "ctrl-c-terminal",
    keys: ["Ctrl", "C"],
    title: {
      uz: "Terminalda ishlayotgan jarayonni to'xtatish (SIGINT)",
      en: "Interrupt / Cancel running process in Terminal",
      ru: "Прервать выполнение текущей команды в консоли"
    },
    description: {
      uz: "Cheksiz sikl yoki ishlayotgan server jarayonini majburan to'xtatish signali yuboradi.",
      en: "Sends a SIGINT interrupt signal to cancel a long-running command or dev server.",
      ru: "Отправляет сигнал SIGINT для остановки зависшего скрипта или сервера разработки."
    },
    category: "terminal",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["sigint", "cancel", "process", "kill", "terminal"],
    example: {
      uz: "npm run dev serverini to'xtatish uchun terminalda Ctrl + C bosing.",
      en: "Halt local dev servers gracefully.",
      ru: "Остановите локальный сервер разработки нажатием Ctrl + C."
    }
  },

  // 13. Developer & Productivity
  {
    id: "f12-devtools",
    keys: ["F12"],
    title: {
      uz: "Brauzer Dasturchi vositalarini (DevTools) ochish",
      en: "Open Developer Tools in browsers",
      ru: "Открыть инструменты разработчика (DevTools)"
    },
    description: {
      uz: "DOM elementlarini ko'rish, konsol xatolarini tahlil qilish va tarmoq so'rovlarini tekshirish paneli.",
      en: "Opens inspect element, JavaScript console, and network debugger in all browsers.",
      ru: "Открывает инспектор элементов, консоль JavaScript и отладчик сети во всех браузерах."
    },
    category: "productivity",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["devtools", "inspect", "console", "web", "developer"],
    example: {
      uz: "Sayt kodini yoki xatolarini ko'rish uchun F12 bosing.",
      en: "Debug web styling or API responses on the fly.",
      ru: "Проверьте верстку страницы или ошибки в консоли."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-shift-i-devtools",
    keys: ["Ctrl", "Shift", "I"],
    title: {
      uz: "Dasturchi vositalarini muqobil ochish (DevTools)",
      en: "Alternative shortcut to open Developer Tools",
      ru: "Альтернативная комбинация вызова DevTools"
    },
    description: {
      uz: "F-tugmalari qulflangan noutbuklarda DevTools-ni ochishning eng mashhur kombinatsiyasi.",
      en: "Standard cross-platform chord to trigger browser Developer Tools.",
      ru: "Универсальное сочетание для вызова панели разработчика, если клавиша F12 занята."
    },
    category: "productivity",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["devtools", "inspect", "developer"],
    example: {
      uz: "Noutbukda Fn tugmasisiz DevTools-ni ochish.",
      en: "Reliably open developer console on compact laptops.",
      ru: "Надежно открывайте консоль разработчика на компактных клавиатурах."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-p-vscode",
    keys: ["Ctrl", "P"],
    title: {
      uz: "Fayl nomi bo'yicha tezkor ochish (Quick Open in VS Code)",
      en: "Quick Open file in code editors / VS Code",
      ru: "Быстрый переход к файлу по имени в редакторах кода"
    },
    description: {
      uz: "Loyiha ichidagi istalgan faylni nomi bo'yicha darhol topib ochadi.",
      en: "Fuzzy searches and opens any file across codebases without navigating folders.",
      ru: "Мгновенный нечеткий поиск и открытие любого файла в проекте без поиска по папкам."
    },
    category: "productivity",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["vscode", "quick-open", "developer", "files"],
    example: {
      uz: "VS Code-da Ctrl + P bosing va 'App.tsx' yozing.",
      en: "Jump instantly to any component file in VS Code.",
      ru: "Нажмите Ctrl + P в VS Code и введите имя нужного компонента."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-shift-p-vscode",
    keys: ["Ctrl", "Shift", "P"],
    title: {
      uz: "Buyruqlar palitrasi (Command Palette in VS Code)",
      en: "Command Palette in code editors / VS Code",
      ru: "Палитра команд в редакторах кода (VS Code)"
    },
    description: {
      uz: "Dasturning barcha yashirin buyruqlari, kengaytmalari va sozlamalarini qidirib ishga tushiradi.",
      en: "Provides instant keyboard access to all editor commands, plugins, and settings.",
      ru: "Предоставляет доступ ко всем командам, плагинам и настройкам редактора."
    },
    category: "productivity",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["vscode", "command-palette", "editor", "developer"],
    example: {
      uz: "Format Document yoki Git buyruqlarini chaqirish.",
      en: "Trigger formatting or git actions without touching menus.",
      ru: "Форматируйте код или вызывайте команды Git без мыши."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-tilde-vscode",
    keys: ["Ctrl", "`"],
    title: {
      uz: "Ichki terminalni ko'rsatish/yashirish (Toggle Terminal in VS Code)",
      en: "Toggle integrated terminal in code editors",
      ru: "Показать/скрыть встроенный терминал в VS Code"
    },
    description: {
      uz: "Kod tahrirlash oynasining pastida o'rnatilgan konsolni bir zumda ochadi yoki berkitadi.",
      en: "Toggles the built-in terminal drawer below your code view.",
      ru: "Открывает или прячет встроенную консоль прямо под окном с кодом."
    },
    category: "productivity",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["terminal", "vscode", "editor", "toggle"],
    example: {
      uz: "Kod yozayotib konsolni tezda tekshirib yana yashirish.",
      en: "Toggle terminal quickly while testing code.",
      ru: "Быстро проверяйте вывод тестов и скрывайте консоль."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-slash-comment",
    keys: ["Ctrl", "/"],
    title: {
      uz: "Qatorni izohga olish yoki izohdan chiqarish (Toggle Comment)",
      en: "Toggle line comment in code editors",
      ru: "Закомментировать или раскомментировать строку кода"
    },
    description: {
      uz: "Belgilangan kod qatorlarini bir lahzada kommentariyaga aylantiradi.",
      en: "Comments out or uncomments the selected lines in the syntax of the current language.",
      ru: "Превращает выделенные строки кода в комментарий или возвращает их в рабочий код."
    },
    category: "productivity",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["code", "comment", "editor", "syntax"],
    example: {
      uz: "Kodning bir qismini vaqtincha o'chirib turish uchun Ctrl + / bosing.",
      en: "Quickly disable code lines while testing bug fixes.",
      ru: "Временно отключите фрагмент кода во время тестирования."
    },
    applicationSpecific: true
  },

  // 14. Browser-related common shortcuts
  {
    id: "ctrl-t-browser",
    keys: ["Ctrl", "T"],
    title: {
      uz: "Brauzerda yangi vkladka ochish",
      en: "Open a new tab in browser",
      ru: "Открыть новую вкладку в браузере"
    },
    description: {
      uz: "Barcha asosiy brauzerlarda (Chrome, Edge, Firefox) yangi internet sahifasi vkladkasini ochadi.",
      en: "Creates a new browsing tab and focuses the search address bar.",
      ru: "Создает новую вкладку и ставит фокус в адресную строку."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["browser", "tab", "web", "internet"],
    example: {
      uz: "Yangi ma'lumot qidirish uchun Ctrl + T bosing.",
      en: "Press Ctrl + T to begin a fresh web search.",
      ru: "Нажмите Ctrl + T для нового поиска в интернете."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-shift-t-browser",
    keys: ["Ctrl", "Shift", "T"],
    title: {
      uz: "Tasodifan yopilgan vkladkani qayta ochish (Reopen Closed Tab)",
      en: "Reopen the last closed tab in browser",
      ru: "Восстановить последнюю закрытую вкладку в браузере"
    },
    description: {
      uz: "Adashib yopib yuborilgan oxirgi saytni tarixi va joylashuvi bilan qayta tiklaydi.",
      en: "Brings back the most recently closed tab, complete with browsing state.",
      ru: "Возвращает недавно закрытую вкладку со всей историей переходов."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["browser", "restore", "undo", "tabs"],
    example: {
      uz: "Kerakli maqola yopilib ketganda Ctrl + Shift + T bosing — mo''jizadek qaytadi.",
      en: "Accidentally closed an essential page? Reopen it instantly.",
      ru: "Случайно закрыли нужную страницу? Ctrl + Shift + T вернет её."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-w-browser",
    keys: ["Ctrl", "W"],
    title: {
      uz: "Brauzerning joriy vkladkasini yopish",
      en: "Close current tab in browser",
      ru: "Закрыть текущую вкладку в браузере"
    },
    description: {
      uz: "Faqat hozir ochiq turgan vkladkani yopadi, boshqa vkladkalar saqlanib qoladi.",
      en: "Closes the focused browser tab without closing the overall window.",
      ru: "Закрывает активную вкладку без закрытия самого браузера."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["browser", "close", "tabs"],
    example: {
      uz: "Ortiqcha vkladkalarni tezda tozalash.",
      en: "Dismiss tabs rapidly as you finish reading them.",
      ru: "Быстро закрывайте прочитанные вкладки."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-shift-n-incognito",
    keys: ["Ctrl", "Shift", "N"],
    title: {
      uz: "Inkognito / Shaxsiy ko'rish oynasini ochish (Chrome / Edge)",
      en: "Open a new Incognito / InPrivate window",
      ru: "Открыть новое окно в режиме инкогнито / InPrivate"
    },
    description: {
      uz: "Tarix va kesh saqlanmaydigan maxfiy brauzer oynasini ochadi.",
      en: "Opens a private browsing session that does not save history, cookies, or form data.",
      ru: "Открывает приватное окно, в котором не сохраняются куки и история посещений."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["incognito", "private", "browser", "privacy"],
    example: {
      uz: "Boshqa hisobga kirish yoki toza keshda saytni tekshirish.",
      en: "Test website logins without clearing main browser cookies.",
      ru: "Войдите во второй аккаунт без выхода из основного."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-tab-browser",
    keys: ["Ctrl", "Tab"],
    title: {
      uz: "Keyingi vkladkaga o'tish (Next Tab)",
      en: "Switch to next tab in browser",
      ru: "Перейти на следующую вкладку в браузере"
    },
    description: {
      uz: "Brauzerda o'ng tomondagi navbatdagi vkladkaga qulay o'tadi.",
      en: "Cycles forward through open tabs left-to-right.",
      ru: "Переключает на соседнюю вкладку справа."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["tabs", "navigation", "browser"],
    example: {
      uz: "Vkladkalar orasida sichqonchasiz o'tish.",
      en: "Browse through research tabs efficiently.",
      ru: "Перелистывайте открытые вкладки без мыши."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-shift-tab-browser",
    keys: ["Ctrl", "Shift", "Tab"],
    title: {
      uz: "Oldingi vkladkaga o'tish (Previous Tab)",
      en: "Switch to previous tab in browser",
      ru: "Перейти на предыдущую вкладку в браузере"
    },
    description: {
      uz: "Brauzerda chap tomondagi oldingi vkladkaga qaytadi.",
      en: "Cycles backward through open tabs right-to-left.",
      ru: "Переключает на соседнюю вкладку слева."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["tabs", "navigation", "browser"],
    example: {
      uz: "Oldingi ochilgan sahifaga bir harakatda qaytish.",
      en: "Step back to your earlier tab.",
      ru: "Вернитесь к предыдущей открытой вкладке."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-plus-zoom",
    keys: ["Ctrl", "+"],
    title: {
      uz: "Sahifa masshtabini kattalashtirish (Zoom In)",
      en: "Zoom in on web page or document",
      ru: "Увеличить масштаб страницы"
    },
    description: {
      uz: "Saytdagi matn va tasvirlar o'lchamini kattalashtiradi.",
      en: "Increases text and visual zoom level on the active page.",
      ru: "Увеличивает размер текста и элементов на веб-странице."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["zoom", "scale", "browser", "readability"],
    example: {
      uz: "Kichik yozuvli saytlarni qulay o'qish uchun masshtabni oshirish.",
      en: "Enlarge fine print easily.",
      ru: "Увеличьте мелкий шрифт на сайтах для удобного чтения."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-minus-zoom",
    keys: ["Ctrl", "-"],
    title: {
      uz: "Sahifa masshtabini kichraytirish (Zoom Out)",
      en: "Zoom out on web page",
      ru: "Уменьшить масштаб страницы"
    },
    description: {
      uz: "Sayt elementlarini kichraytirib, ekranga ko'proq ma'lumot sig'diradi.",
      en: "Decreases page zoom level to fit more content on display.",
      ru: "Уменьшает масштаб страницы, позволяя вместить больше данных."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["zoom", "scale", "browser"],
    example: {
      uz: "Katta jadvallarni bir ekranda to'liq ko'rish.",
      en: "View large dashboards or tables at a glance.",
      ru: "Уместите широкую таблицу на одном экране."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-zero-zoom",
    keys: ["Ctrl", "0"],
    title: {
      uz: "Masshtabni asl holatiga qaytarish (Reset Zoom to 100%)",
      en: "Reset zoom level to default 100%",
      ru: "Сбросить масштаб страницы на стандартные 100%"
    },
    description: {
      uz: "O'zgartirilgan sahifa o'lchamini darhol standart 100% holatiga tiklaydi.",
      en: "Immediately resets page zoom ratio back to default 100%.",
      ru: "Мгновенно сбрасывает масштаб страницы обратно на стандартные 100%."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["reset", "zoom", "scale"],
    example: {
      uz: "Noto'g'ri o'zgargan masshtabni darhol to'g'rilash.",
      en: "Fix distorted zoom in one keystroke.",
      ru: "Быстро восстановите нормальный масштаб страницы."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-d-bookmark",
    keys: ["Ctrl", "D"],
    title: {
      uz: "Joriy sahifani xatcho'plarga (Bookmarks) saqlash",
      en: "Bookmark current page in browser",
      ru: "Добавить текущую страницу в закладки"
    },
    description: {
      uz: "Foydali sayt manzilini brauzer xatcho'plariga tezda qo'shish muloqot oynasini ochadi.",
      en: "Saves the current URL into browser favorites / bookmarks.",
      ru: "Сохраняет адрес текущей страницы в закладки браузера."
    },
    category: "browser",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["bookmark", "favorite", "browser", "save"],
    example: {
      uz: "Muhim maqolani keyinroq o'qish uchun saqlab qo'yish.",
      en: "Save informative resources with Ctrl + D.",
      ru: "Сохраните полезную статью в закладки сочетанием Ctrl + D."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-shift-delete-browser",
    keys: ["Ctrl", "Shift", "Delete"],
    title: {
      uz: "Brauzer tarixini tozalash (Clear Browsing Data)",
      en: "Open Clear Browsing Data dialog",
      ru: "Открыть окно очистки истории и кэша браузера"
    },
    description: {
      uz: "Kesh, cookie va ko'rish tarixini o'chirish oynasini darhol ochadi.",
      en: "Opens dialog to purge cookies, browsing cache, and recent history.",
      ru: "Мгновенно вызывает диалог удаления истории, кэша и файлов cookie."
    },
    category: "browser",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["cache", "cookies", "history", "privacy", "browser"],
    example: {
      uz: "Sayt yangilanishi ko'rinmayotganda keshni tezda tozalash.",
      en: "Clear stale website cache during web development.",
      ru: "Очистите кэш при обновлении сайта."
    },
    applicationSpecific: true
  },

  // 15. Microsoft Office & Documents
  {
    id: "ctrl-s-save",
    keys: ["Ctrl", "S"],
    title: {
      uz: "Hujjatni saqlash (Save)",
      en: "Save current document or project",
      ru: "Сохранить текущий документ или проект"
    },
    description: {
      uz: "Word, Excel, kod muharriri yoki boshqa dasturda kiritilgan barcha o'zgarishlarni xotiraga yozadi.",
      en: "Saves changes to disk in documents, spreadsheets, or code editors.",
      ru: "Сохраняет изменения в файле, документе Word, таблице Excel или редакторе кода."
    },
    category: "office",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["save", "disk", "document", "office", "safety"],
    example: {
      uz: "Mehnat yo'qolmasligi uchun har bir necha daqiqada Ctrl + S bosing.",
      en: "Press Ctrl + S instinctively to never lose writing work.",
      ru: "Нажимайте Ctrl + S регулярно, чтобы не потерять важные правки."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-p-print",
    keys: ["Ctrl", "P"],
    title: {
      uz: "Chop etish (Print)",
      en: "Print current document or web page",
      ru: "Печать текущего документа или веб-страницы"
    },
    description: {
      uz: "Printer sozlamalarini va PDF qilib saqlash oynasini ochadi.",
      en: "Opens the print configuration dialog or saves as PDF.",
      ru: "Открывает диалоговое окно печати или сохранения страницы в PDF."
    },
    category: "office",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["print", "pdf", "paper", "office"],
    example: {
      uz: "Hujjatni qog'ozga chiqarish yoki PDF yaratish.",
      en: "Save online receipts as clean PDF files.",
      ru: "Сохраняйте электронные чеки в удобный PDF формат."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-b-bold",
    keys: ["Ctrl", "B"],
    title: {
      uz: "Qalin shrift (Bold)",
      en: "Toggle bold text formatting",
      ru: "Сделать текст полужирным (Bold)"
    },
    description: {
      uz: "Belgilangan matnni qalin qilib ajratib ko'rsatadi.",
      en: "Applies or removes bold weight on highlighted text.",
      ru: "Делает выделенный фрагмент текста полужирным или снимает выделение."
    },
    category: "office",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["bold", "format", "word", "text"],
    example: {
      uz: "Sarlavhalarni qalinlashtirish uchun Ctrl + B bosing.",
      en: "Make section headers stand out easily.",
      ru: "Быстро выделяйте важные заголовки в тексте."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-i-italic",
    keys: ["Ctrl", "I"],
    title: {
      uz: "Kursiv shrift (Italic)",
      en: "Toggle italic text formatting",
      ru: "Сделать текст курсивным (Italic)"
    },
    description: {
      uz: "Matnni qiya (kursiv) uslubga o'tkazadi.",
      en: "Applies or removes italic styling on selected words.",
      ru: "Применяет или отменяет курсивное начертание для выделенного текста."
    },
    category: "office",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["italic", "format", "word"],
    example: {
      uz: "Iqtiboslar yoki atamalarni kursiv bilan yozish.",
      en: "Format citations or foreign phrases in italic.",
      ru: "Оформляйте цитаты и термины курсивом."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-u-underline",
    keys: ["Ctrl", "U"],
    title: {
      uz: "Tagiga chizilgan matn (Underline)",
      en: "Toggle underline formatting",
      ru: "Подчеркнуть текст (Underline)"
    },
    description: {
      uz: "Tanlangan so'zlar tagiga chiziq tortadi.",
      en: "Adds or removes an underline beneath highlighted text.",
      ru: "Подчеркивает выделенный текст горизонтальной линией."
    },
    category: "office",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["underline", "format", "word"],
    example: {
      uz: "Muhim e'tiborni qaratuvchi so'zlarning tagiga chizish.",
      en: "Underline crucial keywords in contracts.",
      ru: "Подчеркивайте ключевые моменты в документах."
    },
    applicationSpecific: true
  },
  {
    id: "ctrl-k-hyperlink",
    keys: ["Ctrl", "K"],
    title: {
      uz: "Havola (Hyperlink) qo'shish",
      en: "Insert or edit a hyperlink",
      ru: "Вставить или изменить гиперссылку"
    },
    description: {
      uz: "Office hujjatlarida, slaydlarda yoki Notion-da matnga veb-havola biriktirish oynasini ochadi.",
      en: "Inserts a web link onto the currently selected text.",
      ru: "Прикрепляет ссылку на сайт к выделенному слову или фразе."
    },
    category: "office",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["link", "url", "office", "hyperlink"],
    example: {
      uz: "So'zga sayt manzilini ulash uchun Ctrl + K bosing.",
      en: "Turn plain words into clickable references.",
      ru: "Превратите обычный текст в кликабельную ссылку."
    },
    applicationSpecific: true
  },
  {
    id: "f7-spellcheck",
    keys: ["F7"],
    title: {
      uz: "Imlo va grammatikani tekshirish (Spell Check in Office)",
      en: "Run spelling and grammar check",
      ru: "Запустить проверку правописания и грамматики"
    },
    description: {
      uz: "Microsoft Word va Outlook-da butun matn bo'ylab imlo xatolarini avtomatik topadi.",
      en: "Initiates full document spell checking in Word and Outlook.",
      ru: "Запускает полную проверку орфографии и грамматики в Word и Outlook."
    },
    category: "office",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["spelling", "grammar", "word", "office"],
    example: {
      uz: "Hujjatni yuborishdan oldin F7 bosib xatolarni tekshirib chiqing.",
      en: "Proofread reports thoroughly with one click.",
      ru: "Проверьте отчет на опечатки перед отправкой."
    },
    applicationSpecific: true
  },

  // 16. Power User & Diagnostics
  {
    id: "win-ctrl-shift-b",
    keys: ["Win", "Ctrl", "Shift", "B"],
    title: {
      uz: "Videokarta drayverini qayta yuklash (Restart Graphics Driver)",
      en: "Restart graphics video driver",
      ru: "Перезапустить видеодрайвер (графическую подсистему)"
    },
    description: {
      uz: "Ekran qora bo'lib qotib qolganda monitorni o'chirib-yoqib, videodrayverni xavfsiz qayta ishga tushiradi.",
      en: "Audibly beeps and reinitializes the graphics driver to recover from black screen freezes.",
      ru: "Подает звуковой сигнал и перезагружает графический драйвер при зависании или черном экране."
    },
    category: "power-user",
    difficulty: "advanced",
    winVersion: "all",
    tags: ["gpu", "driver", "black-screen", "freeze", "rescue"],
    example: {
      uz: "O'yin yoki og'ir dasturdan so'ng ekran qorayib qolsa, kompyuterni o'chirmasdan ushbu kombinatsiyani bosing.",
      en: "Rescue your session when an external GPU or game flickers the screen black.",
      ru: "Спасите работу, если после игры экран неожиданно погас."
    },
    systemLevel: true
  },
  {
    id: "win-alt-r",
    keys: ["Win", "Alt", "R"],
    title: {
      uz: "O'yin va ekran videosini yozishni boshlash/to'xtatish (Xbox Game Bar Record)",
      en: "Start or stop screen video recording",
      ru: "Начать или остановить запись видео с экрана"
    },
    description: {
      uz: "Hech qanday qo'shimcha dasturlarsiz Windows ichki vositasi orqali ekrandan video yozadi.",
      en: "Records video footage of active games and apps without 3rd party screen recording software.",
      ru: "Записывает видео происходящего на экране средствами встроенной панели Xbox Game Bar."
    },
    category: "power-user",
    difficulty: "intermediate",
    winVersion: "win10-11",
    tags: ["screen-record", "video", "game-bar", "gameplay"],
    example: {
      uz: "Qo'llanma yoki o'yin lahzasini sifatli video qilib yozib olish.",
      en: "Record high-resolution software bug walkthroughs effortlessly.",
      ru: "Записывайте обучающие ролики или геймплей в один клик."
    }
  },
  {
    id: "win-g",
    keys: ["Win", "G"],
    title: {
      uz: "Xbox Game Bar panelini ochish",
      en: "Open Xbox Game Bar overlay",
      ru: "Открыть оверлей Xbox Game Bar"
    },
    description: {
      uz: "O'yinlar vaqtida unumdorlik (FPS, RAM, CPU), audio miksher va video yozish pultini ochadi.",
      en: "Opens customizable gaming overlay with hardware performance stats, audio mixer, and capture.",
      ru: "Открывает панель с мониторингом FPS, загрузки процессора, микшером звука и записью."
    },
    category: "power-user",
    difficulty: "intermediate",
    winVersion: "win10-11",
    tags: ["game-bar", "fps", "hardware", "performance"],
    example: {
      uz: "Kompyuter harorati va FPS sonini o'yin ustida ko'rish.",
      en: "Check real-time CPU/GPU load while gaming.",
      ru: "Следите за частотой кадров и температурой компонентов в играх."
    }
  },
  {
    id: "f5-refresh",
    keys: ["F5"],
    title: {
      uz: "Sahifa yoki papkani yangilash (Refresh)",
      en: "Refresh the active window or webpage",
      ru: "Обновить активное окно или веб-страницу"
    },
    description: {
      uz: "Explorer yoki brauzer sahifasidagi ma'lumotlarni qayta yuklaydi.",
      en: "Reloads the contents of the current folder or web page.",
      ru: "Перезагружает содержимое текущей папки или веб-страницы."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["refresh", "reload", "update"],
    example: {
      uz: "Yangi nusxalangan fayl ko'rinmay tursa F5 bosing.",
      en: "Update folder lists after external file transfers.",
      ru: "Нажмите F5, если новые файлы еще не отобразились в папке."
    }
  },
  {
    id: "ctrl-f5-hard-refresh",
    keys: ["Ctrl", "F5"],
    title: {
      uz: "Keshni tozalab majburiy yangilash (Hard Refresh)",
      en: "Hard refresh webpage bypassing cache",
      ru: "Жесткая перезагрузка страницы с очисткой кэша"
    },
    description: {
      uz: "Brauzer keshidagi eski fayllarni chetlab o'tib, saytni to'g'ridan-to'g'ri serverdan qayta yuklaydi.",
      en: "Forces browser to reload all scripts and CSS directly from server, ignoring cached files.",
      ru: "Заставляет браузер загрузить заново все скрипты и стили прямо с сервера без использования кэша."
    },
    category: "browser",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["hard-refresh", "cache", "web", "developer"],
    example: {
      uz: "Sayt yangilanganidan keyin eski dizayn ko'rinib qolsa Ctrl + F5 bosing.",
      en: "See web code updates immediately without clearing browser history.",
      ru: "Увидьте свежие правки на сайте без ручной очистки истории."
    },
    applicationSpecific: true
  },
  {
    id: "f11-fullscreen",
    keys: ["F11"],
    title: {
      uz: "To'liq ekran rejimini yoqish/o'chirish (Toggle Full Screen)",
      en: "Toggle full screen mode",
      ru: "Включить/выключить полноэкранный режим"
    },
    description: {
      uz: "Brauzer yoki Explorer-da barcha panellarni yashirib, butun monitorni kontent bilan to'ldiradi.",
      en: "Expands the active window to borderless full screen, hiding browser bars and system taskbar.",
      ru: "Разворачивает окно без рамок и вкладок на весь экран для полного погружения."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["fullscreen", "presentation", "kiosk"],
    example: {
      uz: "Taqdimot yoki video ko'rishda chalg'ituvchi elementlarni yo'qotish.",
      en: "Maximize reading view during long articles.",
      ru: "Уберите все панели для комфортного чтения или просмотра видео."
    }
  },
  {
    id: "esc-cancel",
    keys: ["Esc"],
    title: {
      uz: "Bekor qilish / Chiqish (Escape)",
      en: "Cancel or stop the current task or dialog",
      ru: "Отменить или закрыть текущую задачу / окно"
    },
    description: {
      uz: "Ochiq modal oynalarni, menyularni yopadi yoki yuklanayotgan jarayonni bekor qiladi.",
      en: "Dismisses popups, closes open menus, or stops loading web pages.",
      ru: "Закрывает всплывающие окна, контекстные меню или останавливает загрузку."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "all",
    tags: ["escape", "cancel", "close", "dismiss"],
    example: {
      uz: "Tasodifiy chiqqan xabar oynasini tezda yopish.",
      en: "Hit Esc to quickly close dialog boxes.",
      ru: "Нажмите Esc для быстрого закрытия любого всплывающего окна."
    }
  },
  {
    id: "win-alt-d",
    keys: ["Win", "Alt", "D"],
    title: {
      uz: "Vazifalar panelidagi sana va soatni ochish",
      en: "Display and hide the date and time on taskbar",
      ru: "Показать или скрыть дату и время на панели задач"
    },
    description: {
      uz: "Soat va taqvim oynasini to'g'ridan-to'g'ri ekranga chiqaradi.",
      en: "Opens the system clock and calendar popover directly.",
      ru: "Открывает календарь и часы прямо над панелью задач."
    },
    category: "taskbar",
    difficulty: "intermediate",
    winVersion: "all",
    tags: ["calendar", "clock", "date", "time"],
    example: {
      uz: "Klaviaturadan qo'lni uzmasdan joriy sana yoki vaqtni bilish.",
      en: "Check days of the month instantly.",
      ru: "Быстро сверьтесь с числом и днем недели."
    }
  },
  {
    id: "win-w-widgets",
    keys: ["Win", "W"],
    title: {
      uz: "Vidjetlar (Widgets) panelini ochish",
      en: "Open Widgets board",
      ru: "Открыть панель мини-приложений (Виджетов)"
    },
    description: {
      uz: "Windows 11-da ob-havo, yangiliklar va eslatmalar vidjetlari taxtasini ochadi.",
      en: "Slides in the personalized Widgets board with weather, news, and to-do lists in Windows 11.",
      ru: "Выдвигает панель виджетов с погодой, курсами валют и новостями в Windows 11."
    },
    category: "windows-system",
    difficulty: "beginner",
    winVersion: "win11",
    tags: ["widgets", "weather", "news", "win11"],
    example: {
      uz: "Ob-havo ma'lumotini bir soniyada ko'rish uchun Win + W bosing.",
      en: "Glance at traffic or weather forecasts instantly.",
      ru: "Посмотрите прогноз погоды и пробки одним нажатием."
    }
  }
];

export const CATEGORY_METADATA: Record<
  string,
  { icon: string; color: string; count?: number }
> = {
  "windows-system": { icon: "LayoutGrid", color: "blue" },
  "window-management": { icon: "Maximize2", color: "indigo" },
  "file-explorer": { icon: "Folder", color: "amber" },
  "text-editing": { icon: "FileText", color: "emerald" },
  clipboard: { icon: "ClipboardList", color: "violet" },
  screenshots: { icon: "Camera", color: "rose" },
  "virtual-desktops": { icon: "Layers", color: "cyan" },
  accessibility: { icon: "Eye", color: "teal" },
  taskbar: { icon: "Sliders", color: "fuchsia" },
  search: { icon: "Search", color: "sky" },
  settings: { icon: "Settings", color: "slate" },
  terminal: { icon: "Terminal", color: "orange" },
  productivity: { icon: "Code", color: "purple" },
  office: { icon: "FileSpreadsheet", color: "red" },
  browser: { icon: "Globe", color: "lime" },
  "power-user": { icon: "Zap", color: "yellow" }
};
