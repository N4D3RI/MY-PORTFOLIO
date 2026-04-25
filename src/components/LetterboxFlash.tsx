"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "naderi.letterbox.shown";

// Cache the decision so the snapshot is stable across re-renders.
// React may call getSnapshot multiple times; we want one consistent answer.
let cached: boolean | null = null;
function getShouldShow(): boolean {
  if (cached !== null) return cached;
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      cached = false;
      return false;
    }
    sessionStorage.setItem(STORAGE_KEY, "1");
    cached = true;
    return true;
  } catch {
    // sessionStorage unavailable — still play once
    cached = true;
    return true;
  }
}

const subscribe = () => () => {};
const getServerSnapshot = () => false;

export function LetterboxFlash() {
  const armed = useSyncExternalStore(
    subscribe,
    getShouldShow,
    getServerSnapshot,
  );

  if (!armed) return null;

  // Bars auto-animate to scaleY(0) via CSS — they stay in DOM but become
  // invisible and pointer-events:none, so no cleanup needed.
  return (
    <>
      <div
        aria-hidden
        className="letterbox-bar"
        style={{ top: 0, "--origin": "top" } as React.CSSProperties}
      />
      <div
        aria-hidden
        className="letterbox-bar"
        style={{ bottom: 0, "--origin": "bottom" } as React.CSSProperties}
      />
    </>
  );
}
