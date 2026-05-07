import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

const SKILL_GROUPS: Array<{ label: string; items: string[] }> = [
  { label: "LANGUAGES", items: ["Python", "SQL"] },
  {
    label: "LIBRARIES",
    items: ["pandas", "NumPy", "matplotlib", "seaborn", "SciPy"],
  },
  {
    label: "CONCEPTS",
    items: [
      "Probability",
      "Statistics",
      "Hypothesis Testing",
      "Data Visualization",
      "Exploratory Data Analysis",
    ],
  },
  { label: "TOOLS", items: ["Git", "GitHub", "Jupyter", "VS Code"] },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About — minimal panel, no SEC.0N to keep it visually distinct from
          the numbered manifest sections below. */}
      <section
        id="about"
        className="relative scroll-mt-24 px-6 md:px-10 py-24 md:py-32 hairline hairline-t"
      >
        <span
          aria-hidden
          className="absolute top-3 left-3 mono-label-sm text-fg-2"
        >
          +
        </span>
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display font-semibold text-fg-0 text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] tracking-[-0.02em] mb-10">
            ABOUT
          </h2>
          <p className="font-mono text-fg-0 text-sm md:text-base leading-[1.8] max-w-[65ch]">
            I am Mo Naderi. I am 21, based in South Florida, and currently
            studying machine learning at TripleTen. Outside of code I spend
            time at Kennedy Space Center launches, training Muay Thai, and
            driving my truck through the Everglades. Long term I am pointed
            at aerospace.
          </p>
        </div>
      </section>

      {/* Skills — minimal panel matching About's frame, chip styling
          mirrors the project stack tags. */}
      <section
        id="skills"
        className="relative scroll-mt-24 px-6 md:px-10 py-24 md:py-32 hairline hairline-t"
      >
        <span
          aria-hidden
          className="absolute top-3 left-3 mono-label-sm text-fg-2"
        >
          +
        </span>
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display font-semibold text-fg-0 text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] tracking-[-0.02em] mb-10">
            SKILLS
          </h2>
          <dl className="flex flex-col gap-8 md:gap-10">
            {SKILL_GROUPS.map(({ label, items }) => (
              <div
                key={label}
                className="grid grid-cols-12 gap-3 md:gap-6 items-start"
              >
                <dt className="col-span-12 md:col-span-3 mono-label text-fg-2 md:pt-2">
                  {label}
                </dt>
                <dd className="col-span-12 md:col-span-9">
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="font-mono uppercase tracking-[0.08em] text-fg-1 text-xs px-2 py-1"
                        style={{
                          border: "1px solid var(--color-line-strong)",
                          background: "var(--color-bg-1)",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section
        id="projects"
        number="01"
        label="PROJECTS"
        sublabel="/ MANIFEST"
      >
        <ProjectCard
          lead
          codename="LEXPY"
          status="DEPLOYED"
          summary="Interactive Python glossary with 150 functions. Search any method, read what it does, see it used, run real Python in the browser via Pyodide."
          stack={[
            "React",
            "TypeScript",
            "Vite",
            "Pyodide",
            "Tailwind",
            "Fuse.js",
          ]}
          primaryLink={{
            href: "https://n4d3ri.github.io/lexpy-dictionary/",
            label: "VIEW TRANSMISSION",
          }}
          secondaryLink={{
            href: "https://github.com/N4D3RI/lexpy-dictionary",
            label: "SOURCE",
          }}
        />
      </Section>
    </>
  );
}
