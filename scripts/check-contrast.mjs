// Checks WCAG 2.x contrast for every text/UI color pair in the design tokens.
// Run with: npm run check:contrast
// Keep these values in sync with the tokens in src/app/globals.css.

const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

/** Blend `top` over `base` at opacity `alpha` (for tints, overlays and dot patterns). */
const mix = (base, top, alpha) => {
  const channel = (hex, i) => parseInt(hex.slice(i, i + 2), 16);
  return (
    "#" +
    [1, 3, 5]
      .map((i) => Math.round(channel(base, i) * (1 - alpha) + channel(top, i) * alpha))
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
  );
};

const TEXT = 4.5;
const LARGE = 3; // large text (≥24px, or ≥18.66px bold)
const UI = 3; // icons, borders, focus rings

// Tokens
const white = "#ffffff";
const surface = "#f4f7fb";
const text = "#0f1f36";
const muted = "#4a5a72";
const navy = "#123b70"; // brand, brand-text
const navyHover = "#0e2f5a";
const navyActive = "#0a2445";
const navySubtle = "#e8eef7";
const teal = "#16a6a1"; // decoration only
const tealStrong = "#0b6e6a";
const tealSubtle = "#e6f5f4";
const gradientStart = "#1a4f8f";
const gradientEnd = "#0e2f5a";
const borderStrong = "#7b8aa1";

// Worst-case decorative backgrounds.
// Navy gradient: its lightest point (start) with a 10% white dot on top.
const gradientWorst = mix(gradientStart, white, 0.1);
// Page header: 8% teal tint at its strongest, with an 8% navy dot on top.
const pageHeaderWorst = mix(mix(surface, teal, 0.08), navy, 0.08);
// Outline button hover on the gradient: 25% dark-navy overlay (only darker).
const outlineHover = mix(gradientStart, navyActive, 0.25);

// [label, foreground, background, required ratio]
const pairs = [
  // Base text
  ["text on white", text, white, TEXT],
  ["text on surface", text, surface, TEXT],
  ["text on navy-subtle (callouts)", text, navySubtle, TEXT],
  ["text on teal-subtle", text, tealSubtle, TEXT],
  ["text-muted on white", muted, white, TEXT],
  ["text-muted on surface", muted, surface, TEXT],
  ["text-muted on navy-subtle", muted, navySubtle, TEXT],

  // Buttons
  ["white on navy (primary button, step numbers, skip link)", white, navy, TEXT],
  ["white on navy hover", white, navyHover, TEXT],
  ["white on navy pressed", white, navyActive, TEXT],
  ["navy on white (secondary + inverse buttons, links)", navy, white, TEXT],
  ["navy on navy-subtle (inverse hover, secondary pressed)", navy, navySubtle, TEXT],

  // Small navy text: links, chips, labels, key terms
  ["navy link on surface (footer)", navy, surface, TEXT],
  ["chip text (navy) on navy-subtle", navy, navySubtle, TEXT],
  ["callout label (navy) on navy-subtle", navy, navySubtle, TEXT],
  ["key term (navy) on white", navy, white, TEXT],
  ["key term (navy) on surface", navy, surface, TEXT],
  ["key term (navy) on navy-subtle (inside callouts)", navy, navySubtle, TEXT],
  ["braille diagram numbers (navy) on navy-subtle dots", navy, navySubtle, TEXT],
  ["coming-soon notice: navy on navy-subtle", navy, navySubtle, TEXT],
  ["coming-soon border (text-muted) on navy-subtle (UI)", muted, navySubtle, UI],

  // Teal text and icons
  ["teal-strong eyebrow on white", tealStrong, white, TEXT],
  ["teal-strong eyebrow on surface", tealStrong, surface, TEXT],
  ["teal-strong eyebrow on page header (worst case)", tealStrong, pageHeaderWorst, TEXT],
  ["text on page header (worst case)", text, pageHeaderWorst, TEXT],
  ["text-muted on page header (worst case)", muted, pageHeaderWorst, TEXT],
  ["teal-strong icon on teal-subtle tile (UI)", tealStrong, tealSubtle, UI],
  ["teal-strong check icon on teal-subtle circle (UI)", tealStrong, tealSubtle, UI],
  ["navy icon on navy-subtle tile (UI)", navy, navySubtle, UI],
  ["navy large braille on navy-subtle", navy, navySubtle, LARGE],

  // Navy header gradient (hero, CTA band, mock app bar)
  ["white small text on gradient start", white, gradientStart, TEXT],
  ["white small text on gradient end", white, gradientEnd, TEXT],
  ["white small text on gradient start + white dot (worst)", white, gradientWorst, TEXT],
  ["white on outline-button hover (gradient)", white, outlineHover, TEXT],
  ["navy-subtle hero highlight on gradient (worst)", navySubtle, gradientWorst, LARGE],
  ["white outline-button border on gradient (UI, worst)", white, gradientWorst, UI],

  // Focus rings
  ["focus (teal-strong) on white", tealStrong, white, UI],
  ["focus (teal-strong) on surface", tealStrong, surface, UI],
  ["focus (teal-strong) on navy-subtle", tealStrong, navySubtle, UI],
  ["focus (teal-strong) on page header (worst case)", tealStrong, pageHeaderWorst, UI],
  ["focus (white) on gradient (worst)", white, gradientWorst, UI],

  // Borders and underlines
  ["border-strong on white", borderStrong, white, UI],
  ["border-strong on surface", borderStrong, surface, UI],
  ["current-page underline (teal-strong) on white", tealStrong, white, UI],

  // Status (for later)
  ["success on white", "#157032", white, TEXT],
  ["success on success-subtle", "#157032", "#e9f6ec", TEXT],
  ["warning on white", "#8a5a00", white, TEXT],
  ["warning on warning-subtle", "#8a5a00", "#fdf4e3", TEXT],
  ["error on white", "#b42318", white, TEXT],
  ["error on error-subtle", "#b42318", "#fdecea", TEXT],
];

// Decorative only: reported for reference, never used for text.
const decorative = [["teal accent on white (lines, dividers, bars)", teal, white]];

let failures = 0;
for (const [label, fg, bg, min] of pairs) {
  const ratio = contrast(fg, bg);
  const ok = ratio >= min;
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${ratio.toFixed(2).padStart(5)}:1  (min ${min})  ${label}  ${fg} on ${bg}`);
}
for (const [label, fg, bg] of decorative) {
  console.log(`INFO  ${contrast(fg, bg).toFixed(2).padStart(5)}:1  (decorative only)  ${label}  ${fg} on ${bg}`);
}

if (failures) {
  console.error(`\n${failures} pair(s) fail WCAG AA.`);
  process.exit(1);
}
console.log("\nAll pairs pass WCAG AA.");
