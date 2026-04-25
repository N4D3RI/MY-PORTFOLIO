import { LiveIndicator } from "./LiveIndicator";

const BUILD = "0.0.1";
const COORDS = "26.3683° N  80.1289° W";
const SCENE = "SCN 01 / TK 01";

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
    <footer className="hairline-strong hairline-t mt-32 px-6 md:px-10 py-8">
      <div className="mx-auto w-full max-w-6xl flex flex-wrap items-center gap-x-8 gap-y-3 mono-label text-fg-2">
        <span className="inline-flex items-center gap-2">
          <LiveIndicator size={8} />
          <span className="text-fg-1">SIGNAL · LIVE</span>
        </span>
        <span>{`BUILD ${BUILD} // ${stamp}`}</span>
        <span>LAST TRANSMISSION {stamp}</span>
        <span>COORDINATES {COORDS}</span>
        <span className="ml-auto">{SCENE}</span>
      </div>
    </footer>
  );
}
