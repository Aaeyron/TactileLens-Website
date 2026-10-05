import type { Metadata } from "next";
import { homeBeforeAfter, homeHighlights, homeSteps, homeWhy, site } from "@/content/site";
import HeroSection from "@/components/home/HeroSection";
import SeeItInAction from "@/components/home/SeeItInAction";
import CtaBanner from "@/components/download/CtaBanner";
import EdSection from "@/components/editorial/EdSection";
import EdSplit from "@/components/editorial/EdSplit";
import ItemGrid from "@/components/ui/ItemGrid";
import FactNumbers from "@/components/ui/FactNumbers";
import NumberedList from "@/components/ui/NumberedList";
import Screenshot from "@/components/ui/Screenshot";
import TextLink from "@/components/ui/TextLink";

// Title and description come from the root layout defaults.
export const metadata: Metadata = site.url ? { alternates: { canonical: "/" } } : {};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* How it works: phone panel on the left (the hero's is on the right) */}
      <EdSplit
        id="what-it-does"
        mediaSide="left"
        eyebrow={homeSteps.eyebrow}
        title={homeSteps.title}
        description={homeSteps.description}
        media={
          // TODO: screenshot — see screens.brailleOutput in site.ts
          <div className="ed-phone">
            <Screenshot screen={homeSteps.steps[2].screen} frame sizes="(min-width: 960px) 272px, 240px" />
          </div>
        }
      >
        <NumberedList
          items={homeSteps.steps.map((step) => ({ title: step.title, text: step.description }))}
        />
        <div className="section-footer">
          <TextLink href={homeSteps.link.href}>{homeSteps.link.label}</TextLink>
        </div>
      </EdSplit>

      <EdSection
        id="why"
        tone="soft"
        layout="side"
        eyebrow={homeWhy.eyebrow}
        title={homeWhy.title}
        description={homeWhy.description}
      >
        <ItemGrid items={homeWhy.items} columns={3} numbered />
      </EdSection>

      <SeeItInAction />

      <EdSection
        id="before-and-after"
        tone="navy"
        eyebrow={homeBeforeAfter.eyebrow}
        title={homeBeforeAfter.title}
        description={homeBeforeAfter.description}
      >
        <ItemGrid items={homeBeforeAfter.items} layout="split" />
      </EdSection>

      <EdSection
        id="highlights"
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
      </EdSection>

      <CtaBanner />
    </>
  );
}
