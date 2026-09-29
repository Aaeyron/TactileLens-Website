import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { downloadPage } from "@/content/site";
import DownloadCard from "@/components/download/DownloadCard";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";

export const metadata: Metadata = pageMetadata({ ...downloadPage.meta, path: "/download" });

export default function DownloadPage() {
  const { header, install } = downloadPage;

  return (
    <>
      <PageHeader {...header} />

      {/* The only place on the site that downloads the APK directly. */}
      <DownloadCard />

      <Section
        id="install"
        tone="soft"
        eyebrow={install.eyebrow}
        title={install.title}
        description={install.description}
      >
        <StepList steps={install.steps} variant="cards" />
        <ul className="tip-list">
          {install.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
