import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/content/site";
import MissionQuote from "@/components/about/MissionQuote";
import CtaBanner from "@/components/download/CtaBanner";
import BrailleCellDiagram from "@/components/ui/BrailleCellDiagram";
import NumberedList from "@/components/ui/NumberedList";
import ItemGrid from "@/components/ui/ItemGrid";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import RichText from "@/components/ui/RichText";
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
        tone="mist"
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        description={comparison.description}
      >
        <ItemGrid items={comparison.items} layout="split" />
      </Section>

      {basics.items.map((item, index) => (
        <Section
          key={item.title}
          id={index === 0 ? "braille-basics" : `braille-basics-${index + 1}`}
          eyebrow={basics.eyebrow}
          title={item.title}
          description={item.description}
          aside={index === 0 ? <BrailleCellDiagram label={basics.diagramLabel} caption={basics.diagramCaption} /> : undefined}
        >
          <ul className="simple-points" role="list">
            {item.bullets.map((point) => <li key={point}><RichText text={point} /></li>)}
          </ul>
        </Section>
      ))}

      <Section
        id="objectives"
        tone="mist"
        eyebrow={objectives.eyebrow}
        title={objectives.title}
        description={objectives.description}
      >
        <p className="section-description">The full project objectives will be added when the capstone paper is ready to share.</p>
      </Section>

      {/* Mission as a full-width pull-quote band */}
      <Section id="mission" tone="soft" eyebrow={mission.eyebrow} title={mission.title}>
        <MissionQuote quote={mission.quote} attribution={mission.attribution} />
      </Section>

      <Section
        id="audience"
        eyebrow={audience.eyebrow}
        title={audience.title}
        description={audience.description}
      >
        <ItemGrid items={audience.items.map((item) => ({ title: item.title, description: item.description }))} />
      </Section>

      <Section
        id="timeline"
        tone="mist"
        eyebrow={timeline.eyebrow}
        title={timeline.title}
        description={timeline.description}
      >
        <NumberedList items={timeline.items.map((item) => ({ title: item.title }))} />
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
