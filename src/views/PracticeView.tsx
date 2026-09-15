import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { KeyBadge } from '../components/KeyBadge';
import { VirtualKeyboard } from '../components/VirtualKeyboard';
import { Shortcut, PracticeMode } from '../types';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';
import {
  Keyboard,
  Flame,
  Zap,
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ShieldAlert,
  ArrowRight,
  Play,
  Pause,
  Award
} from 'lucide-react';

export const PracticeView: React.FC = () => {
  const {
    shortcuts,
    progress,
    recordPracticeAttempt,
    addXP,
    language,
    t,
    addToast
  } = useApp();

  // Practice state
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('normal');
  const [queue, setQueue] = useState<Shortcut[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Active keyboard tracking
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'incorrect'>('none');
  const [showHint, setShowHint] = useState<boolean>(practiceMode === 'beginner');

  const currentShortcut: Shortcut | undefined = queue[currentIndex];

  // Initialize practice queue
  const startSession = (mode: PracticeMode = practiceMode) => {
    setPracticeMode(mode);
    // Shuffle and pick 15 shortcuts
    const shuffled = [...shortcuts].sort(() => 0.5 - Math.random()).slice(0, 15);
    setQueue(shuffled);
    setCurrentIndex(0);
    setCurrentStreak(0);
    setScore(0);
    setAttempts(0);
    setIsCompleted(false);
    setIsPlaying(true);
    setFeedback('none');
    setShowHint(mode === 'beginner');

    const defaultTimes: Record<PracticeMode, number> = {
      beginner: 20,
      normal: 10,
      hard: 6,
      speed: 60, // global 60s
    };
    setTimeLeft(defaultTimes[mode]);
  };

  useEffect(() => {
    startSession('normal');
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!isPlaying || isCompleted || !currentShortcut) return;

    if (practiceMode === 'speed') {
      // Speed run counts down globally to 0
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            finishSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // Normal / Hard / Beginner counts per question
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Time out on current shortcut
            handleFail('Vaqt tugadi! / Time out!');
            return practiceMode === 'hard' ? 6 : 10;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isCompleted, currentIndex, practiceMode]);

  const finishSession = () => {
    setIsPlaying(false);
    setIsCompleted(true);
    if (timerRef.current) clearInterval(timerRef.current);

    // Final confetti
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    soundManager.playLevelUp();
  };

  // Move to next shortcut
  const advance = useCallback(() => {
    setPressedKeys([]);
    setFeedback('none');

    if (currentIndex + 1 >= queue.length) {
      finishSession();
    } else {
      setCurrentIndex(prev => prev + 1);
      if (practiceMode !== 'speed') {
        const time = practiceMode === 'hard' ? 6 : practiceMode === 'beginner' ? 20 : 10;
        setTimeLeft(time);
      }
    }
  }, [currentIndex, queue.length, practiceMode]);

  // Handle success
  const handleSuccess = useCallback(() => {
    if (feedback === 'correct') return;
    setFeedback('correct');
    soundManager.playSuccess();

    const streak = currentStreak + 1;
    setCurrentStreak(streak);
    setBestStreak(prev => Math.max(prev, streak));

    // Calculate XP based on streak and mode
    const multiplier = practiceMode === 'hard' ? 2 : practiceMode === 'speed' ? 1.5 : 1;
    const gainedXp = Math.round((10 + Math.min(20, streak * 2)) * multiplier);
    setScore(prev => prev + gainedXp);
    setAttempts(prev => prev + 1);

    if (currentShortcut) {
      recordPracticeAttempt(currentShortcut.id, true, 1000);
      addXP(gainedXp);
    }

    setTimeout(() => {
      advance();
    }, 650);
  }, [feedback, currentStreak, practiceMode, currentShortcut, recordPracticeAttempt, addXP, advance]);

  // Handle fail
  const handleFail = useCallback((reason?: string) => {
    if (feedback === 'incorrect') return;
    setFeedback('incorrect');
    soundManager.playError();
    setCurrentStreak(0);
    setAttempts(prev => prev + 1);

    if (currentShortcut) {
      recordPracticeAttempt(currentShortcut.id, false, 3000);
    }

    if (reason) {
      addToast(reason, 'warning');
    }

    setTimeout(() => {
      advance();
    }, 850);
  }, [feedback, currentShortcut, recordPracticeAttempt, addToast, advance]);

  // Normalize key from event
  const normalizeKey = (key: string): string => {
    if (key === 'Control') return 'Ctrl';
    if (key === 'Meta') return 'Win';
    if (key === ' ') return 'Space';
    if (key === 'ArrowLeft') return 'Left';
    if (key === 'ArrowRight') return 'Right';
    if (key === 'ArrowUp') return 'Up';
    if (key === 'ArrowDown') return 'Down';
    if (key === 'Escape') return 'Esc';
    return key.length === 1 ? key.toUpperCase() : key;
  };

  // Keyboard Event Listener
  useEffect(() => {
    if (!isPlaying || isCompleted || !currentShortcut) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent browser defaults for standard shortcuts while in practice mode
      if (
        (e.ctrlKey && ['s', 'f', 'h', 'p', 'd', 'e', 't', 'w', 'j', 'b'].includes(e.key.toLowerCase())) ||
        (e.altKey && e.key.toLowerCase() === 'd')
      ) {
        e.preventDefault();
      }

      const normalized = normalizeKey(e.key);
      soundManager.playClick();

      setPressedKeys(prev => {
        if (!prev.includes(normalized)) {
          return [...prev, normalized];
        }
        return prev;
      });

      // Check current pressed modifiers and key
      const pressedList: string[] = [];
      if (e.metaKey) pressedList.push('Win');
      if (e.ctrlKey) pressedList.push('Ctrl');
      if (e.altKey) pressedList.push('Alt');
      if (e.shiftKey) pressedList.push('Shift');

      const mainKey = normalizeKey(e.key);
      if (!['Ctrl', 'Win', 'Alt', 'Shift'].includes(mainKey) && !pressedList.includes(mainKey)) {
        pressedList.push(mainKey);
      }

      // Check if matches target shortcut
      const targetKeys = currentShortcut.keys.map(k => k.toLowerCase());
      const currentKeys = pressedList.map(k => k.toLowerCase());

      const allMatch =
        targetKeys.length === currentKeys.length &&
        targetKeys.every(k => currentKeys.includes(k));

      if (allMatch) {
        e.preventDefault();
        handleSuccess();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const normalized = normalizeKey(e.key);
      setPressedKeys(prev => prev.filter(k => k !== normalized));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isPlaying, isCompleted, currentShortcut, handleSuccess]);

  const accuracy = attempts > 0 ? Math.round(((attempts - (attempts - (score > 0 ? currentIndex : 0))) / attempts) * 100) : 100;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Keyboard className="w-7 h-7 text-blue-600" />
            <span>{t.practice.title}</span>
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t.practice.subtitle}
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start">
          {(['beginner', 'normal', 'hard', 'speed'] as PracticeMode[]).map(mode => (
            <button
              key={mode}
              type="button"
              onClick={() => startSession(mode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                practiceMode === mode
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.practice.modes[mode]}
            </button>
          ))}
        </div>
      </div>

      {/* Completion View */}
      {isCompleted ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-center shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 shadow-lg shadow-emerald-500/20">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.quiz.perfectScore}
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Mashq yakunlandi! Mushak xotirangiz ancha mustahkamlandi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">+{score}</div>
              <div className="text-xs text-slate-500 mt-0.5">Topilgan XP</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-extrabold text-amber-500">{bestStreak}</div>
              <div className="text-xs text-slate-500 mt-0.5">Maks. Streak</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-extrabold text-blue-600">{queue.length}</div>
              <div className="text-xs text-slate-500 mt-0.5">Jami Mashq</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 mt-0.5">Aniq Bajarildi</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => startSession(practiceMode)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Yana mashq qilish</span>
            </button>
          </div>
        </div>
      ) : currentShortcut ? (
        /* Active Practice Card */
        <div className="space-y-6">
          {/* Top Status Bar: Progress, Timer, Streak */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm text-sm">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-700 dark:text-slate-300">
                {currentIndex + 1} / {queue.length}
              </span>
              <div className="w-24 sm:w-36 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / queue.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Streak */}
              <div className="flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400">
                <Flame className={`w-4 h-4 ${currentStreak > 1 ? 'fill-amber-500 animate-bounce' : ''}`} />
                <span>{currentStreak}x</span>
              </div>

              {/* Timer */}
              <div className={`flex items-center gap-1 font-mono font-bold ${timeLeft <= 3 ? 'text-rose-600 animate-pulse' : 'text-slate-700 dark:text-slate-300'}`}>
                <Timer className="w-4 h-4" />
                <span>{timeLeft}s</span>
              </div>

              {/* Score */}
              <div className="flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400">
                <Zap className="w-4 h-4 fill-indigo-500" />
                <span>+{score} XP</span>
              </div>
            </div>
          </div>

          {/* Interactive Flashcard Arena */}
          <div
            className={`relative p-8 sm:p-12 rounded-3xl border transition-all duration-200 shadow-xl flex flex-col items-center justify-center text-center ${
              feedback === 'correct'
                ? 'bg-emerald-500 text-white border-emerald-600 scale-[1.02]'
                : feedback === 'incorrect'
                ? 'bg-rose-500 text-white border-rose-600 animate-shake'
                : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700'
            }`}
          >
            {/* Category tag */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                feedback !== 'none'
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
              }`}
            >
              {t.categories[currentShortcut.category as keyof typeof t.categories] || currentShortcut.category}
            </span>

            {/* Title & Goal */}
            <h2
              className={`text-2xl sm:text-4xl font-extrabold max-w-xl ${
                feedback !== 'none' ? 'text-white' : 'text-slate-900 dark:text-white'
              }`}
            >
              {currentShortcut.title[language] || currentShortcut.title.en}
            </h2>

            <p
              className={`mt-2 text-sm sm:text-base max-w-md ${
                feedback !== 'none' ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {currentShortcut.description[language] || currentShortcut.description.en}
            </p>

            {/* Target Keys Display / Hint */}
            <div className="my-8">
              {showHint || practiceMode === 'beginner' || feedback !== 'none' ? (
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center animate-in zoom-in-95">
                  {currentShortcut.keys.map((k, i) => (
                    <React.Fragment key={i}>
                      <KeyBadge
                        keyLabel={k}
                        size="lg"
                        highlighted={feedback === 'none'}
                        active={pressedKeys.includes(normalizeKey(k))}
                        className="text-lg"
                      />
                      {i < currentShortcut.keys.length - 1 && (
                        <span className={`font-bold text-xl ${feedback !== 'none' ? 'text-white' : 'text-slate-400'}`}>
                          +
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowHint(true)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Kombinatsiyani ko'rsatish (Maslahat)</span>
                </button>
              )}
            </div>

            {/* Real-time Pressed Keys Feedback */}
            <div className="flex items-center gap-2 min-h-8">
              <span className={`text-xs ${feedback !== 'none' ? 'text-white/80' : 'text-slate-400'}`}>
                {feedback === 'correct' ? 'To\'g\'ri! / Perfect!' : 'Bosilayotgan tugmalar:'}
              </span>
              {pressedKeys.length > 0 && (
                <div className="flex items-center gap-1">
                  {pressedKeys.map((k, i) => (
                    <KeyBadge key={i} keyLabel={k} size="sm" active />
                  ))}
                </div>
              )}
            </div>

            {/* CRITICAL SECURITY FALLBACK: For browser-intercepted OS shortcuts */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60 w-full max-w-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {t.practice.browserBlocked}
                </span>
              </div>

              <button
                type="button"
                id="btn-i-pressed-it"
                onClick={handleSuccess}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs shrink-0 transition-colors shadow-sm"
              >
                {t.practice.iPressedIt}
              </button>
            </div>
          </div>

          {/* Virtual Keyboard visualizer sync */}
          <div className="pt-2">
            <VirtualKeyboard
              activeKeys={showHint || practiceMode === 'beginner' ? currentShortcut.keys : []}
              pressedKeys={pressedKeys}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
