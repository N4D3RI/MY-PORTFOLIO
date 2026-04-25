import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { EmptyState } from "@/components/EmptyState";

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
        <EmptyState />
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
