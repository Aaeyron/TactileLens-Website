import type { Metadata } from "next";
import { homeBeforeAfter, homeHighlights, homeSteps, homeWhy, site } from "@/content/site";
import HeroSection from "@/components/home/HeroSection";
import SeeItInAction from "@/components/home/SeeItInAction";
import CtaBanner from "@/components/download/CtaBanner";
import ItemGrid from "@/components/ui/ItemGrid";
import FactNumbers from "@/components/ui/FactNumbers";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";

// Title and description come from the root layout defaults.
export const metadata: Metadata = site.url ? { alternates: { canonical: "/" } } : {};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Section
        id="what-it-does"
        tone="soft"
        eyebrow={homeSteps.eyebrow}
        title={homeSteps.title}
        description={homeSteps.description}
      >
        <StepList steps={homeSteps.steps} variant="flow" />
        <div className="section-footer">
          <TextLink href={homeSteps.link.href}>{homeSteps.link.label}</TextLink>
        </div>
      </Section>

      <Section
        id="why"
        eyebrow={homeWhy.eyebrow}
        title={homeWhy.title}
        description={homeWhy.description}
      >
        <ItemGrid items={homeWhy.items} columns={3} numbered />
      </Section>

      <Section
        id="before-and-after"
        tone="soft"
        eyebrow={homeBeforeAfter.eyebrow}
        title={homeBeforeAfter.title}
        description={homeBeforeAfter.description}
      >
        <ItemGrid items={homeBeforeAfter.items} layout="split" />
      </Section>

      <SeeItInAction />

      <Section
        id="highlights"
        tone="mist"
        eyebrow={homeHighlights.eyebrow}
        title={homeHighlights.title}
        description={homeHighlights.description}
      >
        <ItemGrid items={homeHighlights.items} columns={3} linkLabel={homeHighlights.linkLabel} />
        <div className="section-block">
          <FactNumbers label={homeHighlights.facts.label} items={homeHighlights.facts.items} />
        </div>
        <div className="section-footer">
          <TextLink href={homeHighlights.link.href}>{homeHighlights.link.label}</TextLink>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
