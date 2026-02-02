"use client";

export default function ValentineMoments({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* MAIN CARD */}
        <div className="rounded-3xl bg-[#fffafc] border border-pink-200 shadow-[0_20px_50px_rgba(255,105,180,0.25)] p-8 text-center animate-fadeIn">
          {/* TITLE */}
          <h2 className="text-xl font-semibold text-[#3b0a2a] tracking-wide mb-2">
            Little Moments With You
          </h2>

          <p className="text-sm text-[#5a1a3c]/80 mb-6">
            The quiet memories that made my heart stay.
          </p>

          {/* MOMENT GRID */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              "Late talks",
              "Soft laughs",
              "Shared silence",
              "Stolen smiles",
              "Comfort days",
              "Us",
            ].map((label, i) => (
              <div
                key={i}
                className="group relative h-24 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-100 to-rose-100 shadow-sm flex items-center justify-center overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-pink-200/40 blur-xl" />

                <span className="relative text-xs text-[#7a1f4a] font-medium text-center px-2">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* FOOTNOTE */}
          <p className="text-xs text-[#7a1f4a]/70 mb-6 leading-relaxed">
            Not everything needs a photo.
            <br />
            Some memories just live quietly in the heart.
          </p>

          {/* CTA */}
          <button
            onClick={onNext}
            className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white font-medium shadow-lg active:scale-95 transition"
          >
            Keep going 💖
          </button>
        </div>
      </div>
    </section>
  );
}
