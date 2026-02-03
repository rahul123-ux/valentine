"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveTypewriter from "../../components/LoveTypewriter";
import NightSkyGlow from "../../components/NightSkyGlow";

/* 🎮 Lazy-loaded game (does NOT block FPS) */
const ChocolateCatchGame = dynamic(
  () => import("../../components/ChocolateCatchGame"),
  {
    ssr: false,
    loading: () => (
      <p className="text-white/50 text-sm tracking-wide">
        Preparing something sweet… 🍫
      </p>
    ),
  }
);

export default function ChocolateDay() {
  const secretRef = useRef<HTMLParagraphElement | null>(null);
  const reduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  /* ✅ SAFE mobile detection (no hydration lag) */
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  /* 🍫 CINEMATIC FLOAT — LIMITED & FINITE (NO INFINITE LOOPS) */
  const chocolates = useMemo(() => {
    const count = isMobile ? 3 : 6; // VERY IMPORTANT
    return Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 8 + 14}px`,
      delay: Math.random() * 2,
      duration: Math.random() * 6 + 10,
    }));
  }, [isMobile]);

  return (
    <DateGate day={9}>
      {/* 🌌 BACKGROUND (static = smooth) */}
      <NightSkyGlow />
      <div className="moon-glow pointer-events-none" />

      {/* 🍫 FLOATING CHOCOLATES (ONE-TIME CINEMATIC PASS) */}
      {!reduceMotion &&
        chocolates.map((c, i) => (
          <motion.span
            key={i}
            className="heart-bg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: [0, 0.8, 0], y: [-30, 30] }}
            transition={{
              delay: c.delay,
              duration: c.duration,
              ease: "easeInOut",
            }}
            style={{
              left: c.left,
              fontSize: c.size,
            }}
          >
            🍫
          </motion.span>
        ))}

      {/* 🎬 MAIN SCENE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center space-y-12"
      >
        {/* 💝 HERO CARD (NO LOOPING SCALE) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <RomanticCard
            title="🍫 Misha"
            text={`Under a quiet night sky, even chocolate feels shy next to you.
You glow — softly, endlessly — in my heart.`}
          />
        </motion.div>

        {/* ✍️ LOVE LETTER (NO BACKDROP BLUR = HUGE FPS WIN) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="max-w-md w-full rounded-[26px] bg-white/8 px-7 py-8 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <LoveTypewriter />
          <p className="mt-6 text-white/80 text-sm leading-relaxed tracking-wide">
            In every universe,
            <br />
            I’d still choose you. 🌙❤️
          </p>
        </motion.div>

        {/* 🎮 GAME (APPEARS AFTER SCENE SETTLES) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ChocolateCatchGame />
        </motion.div>

        {/* 💌 FINAL REVEAL (STILLNESS → EMOTION) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/70 text-xs"
        >
          <button
            onClick={() => {
              setShowSecret(true);
              setTimeout(() => {
                secretRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }, 300);
            }}
            className="tracking-widest hover:text-white transition"
          >
            💌 tap for the truth
          </button>

          <AnimatePresence>
            {showSecret && (
              <motion.p
                ref={secretRef}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-4 italic text-white/95 text-sm"
              >
                Even chocolate melts slower than my heart does for you.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </DateGate>
  );
}
