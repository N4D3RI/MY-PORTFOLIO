import { LiveIndicator } from "./LiveIndicator";

const VOLUME = "I";
const COORDS = "26.3683° N · 80.1289° W";

function todayStamp() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export function Footer() {
  const stamp = todayStamp();
  return (
    <footer className="hairline hairline-t mt-32 px-6 md:px-10 py-10">
      <div className="mx-auto w-full max-w-3xl text-center flex flex-col items-center gap-6">
        {/* Ornamental rule */}
        <div className="flex items-center gap-3 text-fg-2">
          <span className="block h-px w-16 bg-fg-2/35" />
          <span aria-hidden className="font-display italic text-base">finis</span>
          <span className="block h-px w-16 bg-fg-2/35" />
        </div>

        <p className="font-display italic text-fg-1 text-base md:text-lg">
          Set in Cormorant &amp; Garamond, printed in pixels.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mono-label text-fg-2">
          <span className="inline-flex items-center gap-2">
            <LiveIndicator size={6} />
            <span>in residence</span>
          </span>
          <span>vol. {VOLUME}</span>
          <span>{stamp}</span>
          <span>{COORDS}</span>
        </div>
      </div>
    </footer>
  );
}
