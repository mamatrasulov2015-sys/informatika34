import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ShortcutCard } from '../components/ShortcutCard';
import { KeyBadge } from '../components/KeyBadge';
import {
  Keyboard,
  Award,
  Gamepad2,
  BookOpen,
  Flame,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  LayoutGrid,
  Maximize2,
  Folder,
  FileText,
  Camera,
  Layers,
  Sliders,
  Globe
} from 'lucide-react';
import { CATEGORY_METADATA } from '../data/shortcuts';

export const HomeView: React.FC = () => {
  const {
    shortcuts,
    progress,
    levelInfo,
    navigate,
    t,
    language,
    openShortcutModal
  } = useApp();

  // Shortcut of the day (deterministic by date)
  const shortcutOfTheDay = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
    );
    return shortcuts[dayOfYear % shortcuts.length] || shortcuts[0];
  }, [shortcuts]);

  // Essential top 6 shortcuts for quick start
  const essentialShortcuts = useMemo(() => {
    const essentialIds = ['win-e', 'win-d', 'win-v', 'win-shift-s', 'ctrl-z', 'win-tab'];
    return shortcuts.filter(s => essentialIds.includes(s.id));
  }, [shortcuts]);

  // Quick categories
  const featuredCategories = [
    { id: 'windows-system', label: t.categories['windows-system'], icon: <LayoutGrid className="w-5 h-5 text-blue-500" />, count: 15 },
    { id: 'window-management', label: t.categories['window-management'], icon: <Maximize2 className="w-5 h-5 text-indigo-500" />, count: 14 },
    { id: 'file-explorer', label: t.categories['file-explorer'], icon: <Folder className="w-5 h-5 text-amber-500" />, count: 12 },
    { id: 'text-editing', label: t.categories['text-editing'], icon: <FileText className="w-5 h-5 text-emerald-500" />, count: 12 },
    { id: 'screenshots', label: t.categories.screenshots, icon: <Camera className="w-5 h-5 text-rose-500" />, count: 6 },
    { id: 'virtual-desktops', label: t.categories['virtual-desktops'], icon: <Layers className="w-5 h-5 text-cyan-500" />, count: 6 },
    { id: 'browser', label: t.categories.browser, icon: <Globe className="w-5 h-5 text-lime-500" />, count: 8 },
    { id: 'taskbar', label: t.categories.taskbar, icon: <Sliders className="w-5 h-5 text-fuchsia-500" />, count: 8 },
  ];

  const dailyChallengeDesc =
    progress?.dailyChallenge?.description?.[language] ||
    progress?.dailyChallenge?.description?.en ||
    "Bugun 5 ta yangi kombinatsiyani o'rganing";

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white p-6 sm:p-10 shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Windows 11 & Windows 10 Rasmiy Qoidalari</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>

          {/* Quick Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              id="btn-hero-practice"
              onClick={() => navigate('practice')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm shadow-xl hover:bg-blue-50 transition-all hover:scale-102"
            >
              <Keyboard className="w-4 h-4 text-blue-600" />
              <span>{t.hero.startPractice}</span>
            </button>

            <button
              type="button"
              id="btn-hero-quiz"
              onClick={() => navigate('quiz')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600/60 hover:bg-blue-600 text-white font-bold text-sm backdrop-blur-md border border-white/20 transition-all hover:scale-102"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>{t.hero.takeQuiz}</span>
            </button>

            <button
              type="button"
              id="btn-hero-shortcuts"
              onClick={() => navigate('shortcuts')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 text-white font-semibold text-sm backdrop-blur-md border border-white/10 transition-all"
            >
              <BookOpen className="w-4 h-4 text-slate-300" />
              <span>{t.hero.browseShortcuts}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats & Daily Challenge Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Daily Challenge Card */}
        <div className="md:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {t.progress.dailyChallenge}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {dailyChallengeDesc}
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                +{progress.dailyChallenge.xpReward} XP
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                <span>{progress.dailyChallenge.completed ? t.progress.completed : 'Bugungi reja'}</span>
                <span className="font-bold">
                  {progress.dailyChallenge.currentCount} / {progress.dailyChallenge.targetCount}
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-indigo-600 transition-all duration-500 rounded-full"
                  style={{
                    width: `${Math.min(100, (progress.dailyChallenge.currentCount / progress.dailyChallenge.targetCount) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {progress.dailyChallenge.completed
                ? 'Tabriklaymiz! Bugungi vazifa to\'liq bajarildi!'
                : 'Yangi kombinatsiyalarni o\'rganing va bajaring'}
            </span>
            <button
              type="button"
              onClick={() => navigate('shortcuts')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
            >
              <span>{t.hero.browseShortcuts}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Level & XP Overview Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-600 text-white">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {t.progress.myLevel}
                  </h4>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">
                    Level {levelInfo.levelNumber} • {levelInfo.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>{progress.xp} Total XP</span>
                <span>{levelInfo.progressPercent.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 pt-4 border-t border-indigo-100 dark:border-indigo-900/40 text-center">
            <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/50">
              <div className="text-base font-bold text-slate-900 dark:text-white">
                {progress.learnedShortcutIds.length}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                {t.progress.learnedShortcuts}
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/50">
              <div className="text-base font-bold text-slate-900 dark:text-white">
                {progress.streak}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                {t.progress.dayStreak}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shortcut of the Day Spotlight */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {t.home.shortcutOfDay}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50/70 dark:from-slate-900/70 dark:via-blue-950/20 dark:to-slate-900/70 border border-blue-100 dark:border-slate-700">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                {t.categories[shortcutOfTheDay.category as keyof typeof t.categories] || shortcutOfTheDay.category}
              </span>
              <span className="text-xs text-slate-500">
                {t.difficulty[shortcutOfTheDay.difficulty]}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {shortcutOfTheDay.title[language] || shortcutOfTheDay.title.en}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {shortcutOfTheDay.description[language] || shortcutOfTheDay.description.en}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <div className="flex items-center gap-2">
              {shortcutOfTheDay.keys.map((k, idx) => (
                <React.Fragment key={idx}>
                  <KeyBadge keyLabel={k} size="lg" className="shadow-md" />
                  {idx < shortcutOfTheDay.keys.length - 1 && (
                    <span className="text-slate-400 font-bold">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={() => openShortcutModal(shortcutOfTheDay)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              {t.common.details}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Category Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.home.popularCategories}
          </h2>
          <button
            type="button"
            onClick={() => navigate('shortcuts')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <span>{t.home.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {featuredCategories.map(cat => (
            <div
              key={cat.id}
              onClick={() => navigate('shortcuts', { category: cat.id })}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5 group"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/50 w-fit group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="mt-3 font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cat.label}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {cat.count} {t.home.shortcutsAvailable}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Essential Shortcuts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.home.essentialShortcuts}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Har bir Windows foydalanuvchisi yod olishi shart bo'lgan oltin qoidalar
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('shortcuts')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <span>{t.home.viewAll} (111)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {essentialShortcuts.map(sc => (
            <ShortcutCard key={sc.id} shortcut={sc} />
          ))}
        </div>
      </section>

      {/* Brain Games & Training Callout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          onClick={() => navigate('practice')}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] group"
        >
          <div className="p-3 rounded-2xl bg-white/20 w-fit backdrop-blur-md mb-4">
            <Keyboard className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Interaktiv Mashq Xonasi</h3>
          <p className="mt-2 text-emerald-100 text-sm leading-relaxed">
            Haqiqiy klaviatura bilan sinab ko'ring. Tezkor javoblar, streak ko'paytmasi va ovozli fikr-mulohazalar bilan mushak xotirasini shakllantiring.
          </p>
          <div className="mt-6 flex items-center gap-1.5 font-bold text-sm text-white group-hover:translate-x-1 transition-transform">
            <span>Mashqni boshlash</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div
          onClick={() => navigate('games')}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-800 text-white cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] group"
        >
          <div className="p-3 rounded-2xl bg-white/20 w-fit backdrop-blur-md mb-4">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">10 Ta Qiziqarli O'yin</h3>
          <p className="mt-2 text-purple-100 text-sm leading-relaxed">
            Memory Flip, Speed Typer, Boss Challenge va Detective rejimlarida o'ynab o'rganing. Rekordlar o'rnating va yangi yutuqlarni oching!
          </p>
          <div className="mt-6 flex items-center gap-1.5 font-bold text-sm text-white group-hover:translate-x-1 transition-transform">
            <span>O'yinlar maydoniga o'tish</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </section>
    </div>
  );
};
