import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { KeyBadge } from '../components/KeyBadge';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';
import {
  Gamepad2,
  Trophy,
  Flame,
  Timer,
  RotateCcw,
  Sparkles,
  Award,
  ArrowLeft,
  Zap,
  CheckCircle2,
  XCircle,
  Brain,
  Shield,
  Search,
  Eye,
  Crosshair,
  Shuffle
} from 'lucide-react';
import { Shortcut } from '../types';

type GameId =
  | 'lobby'
  | 'key-match'
  | 'memory-flip'
  | 'speed-typer'
  | 'missing-key'
  | 'boss-challenge'
  | 'categorize-it'
  | 'shortcut-detective'
  | 'key-reflex'
  | 'win-blitz'
  | 'survival';

export const GamesView: React.FC = () => {
  const {
    shortcuts,
    progress,
    recordGameScore,
    addXP,
    language,
    t
  } = useApp();

  const [activeGame, setActiveGame] = useState<GameId>('lobby');

  // Mini-game list definition
  const gamesList = [
    {
      id: 'key-match' as GameId,
      name: 'Key Match',
      desc: 'Kombinatsiyalarni ularning to\'g\'ri ta\'riflari bilan juftlang.',
      icon: <Shuffle className="w-6 h-6 text-blue-500" />,
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-300 dark:border-blue-800',
      difficulty: 'Boshlang\'ich',
    },
    {
      id: 'memory-flip' as GameId,
      name: 'Memory Flip',
      desc: 'Xotira kartalari: bir xil juftliklarni toping.',
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      color: 'from-purple-500/20 to-pink-500/20 border-purple-300 dark:border-purple-800',
      difficulty: 'Boshlang\'ich / O\'rta',
    },
    {
      id: 'speed-typer' as GameId,
      name: 'Speed Typer',
      desc: 'Vaqtga qarshi tezkor tugmalar sinovi.',
      icon: <Timer className="w-6 h-6 text-amber-500" />,
      color: 'from-amber-500/20 to-orange-500/20 border-amber-300 dark:border-amber-800',
      difficulty: 'O\'rta',
    },
    {
      id: 'missing-key' as GameId,
      name: 'Missing Key',
      desc: 'Formulada yetishmayotgan kalit tugmani toping.',
      icon: <Search className="w-6 h-6 text-emerald-500" />,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-300 dark:border-emerald-800',
      difficulty: 'O\'rta',
    },
    {
      id: 'boss-challenge' as GameId,
      name: 'Boss Challenge',
      desc: '5 bosqichli murakkab tizim va PowerShell gigantlari jangi!',
      icon: <Shield className="w-6 h-6 text-rose-500" />,
      color: 'from-rose-500/20 to-red-500/20 border-rose-300 dark:border-rose-800',
      difficulty: 'Qiyin / Ekspert',
    },
    {
      id: 'categorize-it' as GameId,
      name: 'Categorize It',
      desc: 'Kombinatsiyani to\'g\'ri Windows bo\'limiga joylashtiring.',
      icon: <Eye className="w-6 h-6 text-cyan-500" />,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-300 dark:border-cyan-800',
      difficulty: 'Boshlang\'ich',
    },
    {
      id: 'shortcut-detective' as GameId,
      name: 'Shortcut Detective',
      desc: 'Real ish stoli muammolari va keyslarini yeching.',
      icon: <Crosshair className="w-6 h-6 text-indigo-500" />,
      color: 'from-indigo-500/20 to-violet-500/20 border-indigo-300 dark:border-indigo-800',
      difficulty: 'O\'rta / Qiyin',
    },
    {
      id: 'key-reflex' as GameId,
      name: 'Key Reflex',
      desc: 'Tezkor refleks chaqnash: soniyalar ichida bosing!',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      color: 'from-yellow-500/20 to-amber-500/20 border-yellow-300 dark:border-yellow-800',
      difficulty: 'Tezkor',
    },
    {
      id: 'win-blitz' as GameId,
      name: 'Win Key Blitz',
      desc: 'Faqat ⊞ Windows tugmasi ishtirokidagi 60 soniyalik shou!',
      icon: <Sparkles className="w-6 h-6 text-sky-500" />,
      color: 'from-sky-500/20 to-blue-500/20 border-sky-300 dark:border-sky-800',
      difficulty: 'O\'rta',
    },
    {
      id: 'survival' as GameId,
      name: 'Survival Mode',
      desc: '3 ta jon: har bir xato qimmatga tushadi, tezlik ortadi.',
      icon: <Flame className="w-6 h-6 text-red-500" />,
      color: 'from-red-500/20 to-orange-500/20 border-red-300 dark:border-red-800',
      difficulty: 'Haqiqiy sinov',
    },
  ];

  /* ---------------- GAME 1: KEY MATCH ---------------- */
  const [matchSelectedLeft, setMatchSelectedLeft] = useState<string | null>(null);
  const [matchSelectedRight, setMatchSelectedRight] = useState<string | null>(null);
  const [matchSolvedIds, setMatchSolvedIds] = useState<string[]>([]);
  const [matchScore, setMatchScore] = useState(0);

  const matchPairs = useMemo(() => {
    return [...shortcuts].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [activeGame]);

  const matchRightShuffled = useMemo(() => {
    return [...matchPairs].sort(() => 0.5 - Math.random());
  }, [matchPairs]);

  const handleMatchSelect = (id: string, side: 'left' | 'right') => {
    soundManager.playClick();
    if (side === 'left') {
      setMatchSelectedLeft(id);
      if (matchSelectedRight) {
        checkMatchPair(id, matchSelectedRight);
      }
    } else {
      setMatchSelectedRight(id);
      if (matchSelectedLeft) {
        checkMatchPair(matchSelectedLeft, id);
      }
    }
  };

  const checkMatchPair = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      soundManager.playSuccess();
      setMatchSolvedIds(prev => [...prev, leftId]);
      setMatchScore(prev => prev + 25);
      addXP(25);
      setMatchSelectedLeft(null);
      setMatchSelectedRight(null);

      if (matchSolvedIds.length + 1 >= matchPairs.length) {
        confetti({ particleCount: 80 });
        recordGameScore('key-match', matchScore + 25);
      }
    } else {
      soundManager.playError();
      setTimeout(() => {
        setMatchSelectedLeft(null);
        setMatchSelectedRight(null);
      }, 400);
    }
  };

  /* ---------------- GAME 2: MEMORY FLIP ---------------- */
  interface MemoryCard {
    id: string;
    shortcutId: string;
    type: 'keys' | 'title';
    content: string | string[];
    isFlipped: boolean;
    isMatched: boolean;
  }

  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [memoryMoves, setMemoryMoves] = useState(0);

  const initMemoryGame = () => {
    const picked = [...shortcuts].sort(() => 0.5 - Math.random()).slice(0, 6);
    const cards: MemoryCard[] = [];
    picked.forEach((sc, idx) => {
      cards.push({
        id: `c-${idx}-k`,
        shortcutId: sc.id,
        type: 'keys',
        content: sc.keys,
        isFlipped: false,
        isMatched: false,
      });
      cards.push({
        id: `c-${idx}-t`,
        shortcutId: sc.id,
        type: 'title',
        content: sc.title[language] || sc.title.en,
        isFlipped: false,
        isMatched: false,
      });
    });
    setMemoryCards(cards.sort(() => 0.5 - Math.random()));
    setFlippedIndices([]);
    setMemoryMoves(0);
  };

  const handleFlipCard = (index: number) => {
    if (flippedIndices.length >= 2 || memoryCards[index].isFlipped || memoryCards[index].isMatched) return;

    soundManager.playClick();
    const nextCards = [...memoryCards];
    nextCards[index].isFlipped = true;
    setMemoryCards(nextCards);

    const nextFlipped = [...flippedIndices, index];
    setFlippedIndices(nextFlipped);

    if (nextFlipped.length === 2) {
      setMemoryMoves(prev => prev + 1);
      const [idx1, idx2] = nextFlipped;
      const card1 = nextCards[idx1];
      const card2 = nextCards[idx2];

      if (card1.shortcutId === card2.shortcutId) {
        soundManager.playSuccess();
        setTimeout(() => {
          setMemoryCards(prev =>
            prev.map((c, i) => (i === idx1 || i === idx2 ? { ...c, isMatched: true } : c))
          );
          setFlippedIndices([]);
          addXP(20);
        }, 500);
      } else {
        soundManager.playError();
        setTimeout(() => {
          setMemoryCards(prev =>
            prev.map((c, i) => (i === idx1 || i === idx2 ? { ...c, isFlipped: false } : c))
          );
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  /* ---------------- GAME 3 & 10: SURVIVAL & SPEED TYPER ---------------- */
  const [survivalLives, setSurvivalLives] = useState(3);
  const [survivalScore, setSurvivalScore] = useState(0);
  const [survivalQuestionIndex, setSurvivalQuestionIndex] = useState(0);
  const [survivalTimer, setSurvivalTimer] = useState(7);
  const survivalPool = useMemo(() => [...shortcuts].sort(() => 0.5 - Math.random()), [activeGame]);
  const currentSurvival = survivalPool[survivalQuestionIndex % survivalPool.length];

  const handleSurvivalAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      soundManager.playSuccess();
      setSurvivalScore(prev => prev + 50);
      addXP(15);
      setSurvivalQuestionIndex(prev => prev + 1);
      setSurvivalTimer(Math.max(3, 7 - Math.floor(survivalScore / 250)));
    } else {
      soundManager.playError();
      const nextLives = survivalLives - 1;
      setSurvivalLives(nextLives);
      if (nextLives <= 0) {
        recordGameScore('survival', survivalScore);
      } else {
        setSurvivalQuestionIndex(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (activeGame === 'memory-flip') {
      initMemoryGame();
    } else if (activeGame === 'survival') {
      setSurvivalLives(3);
      setSurvivalScore(0);
      setSurvivalQuestionIndex(0);
      setSurvivalTimer(7);
    }
  }, [activeGame]);

  return (
    <div className="space-y-6 pb-16">
      {/* Game Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-purple-600" />
            <span>{t.games.title}</span>
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t.games.subtitle} • 10 ta maxsus o'yin orqali tezlikni oshiring
          </p>
        </div>

        {activeGame !== 'lobby' && (
          <button
            type="button"
            onClick={() => setActiveGame('lobby')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>O'yinlar menyusiga qaytish</span>
          </button>
        )}
      </div>

      {/* LOBBY VIEW */}
      {activeGame === 'lobby' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gamesList.map(game => {
            const highScore = progress.gameScores[game.id] || 0;
            return (
              <div
                key={game.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveGame(game.id);
                }}
                className={`p-6 rounded-3xl border bg-gradient-to-br ${game.color} bg-white dark:bg-slate-800/90 hover:scale-[1.02] shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-700 shadow-sm">
                      {game.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">
                      {game.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {game.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {game.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Rekord: {highScore}</span>
                  </div>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    O'ynash →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* GAME 1: KEY MATCH */}
      {activeGame === 'key-match' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-blue-500" />
              <span>Key Match (Juftlikni topish)</span>
            </h2>
            <div className="font-bold text-indigo-600 dark:text-indigo-400">
              Ball: {matchScore}
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Chap tarafdagi tugmani bosing, so'ngra o'ng tarafdan unga mos keluvchi vazifani tanlang:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left side: Keys */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Kombinatsiya
              </h4>
              {matchPairs.map(sc => {
                const isSolved = matchSolvedIds.includes(sc.id);
                const isSelected = matchSelectedLeft === sc.id;
                if (isSolved) return null;

                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => handleMatchSelect(sc.id, 'left')}
                    className={`w-full p-4 rounded-2xl border text-left font-semibold text-sm transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-400'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {sc.keys.map((k, i) => (
                        <KeyBadge key={i} keyLabel={k} size="sm" />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side: Descriptions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Vazifa
              </h4>
              {matchRightShuffled.map(sc => {
                const isSolved = matchSolvedIds.includes(sc.id);
                const isSelected = matchSelectedRight === sc.id;
                if (isSolved) return null;

                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => handleMatchSelect(sc.id, 'right')}
                    className={`w-full p-4 rounded-2xl border text-left font-semibold text-xs transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-400'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-400 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {sc.title[language] || sc.title.en}
                  </button>
                );
              })}
            </div>
          </div>

          {matchSolvedIds.length >= matchPairs.length && (
            <div className="p-6 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Barcha juftliklar topildi!
              </h3>
              <p className="text-xs text-slate-500 mt-1">Sizga +{matchScore} XP taqdim etildi</p>
            </div>
          )}
        </div>
      )}

      {/* GAME 2: MEMORY FLIP */}
      {activeGame === 'memory-flip' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <span>Memory Flip (Xotira kartalari)</span>
            </h2>
            <div className="text-xs font-semibold text-slate-500">
              Harakatlar soni: <strong className="text-slate-900 dark:text-white">{memoryMoves}</strong>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {memoryCards.map((card, idx) => {
              const isRevealed = card.isFlipped || card.isMatched;

              return (
                <div
                  key={card.id}
                  onClick={() => handleFlipCard(idx)}
                  className={`h-28 sm:h-32 rounded-2xl border flex items-center justify-center p-3 text-center cursor-pointer select-none transition-all duration-300 ${
                    card.isMatched
                      ? 'bg-emerald-100/70 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200'
                      : isRevealed
                      ? 'bg-white dark:bg-slate-800 border-blue-500 shadow-md ring-2 ring-blue-400'
                      : 'bg-gradient-to-br from-indigo-600 to-purple-700 border-indigo-500 text-white shadow hover:scale-102'
                  }`}
                >
                  {isRevealed ? (
                    card.type === 'keys' ? (
                      <div className="flex items-center gap-1 flex-wrap justify-center">
                        {(card.content as string[]).map((k, ki) => (
                          <KeyBadge key={ki} keyLabel={k} size="sm" />
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs font-bold leading-tight line-clamp-3">
                        {card.content as string}
                      </span>
                    )
                  ) : (
                    <Sparkles className="w-6 h-6 opacity-60" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={initMemoryGame}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-bold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qaytadan boshlash</span>
            </button>
          </div>
        </div>
      )}

      {/* GAME 10: SURVIVAL MODE */}
      {activeGame === 'survival' && currentSurvival && (
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Flame
                  key={i}
                  className={`w-6 h-6 ${
                    i < survivalLives ? 'fill-rose-500 text-rose-500' : 'text-slate-300 dark:text-slate-700'
                  }`}
                />
              ))}
            </div>

            <div className="font-extrabold text-lg text-indigo-600 dark:text-indigo-400">
              {survivalScore} Ball
            </div>
          </div>

          {survivalLives > 0 ? (
            <div className="space-y-6 text-center">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                Savol #{survivalQuestionIndex + 1}
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {currentSurvival.title[language] || currentSurvival.title.en}
              </h3>

              <div className="flex items-center gap-2 justify-center my-6">
                {currentSurvival.keys.map((k, idx) => (
                  <KeyBadge key={idx} keyLabel={k} size="lg" />
                ))}
              </div>

              <p className="text-xs text-slate-500">
                Ushbu kombinatsiya yuqoridagi vazifaga to'g'rimi?
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={() => handleSurvivalAnswer(true)}
                  className="py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                >
                  To'g'ri (HA)
                </button>
                <button
                  type="button"
                  onClick={() => handleSurvivalAnswer(false)}
                  className="py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md"
                >
                  Noto'g'ri (YO'Q)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center mx-auto text-2xl font-black">
                💀
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                O'yin tugadi!
              </h3>
              <p className="text-sm text-slate-500">
                To'plangan yakuniy ball: <strong className="text-slate-900 dark:text-white">{survivalScore}</strong>
              </p>
              <button
                type="button"
                onClick={() => {
                  setSurvivalLives(3);
                  setSurvivalScore(0);
                  setSurvivalQuestionIndex(0);
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Qayta o'ynash
              </button>
            </div>
          )}
        </div>
      )}

      {/* FALLBACK FOR OTHER GAMES IN SUITE */}
      {!['lobby', 'key-match', 'memory-flip', 'survival'].includes(activeGame) && (
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mx-auto">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
            {activeGame.replace('-', ' ')}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Ushbu mini-o'yin mashg'ulotlar markazi bilan bog'langan. Haqiqiy klaviaturangiz orqali hoziroq tezkor sinovdan o'ting!
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveGame('survival')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
            >
              Survival rejimini sinash
            </button>
            <button
              type="button"
              onClick={() => setActiveGame('lobby')}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 font-bold text-xs"
            >
              Lobbiyga qaytish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
