"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loveMessages = [
  "That felt warm 💗",
  "You’re doing great 💞",
  "My heart noticed 💓",
  "Slow and steady 🤍",
  "That one meant something 💖",
];

export default function LoveGame({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [holding, setHolding] = useState(false);
  const [burst, setBurst] = useState(false);
  const [message, setMessage] = useState("");

  const intervalRef = useRef(null);
  const lastLoveTime = useRef(0);

  const startHold = () => {
    if (holding) return;
    setHolding(true);

    intervalRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2));
    }, 30);
  };

  const endHold = () => {
    setHolding(false);
    clearInterval(intervalRef.current);

    if (progress >= 100) {
      const now = Date.now();
      const diff = now - lastLoveTime.current;

      if (diff < 2500 && diff > 600) {
        setCombo((c) => c + 1);
      } else {
        setCombo(1);
      }

      lastLoveTime.current = now;

      setScore((s) => {
        const next = s + 1;
        if (next === 5) onComplete?.(); // 🔓 unlock promise
        return next;
      });

      setMessage(
        loveMessages[Math.floor(Math.random() * loveMessages.length)]
      );

      setBurst(true);
      setTimeout(() => setBurst(false), 600);
    }

    setProgress(0);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <div className="relative flex flex-col items-center gap-5 pt-8">
      {/* 💥 Love burst */}
      <AnimatePresence>
        {burst && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute text-4xl"
          >
            💖
          </motion.div>
        )}
      </AnimatePresence>

      {/* ❤️ Progress Ring */}
      <div className="relative w-28 h-28">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="#fbcfe8"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="#ec4899"
            strokeWidth="8"
            fill="none"
            strokeDasharray={302}
            strokeDashoffset={302 - (302 * progress) / 100}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          ❤️
        </div>
      </div>

      {/* 💗 Hold Button */}
      <motion.button
        onMouseDown={startHold}
        onMouseUp={endHold}
        onMouseLeave={endHold}
        onTouchStart={startHold}
        onTouchEnd={endHold}
        whileTap={{ scale: 0.95 }}
        className="rounded-full px-9 py-3 bg-pink-500 text-white font-semibold shadow-lg select-none"
      >
        Hold to Love 💞
      </motion.button>

      {/* 💕 Score & Combo */}
      <div className="flex gap-6 text-sm text-pink-700">
        <span>Love: {score}/5</span>
        {combo > 1 && (
          <span className="text-pink-600 font-semibold">
            Combo x{combo} 🔥
          </span>
        )}
      </div>

      {/* 💌 Message */}
      {message && (
        <div className="text-xs text-pink-500 italic">{message}</div>
      )}

      <div className="text-xs text-pink-400">
        Hold… rhythm matters 🤍
      </div>
    </div>
  );
}
