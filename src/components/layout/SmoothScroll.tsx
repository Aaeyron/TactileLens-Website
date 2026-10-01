"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Only smooth mouse-wheel / trackpad scrolling on desktop pointers. */
const DESKTOP_POINTER = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/** Lenis settings: short and gentle, never floaty. */
const LENIS_OPTIONS = {
  duration: 1.05, // seconds for a wheel "step" to settle
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease-out
  smoothWheel: true, // mouse wheel and trackpad only
  syncTouch: false, // touch devices keep native scrolling
  allowNestedScroll: true, // scrollable areas inside the page scroll normally
  stopInertiaOnNavigate: true, // stop leftover momentum when a link is followed
  autoRaf: true,
};

/**
 * Move keyboard focus to an anchor target without scrolling, like a native
 * fragment link (the skip link relies on this). Elements that are not
 * focusable get a temporary tabindex and no focus outline.
 */
function focusTarget(target: HTMLElement) {
  if (!target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1");
    target.setAttribute("data-scroll-focus", "");
    target.addEventListener(
      "blur",
      () => {
        target.removeAttribute("tabindex");
        target.removeAttribute("data-scroll-focus");
      },
      { once: true },
    );
  }
  target.focus({ preventScroll: true });
}

/**
 * Smooth wheel scrolling with Lenis (desktop only, off with reduced motion).
 * Keyboard scrolling, the scrollbar and touch stay native. Same-page anchor
 * links go through Lenis and stop below the sticky header (using each
 * target's CSS scroll-margin-top). When Lenis is off, the CSS
 * `scroll-behavior: smooth` fallback in globals.css handles anchors.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const pointer = window.matchMedia(DESKTOP_POINTER);
    const motion = window.matchMedia(REDUCED_MOTION);

    const update = () => {
      const shouldRun = pointer.matches && !motion.matches;
      if (shouldRun && !lenisRef.current) {
        lenisRef.current = new Lenis(LENIS_OPTIONS);
      } else if (!shouldRun && lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };

    // Same-page #hash links: scroll with Lenis, keep the URL hash, move focus.
    // Runs in the capture phase so Next.js <Link> sees defaultPrevented.
    const onClick = (event: MouseEvent) => {
      const lenis = lenisRef.current;
      if (!lenis || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      if (target === document.body) {
        lenis.scrollTo(0);
      } else {
        const headerOffset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        lenis.scrollTo(target, { offset: -headerOffset });
      }
      if (url.hash !== window.location.hash) window.history.pushState(null, "", url.hash);
      focusTarget(target);
    };

    update();
    pointer.addEventListener("change", update);
    motion.addEventListener("change", update);
    document.addEventListener("click", onClick, true);

    return () => {
      pointer.removeEventListener("change", update);
      motion.removeEventListener("change", update);
      document.removeEventListener("click", onClick, true);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Page change: Next.js has already scrolled (to the top, or to a #hash
  // target). Re-measure the new page and sync Lenis to that position so it
  // never animates back to the old page's scroll target.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.resize();
    lenis.scrollTo(window.scrollY, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
