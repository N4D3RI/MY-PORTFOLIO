"use client";

import { useEffect, useState } from "react";

const TARGETS: Record<string, string> = {
  p: "#projects",
  c: "#channel",
};

const ROWS: Array<[string, string]> = [
  ["?", "toggle this card"],
  ["G P", "go · works"],
  ["G C", "go · letter"],
  ["ESC", "close"],
];

export function ShortcutOverlay() {
  const [open, setOpen] = useState(false);
  const [pendingG, setPendingG] = useState(false);

  useEffect(() => {
    let gTimer: number | undefined;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase();
      const isField =
        tag === "input" ||
        tag === "textarea" ||
        (e.target as HTMLElement | null)?.isContentEditable;
      if (isField) return;

      if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") {
        setOpen(false);
        setPendingG(false);
        return;
      }
      if (e.key.toLowerCase() === "g" && !pendingG) {
        setPendingG(true);
        if (gTimer) window.clearTimeout(gTimer);
        gTimer = window.setTimeout(() => setPendingG(false), 1200);
        return;
      }
      if (pendingG) {
        const target = TARGETS[e.key.toLowerCase()];
        if (target) {
          e.preventDefault();
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ block: "start" });
          setOpen(false);
        }
        setPendingG(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (gTimer) window.clearTimeout(gTimer);
    };
  }, [pendingG]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ background: "rgba(28, 23, 20, 0.45)" }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md hairline-strong text-center"
        style={{ background: "var(--color-bg-1)", border: "1px solid var(--color-line-strong)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 hairline hairline-b flex items-center justify-between">
          <span className="font-display italic text-fg-1 text-base">marginalia</span>
          <button
            className="mono-label-sm text-fg-2 hover:text-signal"
            onClick={() => setOpen(false)}
            aria-label="Close shortcuts"
          >
            esc
          </button>
        </div>
        <ul className="px-6 py-6 flex flex-col gap-4">
          {ROWS.map(([k, label]) => (
            <li key={k} className="flex items-center justify-between">
              <span
                className="font-mono text-fg-0 text-sm tracking-[0.06em] px-2 py-1"
                style={{ border: "1px solid var(--color-line)", background: "var(--color-bg-2)" }}
              >
                {k}
              </span>
              <span className="font-display italic text-fg-1 text-base">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
