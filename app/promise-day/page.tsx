"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";
import GentleChoiceGame from "../../components/GentleChoiceGame";
import LoveGame from "../../components/LoveGame";
import PromiseLetter from "../../components/PromiseLetter";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

const sectionAnim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function PromiseDay() {
  const [letterUnlocked, setLetterUnlocked] = useState(false);
  const [loveFill, setLoveFill] = useState(0);

  const letterRef = useRef<HTMLDivElement | null>(null);

  const handleUnlock = () => {
    setLetterUnlocked(true);
    setTimeout(() => {
      letterRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  };

  return (
    <DateGate day={11}>
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
          🤝
        </span>
      ))}

      {/* 💌 Promise Card */}
      <motion.div
        {...sectionAnim}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-6 px-5"
      >
        <RomanticCard
          title="🤝 Misha"
          text="I can’t promise perfection. I can promise honesty, effort, and choosing you — even when things feel hard."
        />
      </motion.div>

      {/* 💗 Love Meter */}
      <motion.div
        {...sectionAnim}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-md mx-auto px-4 pt-4"
      >
        <LoveMeter />
      </motion.div>

      {/* 🌸 Gentle Choice Game */}
      <motion.div
        {...sectionAnim}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-4"
      >
        <GentleChoiceGame
  onProgress={(val: number) =>
    setLoveFill((f) => Math.min(100, f + val))
  }
/>

      </motion.div>

      {/* 🎮 Love Hold Game */}
      <motion.div
        {...sectionAnim}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="px-4 mt-6"
      >
        <LoveGame onComplete={handleUnlock} />
      </motion.div>

      {/* 💍 Promise Letter */}
      <div ref={letterRef} className="px-4 pb-10 mt-10">
        <AnimatePresence>
          {letterUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <PromiseLetter />
            </motion.div>
          )}
        </AnimatePresence>

        {!letterUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-pink-400 mt-6"
          >
            💍 Hold with love to reveal the promise
          </motion.div>
        )}
      </div>
    </DateGate>
  );
}
