"use client";

import { useState } from "react";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

export default function ProposeDay() {
  const letterLines = [
    "I didn’t plan this.",
    "You slowly became my safe place.",
    "Somewhere between laughs and silence…",
    "I realized I want you forever.",
  ];

  const [step, setStep] = useState(0);
  const [showRing, setShowRing] = useState(false);

  const handleHeartTap = () => {
    if (step < letterLines.length) {
      setStep((prev) => prev + 1);
    }
    if (step === letterLines.length - 1) {
      setTimeout(() => setShowRing(true), 700);
    }
  };

  return (
    <DateGate day={8}>
      {/* 🌹 Floating Roses */}
      {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
        <span
          key={i}
          className="heart-bg"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            fontSize: `${Math.random() * 10 + 14}px`,
          }}
        >
          🌹
        </span>
      ))}

      {/* 💍 Main Card */}
      <RomanticCard
        title="💍 Misha"
        text="This isn’t me trying to impress you. This is me being honest. I like you more than I planned to."
      />

      <div className="max-w-md mx-auto px-6 pb-28 mt-8 space-y-10 text-center">
        <LoveMeter />

        {/* 💓 PROMPT */}
        <p className="text-rose-700 text-sm font-medium">
          Tap my heart… it beats for you 🤍
        </p>

        {/* ❤️ HEART */}
        <button
          onClick={handleHeartTap}
          className="text-5xl animate-pulse hover:scale-110 transition drop-shadow-[0_0_20px_rgba(255,0,85,0.4)]"
        >
          ❤️
        </button>

        {/* 💌 LETTER */}
        <div className="relative mt-4">
          <div className="bg-white/60 backdrop-blur-lg border border-rose-200 rounded-2xl px-6 py-6 space-y-3 shadow-[0_0_40px_rgba(255,105,135,0.25)]">
            <p className="text-xs tracking-widest text-rose-600 uppercase font-semibold">
              A letter for you
            </p>

            {letterLines.slice(0, step).map((line, i) => (
              <p
                key={i}
                className="text-rose-800 text-sm leading-relaxed animate-fade-up"
              >
                {line}
              </p>
            ))}

            {step === 0 && (
              <p className="text-rose-500 text-sm italic">
                (Tap the heart… I’m shy)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 💍 RING POPUP */}
      {showRing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center animate-fade-in">
          <div className="bg-white/70 backdrop-blur-2xl border border-rose-200 rounded-3xl px-10 py-12 text-center space-y-4 shadow-2xl animate-scale-in">
            <div className="text-6xl">💍</div>
            <p className="text-rose-700 text-lg font-semibold">
              Will you be mine… forever?
            </p>
            <p className="text-rose-500 text-sm">
              This is me choosing you.
            </p>
          </div>
        </div>
      )}
    </DateGate>
  );
}
