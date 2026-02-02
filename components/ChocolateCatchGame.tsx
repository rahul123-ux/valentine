"use client";

import { useEffect, useState } from "react";

const loveLines = [
  "You caught my heart 🍫❤️",
  "Sweet, just like you.",
  "Every bite feels like love.",
  "You make everything melt.",
  "Chocolate wishes it were you.",
];

export default function ChocolateCatchGame() {
  const [score, setScore] = useState(0);
  const [line, setLine] = useState("");
  const [chocolates, setChocolates] = useState<
    { id: number; left: number }[]
  >([]);
  const [hideGame, setHideGame] = useState(false);

  /* 🍫 Spawn chocolates */
  useEffect(() => {
    if (score >= 100) {
      setTimeout(() => setHideGame(true), 600);
      return;
    }

    const interval = setInterval(() => {
      setChocolates((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 88 },
      ]);
    }, 1100);

    return () => clearInterval(interval);
  }, [score]);

  const catchChocolate = (id: number) => {
    setChocolates((prev) => prev.filter((c) => c.id !== id));
    setScore((s) => Math.min(s + 10, 100));
    setLine(loveLines[Math.floor(Math.random() * loveLines.length)]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-8">

      {/* 🎮 GAME CONTAINER */}
      {!hideGame && (
        <div
          className={`rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 px-6 pt-6 pb-6
          transition-all duration-500 ease-out
          ${score === 100 ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
        >
          {/* HEADER */}
          <div className="mb-4 text-center">
            <p className="text-xs uppercase tracking-widest text-pink-200/80">
              A little game for you 💕
            </p>
            <h3 className="text-lg font-semibold text-white mt-1">
              Catch the Chocolates 🍫
            </h3>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">
              Tap the falling chocolates to fill the love meter.
            </p>
          </div>

          {/* ❤️ LOVE METER */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-white/70 mb-1">
              <span>Love Meter</span>
              <span>{score}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-500"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          {/* 🍫 PLAY AREA */}
          <div className="relative h-44 overflow-hidden rounded-xl bg-black/10">
            {chocolates.map((c) => (
              <div
                key={c.id}
                onPointerDown={() => catchChocolate(c.id)}
                className="absolute animate-fall cursor-pointer select-none text-2xl"
                style={{ left: `${c.left}%` }}
              >
                🍫
              </div>
            ))}
          </div>

          {/* 💬 SWEET FEEDBACK */}
          {line && (
            <p className="mt-4 text-sm italic text-white/90 text-center">
              {line}
            </p>
          )}
        </div>
      )}

      {/* 💌 FINAL MESSAGE */}
      {score === 100 && (
        <div className="text-center text-sm text-pink-200 glow">
          💖 You win — my heart is yours and I am all yours.
        </div>
      )}
    </div>
  );
}
