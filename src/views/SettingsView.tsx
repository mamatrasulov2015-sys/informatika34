import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Settings as SettingsIcon,
  Globe,
  Sun,
  Volume2,
  VolumeX,
  Download,
  Upload,
  RotateCcw,
  Shield,
  ExternalLink,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Language, Theme, PracticeMode } from '../types';
import { soundManager } from '../utils/sound';

export const SettingsView: React.FC = () => {
  const {
    language,
    setLanguage,
    theme,
    setTheme,
    settings,
    updateSettings,
    exportProgressJSON,
    importProgressJSON,
    resetAllProgress,
    t,
    addToast
  } = useApp();

  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importModalOpen, setImportModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      if (content) {
        const success = importProgressJSON(content);
        if (success) {
          setImportModalOpen(false);
        }
      }
    };
    reader.readAsText(file);
  };

  const handleTestSound = () => {
    soundManager.playSuccess();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <SettingsIcon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
          <span>{t.settings.title}</span>
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Ilova parametrlari, mavzular va ma'lumotlarni boshqarish
        </p>
      </div>

      {/* Language Section */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-500" />
          <span>{t.settings.language}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { code: 'uz' as Language, label: "O'zbekcha", flag: '🇺🇿' },
            { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
            { code: 'ru' as Language, label: 'Русский', flag: '🇷🇺' },
          ].map(l => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLanguage(l.code)}
              className={`p-4 rounded-2xl border text-left font-semibold text-sm transition-all flex items-center justify-between ${
                language === l.code
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 text-blue-700 dark:text-blue-300 shadow-sm ring-1 ring-blue-500'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2 text-base">
                <span>{l.flag}</span>
                <span className="text-sm font-bold">{l.label}</span>
              </span>
              {language === l.code && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Appearance Section */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sun className="w-5 h-5 text-amber-500" />
          <span>{t.settings.theme}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'light' as Theme, label: t.settings.themeOptions.light },
            { id: 'dark' as Theme, label: t.settings.themeOptions.dark },
            { id: 'system' as Theme, label: t.settings.themeOptions.system },
          ].map(th => (
            <button
              key={th.id}
              type="button"
              onClick={() => setTheme(th.id)}
              className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all ${
                theme === th.id
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 text-blue-700 dark:text-blue-300 shadow-sm ring-1 ring-blue-500'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {th.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sound & Feedback */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-emerald-500" />
          <span>{t.settings.soundEffects}</span>
        </h3>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              Tugma va yutuq ovozlari
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              To'g'ri bosish va darajaga ko'tarilishda nozik sintezator ovozlari
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleTestSound}
              disabled={!settings.soundEnabled}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40"
            >
              Sinash
            </button>

            <button
              type="button"
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                settings.soundEnabled ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                  settings.soundEnabled ? 'left-6.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Backup & Restore */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Download className="w-5 h-5 text-indigo-500" />
          <span>Ma'lumotlar zaxirasi (Backup / Restore)</span>
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed">
          Barcha o'zlashtirilgan kombinatsiyalar, XP, yulduzchalar va test natijalarini JSON fayl ko'rinishida saqlab oling yoki boshqa kompyuterga ko'chiring.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={exportProgressJSON}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20"
          >
            <Download className="w-4 h-4" />
            <span>{t.settings.exportData}</span>
          </button>

          <button
            type="button"
            onClick={() => setImportModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs"
          >
            <Upload className="w-4 h-4" />
            <span>{t.settings.importData}</span>
          </button>
        </div>
      </div>

      {/* Danger Zone: Reset */}
      <div className="p-6 rounded-3xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 shadow-sm space-y-3">
        <h3 className="text-base font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-rose-500" />
          <span>{t.settings.resetProgress}</span>
        </h3>
        <p className="text-xs text-rose-700 dark:text-rose-400">
          {t.settings.resetWarning}
        </p>
        <button
          type="button"
          onClick={() => setConfirmResetOpen(true)}
          className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors"
        >
          {t.settings.resetProgress}
        </button>
      </div>

      {/* Official Documentation Reference */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-slate-500" />
          <span>{t.settings.officialDocs}</span>
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Ilovadagi barcha tugmalar rasmiy Microsoft Support hujjatlari hamda Microsoft PowerToys Shortcut Guide mezonlariga 100% mos keladi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="https://support.microsoft.com/en-us/accessibility/windows/keyboard-shortcuts-in-windows"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Microsoft Windows Keyboard Shortcuts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://learn.microsoft.com/en-us/windows/powertoys/shortcut-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Microsoft PowerToys Shortcut Guide</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Confirmation Reset Modal */}
      {confirmResetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-center text-slate-900 dark:text-white">
              Haqiqatan ham barcha natijalarni o'chirmoqchimisiz?
            </h3>
            <p className="text-xs text-center text-slate-500">
              Ushbu amalni ortga qaytarib bo'lmaydi. Barcha XP ballaringiz va o'rganilgan kombinatsiyalar nollanadi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setConfirmResetOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={() => {
                  resetAllProgress();
                  setConfirmResetOpen(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md"
              >
                Ha, nollash
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {importModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Ma'lumotlarni tiklash (Import)
            </h3>
            <p className="text-xs text-slate-500">
              Oldin eksport qilingan JSON faylni yuklang yoki matnni joylashtiring:
            </p>

            <input
              type="file"
              ref={fileInputRef}
              accept=".json"
              onChange={handleFileUpload}
              className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            <textarea
              value={importJsonText}
              onChange={e => setImportJsonText(e.target.value)}
              placeholder="Yoki JSON matnini shu yerga qo'ying..."
              className="w-full h-32 p-3 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setImportModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold"
              >
                Yopish
              </button>
              <button
                type="button"
                onClick={() => {
                  if (importJsonText) {
                    const success = importProgressJSON(importJsonText);
                    if (success) setImportModalOpen(false);
                  }
                }}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Tiklash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
