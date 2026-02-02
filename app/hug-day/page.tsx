"use client";

import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";
import HoldTheHug from "../../components/HoldTheHug";
import BearHug from "@/components/BearHug";
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

export default function HugDay() {
  return (
    <DateGate day={12}>
      {/* 💞 Floating background hearts */}
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
    🤗
  </span>
))}

      <div className="hug-day-bg min-h-screen flex flex-col items-center">

        {/* Bear hug animation */}
        <div className="mt-4">
          <BearHug />
        </div>

        {/* Title + message */}
        <div className="mb-4">
          <RomanticCard
            title="🤗 Misha"
            text="Some days don’t need words. They just need warmth, closeness, and someone who makes you feel safe."
          />
        </div>

        <div className="max-w-md mx-auto px-5 text-center">

          {/* Love meter */}
          <div className="mb-8">
            <LoveMeter />
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator mb-6">
            <div>Scroll slowly…</div>
            <span>↓</span>
          </div>

          {/* Hug game */}
          <HoldTheHug />

          {/* Final message */}
          <p className="mt-6 mb-14 italic leading-relaxed text-[1.02rem] romantic-text">
            If I hugged you right now,  
            I wouldn’t let go quickly.  
            I’d stay there—  
            until your heartbeat slowed  
            and the world felt quiet again.
          </p>

        </div>
      </div>
    </DateGate>
  );
}
