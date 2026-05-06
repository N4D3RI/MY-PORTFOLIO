import { LiveIndicator } from "./LiveIndicator";

type Status = "DEPLOYED" | "IN_DEVELOPMENT";

type LinkSpec = { href: string; label: string };

type Props = {
  codename: string;
  status: Status;
  summary?: string;
  stack?: string[];
  primaryLink?: LinkSpec;
  secondaryLink?: LinkSpec;
  /** Lead project — raised surface, larger codename, full hairline frame. */
  lead?: boolean;
};

export function ProjectCard({
  codename,
  status,
  summary,
  stack,
  primaryLink,
  secondaryLink,
  lead = false,
}: Props) {
  const deployed = status === "DEPLOYED";

  return (
    <article
      className={`relative px-6 md:px-10 py-10 md:py-12 ${
        lead
          ? "hairline-strong hairline-t hairline-b"
          : "hairline hairline-t"
      }`}
      style={{ background: lead ? "var(--color-bg-2)" : "transparent" }}
    >
      {/* Alignment tick — matches Section's instrument-panel feel */}
      <span
        aria-hidden
        className="absolute top-3 left-3 mono-label-sm text-fg-2"
      >
        +
      </span>

      {/* Top row: codename + status */}
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div className="min-w-0">
          <div className="mono-label-sm text-fg-2 mb-2">CODENAME</div>
          <h3
            className={`font-display font-semibold text-fg-0 tracking-[-0.02em] leading-[0.9] ${
              lead
                ? "text-[clamp(2.5rem,6vw,4.5rem)]"
                : "text-[clamp(1.75rem,3.5vw,2.5rem)]"
            }`}
          >
            {codename}
          </h3>
        </div>
        <div className="text-right shrink-0">
          <div className="mono-label-sm text-fg-2 mb-2">STATUS</div>
          <div className="inline-flex items-center gap-2">
            {deployed ? (
              <LiveIndicator size={lead ? 10 : 8} />
            ) : (
              <span
                aria-hidden
                className="inline-block"
                style={{
                  width: lead ? 10 : 8,
                  height: lead ? 10 : 8,
                  background: "var(--color-signal-dim)",
                }}
              />
            )}
            <span
              className={`mono-label ${
                deployed ? "text-signal" : "text-fg-1"
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>

      {summary ? (
        <p className="mt-10 text-fg-0 text-base md:text-lg leading-relaxed max-w-2xl">
          {summary}
        </p>
      ) : null}

      {stack && stack.length > 0 ? (
        <div className="mt-10">
          <div className="mono-label-sm text-fg-2 mb-3">STACK</div>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tag) => (
              <li
                key={tag}
                className="font-mono uppercase tracking-[0.08em] text-fg-1 text-xs px-2 py-1"
                style={{
                  border: "1px solid var(--color-line-strong)",
                  background: "var(--color-bg-1)",
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {primaryLink || secondaryLink ? (
        <div className="mt-12 flex flex-wrap gap-3">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer noopener"
              className="snap-hover inline-flex items-center gap-2 px-4 py-3 mono-label text-fg-0 hover:text-signal transition-none"
              style={{ background: "var(--color-bg-1)" }}
            >
              <span aria-hidden>→</span>
              {primaryLink.label}
            </a>
          ) : null}
          {secondaryLink ? (
            <a
              href={secondaryLink.href}
              target="_blank"
              rel="noreferrer noopener"
              className="snap-hover inline-flex items-center gap-2 px-4 py-3 mono-label text-fg-1 hover:text-signal transition-none"
            >
              {secondaryLink.label}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
