import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { KeyBadge } from '../components/KeyBadge';
import {
  BarChart3,
  Flame,
  Zap,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  BookOpen,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProgressView: React.FC = () => {
  const {
    progress,
    levelInfo,
    shortcuts,
    navigate,
    language,
    t
  } = useApp();

  // Category completion stats
  const categoryStats = useMemo(() => {
    const map: Record<string, { total: number; learned: number }> = {};
    shortcuts.forEach(s => {
      if (!map[s.category]) {
        map[s.category] = { total: 0, learned: 0 };
      }
      map[s.category].total += 1;
      if (progress?.learnedShortcutIds?.includes(s.id)) {
        map[s.category].learned += 1;
      }
    });
    return Object.entries(map).map(([category, data]) => ({
      category,
      total: data.total,
      learned: data.learned,
      percent: Math.round((data.learned / data.total) * 100),
    }));
  }, [shortcuts, progress?.learnedShortcutIds]);

  // Weak shortcuts lookup
  const weakShortcutsList = useMemo(() => {
    const weakIds = Object.keys(progress?.practiceStats?.weakShortcutIds || {});
    return shortcuts.filter(s => weakIds.includes(s.id));
  }, [shortcuts, progress?.practiceStats?.weakShortcutIds]);

  // 30 days activity dots mock/calendar
  const days = useMemo(() => {
    const list = [];
    const today = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const str = d.toISOString().split('T')[0];
      list.push({
        date: str,
        dayNumber: d.getDate(),
        isActive: Boolean(progress?.activeDays?.includes(str)),
      });
    }
    return list;
  }, [progress?.activeDays]);

  const accuracy = (progress?.practiceStats?.totalPracticed || 0) > 0
    ? Math.round(((progress?.practiceStats?.correct || 0) / progress.practiceStats.totalPracticed) * 100)
    : 100;

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <span>{t.progress.title}</span>
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t.progress.subtitle}
        </p>
      </div>

      {/* Main Level & Streak Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Level Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Zap className="w-6 h-6 fill-indigo-500" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Level {levelInfo.levelNumber}</span>
          </div>
          <div className="mt-4">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">{levelInfo.title}</div>
            <div className="flex justify-between text-xs text-slate-500 mt-2 mb-1">
              <span>{progress.xp} XP</span>
              <span>{levelInfo.progressPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all"
                style={{ width: `${levelInfo.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Streak Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Flame className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Davomiylik</span>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{progress.streak} kun</div>
            <p className="text-xs text-slate-500 mt-1">Ketma-ket faol kunlar seriyasi</p>
          </div>
        </div>

        {/* Learned Shortcuts */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">O'zlashtirilgan</span>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {progress.learnedShortcutIds.length} <span className="text-sm font-normal text-slate-400">/ {shortcuts.length}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Jami bazaning {((progress.learnedShortcutIds.length / shortcuts.length) * 100).toFixed(0)}% qismi
            </p>
          </div>
        </div>

        {/* Practice Accuracy */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Aniq javoblar</span>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{accuracy}%</div>
            <p className="text-xs text-slate-500 mt-1">
              {progress.practiceStats.totalPracticed} ta mashq urinishida
            </p>
          </div>
        </div>
      </div>

      {/* Activity Heatmap (Last 28 Days) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-500" />
            <span>Faollik taqvimi (So'nggi 4 hafta)</span>
          </h3>
          <span className="text-xs text-slate-400">Har bir katak bitta kunni ifodalaydi</span>
        </div>

        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2 pt-2">
          {days.map((d, idx) => (
            <div
              key={idx}
              className={`h-12 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                d.isActive
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm font-bold scale-105'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700/60 text-slate-400'
              }`}
              title={`${d.date}: ${d.isActive ? 'Faol bo\'lingan' : 'Faollik yo\'q'}`}
            >
              <span className="text-xs">{d.dayNumber}</span>
              <span className="text-[9px]">{d.isActive ? '✓' : '•'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weak Points Section */}
      {weakShortcutsList.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500" />
                <span>Zaif nuqtalar ({weakShortcutsList.length} ta kombinatsiya)</span>
              </h3>
              <p className="text-xs text-rose-700 dark:text-rose-400 mt-0.5">
                Mashq va testlarda siz eng ko'p adashgan kombinatsiyalar
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('practice')}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors w-fit"
            >
              Zaif nuqtalarni mashq qilish
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {weakShortcutsList.slice(0, 6).map(sc => (
              <div
                key={sc.id}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/60 flex items-center justify-between gap-2"
              >
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">
                    {sc.title[language] || sc.title.en}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate max-w-[160px]">
                    {sc.description[language] || sc.description.en}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {sc.keys.map((k, i) => (
                    <KeyBadge key={i} keyLabel={k} size="sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Mastery Progress Bars */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-500" />
          <span>Bo'limlar bo'yicha o'zlashtirish</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categoryStats.map(item => (
            <div key={item.category} className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>{t.categories[item.category as keyof typeof t.categories] || item.category}</span>
                <span>
                  {item.learned} / {item.total} ({item.percent}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz History Table */}
      {progress.quizHistory.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Topshirilgan testlar tarixi
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-bold">
                <tr>
                  <th className="py-2.5">Sana</th>
                  <th className="py-2.5">Natija</th>
                  <th className="py-2.5">Daraja (Grade)</th>
                  <th className="py-2.5">Vaqt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {progress.quizHistory.slice(0, 10).map(item => (
                  <tr key={item.id}>
                    <td className="py-3 font-mono">{item.date}</td>
                    <td className="py-3 font-bold">
                      {item.score} / {item.total} ({Math.round((item.score / item.total) * 100)}%)
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        item.grade === 'A+' || item.grade === 'A'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      }`}>
                        {item.grade}
                      </span>
                    </td>
                    <td className="py-3 font-mono">{item.timeSeconds} soniya</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
