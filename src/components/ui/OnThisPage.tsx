type OnThisPageProps = {
  links: readonly { label: string; href: string }[];
};

/** Small "On this page" navigation with in-page anchor links. */
export default function OnThisPage({ links }: OnThisPageProps) {
  return (
    <nav className="on-this-page" aria-labelledby="on-this-page-label">
      <p id="on-this-page-label" className="label">
        On this page
      </p>
      <ul className="on-this-page-links" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a className="on-this-page-link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
