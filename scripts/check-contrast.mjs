// Checks WCAG 2.x contrast for every text/UI color pair in the design tokens.
// Run with: npm run check:contrast
// Keep these values in sync with the tokens in src/app/globals.css.
// Palette: matches the TactileLens app logo (background #003797).

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
const brand = "#003797"; // logo blue: brand, brand-text, accent-strong, focus
const brandHover = "#002a75";
const brandActive = "#00205c";
const subtle = "#e8eef7"; // pale tint (brand-subtle = accent-subtle)
const bright = "#0077fa"; // logo bright blue: decoration only
const gradientStart = "#0a4bb8";
const gradientEnd = "#002a75";
const borderStrong = "#7b8aa1";

// Worst-case decorative backgrounds.
// Header gradient: lightest point (start) with a 15% bright-blue dot on top.
const gradientWorst = mix(gradientStart, bright, 0.15);
// Page header: 8% bright-blue tint at its strongest, with an 8% brand dot on top.
const pageHeaderWorst = mix(mix(surface, bright, 0.08), brand, 0.08);
// Feature visuals: 10% bright-blue tint + 8% brand dot (icons only sit here).
const featureVisualWorst = mix(mix(surface, bright, 0.1), brand, 0.08);
// Outline button hover on the gradient: 25% pressed-blue overlay (only darker).
const outlineHover = mix(gradientStart, brandActive, 0.25);

// [label, foreground, background, required ratio]
const pairs = [
  // Base text
  ["text on white", text, white, TEXT],
  ["text on surface", text, surface, TEXT],
  ["text on pale tint (callouts)", text, subtle, TEXT],
  ["text-muted on white", muted, white, TEXT],
  ["text-muted on surface", muted, surface, TEXT],
  ["text-muted on pale tint", muted, subtle, TEXT],

  // Buttons
  ["white on brand (primary button, step numbers, skip link)", white, brand, TEXT],
  ["white on brand hover", white, brandHover, TEXT],
  ["white on brand pressed", white, brandActive, TEXT],
  ["brand on white (secondary + inverse buttons)", brand, white, TEXT],
  ["brand on pale tint (inverse hover, secondary pressed)", brand, subtle, TEXT],

  // Small blue text: links, eyebrows, chips, key terms
  ["link / eyebrow on white", brand, white, TEXT],
  ["link / eyebrow on surface", brand, surface, TEXT],
  ["eyebrow on page header (worst case)", brand, pageHeaderWorst, TEXT],
  ["text on page header (worst case)", text, pageHeaderWorst, TEXT],
  ["text-muted on page header (worst case)", muted, pageHeaderWorst, TEXT],
  ["chip text on pale tint", brand, subtle, TEXT],
  ["callout label on pale tint", brand, subtle, TEXT],
  ["key term on white", brand, white, TEXT],
  ["key term on surface", brand, surface, TEXT],
  ["key term on pale tint (inside callouts)", brand, subtle, TEXT],
  ["braille diagram numbers on pale dots", brand, subtle, TEXT],
  ["coming-soon notice on pale tint", brand, subtle, TEXT],
  ["coming-soon border (text-muted) on pale tint (UI)", muted, subtle, UI],

  // Icons
  ["icon on pale icon tile (UI)", brand, subtle, UI],
  ["check icon on pale circle (UI)", brand, subtle, UI],
  ["icon on feature visual (worst case, UI)", brand, featureVisualWorst, UI],
  ["large braille on pale tint", brand, subtle, LARGE],

  // Header gradient (hero, CTA band, mock app bar)
  ["white small text on gradient start", white, gradientStart, TEXT],
  ["white small text on gradient end", white, gradientEnd, TEXT],
  ["white small text on gradient start + bright dot (worst)", white, gradientWorst, TEXT],
  ["white on outline-button hover (gradient)", white, outlineHover, TEXT],
  ["pale hero highlight on gradient (worst)", subtle, gradientWorst, LARGE],
  ["white outline-button border on gradient (UI, worst)", white, gradientWorst, UI],

  // Focus rings
  ["focus (brand) on white", brand, white, UI],
  ["focus (brand) on surface", brand, surface, UI],
  ["focus (brand) on pale tint", brand, subtle, UI],
  ["focus (brand) on page header (worst case)", brand, pageHeaderWorst, UI],
  ["focus (white) on gradient (worst)", white, gradientWorst, UI],

  // Borders and underlines
  ["border-strong on white", borderStrong, white, UI],
  ["border-strong on surface", borderStrong, surface, UI],
  ["current-page underline (brand) on white", brand, white, UI],

  // Status (for later)
  ["success on white", "#157032", white, TEXT],
  ["success on success-subtle", "#157032", "#e9f6ec", TEXT],
  ["warning on white", "#8a5a00", white, TEXT],
  ["warning on warning-subtle", "#8a5a00", "#fdf4e3", TEXT],
  ["error on white", "#b42318", white, TEXT],
  ["error on error-subtle", "#b42318", "#fdecea", TEXT],
];

// Decorative only: reported for reference, never used for text.
const decorative = [["bright blue #0077FA on white (lines, dividers, bars)", bright, white]];

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
