"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentineMoments({
  onNext,
}: {
  onNext: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const moments = [
    {
      title: "Late night talks",
      secret: "When sleep didn’t matter because you did matter.",
    },
    {
      title: "Soft little laughs",
      secret: "The laughs that lighten my world.",
    },
    {
      title: "Silence",
      secret: "When my heart was pounding to hear even a single word from your mouth.",
    },
    {
      title: "Smiles",
      secret: "The smile that make my heart blush and feel great.",
    },
    {
      title: "Gedi days",
      secret: "When the world felt smaller, and the running time.",
    },
    {
      title: "Just us",
      secret: "No noise. No one else Just love and moments.",
    },
  ];

 

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#fff0f6] to-[#fffafc] relative overflow-hidden"
    >
  
      {/* ✨ Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300 animate-floatSparkle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}px`,
              fontSize: `${12 + Math.random() * 10}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className="max-w-md w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-3xl bg-white/90 backdrop-blur-md border border-pink-200 shadow-[0_30px_70px_rgba(255,105,180,0.25)] p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-[#3b0a2a] mb-3">
            Little Moments With You
          </h2>

          <p className="text-sm text-[#5a1a3c]/80 mb-6 leading-relaxed">
            Tap a memory.  
            Let it unfold slowly.
          </p>

          {/* 🎠 Carousel Style Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {moments.map((moment, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
                className="relative h-28 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-100 to-rose-100 shadow-md flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  {activeIndex === i ? (
                    <motion.span
                      key="secret"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-xs text-[#7a1f4a] px-3 text-center"
                    >
                      {moment.secret}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-xs font-medium text-[#7a1f4a]"
                    >
                      {moment.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-[#7a1f4a]/70 mb-6 italic">
            Some memories stay because they were felt deeply.
          </p>

          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white font-medium shadow-lg"
          >
            Keep going 💖
          </motion.button>
        </motion.div>
      </div>

      {/* 🌸 Sparkle Animation */}
      <style jsx>{`
        @keyframes floatSparkle {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        .animate-floatSparkle {
          animation: floatSparkle 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
