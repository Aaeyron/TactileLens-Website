import Image from "next/image";
import type { ReactNode } from "react";
import { appRelease, downloadCta, downloadPage, logo, site } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import InfoList from "@/components/ui/InfoList";
import ItemGrid from "@/components/ui/ItemGrid";
import NumberedList from "@/components/ui/NumberedList";
import PageHeader from "@/components/ui/PageHeader";
import RichText from "@/components/ui/RichText";
import Screenshot from "@/components/ui/Screenshot";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";
import DownloadQr from "./DownloadQr";
import "./download.css";

function isOwnDomain(url: string) {
  if (url.startsWith("/") && !url.startsWith("//")) return true;
  if (!site.url) return false;

  try {
    return new URL(url).origin === new URL(site.url).origin;
  } catch {
    return false;
  }
}

function DownloadCta({ idPrefix }: { idPrefix: string }) {
  const { apkUrl, version, fileSize, minAndroidVersion } = appRelease;

  if (!apkUrl) {
    return (
      <div className="download-cta">
        <p className="download-pending">{downloadCta.comingSoonLabel}</p>
        <p className="download-meta">{downloadCta.comingSoonNote}</p>
      </div>
    );
  }

  const metaId = `${idPrefix}-download-meta`;
  const details = [
    version && `Version ${version}`,
    fileSize,
    minAndroidVersion && `Android ${minAndroidVersion}+`,
  ].filter(Boolean) as string[];

  return (
    <div className="download-cta">
      <Button
        href={apkUrl}
        download={isOwnDomain(apkUrl) || undefined}
        aria-describedby={details.length ? metaId : undefined}
      >
        {downloadCta.label}
      </Button>
      {details.length > 0 && (
        <p id={metaId} className="download-meta">
          {details.map((detail, index) => (
            <span key={detail}>
              {index > 0 && <span className="download-meta-separator" aria-hidden="true">·</span>}
              {detail}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

function DownloadCard() {
  const { card, release, qr } = downloadPage;

  return (
    <section className="section download-section" data-tone="mist" aria-labelledby="download-card-title">
      <Container>
        <div className="download-card">
          <div className="download-card-main">
            <div className="download-card-app">
              <Image
                className="download-card-logo"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes="4.5rem"
              />
              <div>
                <h2 id="download-card-title" className="block-title">{card.title}</h2>
                <p className="download-card-subtitle">{card.subtitle}</p>
              </div>
            </div>
            <DownloadCta idPrefix="download-page" />
            <h3 className="download-card-heading">{release.title}</h3>
            <InfoList items={release.details} />
          </div>
          <DownloadQr path={downloadCta.pageHref} siteUrl={site.url} title={qr.title} text={qr.text} />
        </div>
      </Container>
    </section>
  );
}

function DataTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: readonly [string, string];
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="label">{columns[0]}</th>
            <th scope="col" className="label">{columns[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.value.startsWith("TODO") ? "Details to follow." : row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ text, children }: { text: string; children?: ReactNode }) {
  return (
    <div className="callout" role="note">
      <p className="callout-label">Tip</p>
      <p className="callout-text"><RichText text={text} /></p>
      {children}
    </div>
  );
}

export default function Download() {
  const { header, requirements, install, troubleshooting, versions } = downloadPage;

  return (
    <>
      <PageHeader {...header} />
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
        tone="soft"
        eyebrow={install.eyebrow}
        title={install.title}
        description={install.description}
      >
        <div className="section-callout section-callout--top">
          <Callout text={install.safetyTip} />
        </div>
        <StepList steps={install.steps} variant="row" />
        <p className="section-note">{install.note}</p>
      </Section>
      <Section id="after-install" title={install.afterInstall.title} description={install.afterInstall.text}>
        {install.afterInstall.screen.src && <Screenshot screen={install.afterInstall.screen} sizes="240px" />}
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
        <ItemGrid items={troubleshooting.items} />
      </Section>
      <Section
        id="version-history"
        tone="mist"
        eyebrow={versions.eyebrow}
        title={versions.title}
        description={versions.description}
      >
        <NumberedList items={versions.items} />
      </Section>
    </>
  );
}
