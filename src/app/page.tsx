import type { Metadata } from "next";
import { homeBeforeAfter, homeHighlights, homeSteps, homeWhy, site } from "@/content/site";
import HeroSection from "@/components/home/HeroSection";
import SeeItInAction from "@/components/home/SeeItInAction";
import CtaBanner from "@/components/download/CtaBanner";
import CardGrid from "@/components/ui/CardGrid";
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
        <CardGrid items={homeWhy.items} columns={3} numbered />
      </Section>

      <Section
        id="before-and-after"
        eyebrow={homeBeforeAfter.eyebrow}
        title={homeBeforeAfter.title}
        description={homeBeforeAfter.description}
      >
        <CardGrid items={homeBeforeAfter.items} />
      </Section>

      <SeeItInAction />

      <Section
        id="highlights"
        eyebrow={homeHighlights.eyebrow}
        title={homeHighlights.title}
        description={homeHighlights.description}
      >
        <CardGrid items={homeHighlights.items} columns={3} linkLabel={homeHighlights.cardLinkLabel} />
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
