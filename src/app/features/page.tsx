import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { featuresPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import FeatureRows from "@/components/features/FeatureRows";
import Callout from "@/components/ui/Callout";
import ItemGrid from "@/components/ui/ItemGrid";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";

export const metadata: Metadata = pageMetadata({ ...featuresPage.meta, path: "/features" });

export default function FeaturesPage() {
  const { header, list, howItWorks, scanTips } = featuresPage;

  return (
    <>
      <PageHeader {...header} />

      <Section id="all-features" tone="mist" eyebrow={list.eyebrow} title={list.title} description={list.description}>
        <FeatureRows items={list.items} />
        <div className="section-callout">
          <Callout variant="tip" text={list.tip} />
        </div>
      </Section>

      <Section
        id={howItWorks.id}
        tone="soft"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        description={howItWorks.description}
      >
        <StepList steps={howItWorks.steps} variant="row" />
      </Section>

      <Section
        id={scanTips.id}
        eyebrow={scanTips.eyebrow}
        title={scanTips.title}
        description={scanTips.description}
      >
        <ItemGrid items={scanTips.items} columns={4} />
        <div className="section-callout">
          <Callout variant="note" text={scanTips.note} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
