"use client";

import { useState } from "react";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";

export default function KissDay() {
  const [stage, setStage] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const [dragX, setDragX] = useState(0);
  const [kiss, setKiss] = useState(false);
  const [lineComplete, setLineComplete] = useState(false);

  return (
    <DateGate day={13}>
      {/* 💞 Floating background kisses */}
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

      <div className="relative min-h-screen flex items-center justify-center px-4
                      bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200
                      overflow-hidden">

        <div className="w-full max-w-sm text-center space-y-8 cinematic">

          <RomanticCard
            title="💋 Misha"
            text="Some feelings don’t arrive loudly. They arrive gently… and stay."
          />

          <LoveMeter />

          {/* ================= GAME 1 ================= */}
          {stage === 0 && (
            <section className="scene space-y-6">
              <p className="text-sm text-gray-700">
                Tap the heart when you feel ready 💓
              </p>

              <div className="py-2 flex justify-center">
                <button
                  onClick={() => setRevealed(true)}
                  className="w-28 h-28 rounded-full bg-pink-200 text-4xl
                             smooth hover:scale-[1.04] active:scale-95"
                >
                  💓
                </button>
              </div>

              <p
                className={`text-gray-800 smooth ${
                  revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Some moments don’t need to be perfect.
                <br />
                They just need to be honest.
              </p>

              {revealed && (
                <div className="py-2">
                  <button
                    onClick={() => setStage(1)}
                    className="w-full py-3 rounded-xl bg-white/80
                               smooth hover:scale-[1.04]"
                  >
                    Continue 🤍
                  </button>
                </div>
              )}
            </section>
          )}

          {/* ================= LETTER 1 ================= */}
          {stage === 1 && (
            <section className="scene space-y-6">
              <p className="italic text-gray-800 leading-relaxed">
                I don’t believe kisses are about lips.
                <br />
                I think they’re about pauses.
                <br />
                About that quiet second where nothing else matters.
              </p>

              <div className="py-2">
                <button
                  onClick={() => setStage(2)}
                  className="w-full py-3 rounded-xl bg-white/80
                             smooth hover:scale-[1.04]"
                >
                  Continue 🌷
                </button>
              </div>
            </section>
          )}

          {/* ================= GAME 2 ================= */}
          {stage === 2 && (
            <section className="scene space-y-6">
              <p className="text-sm text-gray-700">
                Choose the words that feel right 🤍
              </p>

              <div className="grid grid-cols-2 gap-4">
                {["Gentle", "Unrushed", "Warm", "Safe"].map((w) => (
                  <div key={w} className="py-1">
                    <button
                      onClick={() => setChoice(w)}
                      className={`w-full py-3 rounded-xl smooth
                        ${
                          choice === w
                            ? "bg-pink-300 scale-[1.04]"
                            : "bg-pink-200 hover:scale-[1.04]"
                        }`}
                    >
                      {w}
                    </button>
                  </div>
                ))}
              </div>

              {choice && (
                <div className="py-2">
                  <button
                    onClick={() => setStage(3)}
                    className="w-full py-3 rounded-xl bg-white/80
                               smooth hover:scale-[1.04]"
                  >
                    Continue 💗
                  </button>
                </div>
              )}
            </section>
          )}

          {/* ================= LETTER 2 ================= */}
          {stage === 3 && (
            <section className="scene space-y-6">
              <p className="italic text-gray-800 leading-relaxed">
                Not rushed.
                <br />
                Not loud.
                <br />
                Just two people close enough
                <br />
                that the world fades quietly.
              </p>

              <div className="py-2">
                <button
                  onClick={() => setStage(4)}
                  className="w-full py-3 rounded-xl bg-white/80
                             smooth hover:scale-[1.04]"
                >
                  Continue 🤍
                </button>
              </div>
            </section>
          )}

          {/* ================= GAME 3 ================= */}
          {stage === 4 && (
            <section className="scene space-y-6">
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
                className="text-4xl smooth"
                style={{ transform: `scale(${1 + dragX / 180})` }}
              >
                💓
              </div>

              <p
                className={`text-gray-800 smooth ${
                  lineComplete
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Right here… this closeness is everything.
              </p>

              {lineComplete && (
                <div className="py-2">
                  <button
                    onClick={() => {
                      setLineComplete(false);
                      setStage(5);
                    }}
                    className="w-full py-3 rounded-xl bg-white/80
                               smooth hover:scale-[1.04]"
                  >
                    Continue 🌸
                  </button>
                </div>
              )}
            </section>
          )}

          {/* ================= LETTER 3 ================= */}
          {stage === 5 && (
            <section className="scene space-y-6">
              <p className="italic text-gray-800 leading-relaxed">
                This closeness.
                <br />
                This quiet certainty.
                <br />
                This is the kind of kiss
                <br />
                I’d always choose.
              </p>

              <div className="py-2">
                <button
                  onClick={() => setStage(6)}
                  className="w-full py-3 rounded-xl bg-white/80
                             smooth hover:scale-[1.04]"
                >
                  Continue 💋
                </button>
              </div>
            </section>
          )}

          {/* ================= FINAL ================= */}
          {stage === 6 && (
            <section className="scene space-y-6">
              <div className="py-2">
                <button
                  onClick={() => setKiss(true)}
                  className="w-full py-4 rounded-xl bg-pink-400
                             text-white text-lg
                             smooth hover:scale-[1.04] active:scale-95"
                >
                  Kiss 💋
                </button>
              </div>
            </section>
          )}
        </div>

        {/* ================= KISS OVERLAY ================= */}
        {kiss && (
          <div className="absolute inset-0 flex items-center justify-center
                          bg-pink-200/80 backdrop-blur-md cinematic">
            <div className="text-8xl kiss-pop">💋</div>
          </div>
        )}

        {/* ================= CINEMATIC STYLES ================= */}
        <style>{`
          button {
            transform-origin: center;
            will-change: transform;
          }

          .smooth {
            transition: all 0.6s cubic-bezier(.22,1,.36,1);
          }

          .cinematic {
            animation: cinematicIn 0.8s cubic-bezier(.22,1,.36,1) both;
          }

          .scene {
            animation: sceneIn 0.7s cubic-bezier(.22,1,.36,1) both;
          }

          .kiss-pop {
            animation: kissPop 1s cubic-bezier(.22,1,.36,1) both;
          }

          @keyframes sceneIn {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(14px);
              filter: blur(6px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
              filter: blur(0);
            }
          }

          @keyframes cinematicIn {
            from {
              opacity: 0;
              filter: blur(12px);
            }
            to {
              opacity: 1;
              filter: blur(0);
            }
          }

          @keyframes kissPop {
            from {
              opacity: 0;
              transform: scale(0.6);
            }
            to {
              opacity: 1;
              transform: scale(1.15);
            }
          }
        `}</style>
      </div>
    </DateGate>
  );
}
