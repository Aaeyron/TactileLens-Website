import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { featuresPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import FeatureRows from "@/components/features/FeatureRows";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";

export const metadata: Metadata = pageMetadata({ ...featuresPage.meta, path: "/features" });

export default function FeaturesPage() {
  const { header, list, howItWorks } = featuresPage;

  return (
    <>
      <PageHeader {...header} />

      <Section id="all-features" eyebrow={list.eyebrow} title={list.title}>
        <FeatureRows items={list.items} />
      </Section>

      <Section
        id={howItWorks.id}
        tone="soft"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
      >
        <StepList steps={howItWorks.steps} variant="timeline" />
      </Section>

      <CtaBanner />
    </>
  );
}
