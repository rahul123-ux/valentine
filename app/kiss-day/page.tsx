"use client";

import { useState } from "react";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";

export default function KissDay() {
  // 0 game1
  // 1 letter1
  // 2 game2
  // 3 letter2
  // 4 game3
  // 5 letter3
  // 6 final
  const [stage, setStage] = useState(0);

  const [revealed, setRevealed] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const [dragX, setDragX] = useState(0);
  const [kiss, setKiss] = useState(false);
  const [lineComplete, setLineComplete] = useState(false);


  return (
    <DateGate day={13}>
      {/* 💞 Floating background hearts */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="heart-bg"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            fontSize: `${Math.random() * 14 + 12}px`,
          }}
        >
          💋
        </span>
      ))}
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 overflow-hidden">
        <div className="w-full max-w-sm text-center space-y-6 transition-all duration-700">

          <RomanticCard
            title="💋 Misha"
            text="Some feelings don’t arrive loudly. They arrive gently… and stay."
          />

          <LoveMeter />

          {/* ================= GAME 1 ================= */}
          {stage === 0 && (
            <div className="space-y-6 animate-fade">
              <p className="text-sm text-gray-700">
                Tap the heart when you feel ready 💓
              </p>

              <button
                onClick={() => setRevealed(true)}
                className="mx-auto w-28 h-28 rounded-full bg-pink-200 text-4xl
                           transition-transform duration-500 hover:scale-110 select-none"
              >
                💓
              </button>

              <p
                className={`text-gray-800 transition-all duration-700 ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Some moments don’t need to be perfect.
                <br />
                They just need to be honest.
              </p>

              {revealed && (
                <button
                  onClick={() => setStage(1)}
                  className="w-full py-3 rounded-xl bg-white/80 transition-all"
                >
                  Continue 🤍
                </button>
              )}
            </div>
          )}

          {/* ================= LETTER 1 ================= */}
          {stage === 1 && (
            <div className="space-y-4 animate-fade">
              <p className="italic text-gray-800 leading-relaxed">
                I don’t believe kisses are about lips.
                <br />
                I think they’re about pauses.
                <br />
                About that quiet second where nothing else matters,
                <br />
                except the closeness.
              </p>

              <button
                onClick={() => setStage(2)}
                className="w-full py-3 rounded-xl bg-white/80"
              >
                Continue 🌷
              </button>
            </div>
          )}

          {/* ================= GAME 2 ================= */}
          {stage === 2 && (
            <div className="space-y-6 animate-fade">
              <p className="text-sm text-gray-700">
                Choose the words that feel right 🤍
              </p>

              <div className="grid grid-cols-2 gap-4">
                {["Gentle", "Unrushed", "Warm", "Safe"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setChoice(w)}
                    className={`py-3 rounded-xl transition-all duration-300
                      ${
                        choice === w
                          ? "bg-pink-300 scale-105"
                          : "bg-pink-200"
                      }`}
                  >
                    {w}
                  </button>
                ))}
              </div>

              {choice && (
                <button
                  onClick={() => setStage(3)}
                  className="w-full py-3 rounded-xl bg-white/80 transition-all"
                >
                  Continue 💗
                </button>
              )}
            </div>
          )}

          {/* ================= LETTER 2 ================= */}
          {stage === 3 && (
            <div className="space-y-4 animate-fade">
              <p className="italic text-gray-800 leading-relaxed">
                That’s how I imagine it.
                <br />
                Not rushed.
                <br />
                Not loud.
                <br />
                Just two people close enough
                <br />
                that the world fades quietly.
              </p>

              <button
                onClick={() => setStage(4)}
                className="w-full py-3 rounded-xl bg-white/80"
              >
                Continue 🤍
              </button>
            </div>
          )}

          {/* ================= GAME 3 ================= */}
{stage === 4 && (
  <div className="space-y-6 animate-fade">
    <p className="text-sm text-gray-700">
      Bring the heart closer 💞
    </p>

    <input
      type="range"
      min={0}
      max={100}
      value={dragX}
      onChange={(e) => {
        const val = Number(e.target.value);
        setDragX(val);
        if (val === 100) setLineComplete(true);
      }}
      className="w-full accent-pink-400"
    />

    <div
      className="text-4xl transition-transform duration-500"
      style={{ transform: `scale(${1 + dragX / 200})` }}
    >
      💓
    </div>

    <p
      className={`text-gray-800 transition-all duration-700 ${
        lineComplete
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      Right here… this closeness is everything.
    </p>

    {lineComplete && (
      <button
        onClick={() => {
          setLineComplete(false);
          setStage(5);
        }}
        className="w-full py-3 rounded-xl bg-white/80 transition-opacity duration-500"
      >
        Continue 🌸
      </button>
    )}
  </div>
)}


          {/* ================= LETTER 3 ================= */}
          {stage === 5 && (
            <div className="space-y-4 animate-fade">
              <p className="italic text-gray-800 leading-relaxed">
                Right here…
                <br />
                This closeness.
                <br />
                This quiet certainty.
                <br />
                This is the kind of kiss
                <br />
                I’d always choose.
              </p>

              <button
                onClick={() => setStage(6)}
                className="w-full py-3 rounded-xl bg-white/80"
              >
                Continue 💋
              </button>
            </div>
          )}

          {/* ================= FINAL ================= */}
          {stage === 6 && (
            <div className="space-y-6 animate-fade">
              <button
                onClick={() => setKiss(true)}
                className="w-full py-4 rounded-xl bg-pink-400 text-white text-lg"
              >
                Kiss 💋
              </button>
            </div>
          )}
        </div>

        {/* ================= KISS OVERLAY ================= */}
        {kiss && (
          <div className="absolute inset-0 flex items-center justify-center
                          bg-pink-200/70 backdrop-blur-sm animate-fade">
            <div className="text-7xl transition-transform duration-700 scale-110">
              💋
            </div>
          </div>
        )}

        {/* Animation helper */}
        <style>{`
          .animate-fade {
            animation: fade 0.6s ease-out both;
          }
          @keyframes fade {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </DateGate>
  );
}
