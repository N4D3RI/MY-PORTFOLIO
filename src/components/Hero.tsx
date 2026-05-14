export function Hero() {
  return (
    <section className="relative px-6 md:px-10 pt-16 md:pt-28 pb-28 md:pb-40">
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Frontispiece label */}
        <p className="mono-label text-fg-2 mb-8">A Personal Volume</p>

        {/* Wordmark — title-cased serif, classical proportions */}
        <h1 className="font-display text-fg-0 leading-[0.95] tracking-[-0.01em] text-[clamp(4.5rem,14vw,11rem)] font-medium">
          Naderi
        </h1>

        {/* Locale ornament */}
        <div
          aria-hidden
          className="mt-8 flex items-center justify-center gap-4 text-fg-2"
        >
          <span className="block h-px w-12 bg-fg-2/40" />
          <span className="mono-label">South Florida</span>
          <span className="block h-px w-12 bg-fg-2/40" />
        </div>

        {/* Italic flourish — the only piece that breaks the upright voice */}
        <p className="mt-10 flourish text-fg-1 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
          An aspiring machine-learning engineer drawn to the quiet places
          where intelligence meets metal.
        </p>

        {/* Quiet calls to action */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="snap-hover inline-flex items-center gap-3 px-5 py-3 font-display italic text-base text-fg-0 hover:text-signal"
            style={{ background: "var(--color-bg-2)" }}
          >
            Read the works
          </a>
          <a
            id="channel"
            href="mailto:naderimohammad273@gmail.com"
            className="snap-hover inline-flex items-center gap-3 px-5 py-3 font-display italic text-base text-fg-1 hover:text-signal"
          >
            Write a letter
          </a>
        </div>
      </div>
    </section>
  );
}
