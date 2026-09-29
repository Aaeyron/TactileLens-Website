import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { downloadPage } from "@/content/site";
import DownloadCta from "@/components/download/DownloadCta";
import InfoList from "@/components/ui/InfoList";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";

export const metadata: Metadata = pageMetadata({ ...downloadPage.meta, path: "/download" });

export default function DownloadPage() {
  const { header, release, install } = downloadPage;

  return (
    <>
      {/* The only place on the site that downloads the APK directly. */}
      <PageHeader {...header}>
        <DownloadCta idPrefix="download-page" />
      </PageHeader>

      <Section id="release" title={release.title}>
        <InfoList items={release.details} />
      </Section>

      <Section
        id="install"
        tone="soft"
        eyebrow={install.eyebrow}
        title={install.title}
        description={install.description}
      >
        <StepList steps={install.steps} layout="stack" />
        <ul className="tip-list">
          {install.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
