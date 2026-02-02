"use client";
import { useState } from "react";

export default function LoveTap() {
  const [love, setLove] = useState(0);

  return (
    <div className="max-w-md mx-auto px-4 mt-6">
      <div className="glass rounded-2xl p-4 text-center border border-white/40">
        <h3 className="text-lg mb-3 text-rose-600 drop-shadow-sm">
          Tap to grow my love for you 💗
        </h3>

        <button
          onClick={() => setLove((v) => Math.min(v + 5, 100))}
          className="
            mt-3 px-8 py-3 rounded-full
            bg-pink-500/50 hover:bg-pink-500/70
            transition active:scale-95
            text-lg text-white
          "
        >
          💖 Tap
        </button>

        <p className="mt-3 text-rose-600">
          Love Level:{" "}
          <span className="text-rose-700 font-medium">
            {love}%
          </span>
        </p>

        {love === 100 && (
          <p className="mt-2 text-sm italic text-rose-500">
            Okay… it’s full now 🥺
          </p>
        )}
      </div>
    </div>
  );
}
