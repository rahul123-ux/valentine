"use client";

import { useEffect, useState } from "react";

export default function ValentineEnding() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* SOFT HEART INTRO */}
        <div className="mb-10 animate-pulseSlow text-5xl">❤️</div>

        {/* MAIN CARD */}
        <div className="rounded-3xl bg-[#fffafc] border border-pink-200 shadow-[0_30px_60px_rgba(255,105,180,0.25)] p-8 transition-all duration-1000">
          {showText && (
            <div className="animate-fadeInSlow space-y-5">
              <h2 className="text-xl font-semibold text-[#3b0a2a] tracking-wide">
                Happy Valentine’s Day
              </h2>

              <p className="text-sm leading-relaxed text-[#4a1030]">
                No matter what today means,
                I want you to know this —
                loving you has been one of the most
                honest things I’ve ever felt.
              </p>

              <p className="text-sm text-[#5a1a3c]">
                In every universe,
                in every version of me…
              </p>

              <p className="text-rose-500 font-medium">
                it’s always been you.
              </p>
            </div>
          )}
        </div>

        {/* QUIET FADE OUT */}
        <p className="mt-8 text-xs text-[#7a1f4a]/60 tracking-wide">
          Thank you for being here 🤍
        </p>
      </div>
    </section>
  );
}
