export type Language = 'uz' | 'en' | 'ru';

export type Theme = 'light' | 'dark' | 'system';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type DifficultyLevel = Difficulty;

export type WindowsVersion = 'all' | 'win10-11' | 'win11';

export type ShortcutCategory =
  | 'windows-system'
  | 'window-management'
  | 'file-explorer'
  | 'text-editing'
  | 'clipboard'
  | 'screenshots'
  | 'virtual-desktops'
  | 'accessibility'
  | 'taskbar'
  | 'search'
  | 'settings'
  | 'terminal'
  | 'productivity'
  | 'office'
  | 'browser'
  | 'power-user';

export interface LocalizedText {
  uz: string;
  en: string;
  ru: string;
}

export interface Shortcut {
  id: string;
  keys: string[];
  title: LocalizedText;
  description: LocalizedText;
  category: ShortcutCategory;
  difficulty: Difficulty;
  winVersion: WindowsVersion;
  tags: string[];
  example: LocalizedText;
  alternativeShortcut?: string[];
  applicationSpecific?: boolean;
  systemLevel?: boolean; // May be captured by OS instead of browser
  note?: LocalizedText;
}

export type PracticeMode = 'beginner' | 'normal' | 'hard' | 'speed';

export interface PracticeResult {
  shortcutId: string;
  isCorrect: boolean;
  timeTakenMs: number;
}

export type QuizQuestionType =
  | 'multiple-choice'
  | 'matching'
  | 'true-false'
  | 'correct-shortcut'
  | 'scenario'
  | 'missing-key';

export interface QuizOption {
  id: string;
  text: LocalizedText;
  keys?: string[];
}

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: LocalizedText;
  options: QuizOption[];
  correctAnswerId: string;
  explanation: LocalizedText;
  category: ShortcutCategory;
  difficulty: Difficulty;
  shortcutId?: string;
  missingKeyIndex?: number;
  partialKeys?: string[];
}

export interface QuizSummary {
  score: number;
  totalQuestions: number;
  accuracy?: number;
  correctCount?: number;
  incorrectCount?: number;
  timeSeconds: number;
  grade: string;
  passed?: boolean;
  weakCategoryIds?: string[];
  weakCategories?: ShortcutCategory[];
  recommendedShortcuts?: string[];
}

export interface DailyChallengeState {
  date: string; // YYYY-MM-DD
  targetCount: number;
  currentCount: number;
  completed: boolean;
  description: LocalizedText;
  xpReward: number;
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastActiveDate: string;
  activeDays: string[]; // YYYY-MM-DD
  learnedShortcutIds: string[];
  favoriteShortcutIds: string[];
  recentlyViewedIds: string[];
  practiceStats: {
    totalPracticed: number;
    correct: number;
    incorrect: number;
    weakShortcutIds: Record<string, number>; // shortcutId -> error count
  };
  quizHistory: {
    id: string;
    date: string;
    score: number;
    total: number;
    grade: string;
    timeSeconds: number;
  }[];
  gameScores: Record<string, number>; // gameId -> high score or completed count
  gamesCompleted: number;
  dailyChallenge: DailyChallengeState;
}

export interface UserSettings {
  language: Language;
  theme: Theme;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  reducedMotion: boolean;
  practiceDifficulty: PracticeMode;
}

export interface ToastMessage {
  id: string;
  text: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export type ViewName =
  | 'home'
  | 'shortcuts'
  | 'practice'
  | 'quiz'
  | 'games'
  | 'favorites'
  | 'progress'
  | 'settings';
