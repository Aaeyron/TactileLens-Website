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

/** Blend `top` over `base` at opacity `alpha` (for tints and dot patterns). */
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
const UI = 3;

// Worst-case decorative backgrounds: the strongest point of each tint, with
// a pattern dot directly underneath (hero tint 14% teal, page-header tint 8%,
// dots 8% navy / 10% white).
const heroWorst = mix(mix("#ffffff", "#16a6a1", 0.14), "#123b70", 0.08);
const pageHeaderWorst = mix(mix("#f4f7fb", "#16a6a1", 0.08), "#123b70", 0.08);
const navyBandWorst = mix("#123b70", "#ffffff", 0.1);

// [label, foreground, background, required ratio]
const pairs = [
  ["text on hero tint + dots (worst case)", "#0f1f36", heroWorst, TEXT],
  ["text-muted on hero tint + dots (worst case)", "#4a5a72", heroWorst, TEXT],
  ["text on page-header tint + dots (worst case)", "#0f1f36", pageHeaderWorst, TEXT],
  ["text-muted on page-header tint + dots (worst case)", "#4a5a72", pageHeaderWorst, TEXT],
  ["accent-strong eyebrow on page-header (worst case)", "#0b6e6a", pageHeaderWorst, TEXT],
  ["text-inverse on navy band + dots (worst case)", "#ffffff", navyBandWorst, TEXT],
  ["text-inverse-muted on navy band", "#c9d6ea", "#123b70", TEXT],
  ["text-inverse-muted on navy band + dots (worst case)", "#c9d6ea", navyBandWorst, TEXT],
  ["focus ring (white) on navy band", "#ffffff", navyBandWorst, UI],
  ["inverse button: brand on white", "#123b70", "#ffffff", TEXT],
  ["inverse button hover: brand on brand-subtle", "#123b70", "#e8eef7", TEXT],
  ["accent-strong icon on accent-subtle tile", "#0b6e6a", "#e6f5f4", UI],
  ["brand icon on brand-subtle tile", "#123b70", "#e8eef7", UI],
  ["text on bg", "#0f1f36", "#ffffff", TEXT],
  ["text on surface", "#0f1f36", "#f4f7fb", TEXT],
  ["text-muted on bg", "#4a5a72", "#ffffff", TEXT],
  ["text-muted on surface", "#4a5a72", "#f4f7fb", TEXT],
  ["text-inverse on brand", "#ffffff", "#123b70", TEXT],
  ["text-inverse on brand-hover", "#ffffff", "#0e2f5a", TEXT],
  ["text-inverse on brand-active", "#ffffff", "#0a2445", TEXT],
  ["brand on bg", "#123b70", "#ffffff", TEXT],
  ["brand on surface", "#123b70", "#f4f7fb", TEXT],
  ["brand on brand-subtle", "#123b70", "#e8eef7", TEXT],
  ["text on brand-subtle (CTA banner)", "#0f1f36", "#e8eef7", TEXT],
  ["text-muted on brand-subtle (CTA banner)", "#4a5a72", "#e8eef7", TEXT],
  ["text-muted border on brand-subtle (coming-soon notice)", "#4a5a72", "#e8eef7", UI],
  ["accent-strong on bg", "#0b6e6a", "#ffffff", TEXT],
  ["accent-strong on surface", "#0b6e6a", "#f4f7fb", TEXT],
  ["accent-strong on accent-subtle", "#0b6e6a", "#e6f5f4", TEXT],
  ["text on accent-subtle (selection)", "#0f1f36", "#e6f5f4", TEXT],
  ["focus ring on bg", "#0b6e6a", "#ffffff", UI],
  ["focus ring on surface", "#0b6e6a", "#f4f7fb", UI],
  ["border-strong on bg", "#7b8aa1", "#ffffff", UI],
  ["border-strong on surface", "#7b8aa1", "#f4f7fb", UI],
  ["success on bg", "#157032", "#ffffff", TEXT],
  ["success on success-subtle", "#157032", "#e9f6ec", TEXT],
  ["warning on bg", "#8a5a00", "#ffffff", TEXT],
  ["warning on warning-subtle", "#8a5a00", "#fdf4e3", TEXT],
  ["error on bg", "#b42318", "#ffffff", TEXT],
  ["error on error-subtle", "#b42318", "#fdecea", TEXT],
];

// Decorative colors: reported for reference, never used for text or controls.
const decorative = [["accent (teal) on bg", "#16a6a1", "#ffffff"]];

let failures = 0;
for (const [label, fg, bg, min] of pairs) {
  const ratio = contrast(fg, bg);
  const ok = ratio >= min;
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${ratio.toFixed(2).padStart(5)}:1  (min ${min})  ${label}  ${fg} on ${bg}`);
}
for (const [label, fg, bg] of decorative) {
  console.log(`DECO  ${contrast(fg, bg).toFixed(2).padStart(5)}:1  (decorative only)  ${label}  ${fg} on ${bg}`);
}

if (failures) {
  console.error(`\n${failures} pair(s) fail WCAG AA.`);
  process.exit(1);
}
console.log("\nAll pairs pass WCAG AA.");
