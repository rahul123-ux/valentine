"use client";

import { useRef } from "react";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveTypewriter from "../../components/LoveTypewriter";
import NightSkyGlow from "../../components/NightSkyGlow";
import ChocolateCatchGame from "../../components/ChocolateCatchGame";

export default function ChocolateDay() {
  const secretRef = useRef<HTMLParagraphElement | null>(null);
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <DateGate day={9}>
      {/* 🌌 Background Glow */}
      <NightSkyGlow />

      {/* 🌙 Moon Glow */}
      <div className="moon-glow pointer-events-none" />

      {/* ✨ Soft Floating Sparkles */}
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
    🍫
  </span>
))}

      {/* 💝 Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center space-y-10">

        {/* 🍫 Romantic Card */}
        <RomanticCard
          title="🍫 Misha"
          text={`Under a quiet night sky, even chocolate feels shy next to you.
You glow — softly, endlessly — in my heart.`}
        />

        {/* ✍️ Love Message */}
        <div className="max-w-md w-full rounded-[26px] bg-white/10 backdrop-blur-xl px-7 py-8 border border-white/20 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <LoveTypewriter />

          <p className="mt-6 text-white/80 text-sm leading-relaxed">
            In every universe,
            <br />
            I’d still choose you. 🌙❤️
          </p>
        </div>

        {/* 🎮 Chocolate Game */}
        <ChocolateCatchGame />

        {/* 💌 Secret Message */}
        <details
          className="text-white/70 text-xs"
          onToggle={(e) => {
            const el = e.currentTarget;
            if (el.open) {
              setTimeout(() => {
                secretRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }, 200);
            }
          }}
        >
          <summary className="cursor-pointer select-none tracking-wide hover:text-white transition">
            💌 Tap for a secret
          </summary>

          <p
            ref={secretRef}
            className="mt-3 italic text-white/90 text-sm"
          >
            Even chocolate melts slower than my heart does for you.
          </p>
        </details>

      </div>
    </DateGate>
  );
}
