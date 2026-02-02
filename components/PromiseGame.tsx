"use client";
import { useState } from "react";

const promises = [
  "I promise to steal you from your parents 🌹",
  "I promise to annoy you daily 😌",
  "I promise to listen (even when I pretend not to)",
  "I promise forehead kisses 🤍",
];

export default function PromiseGame() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto px-4 mt-6">
      <div className="glass rounded-2xl p-4 text-center card-animate border border-white/40">
        <h3 className="text-base font-medium mb-3 text-rose-600 drop-shadow-sm">
          Can you keep a promise? 🤞
        </h3>

        {!choice ? (
          <div className="space-y-2">
            {promises.map((p, i) => (
              <button
                key={i}
                onClick={() => setChoice(p)}
                className="
                  w-full py-2 rounded-xl
                  bg-white/70 hover:bg-white/90
                  transition active:scale-95
                  text-sm text-rose-700
                "
              >
                {p}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-3 animate-fade-in">
            <p className="text-sm text-rose-500 mb-1">
              You chose:
            </p>

            <p className="text-rose-700 italic">
              {choice}
            </p>

            <button
              onClick={() => setChoice(null)}
              className="mt-3 text-xs text-rose-500 hover:text-rose-700 underline underline-offset-4"
            >
              Play again 😌
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
