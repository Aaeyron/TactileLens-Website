import { footer, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasEmail = !footer.contactEmail.startsWith("TODO");

  return (
    <footer className="site-footer">
      <div className="home-container footer-inner">
        <p className="footer-brand">{site.name}</p>

        <p className="footer-text">
          {footer.contactLabel}:{" "}
          {hasEmail ? (
            <a className="footer-link" href={`mailto:${footer.contactEmail}`}>
              {footer.contactEmail}
            </a>
          ) : (
            footer.contactEmail
          )}
        </p>

        <p className="footer-text">{footer.capstone}</p>

        <p className="footer-text">
          © {year} {site.name}. {footer.platformNote}
        </p>
      </div>
    </footer>
  );
}
