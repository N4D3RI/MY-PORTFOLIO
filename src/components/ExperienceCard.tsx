type Props = {
  role: string;
  organization: string;
  location: string;
  description: string;
};

export function ExperienceCard({
  role,
  organization,
  location,
  description,
}: Props) {
  return (
    <article className="hairline hairline-t pt-10 md:pt-12">
      <div className="mono-label text-fg-1 mb-4">{role}</div>
      <h3 className="font-display font-semibold text-fg-0 text-2xl md:text-3xl tracking-[-0.02em] leading-tight">
        {organization}
      </h3>
      <div className="mt-2 mono-label-sm text-fg-2">{location}</div>
      <p className="mt-5 text-fg-1 text-base md:text-lg leading-relaxed max-w-2xl">
        {description}
      </p>
    </article>
  );
}
