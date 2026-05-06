export function Hero() {
  return (
    <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-24 md:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Wordmark */}
        <h1 className="font-display font-semibold text-fg-0 leading-[0.85] tracking-[-0.04em] text-[clamp(5rem,18vw,16rem)]">
          NADERI
        </h1>

        {/* Identifier */}
        <p className="mt-8 mono-label text-fg-1">SOUTH FLORIDA</p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="snap-hover inline-flex items-center gap-2 px-4 py-3 mono-label text-fg-0 hover:text-signal transition-none"
            style={{ background: "var(--color-bg-1)" }}
          >
            <span aria-hidden>→</span>
            PROJECTS
          </a>
          <a
            id="channel"
            href="mailto:naderimohammad273@gmail.com"
            className="snap-hover inline-flex items-center gap-2 px-4 py-3 mono-label text-fg-1 hover:text-signal transition-none"
          >
            CONTACT
          </a>
        </div>
      </div>
    </section>
  );
}
