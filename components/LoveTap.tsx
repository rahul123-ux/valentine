"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveTap() {
  const [count, setCount] = useState(0);
  const [locked, setLocked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleTap = () => {
    if (locked) return;

    setLocked(true);
    setCount((c) => c + 1);
    setShowHeart(true);

    // hide floating heart
    setTimeout(() => setShowHeart(false), 400);

    // unlock tap (prevents rapid spam)
    setTimeout(() => setLocked(false), 350);
  };

  return (
    <div className="flex flex-col items-center gap-3 pt-4">
      {/* ❤️ Floating feedback heart */}
      <AnimatePresence>
        {showHeart && (
          <motion.span
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -30, scale: 1.2 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute text-2xl"
          >
            ❤️
          </motion.span>
        )}
      </AnimatePresence>

      {/* 💖 Tap Button */}
      <motion.button
        onClick={handleTap}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="rounded-full px-7 py-3 bg-pink-500 text-white font-semibold shadow-lg active:shadow-md select-none"
      >
        Tap with Love 💞
      </motion.button>

      {/* 💗 Counter */}
      <motion.div
        key={count}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-sm text-pink-700"
      >
        Love taps: {count}
      </motion.div>
    </div>
  );
}
