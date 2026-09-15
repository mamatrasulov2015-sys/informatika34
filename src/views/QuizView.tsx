import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { getAllQuizQuestions } from '../data/quizzes';
import { QuizQuestion, QuizSummary } from '../types';
import { KeyBadge } from '../components/KeyBadge';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Timer,
  Check,
  Zap,
  BookOpen
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const {
    shortcuts,
    recordQuizResult,
    addXP,
    language,
    t,
    navigate
  } = useApp();

  // All 105+ questions generated and verified
  const allQuestions = useMemo(() => getAllQuizQuestions(shortcuts), [shortcuts]);

  // Quiz Setup & Session State
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizLength, setQuizLength] = useState<number>(10);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Active Question State
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answersLog, setAnswersLog] = useState<{ question: QuizQuestion; selectedId: string; isCorrect: boolean }[]>([]);

  // Timer
  const [startTime, setStartTime] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);

  // Start Quiz
  const startQuiz = (len: number = quizLength) => {
    let pool = [...allQuestions];
    if (selectedDifficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === selectedDifficulty);
    }
    // Shuffle pool
    const selected = pool.sort(() => 0.5 - Math.random()).slice(0, len);
    setActiveQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setAnswersLog([]);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setIsFinished(false);
    setStartTime(Date.now());
    setQuizStarted(true);
  };

  const currentQ: QuizQuestion | undefined = activeQuestions[currentIndex];

  // Submit Answer
  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
    setIsAnswerSubmitted(true);

    const isCorrect = optionId === currentQ.correctAnswerId;
    if (isCorrect) {
      soundManager.playSuccess();
      setScore(prev => prev + 1);
      addXP(25);
    } else {
      soundManager.playError();
    }

    setAnswersLog(prev => [...prev, { question: currentQ, selectedId: optionId, isCorrect }]);
  };

  // Move to next question or finish
  const handleNext = () => {
    if (currentIndex + 1 >= activeQuestions.length) {
      // Finish
      const timeSec = Math.round((Date.now() - startTime) / 1000);
      const finalScore = score + (selectedOptionId === currentQ.correctAnswerId ? 0 : 0); // already updated
      const percent = (score / activeQuestions.length) * 100;
      let grade: 'A+' | 'A' | 'B' | 'C' | 'F' = 'F';
      if (percent >= 95) grade = 'A+';
      else if (percent >= 85) grade = 'A';
      else if (percent >= 70) grade = 'B';
      else if (percent >= 50) grade = 'C';

      const summary: QuizSummary = {
        totalQuestions: activeQuestions.length,
        score,
        timeSeconds: timeSec,
        grade,
        passed: percent >= 70,
        weakCategoryIds: [],
      };

      recordQuizResult(summary);
      setIsFinished(true);

      if (percent >= 70) {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
        soundManager.playLevelUp();
      }
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      {/* Quiz Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-amber-500" />
          <span>{t.quiz.title}</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t.quiz.subtitle} • {allQuestions.length} ta rasmiy savollar bazasi
        </p>
      </div>

      {/* Start / Setup Screen */}
      {!quizStarted && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-lg space-y-6">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Test parametrlarini tanlang
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              O'z bilimingizni sinab ko'ring va natijalarga qarab yangi darajalarga ko'tariling.
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            {/* Length selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Savollar soni / Test Length
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[10, 20, 30].map(len => (
                  <button
                    key={len}
                    type="button"
                    onClick={() => setQuizLength(len)}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                      quizLength === len
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    {len} ta savol
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Qiyinlik darajasi / Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                <option value="all">Barcha darajalar (Aralash)</option>
                <option value="beginner">{t.difficulty.beginner} (Boshlang'ich)</option>
                <option value="intermediate">{t.difficulty.intermediate} (O'rta)</option>
                <option value="advanced">{t.difficulty.advanced} (Murakkab)</option>
              </select>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              type="button"
              id="btn-start-quiz"
              onClick={() => startQuiz(quizLength)}
              className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 hover:scale-102 transition-all"
            >
              Testni Boshlash ({quizLength} ta savol)
            </button>
          </div>
        </div>
      )}

      {/* Finished Summary Screen */}
      {quizStarted && isFinished && (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xl space-y-6 animate-in zoom-in-95 duration-150">
          <div className="text-center space-y-2">
            <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-950/60 border-2 border-amber-500 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-3xl font-extrabold shadow-lg">
              {Math.round((score / activeQuestions.length) * 100) >= 90 ? 'A+' : Math.round((score / activeQuestions.length) * 100) >= 75 ? 'A' : Math.round((score / activeQuestions.length) * 100) >= 60 ? 'B' : 'C'}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.quiz.quizFinished}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Siz {activeQuestions.length} ta savoldan {score} tasiga to'g'ri javob berdingiz ({((score / activeQuestions.length) * 100).toFixed(0)}%)
            </p>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-3 max-h-80 overflow-y-auto p-1">
            {answersLog.map((log, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-xl border text-xs flex items-start justify-between gap-3 ${
                  log.isCorrect
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50'
                    : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/50'
                }`}
              >
                <div className="space-y-1 flex-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {i + 1}. {log.question.question[language] || log.question.question.en}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {log.question.explanation[language] || log.question.explanation.en}
                  </div>
                </div>

                <div className="shrink-0">
                  {log.isCorrect ? (
                    <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> To'g'ri
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 font-bold text-rose-600 dark:text-rose-400">
                      <XCircle className="w-4 h-4" /> Xato
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => startQuiz(quizLength)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qayta topshirish</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('practice')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>Mashq zaliga o'tish</span>
            </button>
          </div>
        </div>
      )}

      {/* Active Question Card */}
      {quizStarted && !isFinished && currentQ && (
        <div className="space-y-5">
          {/* Progress Header */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-700 dark:text-slate-300">
                Savol: {currentIndex + 1} / {activeQuestions.length}
              </span>
              <div className="w-24 sm:w-40 h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400">
              <Zap className="w-4 h-4 fill-indigo-500" />
              <span>{score} ball</span>
            </div>
          </div>

          {/* Question Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-md space-y-6">
            <div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                {t.categories[currentQ.category as keyof typeof t.categories] || currentQ.category}
              </span>
              <h2 className="mt-3 text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.question[language] || currentQ.question.en}
              </h2>
            </div>

            {/* Missing key indicator (if applicable) */}
            {currentQ.partialKeys && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2">
                {currentQ.partialKeys.map((k, idx) => (
                  <React.Fragment key={idx}>
                    <KeyBadge keyLabel={k} size="lg" />
                    <span className="font-bold text-slate-400">+</span>
                  </React.Fragment>
                ))}
                <span className="px-4 py-2 border-2 border-dashed border-blue-500 text-blue-600 font-bold rounded-xl text-base bg-blue-50/50 dark:bg-blue-950/50">
                  ?
                </span>
              </div>
            )}

            {/* Answer Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map(opt => {
                const isSelected = selectedOptionId === opt.id;
                const isCorrectAnswer = opt.id === currentQ.correctAnswerId;

                let btnStyles = 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50/30';
                if (isAnswerSubmitted) {
                  if (isCorrectAnswer) {
                    btnStyles = 'bg-emerald-500 text-white border-emerald-600 shadow-md ring-2 ring-emerald-400';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-500 text-white border-rose-600 shadow-md ring-2 ring-rose-400';
                  } else {
                    btnStyles = 'opacity-50 border-slate-200 dark:border-slate-700';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-4 rounded-2xl border text-left font-semibold text-sm transition-all duration-150 flex items-center justify-between gap-3 ${btnStyles}`}
                  >
                    <div className="flex items-center gap-2">
                      {opt.keys ? (
                        <div className="flex items-center gap-1">
                          {opt.keys.map((k, ki) => (
                            <KeyBadge key={ki} keyLabel={k} size="sm" />
                          ))}
                        </div>
                      ) : (
                        <span>{opt.text[language] || opt.text.en}</span>
                      )}
                    </div>

                    {isAnswerSubmitted && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-white shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-200 space-y-1 animate-in fade-in">
                <div className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-blue-700 dark:text-blue-300">
                  <Sparkles className="w-4 h-4" />
                  <span>Tushuntirish / Explanation</span>
                </div>
                <p className="leading-relaxed text-sm">
                  {currentQ.explanation[language] || currentQ.explanation.en}
                </p>
              </div>
            )}

            {/* Next Button */}
            {isAnswerSubmitted && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  id="btn-quiz-next"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all hover:scale-102"
                >
                  <span>{currentIndex + 1 >= activeQuestions.length ? 'Natijalarni ko\'rish' : 'Keyingi savol'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
