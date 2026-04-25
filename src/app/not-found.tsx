import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl flex flex-col items-start gap-8">
        <div
          className="mono-label inline-flex items-center gap-3"
          style={{ color: "var(--color-hazard)" }}
        >
          <span
            aria-hidden
            className="inline-block h-[6px] w-[6px]"
            style={{ background: "var(--color-hazard)" }}
          />
          SIGNAL LOST
        </div>
        <h1 className="font-display font-semibold text-fg-0 text-[clamp(4rem,12vw,9rem)] tracking-[-0.04em] leading-[0.85]">
          ERR / 404
        </h1>
        <ul className="mono-label text-fg-2 flex flex-col gap-1">
          <li>REQUESTED ROUTE NOT IN MANIFEST</li>
          <li>LAST KNOWN BEARING · UNKNOWN</li>
          <li>RECOMMENDATION · RETURN TO BASE</li>
        </ul>
        <div className="flex gap-6 pt-4 mono-label">
          <Link href="/" className="text-fg-0 hover:text-signal transition-none">
            → RETURN TO BASE
          </Link>
        </div>
      </div>
    </div>
  );
}
