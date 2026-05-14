"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  number: string;   // "i", "ii", "iii" — Roman numerals
  label: string;    // "Works"
  sublabel: string; // "a small index"
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
      className="relative scroll-mt-24 px-6 md:px-10 py-24 md:py-32 hairline hairline-t reveal"
      data-revealed={revealed}
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Roman numeral — quiet folio mark */}
        <p className="mono-label text-fg-2 mb-3">
          {number}
        </p>

        {/* Title — large serif, set in small caps via styling */}
        <h2 className="font-display text-fg-0 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1] tracking-[-0.01em] font-medium">
          {label}
        </h2>

        {/* Italic subtitle */}
        <p className="mt-3 flourish text-fg-2 text-lg">
          {sublabel}
        </p>

        {/* Ornamental divider */}
        <div className="my-12 flex items-center justify-center gap-3 text-fg-2">
          <span className="block h-px w-16 bg-fg-2/35" />
          <span aria-hidden className="font-display italic text-base">§</span>
          <span className="block h-px w-16 bg-fg-2/35" />
        </div>

        {children}
      </div>
    </section>
  );
}
