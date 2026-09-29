import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import CardGrid from "@/components/ui/CardGrid";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = pageMetadata({ ...aboutPage.meta, path: "/about" });

export default function AboutPage() {
  const { header, problem, mission, audience, capstone } = aboutPage;

  return (
    <>
      <PageHeader {...header} />

      <Section id="problem" eyebrow={problem.eyebrow} title={problem.title}>
        <Prose paragraphs={problem.paragraphs} />
      </Section>

      <Section id="mission" tone="soft" eyebrow={mission.eyebrow} title={mission.title}>
        <Prose paragraphs={mission.paragraphs} />
      </Section>

      <Section id="audience" eyebrow={audience.eyebrow} title={audience.title}>
        <CardGrid items={audience.items} />
      </Section>

      <Section id="capstone" tone="soft" eyebrow={capstone.eyebrow} title={capstone.title}>
        <Prose paragraphs={capstone.paragraphs} />
        <div className="section-footer">
          <TextLink href={capstone.link.href}>{capstone.link.label}</TextLink>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
