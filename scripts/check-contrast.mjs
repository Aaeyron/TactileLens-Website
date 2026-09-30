// Checks WCAG 2.x contrast for every text/UI color pair in the design tokens.
// Run with: npm run check:contrast
// Keep these values in sync with the tokens in src/app/globals.css.
// App color names (TactileLens color guide) are noted where they apply.

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
const surface = "#f4f7fc"; // backgroundColor
const text = "#0f1f36";
const muted = "#4a5a72";
const primary = "#1268f3"; // primaryColor
const primaryDark = "#0b4fcc"; // primaryDarkColor
const primaryLight = "#4894ff"; // primaryLightColor
const pale = "#eaf3ff"; // quickScanIconBackgroundColor
const gradientStart = "#1474f5"; // header gradient start
const gradientEnd = "#0758dd"; // header gradient end
const deep = "#062f7a"; // overlay color
const borderStrong = "#7b8aa1";

// Worst-case decorative backgrounds.
// Header gradient: 10% deep-blue overlay. Dots on it are darker, so the
// lightest point (gradient start + overlay, no dot) is the worst case.
const gradientWorst = mix(gradientStart, deep, 0.1);
const gradientDark = mix(gradientEnd, deep, 0.1);
// Page header: 6% primary tint at its strongest, with an 8% primary dot on top.
const pageHeaderWorst = mix(mix(surface, primary, 0.06), primary, 0.08);
// Outline button hover on the gradient: extra 25% deep overlay (only darker).
const outlineHover = mix(gradientWorst, deep, 0.25);

// [label, foreground, background, required ratio]
const pairs = [
  // Base text
  ["text on white", text, white, TEXT],
  ["text on surface", text, surface, TEXT],
  ["text on pale blue", text, pale, TEXT],
  ["text-muted on white", muted, white, TEXT],
  ["text-muted on surface", muted, surface, TEXT],
  ["text-muted on pale blue", muted, pale, TEXT],

  // Buttons
  ["white on primary (primary button, step numbers, skip link)", white, primary, TEXT],
  ["white on primaryDark (hover / pressed)", white, primaryDark, TEXT],
  ["primaryDark on white (secondary + inverse buttons)", primaryDark, white, TEXT],
  ["primaryDark on pale blue (secondary pressed, inverse hover)", primaryDark, pale, TEXT],

  // Small blue text and links (always primaryDark)
  ["primaryDark text on white", primaryDark, white, TEXT],
  ["primaryDark text on surface", primaryDark, surface, TEXT],
  ["primaryDark text on pale blue (badges, notices, avatars)", primaryDark, pale, TEXT],

  // Icons and large text on pale blue
  ["primary icon on pale blue (UI)", primary, pale, UI],
  ["primary large braille text on pale blue", primary, pale, LARGE],
  ["primaryDark icon on pale blue (UI)", primaryDark, pale, UI],

  // Header gradient (hero, CTA band, mock app bar)
  ["white small text on gradient (worst point)", white, gradientWorst, TEXT],
  ["white small text on gradient (dark end)", white, gradientDark, TEXT],
  ["white on outline-button hover (gradient)", white, outlineHover, TEXT],
  ["pale-blue hero highlight (large) on gradient", pale, gradientWorst, LARGE],
  ["white outline-button border on gradient (UI)", white, gradientWorst, UI],

  // Page header tint + dots
  ["text on page header (worst case)", text, pageHeaderWorst, TEXT],
  ["text-muted on page header (worst case)", muted, pageHeaderWorst, TEXT],
  ["primaryDark eyebrow on page header (worst case)", primaryDark, pageHeaderWorst, TEXT],

  // Focus rings
  ["focus (primaryDark) on white", primaryDark, white, UI],
  ["focus (primaryDark) on surface", primaryDark, surface, UI],
  ["focus (primaryDark) on pale blue", primaryDark, pale, UI],
  ["focus (primaryDark) on page header (worst case)", primaryDark, pageHeaderWorst, UI],
  ["focus (white) on gradient (worst point)", white, gradientWorst, UI],

  // Borders and underlines
  ["border-strong on white", borderStrong, white, UI],
  ["border-strong on surface", borderStrong, surface, UI],
  ["current-page underline (primaryDark) on white", primaryDark, white, UI],

  // Status (for later)
  ["success on white", "#157032", white, TEXT],
  ["success on success-subtle", "#157032", "#e9f6ec", TEXT],
  ["warning on white", "#8a5a00", white, TEXT],
  ["warning on warning-subtle", "#8a5a00", "#fdf4e3", TEXT],
  ["error on white", "#b42318", white, TEXT],
  ["error on error-subtle", "#b42318", "#fdecea", TEXT],
];

// Decorative only: reported for reference, never used for small text.
const decorative = [
  ["primaryLight vs white (lines, dividers)", primaryLight, white],
  ["primary small text on pale blue (NOT used)", primary, pale],
  ["white on raw gradient start, no overlay (NOT used)", white, gradientStart],
];

let failures = 0;
for (const [label, fg, bg, min] of pairs) {
  const ratio = contrast(fg, bg);
  const ok = ratio >= min;
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${ratio.toFixed(2).padStart(5)}:1  (min ${min})  ${label}  ${fg} on ${bg}`);
}
for (const [label, fg, bg] of decorative) {
  console.log(`INFO  ${contrast(fg, bg).toFixed(2).padStart(5)}:1  (decorative / reference)  ${label}  ${fg} on ${bg}`);
}

if (failures) {
  console.error(`\n${failures} pair(s) fail WCAG AA.`);
  process.exit(1);
}
console.log("\nAll pairs pass WCAG AA.");
