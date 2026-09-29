import { footer, site } from "@/content/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasEmail = !footer.contactEmail.startsWith("TODO");

  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p className="footer-brand">{site.name}</p>

        <p>
          {footer.contactLabel}:{" "}
          {hasEmail ? (
            <a className="footer-link" href={`mailto:${footer.contactEmail}`}>
              {footer.contactEmail}
            </a>
          ) : (
            footer.contactEmail
          )}
        </p>

        <p>{footer.capstone}</p>

        <p>
          © {year} {site.name}. {footer.platformNote}
        </p>
      </Container>
    </footer>
  );
}
