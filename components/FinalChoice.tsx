"use client";
import { useState } from "react";

export default function FinalChoice() {
  const [c, setC] = useState<"yes" | "time" | null>(null);

  if (c === "yes")
    return (
      <p className="text-pink-300 text-xl glow mt-8">
        Thank you for choosing me ❤️
      </p>
    );

  if (c === "time")
    return (
      <p className="text-gray-300 mt-8">
        Take your time. I meant that.
      </p>
    );

  return (
    <div className="mt-10 space-y-4">
      <button
        onClick={() => setC("yes")}
        className="w-full py-3 rounded-full bg-pink-500"
      >
        Yes ❤️
      </button>
      <button
        onClick={() => setC("time")}
        className="w-full py-3 rounded-full bg-white/10"
      >
        I need time 🌙
      </button>
    </div>
  );
}
