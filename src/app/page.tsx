import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { EmptyState } from "@/components/EmptyState";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Hero />

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
        <EmptyState />
      </Section>
    </>
  );
}
