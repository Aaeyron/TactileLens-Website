"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { downloadCta, navigation, site } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LogoMark from "@/components/ui/LogoMark";

function isCurrentPage(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the page changes (e.g. browser back button).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // Close the mobile menu with Escape and return focus to the toggle button.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Container>
        <nav className="navbar" aria-label="Main">
          <Link
            href="/"
            className="navbar-brand"
            aria-label={`${site.name} home`}
            onClick={closeMenu}
          >
            <LogoMark />
            <span aria-hidden="true">{site.name}</span>
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="navbar-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          </button>

          <div
            id="navbar-menu"
            className={`navbar-menu ${menuOpen ? "navbar-menu--open" : ""}`.trim()}
          >
            <ul className="navbar-links" role="list">
              {navigation.map((item) => {
                const current = isCurrentPage(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="navbar-link"
                      aria-current={current ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Button
              href={downloadCta.pageHref}
              size="sm"
              className="navbar-download"
              aria-current={isCurrentPage(pathname, downloadCta.pageHref) ? "page" : undefined}
              onClick={closeMenu}
            >
              {downloadCta.navLabel}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
