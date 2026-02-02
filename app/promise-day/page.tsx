import DateGate from "../../components/DateGate";
import RomanticCard from "../../components/RomanticCard";
import LoveMeter from "../../components/LoveMeter";
import PromiseGame from "../../components/PromiseGame";
import LoveTap from "../../components/LoveTap";
import PromiseLetter from "../../components/PromiseLetter";
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

export default function PromiseDay() {
  return (
    <DateGate day={11}>
      {/* 💞 Floating background hearts */}
      {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
  <span
    key={i}
    className="heart-bg"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 12}s`,
      fontSize: `${Math.random() * 10 + 14}px`,
    }}
  >
    🤝
  </span>
))}

      {/* Promise Card */}
      <div className="mt-6 px-5">
        <RomanticCard
          title="🤝 Misha"
          text="I can’t promise perfection. I can promise honesty, effort, and choosing you — even when things feel hard."
        />
      </div>

      {/* Love Meter */}
      <div className="max-w-md mx-auto px-4 pt-4">
        <LoveMeter />
      </div>

      {/* Interactive Sections */}
      <div className="space-y-6">
        <PromiseGame />
        <LoveTap />
        <PromiseLetter />
      </div>
    </DateGate>
  );
}
