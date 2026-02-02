"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const letter = `
Misha,

This rose isn’t just a flower.
It’s a feeling.
A quiet reminder that somewhere,
someone smiles a little softer
just thinking about you.

Happy Rose Day 🌹
`;

export default function RoseLetter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (index < letter.length) {
      const timeout = setTimeout(() => {
        setText(letter.slice(0, index + 1));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      // reveal image after typing finishes
      setTimeout(() => setShowImage(true), 600);
    }
  }, [index]);

  return (
    <div className="space-y-6 text-center">
      {/* Letter */}
      <p className="text-rose-700 whitespace-pre-line text-sm leading-relaxed font-serif">
        {text}
        <span className="animate-pulse">|</span>
      </p>

      {/* Image Reveal */}
      {showImage && (
        <div className="animate-image-reveal">
          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/love.jpeg"
              alt="Us"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-3 text-xs text-rose-500 italic">
            A little memory, just for you 💕
          </p>
        </div>
      )}
    </div>
  );
}
