"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { downloadCta, navigation, site } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <span className="navbar-brand-mark" aria-hidden="true">
              T
            </span>
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
            className={`navbar-menu ${menuOpen ? "navbar-menu--open" : ""}`.trim()}
          >
            <ul className="navbar-links" role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="navbar-link" onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button href={downloadCta.href} size="sm" onClick={closeMenu}>
              {downloadCta.shortLabel}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
