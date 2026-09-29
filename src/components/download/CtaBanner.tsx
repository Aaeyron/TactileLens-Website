import { ctaBanner, downloadCta } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** "Ready to try TactileLens?" — ends every page except /download. */
export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-labelledby="cta-banner-title">
      <Container>
        <div className="cta-banner">
          <div>
            <h2 id="cta-banner-title" className="cta-banner-title">
              {ctaBanner.title}
            </h2>
            <p className="cta-banner-text">{ctaBanner.text}</p>
          </div>
          <Button href={downloadCta.pageHref}>{downloadCta.label}</Button>
        </div>
      </Container>
    </section>
  );
}
