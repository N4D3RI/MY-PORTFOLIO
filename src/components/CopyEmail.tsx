"use client";

import { useEffect, useState } from "react";

const EMAIL = "naderimohammad273@gmail.com";

export function CopyEmail() {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(false), 1500);
    return () => window.clearTimeout(t);
  }, [toast]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // graceful fall-through; selection works
    }
    setToast(true);
  }

  return (
    <div id="channel" className="relative inline-block text-right">
      <span className="mono-label text-fg-2">CHANNEL</span>
      <button
        onClick={copy}
        className="block mt-1 font-mono text-fg-0 text-sm md:text-base hover:text-signal transition-none"
        aria-label={`Copy email ${EMAIL} to clipboard`}
      >
        {EMAIL}
      </button>
      {toast ? (
        <span
          role="status"
          aria-live="polite"
          className="absolute right-0 mt-2 inline-block bg-bg-2 px-2 py-1 mono-label-sm text-signal hairline hairline-b"
          style={{
            border: "1px solid var(--color-line-strong)",
          }}
        >
          CHANNEL COPIED
        </span>
      ) : null}
    </div>
  );
}
