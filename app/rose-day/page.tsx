"use client";

import { useState } from "react";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";
import RosePicker from "../../components/RosePicker";
import RoseLetter from "../../components/RoseLetter";

export default function RoseDay() {
  const [step, setStep] = useState<"intro" | "pick" | "letter">("intro");
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <DateGate day={7}>
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300" />

      {/* Soft glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-rose-400/30 rounded-full blur-3xl" />
      </div>

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
    🌹
  </span>
))}


      {/* Scroll container */}
      <div className="fixed inset-0 overflow-y-auto z-10">
<div className="min-h-screen flex items-center justify-center px-4 py-12">

          {/* Glass Card */}
          <div className="w-full max-w-md rounded-3xl backdrop-blur-xl bg-white/60 border border-white/70 shadow-2xl heartbeat">

            {step === "intro" && (
              <div className="p-6 sm:p-8 space-y-7 text-center step-animate">

                <RomanticCard
                  title="🌹 Misha"
                  text="Some feelings don’t need words — they just quietly stay.  
Somewhere between smiles and silences, you became my favorite place to be."
                />

                <LoveMeter />

                <p className="text-sm text-rose-700/80 italic">
                  Today isn’t just Rose Day… it’s a reminder 🌸
                </p>

                <button
                  onClick={() => setStep('pick')}
                  className="w-full rounded-full bg-gradient-to-r from-rose-600 to-pink-600 py-3.5 text-white font-semibold shadow-lg hover:scale-[1.02] transition active:scale-95 cursor-pointer"
                >
                  Pick a Rose for Me 🌹
                </button>
              </div>
            )}

            {step === "pick" && (
              <div className="p-6 sm:p-8 space-y-4 text-center step-animate">

                <h2 className="text-xl font-semibold text-rose-700">
                  Choose one… just like you chose me 💕
                </h2>
                <RosePicker onPick={() => setStep("letter")} />
              </div>
            )}

            {step === "letter" && (
              <div className="p-6 sm:p-8 step-animate">

                <RoseLetter />
              </div>
            )}

          </div>
        </div>
      </div>
    </DateGate>
  );
}
