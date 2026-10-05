import type { Metadata } from "next";
import { homeBeforeAfter, homeHighlights, homeSteps, homeWhy, site } from "@/content/site";
import HeroSection from "@/components/home/HeroSection";
import SeeItInAction from "@/components/home/SeeItInAction";
import CtaBanner from "@/components/download/CtaBanner";
import Section from "@/components/ui/Section";
import ItemGrid from "@/components/ui/ItemGrid";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = site.url ? { alternates: { canonical: "/" } } : {};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Section id="highlights" eyebrow={homeHighlights.eyebrow} title={homeHighlights.title} description={homeHighlights.description}>
        <ItemGrid items={homeHighlights.items.map((item) => ({ title: item.title, description: item.description, bullets: item.bullets }))} columns={3} />
        <div className="section-footer"><TextLink href={homeHighlights.link.href}>{homeHighlights.link.label}</TextLink></div>
      </Section>

      <Section id="what-it-does" tone="mist" eyebrow={homeSteps.eyebrow} title={homeSteps.title} description={homeSteps.description}>
        <StepList steps={homeSteps.steps} variant="row" />
      </Section>

      <SeeItInAction />

      <Section id="why" tone="mist" eyebrow={homeWhy.eyebrow} title={homeWhy.title} description={homeWhy.description}>
        <ItemGrid items={homeWhy.items} columns={3} />
      </Section>

      <Section id="before-and-after" eyebrow={homeBeforeAfter.eyebrow} title={homeBeforeAfter.title} description={homeBeforeAfter.description}>
        <ItemGrid items={homeBeforeAfter.items} layout="split" />
      </Section>

      <CtaBanner />
    </>
  );
}
