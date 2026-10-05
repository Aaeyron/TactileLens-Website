import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { featuresPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import CheckList from "@/components/ui/CheckList";
import ItemGrid from "@/components/ui/ItemGrid";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import Screenshot from "@/components/ui/Screenshot";

export const metadata: Metadata = pageMetadata({ ...featuresPage.meta, path: "/features" });

export default function FeaturesPage() {
  const { header, list, howItWorks, scanTips } = featuresPage;
  return (
    <>
      <PageHeader id="all-features" {...header} />
      {list.items.map((feature) => (
        <Section key={feature.id} id={feature.id} eyebrow="App features" title={feature.title} description={feature.description}>
          <div className="feature-detail">
            <CheckList items={feature.bullets} />
            {feature.screen.src && <Screenshot screen={feature.screen} sizes="240px" />}
          </div>
        </Section>
      ))}
      <Section id={howItWorks.id} eyebrow={howItWorks.eyebrow} title={howItWorks.title} description={howItWorks.description}>
        <StepList steps={howItWorks.steps} variant="row" />
      </Section>
      <Section id={scanTips.id} eyebrow={scanTips.eyebrow} title={scanTips.title} description={scanTips.description}>
        <ItemGrid items={scanTips.items} columns={4} />
        <p className="section-note">{scanTips.note}</p>
      </Section>
      <CtaBanner />
    </>
  );
}
