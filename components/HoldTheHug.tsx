"use client";

import { useEffect, useRef, useState } from "react";

export default function HoldTheHug() {
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [holding, setHolding] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [best, setBest] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setBest(Number(localStorage.getItem("hugBest") || 0));
    setTotal(Number(localStorage.getItem("hugTotal") || 0));
  }, []);

  const startHold = () => {
    if (holding) return;

    setHolding(true);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      if (!startTimeRef.current) return;
      setSeconds(
        Math.floor((Date.now() - startTimeRef.current) / 1000)
      );
    }, 200);
  };

  const stopHold = () => {
    if (!startTimeRef.current) return;

    const duration = Math.floor(
      (Date.now() - startTimeRef.current) / 1000
    );

    if (timerRef.current) clearInterval(timerRef.current);

    if (duration > 0) {
      const newBest = Math.max(best, duration);
      const newTotal = total + 1;

      setBest(newBest);
      setTotal(newTotal);

      localStorage.setItem("hugBest", String(newBest));
      localStorage.setItem("hugTotal", String(newTotal));
    }

    setHolding(false);
    setSeconds(0);
    startTimeRef.current = null;
  };

  const resetGame = () => {
    localStorage.removeItem("hugBest");
    localStorage.removeItem("hugTotal");
    setBest(0);
    setTotal(0);
    setSeconds(0);
    setHolding(false);
  };

  return (
    <div className="mt-6 text-center space-y-6">
      <button
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        className={`hug-game-btn ${holding ? "holding" : ""}`}
      >
        🤍 Hold the Hug
      </button>

      <p className="text-sm italic romantic-text">
        {holding ? `Holding… ${seconds}s` : "Press and hold"}
      </p>

      <div className="text-sm romantic-text space-y-1">
        <p>💞 Longest hug: <b>{best}s</b></p>
        <p>🫂 Total hugs: <b>{total}</b></p>
      </div>

      {(best > 0 || total > 0) && (
        <button
          onClick={resetGame}
          className="text-xs italic underline opacity-70 hover:opacity-100 transition"
        >
          reset hug memory
        </button>
      )}
    </div>
  );
}
