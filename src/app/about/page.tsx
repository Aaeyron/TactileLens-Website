import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/content/site";
import Comparison from "@/components/about/Comparison";
import MissionQuote from "@/components/about/MissionQuote";
import CtaBanner from "@/components/download/CtaBanner";
import BrailleCellDiagram from "@/components/ui/BrailleCellDiagram";
import Callout from "@/components/ui/Callout";
import CardGrid from "@/components/ui/CardGrid";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = pageMetadata({ ...aboutPage.meta, path: "/about" });

export default function AboutPage() {
  const { header, comparison, basics, mission, audience, capstone } = aboutPage;

  return (
    <>
      <PageHeader {...header} />

      <Section
        id="why"
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        description={comparison.description}
      >
        <Comparison problem={comparison.problem} solution={comparison.solution} />
      </Section>

      <Section
        id="braille-basics"
        tone="brand"
        eyebrow={basics.eyebrow}
        title={basics.title}
        description={basics.description}
        aside={<BrailleCellDiagram label={basics.diagramLabel} caption={basics.diagramCaption} />}
      >
        <CardGrid items={basics.items} />
      </Section>

      <Section id="mission" eyebrow={mission.eyebrow} title={mission.title}>
        <MissionQuote quote={mission.quote} attribution={mission.attribution} />
      </Section>

      <Section
        id="audience"
        tone="brand"
        eyebrow={audience.eyebrow}
        title={audience.title}
        description={audience.description}
      >
        <CardGrid items={audience.items} />
        <div className="section-callout">
          <Callout variant="fact" text={audience.fact} />
        </div>
      </Section>

      <Section id="capstone" eyebrow={capstone.eyebrow} title={capstone.title}>
        <Prose paragraphs={capstone.paragraphs} />
        <div className="section-footer">
          <TextLink href={capstone.link.href}>{capstone.link.label}</TextLink>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
