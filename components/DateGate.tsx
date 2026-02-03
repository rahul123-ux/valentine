"use client";

import { useEffect, useState } from "react";

const DEV_PREVIEW = false; // 👈 set to false before final deploy

export default function DateGate({
  day,
  children,
}: {
  day: number;
  children: React.ReactNode;
}) {
  const now = new Date();
  const today = now.getDate();
  const isFeb = now.getMonth() === 1;

  // ✍️ Typewriter text
  const fullText =
    "Some moments arrive softly… right when they are meant to.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // 🔓 Preview mode
  if (DEV_PREVIEW) {
    return <>{children}</>;
  }

  // 🌸 Locked — too early
  if (!isFeb || today < day) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          background:
            "linear-gradient(to bottom, #fff1f2, #fce7f3, #fbcfe8)",
        }}
      >
        <div className="max-w-md space-y-6">
          <p className="text-pink-600 text-xl font-light tracking-wide">
            This moment is still waiting 🤍
          </p>

          <p className="text-pink-500 text-lg">
            It will open on
          </p>

          <p className="text-pink-700 text-3xl font-semibold">
            February {day} 🌙
          </p>

          <p className="text-pink-500 text-sm italic min-h-[3rem]">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    );
  }

  // 🌙 Passed
  if (today > day) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          background:
            "linear-gradient(to bottom, #fff1f2, #fce7f3)",
        }}
      >
        <div className="space-y-4">
          <p className="text-pink-600 text-xl">
            This day has passed 🌙
          </p>
          <p className="text-pink-500 italic">
            But the feeling stays.
          </p>
        </div>
      </div>
    );
  }

  // ❤️ Right day — unlock
  return <>{children}</>;
}
