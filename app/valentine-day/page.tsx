"use client";

import { useState, useEffect } from "react";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";
import ValentineMoments from "../../components/ValentineMoments";
import FinalChoice from "../../components/FinalChoice";

type Step =
  | "intro"
  | "heart"
  | "moments"
  | "feelings"
  | "letter"
  | "choice"
  | "cinematic";

export default function ValentineDay() {
  const [step, setStep] = useState<Step>("intro");
  const [warmth, setWarmth] = useState(0);
  const [showFinalText, setShowFinalText] = useState(false);
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

  /* 🌙 CINEMATIC TIMING */
  useEffect(() => {
    if (step === "cinematic") {
      const timer = setTimeout(() => setShowFinalText(true), 2200);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <DateGate day={14}>
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
    🌸
  </span>
))}

      {/* 🌸 INTRO */}
      {step === "intro" && (
        <section className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-md mx-auto">
            <RomanticCard
              title="❤️ Misha"
              text={`This isn’t a Valentine page.
It’s a quiet confession I’ve been carrying for a while.`}
            />

            <div className="mt-8 rounded-3xl bg-[#fffafc] border border-pink-200 shadow-xl p-6 text-center">
              <p className="text-sm leading-relaxed text-[#5a1a3c] tracking-wide">
                Somewhere between normal days and random conversations,
                you became the thought my heart goes to without asking.
              </p>

              <div className="mt-6">
                <LoveMeter />
              </div>

              <button
                onClick={() => setStep("heart")}
                className="mt-8 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white font-medium shadow-lg active:scale-95 transition"
              >
                Come a little closer 🤍
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 💗 HEART */}
      {step === "heart" && (
        <section className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-md mx-auto rounded-3xl bg-[#fffafc] border border-pink-200 shadow-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-[#3b0a2a] mb-3">
              Warm My Heart
            </h2>

            <p className="text-sm text-[#5a1a3c]/80 mb-8">
              Every gentle touch makes things feel softer.
            </p>

            <div
              onClick={() =>
                setWarmth((w) => {
                  const next = Math.min(w + 20, 100);
                  if (next === 100) {
                    setTimeout(() => setStep("moments"), 900);
                  }
                  return next;
                })
              }
              className="mx-auto w-44 h-44 rounded-full flex items-center justify-center cursor-pointer border border-pink-300 transition-all"
              style={{
                background: `radial-gradient(circle, rgba(255,182,193,${
                  warmth / 100
                }) 0%, rgba(255,240,245,1) 70%)`,
                boxShadow: `0 0 ${warmth}px rgba(255,105,180,0.6)`,
              }}
            >
              <span className="text-4xl">❤️</span>
            </div>

            <p className="mt-6 text-sm text-[#7a1f4a]/70">
              Tap slowly… there’s no rush.
            </p>
          </div>
        </section>
      )}

      {/* 📸 MOMENTS */}
      {step === "moments" && (
        <ValentineMoments onNext={() => setStep("feelings")} />
      )}

      {/* 💞 FEELINGS */}
      {step === "feelings" && (
        <section className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-md mx-auto rounded-3xl bg-[#fffafc] border border-pink-200 shadow-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-[#3b0a2a] mb-4">
              What Do You Feel With Me?
            </h2>

            <p className="text-sm text-[#5a1a3c]/80 mb-6">
              Just choose what feels true.
            </p>

            {["Safe", "Calm", "Wanted", "Happy"].map((f) => (
              <button
                key={f}
                onClick={() => setTimeout(() => setStep("letter"), 600)}
                className="mb-3 w-full rounded-xl bg-[#fff0f6] py-3 text-[#7a1f4a] border border-pink-300 shadow-sm hover:shadow-md transition"
              >
                {f}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 💌 LETTER */}
      {step === "letter" && (
        <section className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-md mx-auto rounded-3xl bg-[#fffafc] border border-pink-200 shadow-2xl p-8 text-center space-y-5">
            <h2 className="text-xl font-semibold text-[#3b0a2a]">
              A Letter I Wanted You to Read
            </h2>

            <p className="text-sm leading-relaxed text-[#4a1030]">
              I don’t promise perfection.  
              I don’t promise forever.
            </p>

            <p className="text-sm leading-relaxed text-[#4a1030]">
              But I promise honesty.  
              I promise effort.  
              And if you choose me —
              I’ll choose you every single day.
            </p>

            <p className="text-rose-500 font-medium text-sm">
              And that… is rare.
            </p>

            <button
              onClick={() => setStep("choice")}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white font-medium shadow-lg active:scale-95 transition"
            >
              One last moment 💗
            </button>
          </div>
        </section>
      )}
{/* 💍 SOFT MOMENT (NO CHOICE) */}
{step === "choice" && (
  <section className="min-h-screen flex flex-col justify-center px-6">
    <div className="max-w-md mx-auto rounded-3xl bg-[#fffafc] border border-pink-200 shadow-xl p-8 text-center space-y-4">
      <p className="text-sm leading-relaxed text-[#5a1a3c]">
        Small confession 😶‍🌫️
      </p>

      <p className="text-sm leading-relaxed text-[#5a1a3c]">
        I didn’t plan any of this.
        <br />
        I just kept liking you…
        and somehow ended up here.
      </p>

      <p className="text-sm text-rose-500 font-medium">
        Oops 💗
      </p>

      <p className="text-xs text-[#7a1f4a]/70">
        Anyway… one last thing.
      </p>

      <button
        onClick={() => setStep("cinematic")}
        className="mt-4 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white font-medium shadow-lg active:scale-95 transition"
      >
        Continue 😌
      </button>
    </div>
  </section>
)}


    {/* 🌙 CINEMATIC ENDING */}
{step === "cinematic" && (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),rgba(0,0,0,0.18))]" />

    {/* Floating hearts */}
    <div className="absolute inset-0 pointer-events-none">
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

    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-xl animate-fadeInSlow">
      <p className="text-3xl font-semibold text-[#3b0a2a]">
        Plot twist 😌
      </p>

      <p className="mt-6 text-lg text-[#5a1a3c] leading-relaxed">
        You didn’t just scroll through this page.
      </p>

      <p className="mt-2 text-lg text-[#5a1a3c]">
        You quietly became my favorite person.
      </p>

      <p className="mt-6 text-sm text-rose-600 font-medium">
        Side effects include smiling at your phone for no reason.
      </p>

      <p className="mt-12 text-base text-[#7a1f4a]">
        Happy Valentine’s Day 🤍
      </p>
    </div>
  </section>
)}



    </DateGate>
  );
}
