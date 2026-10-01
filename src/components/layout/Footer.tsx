import Link from "next/link";
import { footer, site } from "@/content/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasEmail = !footer.contactEmail.startsWith("TODO");

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-about">
            <p className="footer-brand">{site.name}</p>
            <p>{site.tagline}</p>
            <p>{footer.audienceLine}</p>
            <p className="footer-contact">
              <span className="footer-heading">{footer.contactLabel}</span>
              {hasEmail ? (
                <a className="footer-link" href={`mailto:${footer.contactEmail}`}>
                  {footer.contactEmail}
                </a>
              ) : (
                footer.contactEmail
              )}
            </p>
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
          <p>{footer.capstone}</p>
          <p>
            © {year} {site.name}. {footer.platformNote}
          </p>
          {/* #top is <body>; the arrow is decorative text. */}
          <a className="footer-link footer-top" href="#top">
            {footer.backToTop}
            <span aria-hidden="true"> ↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
