"use client";

import { useEffect, useState } from "react";

const lines = [
  "Chocolate is sweet…",
  "But you are sweeter.",
  "You don’t melt in my hands —",
  "you melt straight into my heart. 🍫❤️",
];

export default function LoveTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    } else {
      // move to next line
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + "\n\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <pre className="mt-10 text-center text-white/85 font-light whitespace-pre-wrap leading-relaxed">
      {displayed}
    </pre>
  );
}
