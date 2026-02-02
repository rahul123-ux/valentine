export default function RomanticCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="relative text-center max-w-xl mx-auto">

      {/* 🌙 Soft ambient glow behind name */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 w-64 h-64 rounded-full bg-rose-400/30 blur-[90px]" />

      {/* ✨ Floating Name */}
      <h1 className="relative text-4xl sm:text-5xl font-medium tracking-wide text-rose-600 drop-shadow-sm">
        {title}
      </h1>

      {/* 🌸 Whispered text */}
      <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-rose-500 max-w-md mx-auto">
        {text}
      </p>
    </div>
  );
}
