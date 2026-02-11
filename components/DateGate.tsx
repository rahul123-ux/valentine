"use client";

import { useEffect, useState } from "react";

const DEV_PREVIEW = false; // keep false for real logic

export default function DateGate({
  day,
  children,
}: {
  day: number;
  children: React.ReactNode;
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

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

  // 🔓 Check localStorage on mount
  useEffect(() => {
    const unlocked = localStorage.getItem(`unlocked-${day}`);
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
    setCheckedStorage(true);
  }, [day]);

  // 🔥 Unlock automatically if date has arrived or passed
  useEffect(() => {
    if (isFeb && today >= day) {
      localStorage.setItem(`unlocked-${day}`, "true");
      setIsUnlocked(true);
    }
  }, [isFeb, today, day]);

  // If already unlocked
  if (isUnlocked) {
    return <>{children}</>;
  }

  // Wait until storage check completes
  if (!checkedStorage) return null;

  // Preview mode
  if (DEV_PREVIEW) {
    return <>{children}</>;
  }

  // Too early
  if (!isFeb || today < day) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-b from-rose-50 via-pink-100 to-pink-200">
        <div className="max-w-md space-y-6">
          <p className="text-pink-600 text-xl font-light tracking-wide">
            This moment is still waiting 🤍
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

  // Fallback (should never hit now)
  return null;
}
