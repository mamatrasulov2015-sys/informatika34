import React from 'react';
import { Shortcut } from '../types';
import { useApp } from '../context/AppContext';
import { KeyBadge } from './KeyBadge';
import { Star, CheckCircle, Copy, ArrowRight, ExternalLink } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface ShortcutCardProps {
  shortcut: Shortcut;
  onSelect?: (shortcut: Shortcut) => void;
}

export const ShortcutCard: React.FC<ShortcutCardProps> = ({ shortcut, onSelect }) => {
  const {
    language,
    t,
    progress,
    toggleFavorite,
    toggleLearned,
    openShortcutModal,
    addToast
  } = useApp();

  const isFav = Boolean(progress?.favoriteShortcutIds?.includes(shortcut.id));
  const isLearned = Boolean(progress?.learnedShortcutIds?.includes(shortcut.id));

  const title = shortcut.title[language] || shortcut.title.en;
  const description = shortcut.description[language] || shortcut.description.en;

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playClick();
    const combo = shortcut.keys.join(' + ');
    navigator.clipboard.writeText(combo);
    addToast(t.toasts.copiedClipboard, 'success');
  };

  const getDifficultyBadge = () => {
    switch (shortcut.difficulty) {
      case 'beginner':
        return (
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
            {t.difficulty.beginner}
          </span>
        );
      case 'intermediate':
        return (
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
            {t.difficulty.intermediate}
          </span>
        );
      case 'advanced':
        return (
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
            {t.difficulty.advanced}
          </span>
        );
      case 'expert':
        return (
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
            {t.difficulty.expert}
          </span>
        );
    }
  };

  const getWinVersionBadge = () => {
    if (shortcut.winVersion === 'win11') {
      return (
        <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
          Win 11
        </span>
      );
    }
    if (shortcut.winVersion === 'win10-11') {
      return (
        <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          Win 10+
        </span>
      );
    }
    return null;
  };

  const categoryLabel = t.categories[shortcut.category as keyof typeof t.categories] || shortcut.category;

  return (
    <div
      id={`shortcut-card-${shortcut.id}`}
      onClick={() => (onSelect ? onSelect(shortcut) : openShortcutModal(shortcut))}
      className={`group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
        isLearned
          ? 'bg-emerald-50/20 dark:bg-emerald-950/10 border-emerald-300/70 dark:border-emerald-800/50 shadow-sm'
          : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-600 shadow-sm hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      {/* Top row: Category & Status Icons */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
              {categoryLabel}
            </span>
            {getDifficultyBadge()}
            {getWinVersionBadge()}
          </div>

          <div className="flex items-center gap-1">
            {/* Copy Button */}
            <button
              type="button"
              onClick={copyToClipboard}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title={t.common.copy}
            >
              <Copy className="w-3.5 h-3.5" />
            </button>

            {/* Favorite Button */}
            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                toggleFavorite(shortcut.id);
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                isFav
                  ? 'text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                  : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isFav ? t.common.unfavorite : t.common.favorite}
            >
              <Star className={`w-4 h-4 ${isFav ? 'fill-amber-500' : ''}`} />
            </button>

            {/* Learned Button */}
            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                toggleLearned(shortcut.id);
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                isLearned
                  ? 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                  : 'text-slate-400 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isLearned ? t.shortcuts.learned : t.shortcuts.markLearned}
            >
              <CheckCircle className={`w-4 h-4 ${isLearned ? 'fill-emerald-500 text-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Shortcut Keys Display */}
        <div className="flex items-center gap-1.5 flex-wrap my-3">
          {shortcut.keys.map((key, i) => (
            <React.Fragment key={i}>
              <KeyBadge keyLabel={key} size="md" />
              {i < shortcut.keys.length - 1 && (
                <span className="text-slate-400 font-bold text-xs">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer info & view details link */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="text-[11px] font-mono">
          {isLearned ? (
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              ✓ {t.shortcuts.learned}
            </span>
          ) : (
            <span>+10 XP</span>
          )}
        </span>
        <span className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform text-[11px]">
          <span>{t.common.details}</span>
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
