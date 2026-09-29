import type { Metadata } from "next";
import { homeHighlights, homeSteps, site } from "@/content/site";
import HeroSection from "@/components/home/HeroSection";
import SeeItInAction from "@/components/home/SeeItInAction";
import CtaBanner from "@/components/download/CtaBanner";
import CardGrid from "@/components/ui/CardGrid";
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

      <SeeItInAction />

      <Section
        id="highlights"
        tone="soft"
        eyebrow={homeHighlights.eyebrow}
        title={homeHighlights.title}
        description={homeHighlights.description}
      >
        <CardGrid items={homeHighlights.items} columns={3} linkLabel={homeHighlights.cardLinkLabel} />
        <div className="section-footer">
          <TextLink href={homeHighlights.link.href}>{homeHighlights.link.label}</TextLink>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
