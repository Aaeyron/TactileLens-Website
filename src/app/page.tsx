import type { Metadata } from "next";
import { homeFacts, homeHighlights, homeSteps, site } from "@/content/site";
import HeroSection from "@/components/home/HeroSection";
import SeeItInAction from "@/components/home/SeeItInAction";
import CtaBanner from "@/components/download/CtaBanner";
import Callout from "@/components/ui/Callout";
import CardGrid from "@/components/ui/CardGrid";
import Container from "@/components/ui/Container";
import FactStrip from "@/components/ui/FactStrip";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";

// Title and description come from the root layout defaults.
export const metadata: Metadata = site.url ? { alternates: { canonical: "/" } } : {};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="facts-band">
        <Container>
          <FactStrip label={homeFacts.label} items={homeFacts.items} />
        </Container>
      </div>

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

      <SeeItInAction />

      <Section
        id="highlights"
        eyebrow={homeHighlights.eyebrow}
        title={homeHighlights.title}
        description={homeHighlights.description}
      >
        <CardGrid items={homeHighlights.items} columns={3} linkLabel={homeHighlights.cardLinkLabel} />
        <div className="section-callout">
          <Callout variant="fact" text={homeHighlights.fact} />
        </div>
        <div className="section-footer">
          <TextLink href={homeHighlights.link.href}>{homeHighlights.link.label}</TextLink>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
