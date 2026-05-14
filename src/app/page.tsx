import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

const SKILL_GROUPS: Array<{ label: string; items: string[] }> = [
  { label: "Languages", items: ["Python", "SQL"] },
  {
    label: "Libraries",
    items: ["pandas", "NumPy", "matplotlib", "seaborn", "SciPy"],
  },
  {
    label: "Concepts",
    items: [
      "Probability",
      "Statistics",
      "Hypothesis testing",
      "Data visualization",
      "Exploratory analysis",
    ],
  },
  { label: "Instruments", items: ["Git", "GitHub", "Jupyter", "VS Code"] },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About — quiet preface */}
      <section
        id="about"
        className="relative scroll-mt-24 px-6 md:px-10 py-24 md:py-32 hairline hairline-t"
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mono-label text-fg-2 mb-3">a brief preface</p>
          <h2 className="font-display font-medium text-fg-0 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1] tracking-[-0.01em]">
            About
          </h2>

          <div className="my-12 flex items-center justify-center gap-3 text-fg-2">
            <span className="block h-px w-16 bg-fg-2/35" />
            <span aria-hidden className="font-display italic text-base">§</span>
            <span className="block h-px w-16 bg-fg-2/35" />
          </div>

          <p className="text-fg-0 text-lg md:text-xl leading-[1.8] max-w-2xl mx-auto">
            I am Mo Naderi. I am twenty-one, based in South Florida, and
            currently studying machine learning at TripleTen. Outside of code I
            keep watch at the Kennedy Space Center launches, train Muay Thai,
            and drive my truck through the Everglades. Long term, I am
            pointed at aerospace.
          </p>
        </div>
      </section>

      {/* Skills — three columns of marginalia */}
      <section
        id="skills"
        className="relative scroll-mt-24 px-6 md:px-10 py-24 md:py-32 hairline hairline-t"
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mono-label text-fg-2 mb-3">an index of the tools</p>
          <h2 className="font-display font-medium text-fg-0 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1] tracking-[-0.01em]">
            Skills
          </h2>

          <div className="my-12 flex items-center justify-center gap-3 text-fg-2">
            <span className="block h-px w-16 bg-fg-2/35" />
            <span aria-hidden className="font-display italic text-base">§</span>
            <span className="block h-px w-16 bg-fg-2/35" />
          </div>

          <dl className="flex flex-col gap-10">
            {SKILL_GROUPS.map(({ label, items }) => (
              <div key={label} className="text-center">
                <dt className="mono-label text-fg-2 mb-3">{label}</dt>
                <dd>
                  <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-fg-0">
                    {items.map((item, i) => (
                      <li
                        key={item}
                        className="font-display italic text-lg md:text-xl inline-flex items-center gap-3"
                      >
                        {item}
                        {i < items.length - 1 ? (
                          <span aria-hidden className="text-fg-2 not-italic">·</span>
                        ) : null}
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
        number="i."
        label="Works"
        sublabel="a small catalogue of recent things"
      >
        <ProjectCard
          lead
          codename="Lexpy"
          status="DEPLOYED"
          summary="An interactive Python glossary of one hundred and fifty functions. Search any method, read what it does, see it used, run real Python in the browser through Pyodide."
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
            label: "Open the volume",
          }}
          secondaryLink={{
            href: "https://github.com/N4D3RI/lexpy-dictionary",
            label: "Read the source",
          }}
        />
      </Section>
    </>
  );
}
