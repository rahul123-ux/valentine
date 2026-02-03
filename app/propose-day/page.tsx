"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const roses = useMemo(
    () =>
      Array.from({ length: isMobile ? 6 : 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        size: Math.random() * 10 + 14,
      })),
    []
  );

  const handleHeartTap = () => {
    if (step < letterLines.length) {
      setStep((prev) => prev + 1);
    }
    if (step === letterLines.length - 1) {
      setTimeout(() => setShowRing(true), 800);
    }
  };

  return (
    <DateGate day={8}>
      {/* 🌹 Floating Roses */}
      {roses.map((r, i) => (
        <motion.span
          key={i}
          className="heart-bg"
          style={{ left: r.left, fontSize: r.size }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -120, opacity: 0.6 }}
          transition={{
            duration: 18,
            delay: r.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌹
        </motion.span>
      ))}

      {/* 💍 Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <RomanticCard
          title="💍 Misha"
          text="This isn’t me trying to impress you. This is me being honest. I like you more than I planned to."
        />
      </motion.div>

      <div className="max-w-md mx-auto px-6 pb-28 mt-10 space-y-10 text-center">
        <LoveMeter />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-rose-700 text-sm font-medium"
        >
          Tap my heart… it beats for you 🤍
        </motion.p>

        {/* ❤️ HEART */}
        <motion.button
          onClick={handleHeartTap}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-5xl drop-shadow-[0_0_25px_rgba(255,0,85,0.45)]"
        >
          ❤️
        </motion.button>

        {/* 💌 LETTER */}
        <div className="relative mt-4">
          <div className="bg-white/60 backdrop-blur-lg border border-rose-200 rounded-2xl px-6 py-6 space-y-3 shadow-[0_0_40px_rgba(255,105,135,0.25)]">
            <p className="text-xs tracking-widest text-rose-600 uppercase font-semibold">
              A letter for you
            </p>

            <AnimatePresence>
              {letterLines.slice(0, step).map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-rose-800 text-sm leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </AnimatePresence>

            {step === 0 && (
              <p className="text-rose-500 text-sm italic">
                (Tap the heart… I’m shy)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 💍 RING POPUP */}
      <AnimatePresence>
        {showRing && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/70 backdrop-blur-2xl border border-rose-200 rounded-3xl px-10 py-12 text-center space-y-4 shadow-2xl"
            >
              <div className="text-6xl">💍</div>
              <p className="text-rose-700 text-lg font-semibold">
                Will you be mine… forever?
              </p>
              <p className="text-rose-500 text-sm">
                This is me choosing you.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DateGate>
  );
}
