"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { downloadCta, navigation, site } from "@/content/site";

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

  return (
    <header className="site-header">
      <nav className="navbar home-container" aria-label="Main">
        <Link
          href="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
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
          aria-controls="navbar-links"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <div
          id="navbar-links"
          className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href={downloadCta.href}
            className="navbar-download"
            onClick={() => setMenuOpen(false)}
          >
            {downloadCta.shortLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
