import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/content/site";
import MissionQuote from "@/components/about/MissionQuote";
import CtaBanner from "@/components/download/CtaBanner";
import BrailleCellDiagram from "@/components/ui/BrailleCellDiagram";
import Callout from "@/components/ui/Callout";
import NumberedList from "@/components/ui/NumberedList";
import CardGrid from "@/components/ui/CardGrid";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = pageMetadata({ ...aboutPage.meta, path: "/about" });

export default function AboutPage() {
  const { header, comparison, basics, objectives, mission, audience, timeline, capstone } = aboutPage;

  return (
    <>
      <PageHeader {...header} />

      <Section
        id="why"
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        description={comparison.description}
      >
        <CardGrid items={comparison.items} />
      </Section>

      <Section
        id="braille-basics"
        eyebrow={basics.eyebrow}
        title={basics.title}
        description={basics.description}
        aside={<BrailleCellDiagram label={basics.diagramLabel} caption={basics.diagramCaption} />}
      >
        <CardGrid items={basics.items} />
      </Section>

      <Section
        id="objectives"
        eyebrow={objectives.eyebrow}
        title={objectives.title}
        description={objectives.description}
      >
        <NumberedList items={objectives.items} />
      </Section>

      {/* Mission as a full-width pull-quote band */}
      <Section id="mission" eyebrow={mission.eyebrow} title={mission.title}>
        <MissionQuote quote={mission.quote} attribution={mission.attribution} />
      </Section>

      <Section
        id="audience"
        eyebrow={audience.eyebrow}
        title={audience.title}
        description={audience.description}
      >
        <CardGrid items={audience.items} />
        <div className="section-callout">
          <Callout variant="fact" text={audience.fact} />
        </div>
      </Section>

      <Section
        id="timeline"
        eyebrow={timeline.eyebrow}
        title={timeline.title}
        description={timeline.description}
      >
        <NumberedList items={timeline.items} />
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
