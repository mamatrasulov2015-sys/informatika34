import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { KeyBadge } from './KeyBadge';
import {
  Search,
  BookOpen,
  Keyboard,
  Award,
  Gamepad2,
  BarChart3,
  Settings,
  Star,
  X,
  ArrowRight,
  Globe,
  Sun,
  Moon
} from 'lucide-react';
import { ViewName, Language, Theme } from '../types';

export const CommandPalette: React.FC = () => {
  const {
    isCommandPaletteOpen,
    setCommandPaletteOpen,
    shortcuts,
    openShortcutModal,
    navigate,
    language,
    setLanguage,
    setTheme,
    t
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCommandPaletteOpen]);

  // Actions list
  const actions = [
    { id: 'nav-home', label: t.nav.home, type: 'view', view: 'home' as ViewName, icon: <BookOpen className="w-4 h-4 text-blue-500" /> },
    { id: 'nav-shortcuts', label: t.nav.shortcuts, type: 'view', view: 'shortcuts' as ViewName, icon: <BookOpen className="w-4 h-4 text-blue-500" /> },
    { id: 'nav-practice', label: t.nav.practice, type: 'view', view: 'practice' as ViewName, icon: <Keyboard className="w-4 h-4 text-emerald-500" /> },
    { id: 'nav-quiz', label: t.nav.quiz, type: 'view', view: 'quiz' as ViewName, icon: <Award className="w-4 h-4 text-amber-500" /> },
    { id: 'nav-games', label: t.nav.games, type: 'view', view: 'games' as ViewName, icon: <Gamepad2 className="w-4 h-4 text-purple-500" /> },
    { id: 'nav-favs', label: t.nav.favorites, type: 'view', view: 'favorites' as ViewName, icon: <Star className="w-4 h-4 text-yellow-500" /> },
    { id: 'nav-stats', label: t.nav.progress, type: 'view', view: 'progress' as ViewName, icon: <BarChart3 className="w-4 h-4 text-cyan-500" /> },
    { id: 'nav-settings', label: t.nav.settings, type: 'view', view: 'settings' as ViewName, icon: <Settings className="w-4 h-4 text-slate-500" /> },
    { id: 'lang-uz', label: "Til: O'zbekcha", type: 'lang', lang: 'uz' as Language, icon: <Globe className="w-4 h-4 text-blue-500" /> },
    { id: 'lang-en', label: "Language: English", type: 'lang', lang: 'en' as Language, icon: <Globe className="w-4 h-4 text-blue-500" /> },
    { id: 'lang-ru', label: "Язык: Русский", type: 'lang', lang: 'ru' as Language, icon: <Globe className="w-4 h-4 text-blue-500" /> },
    { id: 'theme-dark', label: "Mavzu: Qorong'i (Dark)", type: 'theme', theme: 'dark' as Theme, icon: <Moon className="w-4 h-4 text-indigo-400" /> },
    { id: 'theme-light', label: "Mavzu: Yorug' (Light)", type: 'theme', theme: 'light' as Theme, icon: <Sun className="w-4 h-4 text-amber-500" /> },
  ];

  // Filtered shortcuts
  const filteredShortcuts = query.trim() === ''
    ? []
    : shortcuts.filter(s => {
        const q = query.toLowerCase();
        const title = (s.title[language] || s.title.en).toLowerCase();
        const desc = (s.description[language] || s.description.en).toLowerCase();
        const keys = s.keys.join(' ').toLowerCase();
        const tags = s.tags.join(' ').toLowerCase();
        return title.includes(q) || desc.includes(q) || keys.includes(q) || tags.includes(q);
      }).slice(0, 8);

  const filteredActions = query.trim() === ''
    ? actions.slice(0, 6)
    : actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase())).slice(0, 4);

  const totalResults = [...filteredActions, ...filteredShortcuts];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, totalResults.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + totalResults.length) % Math.max(1, totalResults.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = totalResults[selectedIndex];
      if (selected) {
        executeItem(selected);
      }
    }
  };

  const executeItem = (item: any) => {
    setCommandPaletteOpen(false);
    if ('keys' in item) {
      // Shortcut
      openShortcutModal(item);
    } else if (item.type === 'view') {
      navigate(item.view);
    } else if (item.type === 'lang') {
      setLanguage(item.lang);
    } else if (item.type === 'theme') {
      setTheme(item.theme);
    }
  };

  if (!isCommandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-100"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={t.commandPalette.placeholder}
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
          />
          <button
            type="button"
            onClick={() => setCommandPaletteOpen(false)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-2">
          {/* Actions */}
          {filteredActions.length > 0 && (
            <div className="mb-2">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {t.commandPalette.actions}
              </div>
              {filteredActions.map((action, i) => {
                const isSelected = i === selectedIndex;
                return (
                  <div
                    key={action.id}
                    onClick={() => executeItem(action)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-colors ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {action.icon}
                      <span>{action.label}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                );
              })}
            </div>
          )}

          {/* Shortcuts */}
          {filteredShortcuts.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {t.nav.shortcuts} ({filteredShortcuts.length})
              </div>
              {filteredShortcuts.map((sc, j) => {
                const globalIndex = filteredActions.length + j;
                const isSelected = globalIndex === selectedIndex;
                const title = sc.title[language] || sc.title.en;

                return (
                  <div
                    key={sc.id}
                    onClick={() => executeItem(sc)}
                    onMouseEnter={() => setSelectedIndex(globalIndex)}
                    className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm truncate text-slate-900 dark:text-white">
                        {title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {sc.description[language] || sc.description.en}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {sc.keys.map((k, idx) => (
                        <KeyBadge key={idx} keyLabel={k} size="sm" />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {totalResults.length === 0 && (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500 text-sm">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p>{t.common.noResults}</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
          <span>↑↓ Tanlash / Navigate</span>
          <span>↵ Ochish / Select</span>
          <span>Esc Yopish / Close</span>
        </div>
      </div>
    </div>
  );
};
