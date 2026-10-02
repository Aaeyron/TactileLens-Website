import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { downloadPage } from "@/content/site";
import DownloadCard from "@/components/download/DownloadCard";
import Callout from "@/components/ui/Callout";
import CardGrid from "@/components/ui/CardGrid";
import DataTable from "@/components/ui/DataTable";
import NumberedList from "@/components/ui/NumberedList";
import PageHeader from "@/components/ui/PageHeader";
import Screenshot from "@/components/ui/Screenshot";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = pageMetadata({ ...downloadPage.meta, path: "/download" });

export default function DownloadPage() {
  const { header, requirements, install, troubleshooting, versions } = downloadPage;

  return (
    <>
      <PageHeader {...header} />

      {/* The only place on the site that downloads the APK directly. */}
      <DownloadCard />

      <Section
        id="requirements"
        eyebrow={requirements.eyebrow}
        title={requirements.title}
        description={requirements.description}
      >
        <DataTable caption={requirements.caption} columns={requirements.columns} rows={requirements.rows} />
      </Section>

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

        <div className="after-install">
          <div>
            <h3 className="card-title">{install.afterInstall.title}</h3>
            <p className="section-description">{install.afterInstall.text}</p>
          </div>
          {/* TODO: screenshot — see screens.home in site.ts */}
          <Screenshot screen={install.afterInstall.screen} sizes="15rem" />
        </div>
        <div className="section-footer">
          <TextLink href={install.scanTipsLink.href}>{install.scanTipsLink.label}</TextLink>
        </div>
      </Section>

      <Section
        id="troubleshooting"
        eyebrow={troubleshooting.eyebrow}
        title={troubleshooting.title}
        description={troubleshooting.description}
      >
        <CardGrid items={troubleshooting.items} />
      </Section>

      <Section
        id="version-history"
        eyebrow={versions.eyebrow}
        title={versions.title}
        description={versions.description}
      >
        <NumberedList items={versions.items} />
      </Section>
    </>
  );
}
