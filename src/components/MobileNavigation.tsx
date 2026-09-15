import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Keyboard, Award, Gamepad2, BarChart3, Home } from 'lucide-react';
import { ViewName } from '../types';

export const MobileNavigation: React.FC = () => {
  const { currentView, navigate, t } = useApp();

  const items: { view: ViewName; label: string; icon: React.ReactNode }[] = [
    { view: 'home', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { view: 'shortcuts', label: t.nav.shortcuts, icon: <BookOpen className="w-4 h-4" /> },
    { view: 'practice', label: t.nav.practice, icon: <Keyboard className="w-4 h-4" /> },
    { view: 'quiz', label: t.nav.quiz, icon: <Award className="w-4 h-4" /> },
    { view: 'games', label: t.nav.games, icon: <Gamepad2 className="w-4 h-4" /> },
    { view: 'progress', label: t.nav.progress, icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 safe-area-pb">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {items.map(item => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => navigate(item.view)}
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-lg transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-md ${isActive ? 'bg-blue-50 dark:bg-blue-950/60' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
