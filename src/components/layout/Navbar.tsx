
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar home-container" aria-label="Main navigation">
        <Link
          href="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="navbar-brand-mark" aria-hidden="true">
            T
          </span>
          <span>TactileLens</span>
        </Link>

        <button
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
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/about" && pathname === "/about";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/download"
            className="navbar-download"
            onClick={() => setMenuOpen(false)}
          >
            Download App
          </Link>
        </div>
      </nav>
    </header>
  );
}