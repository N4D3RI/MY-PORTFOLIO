"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  number: string; // "01", "02", "03"
  label: string;  // "PROJECTS"
  sublabel: string; // "/ MANIFEST"
  children: ReactNode;
};

export function Section({ id, number, label, sublabel, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      data-section={number}
      className="relative min-h-screen scroll-mt-24 px-6 md:px-10 py-24 md:py-32 hairline hairline-t reveal"
      data-revealed={revealed}
    >
      {/* Alignment tick — top-left, 6px mono */}
      <span
        aria-hidden
        className="absolute top-3 left-3 mono-label-sm text-fg-2"
      >
        +
      </span>

      <div className="mx-auto w-full max-w-6xl grid grid-cols-12 gap-4">
        {/* Drop-cap section number — structural left column */}
        <div className="hidden md:flex col-span-2 items-start justify-end pr-4">
          <span
            aria-hidden
            className="font-mono text-fg-2 text-[clamp(3rem,8vw,7rem)] leading-none select-none"
          >
            {number}
          </span>
        </div>

        <div className="col-span-12 md:col-span-10">
          {/* SEC.0N plate */}
          <div className="flex items-baseline gap-4 mb-8">
            <span className="mono-label text-fg-2">SEC.{number}</span>
            <span className="mono-label text-fg-1">{sublabel}</span>
          </div>

          <h2 className="font-display text-fg-0 text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] tracking-[-0.02em] font-semibold mb-10">
            {label}
          </h2>

          {children}
        </div>
      </div>
    </section>
  );
}
