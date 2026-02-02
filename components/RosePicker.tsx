"use client";

export default function RosePicker({ onPick }: { onPick: () => void }) {
  return (
    <div className="max-w-md mx-auto px-6 pb-24 text-center card-animate">
      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold glow mb-2">
          Pick a Rose 🌹
        </h2>

        <p className="text-pink glow text-sm mb-6">
          One of these roses holds a secret message…
        </p>

        <div className="flex justify-center gap-6 text-5xl">
          <button onClick={onPick}>🌹</button>
          <button onClick={onPick}>🌹</button>
          <button onClick={onPick}>🌹</button>
        </div>
      </div>
    </div>
  );
}
