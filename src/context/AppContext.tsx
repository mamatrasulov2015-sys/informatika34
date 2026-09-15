import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Language,
  Theme,
  ViewName,
  Shortcut,
  UserProgress,
  UserSettings,
  ToastMessage,
  QuizSummary,
  PracticeMode
} from '../types';
import { SHORTCUTS } from '../data/shortcuts';
import { getTranslation } from '../locales';
import { soundManager } from '../utils/sound';
import { safeStorage } from '../utils/storage';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  currentView: ViewName;
  navigate: (view: ViewName, options?: { category?: string; shortcutId?: string }) => void;
  t: ReturnType<typeof getTranslation>;
  
  // Shortcuts data
  shortcuts: Shortcut[];
  selectedShortcut: Shortcut | null;
  openShortcutModal: (shortcut: Shortcut) => void;
  closeShortcutModal: () => void;
  
  // User progress & state
  progress: UserProgress;
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
  
  // Actions
  toggleFavorite: (shortcutId: string) => void;
  toggleLearned: (shortcutId: string) => void;
  addXP: (amount: number, reason?: string) => void;
  recordPracticeAttempt: (shortcutId: string, isCorrect: boolean, timeMs: number) => void;
  recordQuizResult: (summary: QuizSummary) => void;
  recordGameScore: (gameId: string, score: number, completed?: boolean) => void;
  resetAllProgress: () => void;
  exportProgressJSON: () => void;
  importProgressJSON: (jsonString: string) => boolean;
  
  // Navigation filters
  activeCategoryFilter: string | null;
  setActiveCategoryFilter: (cat: string | null) => void;
  
  // Command palette & search
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  
  // Toasts
  toasts: ToastMessage[];
  addToast: (text: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  
  // Calculated stats
  levelInfo: { levelNumber: number; title: string; currentLevelXp: number; nextLevelXp: number; progressPercent: number };
}

const STORAGE_KEYS = {
  LANGUAGE: 'wsm_language',
  THEME: 'wsm_theme',
  PROGRESS: 'wsm_user_progress',
  SETTINGS: 'wsm_user_settings',
};

const getTodayDateString = () => new Date().toISOString().split('T')[0];

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 1,
  lastActiveDate: getTodayDateString(),
  activeDays: [getTodayDateString()],
  learnedShortcutIds: [],
  favoriteShortcutIds: [],
  recentlyViewedIds: [],
  practiceStats: {
    totalPracticed: 0,
    correct: 0,
    incorrect: 0,
    weakShortcutIds: {},
  },
  quizHistory: [],
  gameScores: {},
  gamesCompleted: 0,
  dailyChallenge: {
    date: getTodayDateString(),
    targetCount: 5,
    currentCount: 0,
    completed: false,
    description: {
      uz: "Bugun 5 ta yangi kombinatsiyani o'rganing",
      en: "Learn 5 new shortcuts today",
      ru: "Изучите 5 новых горячих клавиш сегодня"
    },
    xpReward: 50
  }
};

