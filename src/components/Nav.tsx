"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LiveIndicator } from "./LiveIndicator";

type Item = { primary: string; sub: string; href: string };

const ITEMS: Item[] = [
  { primary: "Works", sub: "i.", href: "#projects" },
  { primary: "Letter", sub: "ii.", href: "#channel" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 hairline hairline-b"
      style={{ background: "rgba(242, 234, 218, 0.92)", backdropFilter: "blur(6px)" }}
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10 py-5 grid grid-cols-3 items-center">
        {/* Left: monogram + live mark */}
        <div className="flex items-center gap-3 justify-self-start">
          <LiveIndicator size={8} />
          <span className="mono-label text-fg-2 hidden sm:inline">in residence</span>
        </div>

        {/* Center: wordmark — the spine of the book */}
        <Link
          href="/"
          className="justify-self-center font-display text-fg-0 text-xl md:text-2xl tracking-[-0.01em] hover:text-signal"
          aria-label="Naderi — home"
        >
          Naderi
        </Link>

        {/* Right: desktop nav */}
        <nav
          className="hidden md:flex justify-self-end items-baseline gap-8"
          aria-label="Primary"
        >
          {ITEMS.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="group inline-flex items-baseline gap-2 hover:text-signal"
            >
              <span className="mono-label-sm text-fg-2 group-hover:text-fg-1">
                {it.sub}
              </span>
              <span className="font-display italic text-fg-0 group-hover:text-signal text-lg">
                {it.primary}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open navigation"
          aria-expanded={open}
          className="md:hidden justify-self-end inline-flex flex-col gap-[5px] py-2"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-px bg-fg-0" />
          <span className="block w-6 h-px bg-fg-0" />
          <span className="block w-6 h-px bg-fg-0" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="md:hidden fixed inset-0 z-50 px-6 py-6 flex flex-col items-center"
          style={{ background: "var(--color-bg-1)" }}
        >
          <div className="w-full flex items-center justify-between">
            <span className="inline-flex items-center gap-3">
              <LiveIndicator size={8} />
              <span className="font-display text-fg-0 text-xl">Naderi</span>
            </span>
            <button
              aria-label="Close navigation"
              className="mono-label text-fg-1"
              onClick={() => setOpen(false)}
            >
              close
            </button>
          </div>
          <nav
            className="mt-24 flex flex-col gap-12 items-center text-center"
            aria-label="Primary mobile"
          >
            {ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="group flex flex-col items-center"
              >
                <span className="mono-label-sm text-fg-2 group-hover:text-fg-1 mb-2">
                  {it.sub}
                </span>
                <span className="font-display italic text-fg-0 text-4xl group-hover:text-signal">
                  {it.primary}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10 mono-label-sm text-fg-2">
            esc to close
          </div>
        </div>
      ) : null}
    </header>
  );
}
