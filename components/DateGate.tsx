"use client";

const DEV_PREVIEW = true; // 👈 change to false before final deploy

export default function DateGate({
  day,
  children,
}: {
  day: number;
  children: React.ReactNode;
}) {
  const now = new Date();
  const today = now.getDate();
  const isFeb = now.getMonth() === 1;

  // 🔓 Allow all pages when preview is ON
  if (DEV_PREVIEW) {
    return <>{children}</>;
  }

  if (!isFeb || today < day) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <p className="text-pink-300 text-lg">
          This moment opens on February {day} 🌙
        </p>
      </div>
    );
  }

  if (today > day) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <p className="text-gray-400">
          This day has passed, but the feeling stays.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
