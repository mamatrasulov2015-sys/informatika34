import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ShortcutCard } from '../components/ShortcutCard';
import { Star, Keyboard, Printer, ArrowRight } from 'lucide-react';

export const FavoritesView: React.FC = () => {
  const {
    shortcuts,
    progress,
    navigate,
    t
  } = useApp();

  const favoriteShortcuts = useMemo(() => {
    return shortcuts.filter(s => Boolean(progress?.favoriteShortcutIds?.includes(s.id)));
  }, [shortcuts, progress?.favoriteShortcutIds]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Star className="w-7 h-7 fill-amber-400 text-amber-500" />
            <span>{t.favorites.title}</span>
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t.favorites.subtitle} ({favoriteShortcuts.length} ta kombinatsiya)
          </p>
        </div>

        {favoriteShortcuts.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>{t.shortcuts.cheatSheet}</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('practice')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20"
            >
              <Keyboard className="w-4 h-4" />
              <span>Hammasini mashq qilish</span>
            </button>
          </div>
        )}
      </div>

      {favoriteShortcuts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteShortcuts.map(sc => (
            <ShortcutCard key={sc.id} shortcut={sc} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 max-w-lg mx-auto p-6">
          <div className="w-16 h-16 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {t.favorites.empty}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {t.favorites.emptyDesc}
          </p>
          <button
            type="button"
            onClick={() => navigate('shortcuts')}
            className="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md"
          >
            <span>{t.hero.browseShortcuts}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
