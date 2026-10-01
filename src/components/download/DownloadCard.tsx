import { downloadCta, downloadPage, site } from "@/content/site";
import CheckList from "@/components/ui/CheckList";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import InfoList from "@/components/ui/InfoList";
import LogoMark from "@/components/ui/LogoMark";
import DownloadCta from "./DownloadCta";
import DownloadQr from "./DownloadQr";

/** The main card on /download: app icon, download button, release info, QR code. */
export default function DownloadCard() {
  const { card, beforeYouStart, release, qr } = downloadPage;

  return (
    <section className="section download-section" aria-labelledby="download-card-title">
      <Container>
        <div className="download-card">
          <div className="download-card-main">
            <div className="download-card-app">
              <LogoMark size="lg" />
              <div>
                <h2 id="download-card-title" className="block-title">
                  {card.title}
                </h2>
                <p className="download-card-subtitle">{card.subtitle}</p>
              </div>
            </div>

            <ul className="chip-row" role="list" aria-label="App details">
              {card.chips.map((chip) => (
                <li key={chip}>
                  <Chip>{chip}</Chip>
                </li>
              ))}
            </ul>

            <DownloadCta idPrefix="download-page" />

            <h3 className="download-card-heading">{beforeYouStart.title}</h3>
            <CheckList items={beforeYouStart.items} />

            <h3 className="download-card-heading">{release.title}</h3>
            <InfoList items={release.details} />
          </div>

          <DownloadQr path={downloadCta.pageHref} siteUrl={site.url} title={qr.title} text={qr.text} />
        </div>
      </Container>
    </section>
  );
}
