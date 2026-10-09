import { ctaBanner, downloadCta } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** A quiet closing section with one clearly named download action. */
export default function CtaBanner() {
  return (
    <section className="cta-band" data-tone="mist" aria-labelledby="cta-band-title" data-reveal>
      <Container className="cta-band-inner">
        <div className="cta-band-text">
          <h2 id="cta-band-title" className="cta-band-title">{ctaBanner.title}</h2>
          <p className="cta-band-description">{ctaBanner.text}</p>
        </div>
        <div className="closing-action">
          <Button href={downloadCta.pageHref}>{downloadCta.label}</Button>
          <span className="action-caption">View download details</span>
        </div>
      </Container>
    </section>
  );
}