const INITIAL_SETTINGS: UserSettings = {
  language: 'uz',
  theme: 'system',
  soundEnabled: true,
  animationsEnabled: true,
  reducedMotion: false,
  practiceDifficulty: 'normal',
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language state
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = safeStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    return saved === 'uz' || saved === 'en' || saved === 'ru' ? saved : 'uz';
  });

  // 2. Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = safeStorage.getItem(STORAGE_KEYS.THEME) as Theme;
    return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
  });

  // 3. User Progress state (deeply normalized and guarded)
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = safeStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (saved) {
        const parsed = JSON.parse(saved);
        const today = getTodayDateString();
        return {
          xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
          streak: typeof parsed.streak === 'number' ? Math.max(1, parsed.streak) : 1,
          lastActiveDate: parsed.lastActiveDate || today,
          activeDays: Array.isArray(parsed.activeDays) && parsed.activeDays.length > 0 ? parsed.activeDays : [today],
          learnedShortcutIds: Array.isArray(parsed.learnedShortcutIds) ? parsed.learnedShortcutIds : [],
          favoriteShortcutIds: Array.isArray(parsed.favoriteShortcutIds) ? parsed.favoriteShortcutIds : [],
          recentlyViewedIds: Array.isArray(parsed.recentlyViewedIds) ? parsed.recentlyViewedIds : [],
          practiceStats: {
            totalPracticed: parsed.practiceStats?.totalPracticed || 0,
            correct: parsed.practiceStats?.correct || 0,
            incorrect: parsed.practiceStats?.incorrect || 0,
            weakShortcutIds: parsed.practiceStats?.weakShortcutIds || {},
          },
          quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
          gameScores: parsed.gameScores && typeof parsed.gameScores === 'object' ? parsed.gameScores : {},
          gamesCompleted: typeof parsed.gamesCompleted === 'number' ? parsed.gamesCompleted : 0,
          dailyChallenge: {
            date: today,
            targetCount: parsed.dailyChallenge?.targetCount || 5,
            currentCount: parsed.dailyChallenge?.date === today ? (parsed.dailyChallenge?.currentCount || 0) : 0,
            completed: parsed.dailyChallenge?.date === today ? Boolean(parsed.dailyChallenge?.completed) : false,
            description: parsed.dailyChallenge?.description || INITIAL_PROGRESS.dailyChallenge.description,
            xpReward: parsed.dailyChallenge?.xpReward || 50,
          },
        };
      }
    } catch {
      // parse failed, use initial
    }
    return INITIAL_PROGRESS;
  });

  // 4. User Settings
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      const saved = safeStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_SETTINGS,
          ...parsed,
        };
      }
    } catch {
      // ignore
    }
    return INITIAL_SETTINGS;
  });

  // 5. Navigation & Modal
  const [currentView, setCurrentView] = useState<ViewName>('home');
  const [selectedShortcut, setSelectedShortcut] = useState<Shortcut | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);

  // 6. Search & Palette
  const [searchQuery, setSearchQuery] = useState('');
  const [isCommandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // 7. Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Translations helper
  const t = useMemo(() => getTranslation(language), [language]);

  // Sync theme to DOM
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const applyDark = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    if (theme === 'dark') {
      applyDark(true);
    } else if (theme === 'light') {
      applyDark(false);
    } else {
      // System
      if (typeof window !== 'undefined' && window.matchMedia) {
        try {
          const media = window.matchMedia('(prefers-color-scheme: dark)');
          applyDark(media.matches);

          const listener = (e: MediaQueryListEvent) => applyDark(e.matches);
          if (media.addEventListener) {
            media.addEventListener('change', listener);
            return () => media.removeEventListener('change', listener);
          }
        } catch {
          applyDark(false);
        }
      }
    }
  }, [theme]);

  // Sync sound setting
  useEffect(() => {
    soundManager.setEnabled(settings.soundEnabled);
  }, [settings.soundEnabled]);

  // Save progress & settings to SafeStorage
  useEffect(() => {
    safeStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    safeStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  // Update streak on day transition
  useEffect(() => {
    const today = getTodayDateString();
    setProgress(prev => {
      if (prev.lastActiveDate === today) return prev;

      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const isConsecutive = prev.lastActiveDate === yesterday;
      const newStreak = isConsecutive ? prev.streak + 1 : 1;
      const activeDays = prev.activeDays.includes(today) ? prev.activeDays : [...prev.activeDays, today];

      return {
        ...prev,
        streak: newStreak,
        lastActiveDate: today,
        activeDays,
      };
    });
  }, []);

  // Toast dispatch helper
  const addToast = (text: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(item => item.id !== id));
  };

  // Change Language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    setSettings(prev => ({ ...prev, language: lang }));
    addToast(getTranslation(lang).toasts.languageChanged, 'info');
  };

  // Change Theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    safeStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    setSettings(prev => ({ ...prev, theme: newTheme }));
    addToast(t.toasts.themeChanged, 'info');
  };

  // Navigation
  const navigate = (view: ViewName, options?: { category?: string; shortcutId?: string }) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (options?.category) {
      setActiveCategoryFilter(options.category);
    }
    if (options?.shortcutId) {
      const found = SHORTCUTS.find(s => s.id === options.shortcutId);
      if (found) {
        setSelectedShortcut(found);
      }
    }
  };

  // Shortcut modal
  const openShortcutModal = (shortcut: Shortcut) => {
    setSelectedShortcut(shortcut);
    soundManager.playClick();
    setProgress(prev => {
      const filtered = prev.recentlyViewedIds.filter(id => id !== shortcut.id);
      return {
        ...prev,
        recentlyViewedIds: [shortcut.id, ...filtered].slice(0, 10),
      };
    });
  };

  const closeShortcutModal = () => {
    setSelectedShortcut(null);
  };

  // Toggle favorite
  const toggleFavorite = (shortcutId: string) => {
    soundManager.playClick();
    setProgress(prev => {
      const isFav = prev.favoriteShortcutIds.includes(shortcutId);
      const nextFavs = isFav
        ? prev.favoriteShortcutIds.filter(id => id !== shortcutId)
        : [...prev.favoriteShortcutIds, shortcutId];

      addToast(
        isFav ? t.toasts.shortcutRemoved : t.toasts.shortcutSaved,
        isFav ? 'info' : 'success'
      );

      return {
        ...prev,
        favoriteShortcutIds: nextFavs,
      };
    });
  };

  // Toggle learned
  const toggleLearned = (shortcutId: string) => {
    soundManager.playClick();
    setProgress(prev => {
      const isLearned = prev.learnedShortcutIds.includes(shortcutId);
      const nextLearned = isLearned
        ? prev.learnedShortcutIds.filter(id => id !== shortcutId)
        : [...prev.learnedShortcutIds, shortcutId];

      if (!isLearned) {
        soundManager.playSuccess();
        addToast(t.toasts.markedLearned, 'success');

        // Check daily challenge progress
        const dc = { ...prev.dailyChallenge };
        if (!dc.completed) {
          dc.currentCount = Math.min(dc.targetCount, dc.currentCount + 1);
          if (dc.currentCount >= dc.targetCount) {
            dc.completed = true;
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
            addToast(t.toasts.dailyChallengeCompleted, 'success');
          }
        }

        return {
          ...prev,
          xp: prev.xp + 10 + (dc.completed && !prev.dailyChallenge.completed ? dc.xpReward : 0),
          learnedShortcutIds: nextLearned,
          dailyChallenge: dc,
        };
      } else {
        addToast(t.toasts.markedUnlearned, 'info');
        return {
          ...prev,
          learnedShortcutIds: nextLearned,
        };
      }
    });
  };

  // Add XP
  const addXP = (amount: number, reason?: string) => {
    setProgress(prev => {
      const newXp = prev.xp + amount;
      // check if leveled up
      const oldLevel = Math.floor(prev.xp / 100) + 1;
      const newLevel = Math.floor(newXp / 100) + 1;
      if (newLevel > oldLevel) {
        soundManager.playLevelUp();
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
        addToast(`🎉 Level Up! Level ${newLevel}!`, 'success');
      }
      return {
        ...prev,
        xp: newXp,
      };
    });
  };

  // Record practice attempt
  const recordPracticeAttempt = (shortcutId: string, isCorrect: boolean, timeMs: number) => {
    setProgress(prev => {
      const weak = { ...prev.practiceStats.weakShortcutIds };
      if (!isCorrect) {
        weak[shortcutId] = (weak[shortcutId] || 0) + 1;
      } else if (weak[shortcutId]) {
        // Decrease weakness count on successful practice
        weak[shortcutId] = Math.max(0, weak[shortcutId] - 1);
        if (weak[shortcutId] === 0) delete weak[shortcutId];
      }

      return {
        ...prev,
        practiceStats: {
          totalPracticed: prev.practiceStats.totalPracticed + 1,
          correct: prev.practiceStats.correct + (isCorrect ? 1 : 0),
          incorrect: prev.practiceStats.incorrect + (isCorrect ? 0 : 1),
          weakShortcutIds: weak,
        },
      };
    });
  };

  // Record quiz result
  const recordQuizResult = (summary: QuizSummary) => {
    setProgress(prev => {
      const historyItem = {
        id: Date.now().toString(),
        date: getTodayDateString(),
        score: summary.score,
        total: summary.totalQuestions,
        grade: summary.grade,
        timeSeconds: summary.timeSeconds,
      };

      return {
        ...prev,
        quizHistory: [historyItem, ...prev.quizHistory].slice(0, 30),
      };
    });
  };

  // Record game score
  const recordGameScore = (gameId: string, score: number, completed: boolean = true) => {
    setProgress(prev => {
      const currentHigh = prev.gameScores[gameId] || 0;
      const isNewBest = score > currentHigh;
      if (isNewBest) {
        addToast(t.toasts.newPersonalBest, 'success');
      }

      return {
        ...prev,
        gameScores: {
          ...prev.gameScores,
          [gameId]: Math.max(currentHigh, score),
        },
        gamesCompleted: prev.gamesCompleted + (completed ? 1 : 0),
      };
    });
  };

  // Update Settings
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Reset progress
  const resetAllProgress = () => {
    const today = getTodayDateString();
    setProgress({
      ...INITIAL_PROGRESS,
      lastActiveDate: today,
      activeDays: [today],
      dailyChallenge: { ...INITIAL_PROGRESS.dailyChallenge, date: today },
    });
    addToast(t.toasts.resetSuccess, 'info');
  };

  // Export JSON
  const exportProgressJSON = () => {
    try {
      const data = {
        app: "Windows Shortcut Master",
        version: "1.0.0",
        exportedAt: new Date().toISOString(),
        progress,
        settings,
      };
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'windows-shortcut-master-progress.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      addToast(t.toasts.dataExported, 'success');
    } catch {
      addToast('Export failed', 'error');
    }
  };

  // Import JSON
  const importProgressJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Invalid JSON structure');
      }

      if (parsed.progress) {
        // Validate fields
        const importedProgress = { ...INITIAL_PROGRESS, ...parsed.progress };
        if (typeof importedProgress.xp !== 'number') throw new Error('Invalid XP');
        setProgress(importedProgress);
      }

      if (parsed.settings) {
        setSettings(prev => ({ ...prev, ...parsed.settings }));
        if (parsed.settings.language) setLanguageState(parsed.settings.language);
        if (parsed.settings.theme) setThemeState(parsed.settings.theme);
      }

      addToast(t.toasts.dataImported, 'success');
      return true;
    } catch {
      addToast(t.toasts.importError, 'error');
      return false;
    }
  };

  // Level Calculation
  const levelInfo = useMemo(() => {
    const xp = progress.xp;
    const levelNumber = Math.max(1, Math.floor(xp / 100) + 1);
    const currentLevelBase = (levelNumber - 1) * 100;
    const nextLevelBase = levelNumber * 100;
    const progressPercent = Math.min(100, Math.max(0, ((xp - currentLevelBase) / 100) * 100));

    let title = t.levels.level1;
    if (levelNumber >= 20) title = t.levels.keyboardNinja;
    else if (levelNumber >= 15) title = t.levels.shortcutMaster;
    else if (levelNumber >= 10) title = t.levels.advanced;
    else if (levelNumber >= 5) title = t.levels.intermediate;
    else if (levelNumber >= 2) title = t.levels.beginner;

    return {
      levelNumber,
      title,
      currentLevelXp: xp - currentLevelBase,
      nextLevelXp: 100,
      progressPercent,
    };
  }, [progress.xp, t]);

  // Global Ctrl + K listener for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      } else if (e.key === 'Escape' && isCommandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        currentView,
        navigate,
        t,
        shortcuts: SHORTCUTS,
        selectedShortcut,
        openShortcutModal,
        closeShortcutModal,
        progress,
        settings,
        updateSettings,
        toggleFavorite,
        toggleLearned,
        addXP,
        recordPracticeAttempt,
        recordQuizResult,
        recordGameScore,
        resetAllProgress,
        exportProgressJSON,
        importProgressJSON,
        activeCategoryFilter,
        setActiveCategoryFilter,
        searchQuery,
        setSearchQuery,
        isCommandPaletteOpen,
        setCommandPaletteOpen,
        toasts,
        addToast,
        removeToast,
        levelInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
