import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { KeyBadge } from './KeyBadge';
import { VirtualKeyboard } from './VirtualKeyboard';
import {
  X,
  Star,
  CheckCircle,
  Copy,
  Keyboard,
  Info,
  Layers,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export const ShortcutModal: React.FC = () => {
  const {
    selectedShortcut,
    closeShortcutModal,
    language,
    t,
    progress,
    toggleFavorite,
    toggleLearned,
    navigate,
    addToast
  } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeShortcutModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeShortcutModal]);

  if (!selectedShortcut) return null;

  const isFav = progress.favoriteShortcutIds.includes(selectedShortcut.id);
  const isLearned = progress.learnedShortcutIds.includes(selectedShortcut.id);

  const title = selectedShortcut.title[language] || selectedShortcut.title.en;
  const description = selectedShortcut.description[language] || selectedShortcut.description.en;
  const example = selectedShortcut.example ? (selectedShortcut.example[language] || selectedShortcut.example.en) : null;
  const note = selectedShortcut.note ? (selectedShortcut.note[language] || selectedShortcut.note.en) : null;
  const categoryLabel = t.categories[selectedShortcut.category as keyof typeof t.categories] || selectedShortcut.category;

  const copyCombo = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(selectedShortcut.keys.join(' + '));
    addToast(t.toasts.copiedClipboard, 'success');
  };

  const startPractice = () => {
    closeShortcutModal();
    navigate('practice', { shortcutId: selectedShortcut.id });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          id="btn-close-modal"
          onClick={closeShortcutModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            {categoryLabel}
          </span>
          <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {t.difficulty[selectedShortcut.difficulty]}
          </span>
          {selectedShortcut.winVersion && selectedShortcut.winVersion !== 'all' && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
              {selectedShortcut.winVersion === 'win11' ? 'Windows 11' : 'Windows 10 / 11'}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pr-8">
          {title}
        </h2>

        {/* Key Combination Centerpiece */}
        <div className="my-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {selectedShortcut.keys.map((key, i) => (
              <React.Fragment key={i}>
                <KeyBadge keyLabel={key} size="lg" className="shadow-lg text-lg" />
                {i < selectedShortcut.keys.length - 1 && (
                  <span className="text-slate-400 font-extrabold text-xl">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            type="button"
            onClick={copyCombo}
            className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{t.common.copy}</span>
          </button>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              {t.common.description}
            </h4>
            <p className="text-base text-slate-800 dark:text-slate-200">{description}</p>
          </div>

          {example && (
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wide text-blue-900 dark:text-blue-300">
                    {t.common.example}
                  </h5>
                  <p className="mt-1 text-xs text-blue-800 dark:text-blue-200">{example}</p>
                </div>
              </div>
            </div>
          )}

          {note && (
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wide text-amber-900 dark:text-amber-300">
                    {t.common.note}
                  </h5>
                  <p className="mt-1 text-xs text-amber-800 dark:text-amber-200">{note}</p>
                </div>
              </div>
            </div>
          )}

          {/* Virtual Keyboard visual preview */}
          <div className="mt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Klaviatura xaritasi / Keyboard layout
            </h4>
            <VirtualKeyboard activeKeys={selectedShortcut.keys} compact />
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(selectedShortcut.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isFav
                  ? 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Star className={`w-4 h-4 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isFav ? t.common.unfavorite : t.common.favorite}</span>
            </button>

            <button
              type="button"
              onClick={() => toggleLearned(selectedShortcut.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isLearned
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isLearned ? 'fill-emerald-500 text-white' : ''}`} />
              <span>{isLearned ? t.shortcuts.learned : t.shortcuts.markLearned}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={startPractice}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-102"
          >
            <Keyboard className="w-4 h-4" />
            <span>{t.practice.practiceThis}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
