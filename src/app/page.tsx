import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { EmptyState } from "@/components/EmptyState";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";

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

      <Section
        id="projects"
        number="01"
        label="PROJECTS"
        sublabel="/ MANIFEST"
      >
        <div className="flex flex-col gap-12">
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
          <ProjectCard codename="HYR" status="IN_DEVELOPMENT" />
          <ProjectCard codename="STARK SYSTEMS" status="IN_DEVELOPMENT" />
        </div>
      </Section>

      <Section
        id="writing"
        number="02"
        label="WRITING"
        sublabel="/ TRANSMISSIONS"
      >
        <EmptyState />
      </Section>

      <Section
        id="experiences"
        number="03"
        label="EXPERIENCES"
        sublabel="/ WAYPOINTS"
      >
        <div className="flex flex-col gap-14 md:gap-16">
          <ExperienceCard
            role="FOUNDER"
            organization="HYR"
            location="SOUTH FLORIDA"
            description="B2B recruiting platform replacing resumes with skill assessments."
          />
          <ExperienceCard
            role="FOUNDER"
            organization="STARK SYSTEMS"
            location="SOUTH FLORIDA"
            description="AI lead generation and automation for contractors and home service businesses."
          />
          <ExperienceCard
            role="ML / AI BOOTCAMP"
            organization="TRIPLETEN"
            location="REMOTE"
            description="Python, pandas, statistics, hypothesis testing, and machine learning fundamentals."
          />
          <ExperienceCard
            role="CONSTRUCTION OPERATIONS"
            organization="LUXURY RESIDENTIAL DEVELOPMENT"
            location="SOUTH FLORIDA"
            description="Hands on exposure to GC operations, scheduling, and subcontractor management on luxury residential builds."
          />
          <ExperienceCard
            role="NATIONAL COMPETITOR"
            organization="FBLA NATIONALS"
            location="USA"
            description="Qualified for Future Business Leaders of America national competition."
          />
          <ExperienceCard
            role="COMBAT ATHLETE"
            organization="MUAY THAI"
            location="THAILAND"
            description="Trained at a Thai gym. Conditioning is a daily decision, not a season."
          />
        </div>
      </Section>
    </>
  );
}
