"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Subtle fade-in for elements marked with `data-reveal`.
 *
 * - Progressive enhancement: nothing is hidden until this script runs, so
 *   content is always visible without JavaScript.
 * - Only elements fully below the fold are hidden. Anything already on
 *   screen, and the target of a #hash link, shows immediately with no fade.
 * - Off entirely when the user prefers reduced motion.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | undefined;
    let frame2 = 0;

    const reveal = (element: Element, instant = false) => {
      if (instant) element.classList.add("reveal-instant");
      element.classList.remove("reveal-pending");
      observer?.unobserve(element);
    };

    const hashTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      return id ? document.getElementById(id) : null;
    };

    const revealHashTarget = () => {
      const target = hashTarget();
      if (!target) return;
      document.querySelectorAll(".reveal-pending").forEach((element) => {
        if (element === target || element.contains(target) || target.contains(element)) {
          reveal(element, true);
        }
      });
    };

    const setup = () => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal(entry.target);
          }
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      const target = hashTarget();
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        const belowFold = element.getBoundingClientRect().top > window.innerHeight;
        const isHashTarget =
          target !== null &&
          (element === target || element.contains(target) || target.contains(element));
        if (!belowFold || isHashTarget) return;
        element.classList.add("reveal-pending");
        observer?.observe(element);
      });
    };

    // Wait two frames so the browser has applied any #hash scroll first.
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(setup);
    });

    // Same-page #hash links (e.g. clicking a link to #how-it-works while on
    // /features) show their target immediately instead of fading in.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href*='#']");
      if (link) requestAnimationFrame(revealHashTarget);
    };
    window.addEventListener("hashchange", revealHashTarget);
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
      observer?.disconnect();
      window.removeEventListener("hashchange", revealHashTarget);
      document.removeEventListener("click", onClick);
      document
        .querySelectorAll(".reveal-pending, .reveal-instant")
        .forEach((element) => element.classList.remove("reveal-pending", "reveal-instant"));
    };
  }, [pathname]);

  return null;
}
