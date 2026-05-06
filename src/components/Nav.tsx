"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LiveIndicator } from "./LiveIndicator";

type Item = { primary: string; sub: string; href: string };

const ITEMS: Item[] = [
  { primary: "PROJECTS", sub: "/ manifest", href: "#projects" },
  { primary: "CONTACT", sub: "/ channel", href: "#channel" },
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
      className="fixed inset-x-0 top-0 z-40 hairline-strong hairline-b"
      style={{ background: "var(--color-bg-1)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-5 flex items-end justify-between gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 hover:text-signal transition-none"
          aria-label="NADERI — home"
        >
          <LiveIndicator size={10} />
          <span className="font-display font-semibold text-fg-0 tracking-[-0.02em] text-base md:text-lg">
            NADERI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-end gap-8" aria-label="Primary">
          {ITEMS.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="group flex flex-col leading-none hover:text-signal transition-none"
            >
              <span className="font-body text-fg-0 group-hover:text-signal text-sm tracking-[0.02em]">
                {it.primary}
              </span>
              <span className="mt-1 mono-label-sm text-fg-2 group-hover:text-fg-1">
                {it.sub}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open navigation"
          aria-expanded={open}
          className="md:hidden inline-flex flex-col gap-[5px] py-2"
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
          className="md:hidden fixed inset-0 z-50 px-6 py-6 flex flex-col"
          style={{ background: "var(--color-bg-1)" }}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-3">
              <LiveIndicator size={10} />
              <span className="font-display font-semibold text-fg-0 tracking-[-0.02em]">
                NADERI
              </span>
            </span>
            <button
              aria-label="Close navigation"
              className="mono-label text-fg-1"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>
          </div>
          <nav
            className="mt-16 flex flex-col gap-10"
            aria-label="Primary mobile"
          >
            {ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="group flex flex-col"
              >
                <span className="font-display font-semibold text-fg-0 text-3xl tracking-[-0.02em] group-hover:text-signal">
                  {it.primary}
                </span>
                <span className="mt-2 mono-label text-fg-2 group-hover:text-fg-1">
                  {it.sub}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10 hairline hairline-t mono-label-sm text-fg-2">
            ESC TO CLOSE
          </div>
        </div>
      ) : null}
    </header>
  );
}
