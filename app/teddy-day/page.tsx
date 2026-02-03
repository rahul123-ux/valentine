"use client";

import { useEffect, useRef, useState } from "react";
import DateGate from "../../components/DateGate";
import LoveMeter from "../../components/LoveMeter";

export default function TeddyDay() {
  const [heartIndex, setHeartIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [shuffling, setShuffling] = useState(true);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const letterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    startGame();

    const onScroll = () => {
      if (window.scrollY > 40) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isWin && letterRef.current) {
      setTimeout(() => {
        letterRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 700);
    }
  }, [picked]);

  const startGame = () => {
    setPicked(null);
    setShuffling(true);

    const index = Math.floor(Math.random() * 3);
    setHeartIndex(index);

    setTimeout(() => {
      setShuffling(false);
    }, 700);
  };

  const isWin = picked === heartIndex;

  return (
    <DateGate day={10}>
      {/* 🧸 floating background */}
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="heart-bg"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            fontSize: `${Math.random() * 14 + 12}px`,
          }}
        >
          🧸
        </span>
      ))}

      {/* 💖 confetti on win */}
      {isWin &&
        Array.from({ length: 22 }).map((_, i) => (
          <span
            key={`c-${i}`}
            className="fixed top-0 animate-fall pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 16 + 14}px`,
            }}
          >
            💖
          </span>
        ))}

      <div className="min-h-screen flex flex-col items-center px-4 pt-16 pb-28">

        {/* 🧸 main card */}
        <div className="w-full max-w-md rounded-3xl bg-gradient-to-b from-pink-300/60 to-rose-200/40 border border-rose-300/40 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(190,18,60,0.35)] px-6 py-10 text-center">
          <div className="text-5xl mb-4">🧸</div>
          <h2 className="text-2xl font-semibold text-rose-800 mb-3">
            Misha
          </h2>
          <p className="text-rose-800/90 leading-relaxed">
            If I could, I’d hand you a teddy that smells like comfort,
            listens without fixing, and never leaves your side.
          </p>
        </div>

        {/* 💖 love meter */}
        <div className="w-full max-w-md mt-14">
          <LoveMeter />
        </div>

        <p className="mt-6 text-center text-rose-800/90 leading-relaxed">
          Some days need strength.
          <br />
          Some days need softness.
          <br />
          I want to be both.
        </p>

        {/* 👇 scroll hint */}
        {showScrollHint && (
          <p className="mt-6 text-sm text-rose-700/70 italic animate-scrollHint">
            scroll gently ↓
          </p>
        )}

        {/* 🎮 game */}
        <div className="w-full max-w-md mt-12 rounded-3xl bg-white/70 border border-rose-200 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] px-6 py-8 text-center">
          <h3 className="text-lg font-semibold text-rose-700 mb-1">
            Where Did I Hide My Heart?
          </h3>

          <p className="text-rose-700/80 text-sm mb-6">
            One teddy has it. Trust your instinct 🤍
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                disabled={picked !== null || shuffling}
                onClick={() => setPicked(i)}
                className="aspect-square rounded-2xl text-3xl border border-rose-300 bg-rose-100 transition hover:scale-105 active:scale-95"
              >
                {picked !== null && i === heartIndex ? "💖" : "🧸"}
              </button>
            ))}
          </div>

          {picked !== null && (
            <>
              <p className="mt-6 text-rose-900 italic">
                {isWin
                  ? "You found it… my heart knew you would."
                  : "Not this one—but I loved watching you try."}
              </p>

              <button
                onClick={startGame}
                className="mt-4 text-sm text-rose-700 underline underline-offset-4"
              >
                Play again
              </button>
            </>
          )}
        </div>

        {/* 💌 letter + cuddle */}
        {isWin && (
          <div
            ref={letterRef}
            className="w-full max-w-md mt-20 space-y-12 animate-fadeIn"
          >
            <div className="rounded-3xl bg-rose-50 border border-rose-200 shadow-[0_20px_40px_-25px_rgba(190,18,60,0.3)] px-6 py-8">
              <p className="text-rose-900/90 leading-relaxed">
                Hey you,
                <br /><br />
                If feelings could turn into something you could hold,
                it would look a lot like this teddy.
                <br /><br />
                Soft for tired days.
                Quiet when words feel heavy.
                Something that stays — even when you don’t ask it to.
                <br /><br />
                I don’t need perfection.
                I just want you to feel safe here.
              </p>

              <p className="mt-6 text-right text-rose-700 italic">
                — Always yours
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl animate-cuddle">
                🧸💞🧸
              </div>
              <p className="text-rose-800 italic">
                No effort needed.
                <br />
                Just a quiet moment where you’re held.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ✨ animations */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 3.5s linear forwards;
        }

        @keyframes cuddle {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-cuddle {
          animation: cuddle 2.5s ease-in-out infinite;
        }

        @keyframes scrollHint {
          0% {
            opacity: 0;
            transform: translateY(-4px);
          }
          50% {
            opacity: 1;
            transform: translateY(2px);
          }
          100% {
            opacity: 0;
            transform: translateY(-4px);
          }
        }
        .animate-scrollHint {
          animation: scrollHint 2.2s ease-in-out infinite;
        }
      `}</style>
    </DateGate>
  );
}
