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
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
  const [pressing, setPressing] = useState(false);
  const [pressProgress, setPressProgress] = useState(0);

  let pressTimer: NodeJS.Timeout;

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  /* 🌙 CINEMATIC TIMING */
  useEffect(() => {
    if (step === "cinematic") {
      const timer = setTimeout(() => setShowFinalText(true), 2200);
      return () => clearTimeout(timer);
    }
  }, [step]);
  const handlePress = (feeling: string) => {
    setSelectedFeeling(feeling);
    setPressing(true);
    setPressProgress(0);

    let progress = 0;

    pressTimer = setInterval(() => {
      progress += 5;
      setPressProgress(progress);

      if (progress >= 100) {
        clearInterval(pressTimer);
        setTimeout(() => setStep("letter"), 400);
      }
    }, 40);
  };

  const handleRelease = () => {
    clearInterval(pressTimer);
    setPressing(false);
    setPressProgress(0);
  };

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
        <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden bg-gradient-to-br from-[#2b0018] via-[#4b0033] to-[#7a004f]">
          {/* Romantic Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="max-w-md mx-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-pink-300/30 shadow-[0_0_40px_rgba(255,105,180,0.3)] p-8 text-center relative overflow-hidden text-white">

            <h2 className="text-2xl font-semibold text-pink-200 mb-2 tracking-wide drop-shadow-[0_0_10px_rgba(255,182,193,0.6)]">
              Warm My Heart
            </h2>


            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Tap the heart gently to fill it with warmth.
              Each tap increases the glow.
              When it reaches 100%, something special will happen.
            </p>

            {/* Floating Hearts */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: warmth / 20 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute text-pink-400 animate-float"
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: "10%",
                    fontSize: "18px",
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  💗
                </span>
              ))}
            </div>

            {/* Main Heart */}
            <div
              onClick={() =>
                setWarmth((w) => {
                  const next = Math.min(w + 20, 100);
                  if (next === 100) {
                    setTimeout(() => setStep("moments"), 1400);
                  }
                  return next;
                })
              }
              className="mx-auto w-48 h-48 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 relative z-10"
              style={{
                background: `radial-gradient(circle, rgba(255,105,180,${warmth / 120}) 0%, rgba(255,240,245,1) 70%)`,
                boxShadow: `0 0 ${warmth * 1.5}px rgba(255,105,180,0.6)`,
                transform: `scale(${1 + warmth / 400})`,
              }}
            >
              <span
                className="text-5xl transition-all duration-300"
                style={{
                  animation: warmth > 0 ? "pulse 1s infinite" : "none",
                }}
              >
                ❤️
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-pink-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-pink-400 h-2 transition-all duration-500"
                style={{ width: `${warmth}%` }}
              />
            </div>

            {/* Dynamic Instruction */}
            <p className="mt-4 text-xs text-white/70 italic tracking-wide">
              {warmth < 100
                ? `Current Warmth: ${warmth}% — Keep tapping gently.`
                : "The heart is fully warm… preparing something beautiful 💌"}
            </p>
          </div>

          {/* Animations */}
          <style jsx>{`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }

      @keyframes float {
        0% { transform: translateY(0px); opacity: 1; }
        100% { transform: translateY(-120px); opacity: 0; }
      }

      .animate-float {
        animation: float 2s ease-out forwards;
      }
    `}</style>
        </section>
      )}


      {/* 📸 MOMENTS */}
      {step === "moments" && (
        <ValentineMoments onNext={() => setStep("feelings")} />
      )}

      {/* 💞 FEELINGS */}
      {step === "feelings" && (
        <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden bg-gradient-to-b from-[#fff0f6] to-[#ffe6f2]">

          {/* Floating Background Hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute text-pink-300/40 animate-float"
                style={{
                  left: `${10 + i * 15}%`,
                  bottom: "0%",
                  fontSize: "22px",
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                💗
              </span>
            ))}
          </div>

          <div className="max-w-md mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-200 shadow-[0_10px_40px_rgba(255,105,180,0.25)] p-8 text-center relative z-10">

            <h2 className="text-2xl font-semibold text-[#3b0a2a] mb-2 tracking-wide">
              What Do You Feel With Me?
            </h2>

            <p className="text-sm text-[#7a1f4a]/70 mb-6">
              Hold the one that feels most true 💞
            </p>

            {["Safe", "Calm", "Wanted", "Happy"].map((f) => (
              <button
                key={f}
                onMouseDown={() => handlePress(f)}
                onMouseUp={handleRelease}
                onMouseLeave={handleRelease}
                onTouchStart={() => handlePress(f)}
                onTouchEnd={handleRelease}
                className={`relative mb-3 w-full rounded-xl py-3 border transition-all duration-300
            ${selectedFeeling === f
                    ? "bg-pink-500 text-white border-pink-500 shadow-lg scale-105"
                    : "bg-[#fff0f6] text-[#7a1f4a] border-pink-300 hover:shadow-md"
                  }`}
              >
                {f}

                {/* Tiny sparkle when selected */}
                {selectedFeeling === f && (
                  <span className="absolute right-4 animate-pop">✨</span>
                )}
              </button>
            ))}

            {/* Romantic Response */}
            {selectedFeeling && (
              <div className="mt-6 text-sm text-[#5a1a3c] animate-fade-in leading-relaxed">
                {selectedFeeling === "Safe" &&
                  "Then my heart is quietly promising to always protect yours."}
                {selectedFeeling === "Calm" &&
                  "Then I must be your peaceful place in a noisy world."}
                {selectedFeeling === "Wanted" &&
                  "Then I hope you always feel chosen — today and forever."}
                {selectedFeeling === "Happy" &&
                  "Then your smile might just be my favorite masterpiece."}
              </div>
            )}

            {/* Confirm Progress Bar */}
            {pressing && (
              <div className="mt-6 w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-pink-400 h-2 transition-all"
                  style={{ width: `${pressProgress}%` }}
                />
              </div>
            )}
          </div>

          {/* Animations */}
          <style jsx>{`
      @keyframes float {
        0% { transform: translateY(0px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-150px); opacity: 0; }
      }

      .animate-float {
        animation: float 6s linear infinite;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in {
        animation: fadeIn 0.6s ease forwards;
      }

      @keyframes pop {
        0% { transform: scale(0); }
        80% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }

      .animate-pop {
        animation: pop 0.3s ease forwards;
      }
    `}</style>
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
            </p>

            <p className="text-sm leading-relaxed text-[#4a1030]">
              But I promise truth, even when it’s difficult.
              I promise effort, even on the days I feel tired.
              I promise to grow, to learn, and to love you more gently with time.
            </p>

            <p className="text-sm leading-relaxed text-[#4a1030]">
              I promise that in a world full of distractions,
              my heart will always know where it belongs.
            </p>

            <p className="text-sm leading-relaxed text-[#4a1030]">
              I’ll choose you —
              in calm days and hard ones,
              in silence and in laughter,
              every single day.
            </p>

            <p className="text-rose-500 font-medium text-sm">
              And that kind of love…
              is rare.
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
      {/* 💍 OUR LITTLE FOREVER MOMENT */}
{step === "choice" && (
  <section className="min-h-screen flex flex-col justify-center px-6 bg-gradient-to-b from-[#fff0f6] to-[#fffafc]">
    <div className="max-w-md mx-auto rounded-3xl bg-white/90 backdrop-blur-md border border-pink-200 shadow-2xl p-8 text-center space-y-5 relative overflow-hidden">

      {/* Soft glow background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-300/30 rounded-full blur-3xl" />

      <p className="text-sm leading-relaxed text-[#5a1a3c]">
        Can I tell you something, my love? 🤍
      </p>

      <p className="text-sm leading-relaxed text-[#5a1a3c]">
        I didn’t just fall for you once.
        <br />
        I keep falling for you…
        <br />
        in your laugh,
        <br />
        in your mood swings,
        <br />
        in the way you say my name.
      </p>

      <p className="text-sm leading-relaxed text-[#5a1a3c]">
        You’re not just my wifey.
        <br />
        You’re my comfort.
        <br />
        My safe place.
        <br />
        My favorite notification.
      </p>

      <p className="text-rose-500 font-medium">
        And I still choose you. Every single day. 💍💗
      </p>

      <p className="text-xs text-[#7a1f4a]/70">
        Okay… one last thing before I get too emotional.
      </p>

      <button
        onClick={() => setStep("cinematic")}
        className="mt-4 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white font-medium shadow-lg hover:shadow-pink-300/50 active:scale-95 transition-all duration-300"
      >
        Click 😌
      </button>
    </div>
  </section>
)}


{/* 🌙 CINEMATIC FOREVER ENDING */}
{step === "cinematic" && (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

    {/* Soft romantic background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#fff0f6] via-[#ffd6e7] to-[#ffc2dc]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75),rgba(0,0,0,0.15))]" />

    {/* Floating roses/hearts */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
        <span
          key={i}
          className="heart-bg"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            fontSize: `${Math.random() * 10 + 16}px`,
          }}
        >
          💗
        </span>
      ))}
    </div>

    {/* Main Content */}
    <div className="relative z-10 text-center px-6 max-w-xl animate-fadeInSlow">

      <p className="text-3xl font-semibold text-[#3b0a2a]">
        Not a plot twist…
      </p>

      <p className="mt-6 text-lg text-[#5a1a3c] leading-relaxed">
        You were never just a chapter.
      </p>

      <p className="mt-2 text-lg text-[#5a1a3c]">
        You became the whole story.
      </p>

      <p className="mt-6 text-lg text-[#5a1a3c] leading-relaxed">
        Not just my wifey…
        <br />
        but my peace.
        <br />
        my best friend.
        <br />
        my crush.
      </p>

      <p className="mt-8 text-rose-600 font-medium">
        And I’m not choosing you just today.
        <br />
        I choose you. Always. 💍
      </p>

      <p className="mt-12 text-base text-[#7a1f4a]">
        Happy Valentine’s Day, my love 🤍
      </p>
    </div>
  </section>
)}

    </DateGate>
  );
}
