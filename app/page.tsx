"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const days = [
  { name: "Rose Day", emoji: "🌹", href: "/rose-day", date: 7 },
  { name: "Propose Day", emoji: "💍", href: "/propose-day", date: 8 },
  { name: "Chocolate Day", emoji: "🍫", href: "/chocolate-day", date: 9 },
  { name: "Teddy Day", emoji: "🧸", href: "/teddy-day", date: 10 },
  { name: "Promise Day", emoji: "🤝", href: "/promise-day", date: 11 },
  { name: "Hug Day", emoji: "🤗", href: "/hug-day", date: 12 },
  { name: "Kiss Day", emoji: "💋", href: "/kiss-day", date: 13 },
  { name: "Valentine’s Day", emoji: "❤️", href: "/valentine-day", date: 14 },
];

/* 🚫 safe zone around center text */
const heartPositions = [
  { top: "14%", left: "18%" },
  { top: "14%", left: "70%" },

  { top: "38%", left: "10%" },
  { top: "38%", left: "85%" },

  { top: "65%", left: "20%" },
  { top: "65%", left: "70%" },

  { top: "82%", left: "40%" },
  { top: "82%", left: "60%" },
];

export default function HomePage() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    if (now.getMonth() === 1) {
      setToday(now.getDate());
    }
  }, []);

  return (
    <main className="fixed inset-0 md:overflow-hidden overflow-y-auto">
      {/* 💞 Floating background hearts */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="heart-bg"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            fontSize: `${Math.random() * 14 + 12}px`,
          }}
        >
          💗
        </span>
      ))}

      {/* 💌 POETIC CENTER TEXT */}
      <div
        className="
          relative md:absolute
          inset-0
          flex
          flex-col
          items-center
          justify-start
          md:justify-center
          text-center
          px-4
          z-10
          pointer-events-none
          pt-20
          md:pt-0
          md:-translate-y-10
        "
      >
        <div className="space-y-7 max-w-md glass p-8 card-animate">
          {/* small divider */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-pink-300/50"></span>
            <span className="text-xs text-pink-700/80 italic tracking-widest">
              love you misha
            </span>
            <span className="h-px w-14 bg-pink-300/50"></span>
          </div>

          <h1 className="text-4xl font-semibold glow">
            For Misha 💖
          </h1>

          <p className="text-sm leading-loose text-pink-900/90">
            Not everything I feel fits into one page.
            <br />
            Cause Your thoughts are never ending like a huge wave.
            <br />
            Your value,
            <br />
            is like a sun to me.
            <br />
            Which makes the flower bloom for the world to see.
            <br />
            Without you, my worth fades into none,
            <br />
            I am yours for eternity, not just for passing fun.
          </p>

          <p className="text-xs text-pink-700/80 italic">
            One heart. One week. One feeling — you.
          </p>
        </div>
      </div>

      {/* 👇 Scroll hint — mobile only */}
      <div className="md:hidden sticky bottom-4 z-30 text-center animate-bounce pointer-events-none mt-6">
        <div className="text-xs text-pink-700/80 italic">
          scroll down
        </div>
        <div className="text-lg text-pink-600">⌄</div>
      </div>

      {/* 💖 HEART DAY BUTTONS — DESKTOP (floating) */}
      <div className="hidden md:block">
        {days.map((day, index) => {
          const isToday = today === day.date;
          const isFuture = today !== null && today < day.date;
          const pos = heartPositions[index];

          return (
            <Link
              key={day.href}
              href={isFuture ? "#" : day.href}
              className="absolute"
              style={{ top: pos.top, left: pos.left }}
            >
              <div
                className={`
                  heart-svg
                  ${isToday ? "heart-today" : ""}
                  ${isFuture ? "heart-locked" : ""}
                `}
              >
                <svg viewBox="0 0 512 512" aria-hidden>
                  <path d="M471.701 73.383c-54.5-46.4-136-38.3-186.4 13.7L256 116.6l-29.3-29.5c-50.4-52-131.9-60.1-186.4-13.7-62.1 52.9-66.1 149.8-9.4 207.1l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.7-57.3 52.7-154.2-9.5-207.1z" />
                </svg>

                <div className="heart-content">
                  <span className="text-xl">{day.emoji}</span>
                  <span className="text-xs mt-1">{day.name}</span>
                  {isFuture && (
                    <span className="text-xs mt-1 opacity-80">locked</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 💗 HEART DAY BUTTONS — MOBILE (tiles) */}
      <div className="md:hidden w-full px-4 mt-10 mb-10 z-20">
        <div className="grid grid-cols-2 gap-4">
          {days.map((day) => {
            const isToday = today === day.date;
            const isFuture = today !== null && today < day.date;

            return (
              <Link
                key={day.href}
                href={isFuture ? "#" : day.href}
                className={`rounded-2xl p-4 text-center glass
                  ${isToday ? "ring-2 ring-pink-500 glow" : ""}
                  ${isFuture ? "opacity-60 pointer-events-none" : ""}
                `}
              >
                <div className="text-2xl">{day.emoji}</div>
                <div className="text-sm mt-1 font-medium">{day.name}</div>
                {isFuture && (
                  <div className="text-xs mt-1 italic">locked</div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
