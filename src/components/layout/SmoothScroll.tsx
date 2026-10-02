"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Only smooth mouse-wheel / trackpad scrolling on desktop pointers. */
const DESKTOP_POINTER = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/** Lenis settings: short and gentle, never floaty. */
const LENIS_OPTIONS = {
  lerp: 0, // use the explicit duration for wheel and anchor animations
  duration: 1.05, // seconds for a wheel "step" to settle
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease-out
  smoothWheel: true, // mouse wheel and trackpad only
  syncTouch: false, // touch devices keep native scrolling
  allowNestedScroll: true, // scrollable areas inside the page scroll normally
  stopInertiaOnNavigate: true, // stop leftover momentum when a link is followed
  autoRaf: true,
};

function hashTarget(hash: string) {
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function scrollToTarget(lenis: Lenis, target: HTMLElement, immediate = false) {
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  // scroll-margin-top already covers the navbar bar (--header-height);
  // only add anything the header grows beyond that.
  const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
  const expectedHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 0;
  const page = target.closest(".page-transition");
  const transform = page ? getComputedStyle(page).transform : "none";
  const pageShift = transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;
  // A numeric target avoids Lenis subtracting CSS scroll-margin a second time.
  // Ignore the temporary page-enter translation so the final landing is exact.
  const position = target.getBoundingClientRect().top + window.scrollY - pageShift;
  lenis.scrollTo(target === document.body ? 0 : position, {
    offset: target === document.body ? 0 : -(margin + Math.max(0, headerHeight - expectedHeight)),
    immediate,
    force: true,
  });
}

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
      if (!(link instanceof HTMLAnchorElement) || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash) return;

      const target = hashTarget(url.hash);
      if (!target) return;

      event.preventDefault();
      focusTarget(target);
      scrollToTarget(lenis, target);
      if (url.hash !== window.location.hash) window.history.pushState(window.history.state, "", url.hash);
    };

    // Stop wheel momentum before the browser handles keys, clicks or scrollbar
    // dragging. Never prevent default: native input owns the next scroll.
    const cancelMomentum = () => {
      lenisRef.current?.scrollTo(window.scrollY, { immediate: true, force: true });
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", " ", "Home", "End"].includes(event.key)) {
        cancelMomentum();
      }
    };
    const onHashChange = () => {
      const lenis = lenisRef.current;
      const target = hashTarget(window.location.hash);
      if (lenis && target) {
        focusTarget(target);
        scrollToTarget(lenis, target, true);
      }
    };

    update();
    pointer.addEventListener("change", update);
    motion.addEventListener("change", update);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("pointerdown", cancelMomentum, true);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      pointer.removeEventListener("change", update);
      motion.removeEventListener("change", update);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("pointerdown", cancelMomentum, true);
      window.removeEventListener("hashchange", onHashChange);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Wait for Next.js to mount and perform its own scroll, then reset inertia.
  // Route anchors go through Lenis too, with the same header offset as clicks.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const lenis = lenisRef.current;
      if (!lenis) return;
      lenis.resize();
      const target = hashTarget(window.location.hash);
      if (target) {
        focusTarget(target);
        scrollToTarget(lenis, target, true);
      } else {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
