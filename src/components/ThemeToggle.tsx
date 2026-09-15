import React from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Theme } from '../types';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useApp();

  const cycleTheme = () => {
    const next: Record<Theme, Theme> = {
      light: 'dark',
      dark: 'system',
      system: 'light',
    };
    setTheme(next[theme]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-indigo-400" />;
      default:
        return <Monitor className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
    }
  };

  const getTitle = () => {
    switch (theme) {
      case 'light':
        return 'Light Theme (Click to switch)';
      case 'dark':
        return 'Dark Theme (Click to switch)';
      default:
        return 'System Theme (Click to switch)';
    }
  };

  return (
    <button
      type="button"
      id="btn-theme-toggle"
      onClick={cycleTheme}
      className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 flex items-center justify-center"
      title={getTitle()}
      aria-label="Toggle Theme"
    >
      {getIcon()}
    </button>
  );
};
