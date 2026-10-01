import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { downloadPage } from "@/content/site";
import DownloadCard from "@/components/download/DownloadCard";
import Callout from "@/components/ui/Callout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";

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
        eyebrow={install.eyebrow}
        title={install.title}
        description={install.description}
      >
        <div className="section-callout section-callout--top">
          <Callout variant="tip" text={install.safetyTip} />
        </div>
        <StepList steps={install.steps} variant="cards" />
        <p className="section-note">{install.note}</p>
        <div className="section-footer">
          <TextLink href={install.scanTipsLink.href}>{install.scanTipsLink.label}</TextLink>
        </div>
      </Section>
    </>
  );
}
