"use client";

import { useSyncExternalStore } from "react";
import { CopyEmail } from "./CopyEmail";

// Epoch fixed so UPTIME grows monotonically across reloads.
const UPTIME_EPOCH = new Date("2026-01-01T00:00:00Z").getTime();

// Computed once on first client read, cached for the lifetime of the document
// so the value freezes at first paint and never re-ticks.
let cachedUptime: string | null = null;
function getUptime(): string {
  if (cachedUptime !== null) return cachedUptime;
  const hours = Math.max(
    0,
    Math.floor((Date.now() - UPTIME_EPOCH) / 3_600_000),
  );
  cachedUptime = String(hours).padStart(6, "0");
  return cachedUptime;
}

const subscribe = () => () => {};
const getServerSnapshot = () => "000000";

export function Hero() {
  const uptime = useSyncExternalStore(subscribe, getUptime, getServerSnapshot);

  return (
    <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-24 md:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top row: positioning slot + channel */}
        <div className="flex items-start justify-between gap-8 mb-10">
          <div className="mono-label text-fg-2">
            ORIGIN · 2026 //{" "}
            <span className="text-fg-1">CALL SIGN</span>
          </div>
          <CopyEmail />
        </div>

        {/* Wordmark */}
        <h1 className="font-display font-semibold text-fg-0 leading-[0.85] tracking-[-0.04em] text-[clamp(5rem,18vw,16rem)]">
          NADERI
        </h1>

        {/* Positioning + caret */}
        <p className="mt-8 max-w-2xl text-fg-0 text-lg md:text-xl leading-relaxed">
          Building what comes next from South Florida. Software, systems, and
          the occasional vehicle.
          <span aria-hidden className="caret-blink" />
        </p>

        {/* Metadata strip */}
        <div className="mt-10 hairline hairline-t hairline-b py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mono-label text-fg-2">
            <span>STATION · SOUTH FLORIDA</span>
            <span aria-hidden>·</span>
            <span>VECTOR · AEROSPACE</span>
            <span aria-hidden>·</span>
            <span>MODE · INFERENCE</span>
            <span aria-hidden>·</span>
            <span>BUILD · 0.0.1</span>
            <span aria-hidden>·</span>
            <span className="text-signal">STATUS · LIVE</span>
            <span className="ml-auto text-fg-1">UPTIME {uptime}h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
