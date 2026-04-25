"use client";

import { useEffect, useState } from "react";

export function GridOverlay() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      if (window.scrollY > 8) {
        setActive(true);
        triggered = true;
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Reveal anyway after a short idle so users who never scroll still see it.
    const t = window.setTimeout(() => setActive(true), 1500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  return <div aria-hidden className="grid-overlay" data-active={active} />;
}
