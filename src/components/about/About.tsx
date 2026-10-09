import { aboutPage } from "@/content/site";
import CtaBanner from "@/components/ui/CtaBanner";
import NumberedList from "@/components/ui/NumberedList";
import ItemGrid from "@/components/ui/ItemGrid";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";
import "./about.css";

type MissionQuoteProps = {
  quote: string;
  attribution: string;
};

type BrailleCellDiagramProps = {
  label: string;
  caption: string;
};

function BrailleCellDiagram({ label, caption }: BrailleCellDiagramProps) {
  const dots = [
    { n: 1, x: 40, y: 36 },
    { n: 2, x: 40, y: 84 },
    { n: 3, x: 40, y: 132 },
    { n: 4, x: 100, y: 36 },
    { n: 5, x: 100, y: 84 },
    { n: 6, x: 100, y: 132 },
  ];

  return (
    <figure className="cell-diagram">
      <svg viewBox="0 0 140 168" role="img" aria-label={label} className="cell-diagram-svg">
        <rect x="4" y="4" width="132" height="160" rx="20" className="cell-diagram-frame" />
        {dots.map((dot) => (
          <g key={dot.n}>
            <circle cx={dot.x} cy={dot.y} r="18" className="cell-diagram-dot" />
            <text x={dot.x} y={dot.y} className="cell-diagram-number" aria-hidden="true">
              {dot.n}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="cell-diagram-caption">{caption}</figcaption>
    </figure>
  );
}

/** Large pull-quote for the mission statement, beside a thin blue line. */
function MissionQuote({ quote, attribution }: MissionQuoteProps) {
  return (
    <figure className="pull-quote">
      <blockquote className="pull-quote-text">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="pull-quote-attribution">— {attribution}</figcaption>
    </figure>
  );
}

export default function About() {
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
