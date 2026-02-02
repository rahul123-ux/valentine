"use client";

export default function NightSkyGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark night base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d1a] via-[#120c24] to-[#1a0b12]" />

      {/* Soft chocolate-pink glow */}
      <div className="absolute top-[-20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-[120px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-rose-400/20 blur-[140px]" />

      {/* Subtle stars */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
