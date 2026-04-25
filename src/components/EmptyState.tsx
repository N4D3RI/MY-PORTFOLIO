function todayStamp() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

type Props = {
  lastCheck?: string;
};

export function EmptyState({ lastCheck }: Props) {
  // Stamp is fixed at build time for static export — no client tick.
  const stamp = lastCheck ?? todayStamp();
  return (
    <div className="hairline-strong hairline-t pt-10 md:pt-16 pl-1">
      <div className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-fg-0">
        PAYLOAD PENDING
      </div>
      <p className="mt-6 text-fg-1 text-base md:text-lg max-w-xl leading-relaxed">
        The channel is live. Nothing to transmit yet.
      </p>
      <dl className="mt-10 grid grid-cols-[120px_1fr] gap-y-2 gap-x-4 max-w-md mono-label text-fg-2">
        <dt>LAST CHECK</dt>
        <dd className="text-fg-1">{stamp}</dd>
        <dt>STATUS</dt>
        <dd className="text-fg-1">UNCHARTED</dd>
      </dl>
    </div>
  );
}
