import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ShortcutCard } from '../components/ShortcutCard';
import {
  Search,
  Filter,
  Star,
  CheckCircle,
  Layers,
  SlidersHorizontal,
  Printer,
  X,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { ShortcutCategory, DifficultyLevel } from '../types';

export const ShortcutsView: React.FC = () => {
  const {
    shortcuts,
    activeCategoryFilter,
    setActiveCategoryFilter,
    language,
    t,
    progress
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedVersion, setSelectedVersion] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all'); // all, learned, unlearned, favorites
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'difficulty'>('default');

  // Categories list
  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t.common.all },
    { id: 'windows-system', label: t.categories['windows-system'] },
    { id: 'window-management', label: t.categories['window-management'] },
    { id: 'file-explorer', label: t.categories['file-explorer'] },
    { id: 'text-editing', label: t.categories['text-editing'] },
    { id: 'clipboard', label: t.categories.clipboard },
    { id: 'screenshots', label: t.categories.screenshots },
    { id: 'virtual-desktops', label: t.categories['virtual-desktops'] },
    { id: 'taskbar', label: t.categories.taskbar },
    { id: 'search', label: t.categories.search },
    { id: 'settings', label: t.categories.settings },
    { id: 'terminal', label: t.categories.terminal },
    { id: 'browser', label: t.categories.browser },
    { id: 'power-user', label: t.categories['power-user'] },
    { id: 'accessibility', label: t.categories.accessibility },
    { id: 'productivity', label: t.categories.productivity },
    { id: 'office', label: t.categories.office },
  ];

  const currentCategory = activeCategoryFilter || 'all';

  // Filter shortcuts
  const filteredShortcuts = useMemo(() => {
    return shortcuts.filter(s => {
      // 1. Category
      if (currentCategory !== 'all' && s.category !== currentCategory) {
        return false;
      }

      // 2. Difficulty
      if (selectedDifficulty !== 'all' && s.difficulty !== selectedDifficulty) {
        return false;
      }

      // 3. Version
      if (selectedVersion === 'win11' && s.winVersion !== 'win11') {
        return false;
      }
      if (selectedVersion === 'win10' && s.winVersion === 'win11') {
        return false;
      }

      // 4. Status
      if (selectedStatus === 'favorites' && !progress?.favoriteShortcutIds?.includes(s.id)) {
        return false;
      }
      if (selectedStatus === 'learned' && !progress?.learnedShortcutIds?.includes(s.id)) {
        return false;
      }
      if (selectedStatus === 'unlearned' && progress?.learnedShortcutIds?.includes(s.id)) {
        return false;
      }

      // 5. Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const title = (s.title[language] || s.title.en).toLowerCase();
        const desc = (s.description[language] || s.description.en).toLowerCase();
        const keys = s.keys.join(' ').toLowerCase();
        const tags = s.tags.join(' ').toLowerCase();
        return title.includes(q) || desc.includes(q) || keys.includes(q) || tags.includes(q);
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        const titleA = (a.title[language] || a.title.en).toLowerCase();
        const titleB = (b.title[language] || b.title.en).toLowerCase();
        return titleA.localeCompare(titleB);
      }
      if (sortBy === 'difficulty') {
        const weights: Record<string, number> = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
        return (weights[a.difficulty] || 0) - (weights[b.difficulty] || 0);
      }
      return 0;
    });
  }, [
    shortcuts,
    currentCategory,
    selectedDifficulty,
    selectedVersion,
    selectedStatus,
    searchQuery,
    sortBy,
    language,
    progress.favoriteShortcutIds,
    progress.learnedShortcutIds,
  ]);

  const clearFilters = () => {
    setActiveCategoryFilter(null);
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedVersion('all');
    setSelectedStatus('all');
    setSortBy('default');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.shortcuts.title}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t.shortcuts.subtitle} • {shortcuts.length} ta rasmiy kombinatsiya
          </p>
        </div>

        {/* Quick cheat sheet print button */}
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors w-fit"
          title="Print Cheatsheet"
        >
          <Printer className="w-4 h-4 text-slate-500" />
          <span>{t.shortcuts.cheatSheet}</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={`${t.shortcuts.searchPlaceholder} (masalan: Win + E, nusxalash, ekran, vidjet)...`}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => {
            const isSelected = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryFilter(cat.id === 'all' ? null : cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filters (Difficulty, Status, Version, Sort) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">Barcha qiyinchiliklar</option>
              <option value="beginner">{t.difficulty.beginner}</option>
              <option value="intermediate">{t.difficulty.intermediate}</option>
              <option value="advanced">{t.difficulty.advanced}</option>
              <option value="expert">{t.difficulty.expert}</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">Barcha holatlar</option>
              <option value="favorites">★ Saqlanganlar ({progress.favoriteShortcutIds.length})</option>
              <option value="learned">✓ O'rganilganlar ({progress.learnedShortcutIds.length})</option>
              <option value="unlearned">O'rganilmaganlar</option>
            </select>

            {/* Version Filter */}
            <select
              value={selectedVersion}
              onChange={e => setSelectedVersion(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">Barcha versiyalar</option>
              <option value="win11">Faqat Windows 11</option>
              <option value="win10">Windows 10 / 11</option>
            </select>

            {/* Reset Filters button */}
            {(currentCategory !== 'all' || selectedDifficulty !== 'all' || selectedStatus !== 'all' || selectedVersion !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline px-2 py-1"
              >
                Tozalash
              </button>
            )}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="default">Odatiy tartib</option>
              <option value="name">Alifbo bo'yicha (A-Z)</option>
              <option value="difficulty">Qiyinlik darajasi bo'yicha</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Ko'rsatilmoqda: <strong className="text-slate-900 dark:text-white">{filteredShortcuts.length}</strong> / {shortcuts.length} ta kombinatsiya
        </span>
        {progress.learnedShortcutIds.length > 0 && (
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            {progress.learnedShortcutIds.length} ta o'rganilgan ({((progress.learnedShortcutIds.length / shortcuts.length) * 100).toFixed(0)}%)
          </span>
        )}
      </div>

      {/* Shortcuts Grid */}
      {filteredShortcuts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredShortcuts.map(sc => (
            <ShortcutCard key={sc.id} shortcut={sc} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <Search className="w-10 h-10 mx-auto text-slate-400 mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Hech qanday kombinatsiya topilmadi
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Qidiruv so'zini yoki filtrlarni o'zgartirib ko'ring
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md"
          >
            Filtrlarni tozalash
          </button>
        </div>
      )}
    </div>
  );
};
