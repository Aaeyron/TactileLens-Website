"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { downloadCta, logo, navigation, site } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

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

  // Mark the header once the page has scrolled, for a slightly stronger shadow.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

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
    <header className="site-header" data-scrolled={scrolled || undefined}>
      <Container>
        <nav className="navbar" aria-label="Main">
          {/* The visible "TactileLens" text is the Home link's accessible name. */}
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            {logo.src ? (
              <Image
                className="navbar-logo"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes="2.5rem"
                preload
              />
            ) : (
              // TODO: Empty slot for the real logo — see `logo` in site.ts.
              <span className="navbar-logo-slot" aria-hidden="true" />
            )}
            <span>{site.name}</span>
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
            data-lenis-prevent
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
