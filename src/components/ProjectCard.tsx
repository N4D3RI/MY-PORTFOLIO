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
  /** Lead entry — slightly raised vellum, larger title. */
  lead?: boolean;
};

const STATUS_LABEL: Record<Status, string> = {
  DEPLOYED: "in circulation",
  IN_DEVELOPMENT: "in the workshop",
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
  const live = status === "DEPLOYED";

  return (
    <article
      className={`relative px-6 md:px-12 py-12 md:py-16 text-center ${
        lead
          ? "hairline-strong hairline-t hairline-b"
          : "hairline hairline-t"
      }`}
      style={{ background: lead ? "var(--color-bg-2)" : "transparent" }}
    >
      {/* Status — small caps, centered above title */}
      <div className="inline-flex items-center gap-2 mb-6">
        {live ? (
          <LiveIndicator size={lead ? 8 : 6} />
        ) : (
          <span
            aria-hidden
            className="inline-block"
            style={{
              width: lead ? 8 : 6,
              height: lead ? 8 : 6,
              background: "var(--color-signal-dim)",
            }}
          />
        )}
        <span className={`mono-label ${live ? "text-signal" : "text-fg-2"}`}>
          {STATUS_LABEL[status]}
        </span>
      </div>

      {/* Title — serif, centered */}
      <h3
        className={`font-display text-fg-0 tracking-[-0.01em] leading-[0.95] font-medium ${
          lead
            ? "text-[clamp(2.75rem,6vw,4.75rem)]"
            : "text-[clamp(1.875rem,3.5vw,2.75rem)]"
        }`}
      >
        {codename}
      </h3>

      {summary ? (
        <p className="mt-8 mx-auto text-fg-1 text-lg md:text-xl leading-[1.7] max-w-2xl">
          {summary}
        </p>
      ) : null}

      {stack && stack.length > 0 ? (
        <div className="mt-10">
          <p className="mono-label-sm text-fg-2 mb-4">composed with</p>
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            {stack.map((tag, i) => (
              <li
                key={tag}
                className="font-display italic text-fg-1 text-base inline-flex items-center gap-3"
              >
                {tag}
                {i < stack.length - 1 ? (
                  <span aria-hidden className="text-fg-2">·</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {primaryLink || secondaryLink ? (
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer noopener"
              className="snap-hover inline-flex items-center gap-3 px-5 py-3 font-display italic text-base text-fg-0 hover:text-signal"
              style={{ background: "var(--color-bg-1)" }}
            >
              {primaryLink.label}
            </a>
          ) : null}
          {secondaryLink ? (
            <a
              href={secondaryLink.href}
              target="_blank"
              rel="noreferrer noopener"
              className="snap-hover inline-flex items-center gap-3 px-5 py-3 font-display italic text-base text-fg-1 hover:text-signal"
            >
              {secondaryLink.label}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
