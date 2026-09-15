import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, ExternalLink, Heart, Keyboard } from 'lucide-react';

export const Footer: React.FC = () => {
  const { shortcuts, t } = useApp();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-xs text-slate-500 dark:text-slate-400 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-[11px] font-bold">
            ⊞
          </div>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            Windows Shortcut Master
          </span>
          <span>• {shortcuts.length} ta rasmiy kombinatsiya</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="https://support.microsoft.com/en-us/accessibility/windows/keyboard-shortcuts-in-windows"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>Microsoft Support Docs</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% Maxfiy va Offline</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
