import Image from "next/image";
import Link from "next/link";
import { footer, logo, site } from "@/content/site";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasEmail = !footer.contactEmail.startsWith("TODO");

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="footer-brand" href="/">
              <Image
                className="footer-logo"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes="2.25rem"
              />
              <span>{site.name}</span>
            </Link>
            <p className="footer-tagline">{site.tagline}</p>
            <p className="footer-audience">{footer.audienceLine}</p>
            <div className="footer-contact">
              <span className="footer-heading">{footer.contactLabel}</span>
              {hasEmail ? (
                <a className="footer-link" href={`mailto:${footer.contactEmail}`}>
                  {footer.contactEmail}
                </a>
              ) : (
                <Link className="footer-link" href="/faq">
                  {footer.helpLabel}
                  <Icon name="arrow-right" size={16} />
                </Link>
              )}
            </div>
          </div>

          <nav className="footer-columns" aria-label="Footer">
            {footer.columns.map((column) => {
              const headingId = `footer-${column.title.toLowerCase()}`;
              return (
                <div key={column.title}>
                  <p id={headingId} className="footer-heading">
                    {column.title}
                  </p>
                  <ul className="footer-links" role="list" aria-labelledby={headingId}>
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link className="footer-link" href={link.href}>
                          {link.label}
                          <Icon name="arrow-right" size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {site.name}. {footer.platformNote}
          </p>
          <p className="footer-credit">{footer.capstone}</p>
        </div>
      </Container>
    </footer>
  );
}
