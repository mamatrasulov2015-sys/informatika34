import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';
import {
  Keyboard,
  Search,
  Flame,
  Star,
  Zap,
  Menu,
  X,
  BookOpen,
  Award,
  Gamepad2,
  BarChart3,
  Settings as SettingsIcon,
  Home
} from 'lucide-react';
import { ViewName } from '../types';

export const Header: React.FC = () => {
  const {
    currentView,
    navigate,
    t,
    progress,
    levelInfo,
    setCommandPaletteOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { view: ViewName; label: string; icon: React.ReactNode; badge?: number }[] = [
    { view: 'home', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { view: 'shortcuts', label: t.nav.shortcuts, icon: <BookOpen className="w-4 h-4" /> },
    { view: 'practice', label: t.nav.practice, icon: <Keyboard className="w-4 h-4" /> },
    { view: 'quiz', label: t.nav.quiz, icon: <Award className="w-4 h-4" /> },
    { view: 'games', label: t.nav.games, icon: <Gamepad2 className="w-4 h-4" /> },
    { view: 'favorites', label: t.nav.favorites, icon: <Star className="w-4 h-4" />, badge: progress.favoriteShortcutIds.length },
    { view: 'progress', label: t.nav.progress, icon: <BarChart3 className="w-4 h-4" /> },
    { view: 'settings', label: t.nav.settings, icon: <SettingsIcon className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <div
            id="brand-logo"
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {/* Clean Windows 4-pane icon */}
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75V22.1L0 20.751M10.949 12.6H24V24l-13.051-1.802" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
                  Windows Shortcut Master
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5">
                {t.app.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  id={`nav-link-${item.view}`}
                  type="button"
                  onClick={() => navigate(item.view)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {typeof item.badge === 'number' && item.badge > 0 && (
                    <span className="ml-0.5 px-1.5 py-0.2 text-[10px] rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Fast Search & Palette Trigger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-search-trigger"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700/80 text-xs transition-colors group"
              title="Qidiruv / Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="hidden md:inline">{t.common.search}...</span>
              <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500">
                Ctrl+K
              </kbd>
            </button>

            {/* Streak indicator */}
            <div
              onClick={() => navigate('progress')}
              className="cursor-pointer flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 text-xs font-bold hover:scale-105 transition-transform"
              title={`${progress.streak} ${t.progress.dayStreak}`}
            >
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-bounce" />
              <span>{progress.streak}</span>
            </div>

            {/* XP Level badge */}
            <div
              onClick={() => navigate('progress')}
              className="hidden sm:flex cursor-pointer items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:scale-105 transition-transform"
              title={`Level ${levelInfo.levelNumber} - ${progress.xp} XP`}
            >
              <Zap className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
              <span>Lv.{levelInfo.levelNumber}</span>
              <span className="text-[10px] opacity-75">{progress.xp} XP</span>
            </div>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              type="button"
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 animate-in slide-in-from-top-2 duration-150">
            {navItems.map(item => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  type="button"
                  onClick={() => {
                    navigate(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {typeof item.badge === 'number' && item.badge > 0 && (
                    <span className="ml-auto px-1.5 py-0.2 text-[10px] rounded-full bg-amber-400 text-slate-900 font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
