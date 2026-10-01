import Link from "next/link";
import { downloadCta, footer, navigation, site } from "@/content/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasEmail = !footer.contactEmail.startsWith("TODO");
  const links = [...navigation, { label: downloadCta.navLabel, href: downloadCta.pageHref }];

  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div className="footer-about">
          <p className="footer-brand">{site.name}</p>
          <p>{site.tagline}</p>
          <p>{footer.audienceLine}</p>
          <p>{footer.platformNote}</p>
        </div>

        <nav aria-label="Footer">
          <p className="footer-heading">{footer.navLabel}</p>
          <ul className="footer-links" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="footer-link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer-heading">{footer.contactLabel}</p>
          <p className="footer-contact">
            {hasEmail ? (
              <a className="footer-link" href={`mailto:${footer.contactEmail}`}>
                {footer.contactEmail}
              </a>
            ) : (
              footer.contactEmail
            )}
          </p>
          <p>{footer.capstone}</p>
        </div>

        <p className="footer-copyright">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
