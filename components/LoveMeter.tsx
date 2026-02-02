export default function LoveMeter() {
  return (
    <div className="rounded-2xl bg-white/70 border border-rose-200 px-5 py-4 shadow-sm">
      <p className="text-sm text-rose-600 mb-2 font-medium">
        Love Meter 💗
      </p>

      <div className="w-full h-3 bg-rose-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"
          style={{ width: "92%" }}
        />
      </div>

      <p className="mt-2 text-xs text-rose-500 italic">
        Off the charts… always has been ✨
      </p>
    </div>
  );
}
