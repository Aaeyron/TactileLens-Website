"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Matches --page-distance in globals.css (page transition upward move). */
const PAGE_TRANSITION_SHIFT = 8;
const STAGGER_MS = 70;

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
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | undefined;
    let frame2 = 0;
    const elements = new Set<HTMLElement>();

    const clear = () => {
      observer?.disconnect();
      elements.forEach((element) => {
        element.classList.remove("reveal-pending", "reveal-instant");
        element.style.removeProperty("--reveal-delay");
      });
    };

    const reveal = (element: Element, instant = false) => {
      if (instant) element.classList.add("reveal-instant");
      element.classList.remove("reveal-pending");
      observer?.unobserve(element);
    };

    const hashTarget = () => {
      try {
        const id = decodeURIComponent(window.location.hash.slice(1));
        return id ? document.getElementById(id) : null;
      } catch {
        return null;
      }
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
      clear();
      if (motion.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          // Stagger only siblings entering together; a later row starts fresh.
          const groups = new Map<Element, HTMLElement[]>();
          for (const entry of entries.filter((entry) => entry.isIntersecting)) {
            const element = entry.target as HTMLElement;
            const group = element.parentElement;
            if (group?.hasAttribute("data-reveal-group")) {
              const siblings = groups.get(group) ?? [];
              siblings.push(element);
              groups.set(group, siblings);
            } else {
              reveal(element);
            }
          }
          groups.forEach((siblings, group) => {
            siblings.sort((a, b) => Array.from(group.children).indexOf(a) - Array.from(group.children).indexOf(b));
            siblings.forEach((element, index) => {
              element.style.setProperty("--reveal-delay", `${index * STAGGER_MS}ms`);
              reveal(element);
            });
          });
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      const target = hashTarget();
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group] > *").forEach((element) => {
        elements.add(element);
        // The page transition (app/template.tsx) briefly shifts content down by
        // up to 8px. Allow for that, so content already on screen gets only the
        // page transition and never a second reveal.
        const belowFold = element.getBoundingClientRect().top - PAGE_TRANSITION_SHIFT > window.innerHeight;
        const isHashTarget =
          target !== null &&
          (element === target || element.contains(target) || target.contains(element));
        if (!belowFold || isHashTarget) {
          reveal(element, true);
          return;
        }
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
    motion.addEventListener("change", setup);
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      elements.forEach((element) => {
        if (element.contains(event.target as Node)) reveal(element, true);
      });
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
      clear();
      motion.removeEventListener("change", setup);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", revealHashTarget);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
