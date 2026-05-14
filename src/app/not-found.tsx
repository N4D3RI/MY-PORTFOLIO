import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto w-full max-w-3xl text-center flex flex-col items-center gap-8">
        <p className="mono-label text-fg-2">an errant page</p>

        <h1 className="font-display text-fg-0 text-[clamp(4rem,12vw,9rem)] tracking-[-0.01em] leading-[0.9] font-medium">
          404
        </h1>

        <p className="font-display italic text-fg-1 text-xl md:text-2xl max-w-xl">
          The leaf you sought is not in this volume.
        </p>

        <ul className="font-display italic text-fg-2 text-lg flex flex-col gap-1">
          <li>The bearing is unrecorded</li>
          <li>The route, unmarked</li>
          <li>A return to the frontispiece is advised</li>
        </ul>

        <div className="pt-2">
          <Link
            href="/"
            className="snap-hover inline-flex items-center gap-3 px-5 py-3 font-display italic text-base text-fg-0 hover:text-signal"
            style={{ background: "var(--color-bg-2)" }}
          >
            Return to the title page
          </Link>
        </div>
      </div>
    </div>
  );
}
