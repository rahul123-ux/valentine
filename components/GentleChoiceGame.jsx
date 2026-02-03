"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { text: "I choose patience 🤍", reaction: "That takes strength 💫" },
  { text: "I choose honesty 💬", reaction: "Truth builds trust 🌱" },
  { text: "I choose effort 🌷", reaction: "Trying matters 💖" },
  { text: "I choose you 💕", reaction: "That means everything 💍" },
];

export default function GentleChoiceGame({ onProgress }) {
  const [index, setIndex] = useState(0);
  const [reaction, setReaction] = useState("");

  const handleChoose = () => {
    onProgress?.(25); // fills LoveMeter in 4 steps
    setReaction(steps[index].reaction);

    setTimeout(() => {
      setReaction("");
      setIndex((i) => i + 1);
    }, 900);
  };

  return (
    <div className="flex flex-col items-center gap-4 pt-6">
      <div className="text-sm text-pink-500">
        Choose gently. There’s no rush 🤍
      </div>

      <AnimatePresence mode="wait">
        {index < steps.length && (
          <motion.button
            key={steps[index].text}
            onClick={handleChoose}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="px-6 py-3 rounded-full bg-pink-400 text-white font-medium shadow-md"
          >
            {steps[index].text}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {reaction && (
          <motion.div
            key={reaction}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-pink-500 italic"
          >
            {reaction}
          </motion.div>
        )}
      </AnimatePresence>

      {index >= steps.length && (
        <div className="text-xs text-pink-400">
          💗 Love grows with every choice
        </div>
      )}
    </div>
  );
}
