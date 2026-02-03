"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DateGate from "../../components/DateGate";
import LoveMeter from "../../components/LoveMeter";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

export default function TeddyDay() {
  const [heartIndex, setHeartIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [shuffling, setShuffling] = useState(true);

  /* 🧸 Pre-generate floating teddies */
  const teddies = useMemo(
    () =>
      Array.from({ length: isMobile ? 10 : 18 }).map(() => ({
        left: `${Math.random() * 100}%`,
        size: Math.random() * 14 + 12,
        delay: Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    const t = setTimeout(() => {
      setHeartIndex(Math.floor(Math.random() * 6));
      setShuffling(false);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const resetGame = () => {
    setPicked(null);
    setShuffling(true);
    setTimeout(() => {
      setHeartIndex(Math.floor(Math.random() * 6));
      setShuffling(false);
    }, 800);
  };

  return (
    <DateGate day={10}>
      {/* 🧸 Floating background teddies */}
      {teddies.map((t, i) => (
        <motion.span
          key={i}
          className="heart-bg"
          style={{ left: t.left, fontSize: t.size }}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: -160, opacity: 0.6 }}
          transition={{
            duration: 20,
            delay: t.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🧸
        </motion.span>
      ))}

      <div className="min-h-screen flex flex-col items-center px-4 pt-16 pb-28">
        {/* 🧸 MAIN TEDDY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-md rounded-3xl bg-gradient-to-b from-pink-300/60 to-rose-200/40 border border-rose-300/40 backdrop-blur-xl shadow-[0_25px_60px_-20px_rgba(190,18,60,0.35)] px-6 py-10 text-center"
        >
          <div className="text-5xl mb-4">🧸</div>

          <h2 className="text-2xl font-semibold text-rose-800 mb-3">
            Misha
          </h2>

          <p className="text-rose-800/90 leading-relaxed">
            If I could, I’d hand you a teddy that smells like comfort,
            listens without fixing, and never leaves your side.
          </p>
        </motion.div>

        {/* 🎮 GAME CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mt-12 rounded-3xl bg-white/70 border border-rose-200 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] px-6 py-8 text-center"
        >
          <h3 className="text-lg font-semibold text-rose-700 mb-1">
            Where Did I Hide My Heart?
          </h3>

          <p className="text-rose-700/80 text-sm mb-6">
            One teddy is holding it just for you.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.button
                key={i}
                disabled={picked !== null || shuffling}
                whileHover={!shuffling ? { scale: 1.06 } : {}}
                whileTap={!shuffling ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setPicked(i)}
                className="aspect-square rounded-2xl text-3xl border border-rose-300 bg-rose-100"
              >
                {picked === null && "🧸"}
                {picked !== null && i === heartIndex && "💖"}
                {picked !== null && i !== heartIndex && "🧸"}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {picked !== null && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="mt-6 text-rose-900 italic">
                  {picked === heartIndex
                    ? "You found it… I think my heart knows you."
                    : "Not there—but I loved watching you look for it."}
                </p>

                <button
                  onClick={resetGame}
                  className="mt-4 text-sm text-rose-700 underline underline-offset-4 hover:text-rose-900"
                >
                  Play again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 💌 ROMANTIC LETTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mt-14 rounded-3xl bg-rose-50 border border-rose-200 shadow-[0_20px_40px_-25px_rgba(190,18,60,0.3)] px-6 py-8"
        >
          <p className="text-rose-900/90 leading-relaxed">
            Hey you,
            <br /><br />
            I know this is just a screen, and this is just a day,
            but if I could turn feelings into something you could hold,
            it would look a lot like this teddy.
            <br /><br />
            Something soft for the days you’re tired,
            something quiet for the moments you don’t want to explain,
            and something that stays — especially when you don’t ask it to.
            <br /><br />
            I don’t need to be perfect.
            I just want to be someone you feel safe with.
          </p>

          <p className="mt-6 text-right text-rose-700 italic">
            — Always yours
          </p>
        </motion.div>

        {/* 💖 LOVE METER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mt-16"
        >
          <LoveMeter />
        </motion.div>

        {/* 🌙 CLOSING */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 text-center text-rose-800/90 leading-relaxed"
        >
          Some days need strength.
          <br />
          Some days need softness.
          <br />
          I want to be both.
        </motion.p>
      </div>
    </DateGate>
  );
}
