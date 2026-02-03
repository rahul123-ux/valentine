"use client";

import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";
import HoldTheHug from "../../components/HoldTheHug";
import BearHug from "@/components/BearHug";

import { motion } from "framer-motion";

export default function HugDay() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <DateGate day={12}>
      {/* 🎬 CINEMA PAGE FADE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* 💞 Floating background hugs */}
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

        {/* 🎥 CINEMA CONTENT WRAPPER */}
        <motion.div
          className="hug-day-bg min-h-screen flex flex-col items-center"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.3,
            ease: [0.16, 1, 0.3, 1], // cinematic ease
          }}
        >
          {/* 🧸 Bear Hug CARD */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            <div className="hug-card">
              <BearHug />
            </div>
          </motion.div>

          {/* 💌 Title */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <RomanticCard
              title="🤗 Misha"
              text="Some days don’t need words. They just need warmth, closeness, and someone who makes you feel safe."
            />
          </motion.div>

          <motion.div
            className="max-w-md mx-auto px-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* ❤️ Love Meter */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <LoveMeter />
            </motion.div>

            {/* ⬇ Scroll hint */}
            <motion.div
              className="scroll-indicator mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div>Scroll slowly…</div>
              <span>↓</span>
            </motion.div>

            {/* 🤍 Hug Game */}
            <motion.div
              className="hug-game-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.9 }}
            >
              <HoldTheHug />
            </motion.div>

            {/* ✨ Final Letter */}
            <motion.p
              className="mt-6 mb-14 italic leading-relaxed text-[1.05rem] romantic-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              If I hugged you right now,  
              I wouldn’t let go quickly.  
              I’d stay there—  
              until your heartbeat slowed  
              and the world felt quiet again.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </DateGate>
  );
}
