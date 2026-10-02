// Checks WCAG 2.x contrast for every text/UI color pair in the design tokens.
// Run with: npm run check:contrast
// Keep these values in sync with the tokens in src/app/globals.css.
// Palette: white first, app logo blue #003797 as the accent (plus darker
// shades), dark navy text, and two light section tones (mist, soft blue).

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

/** Blend `top` over `base` at opacity `alpha` (for translucent overlays). */
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
const blue = "#003797"; // app logo blue
const blueHover = "#002a75";
const bluePressed = "#00205c";
const ink = "#0f1f36"; // body text
const inkMuted = "#4a5a72"; // secondary text
const blueBorder = "#ccd7ea"; // light border made from the blue (decorative)
const mist = "#f6f8fb"; // section tone
const softBlue = "#edf3fb"; // section tone, white-button hover

// Outline button hover on blue: 25% pressed-blue overlay (only darker).
const outlineHover = mix(blue, bluePressed, 0.25);

// [label, foreground, background, required ratio]
const pairs = [
  // White areas
  ["body text on white", ink, white, TEXT],
  ["muted text on white", inkMuted, white, TEXT],
  ["blue text (links, eyebrows, chips, key terms) on white", blue, white, TEXT],
  ["arrow-link hover (#002A75) on white", blueHover, white, TEXT],
  ["large braille (blue) on white", blue, white, LARGE],

  // Buttons
  ["white on blue (primary button, step numbers, nav pill)", white, blue, TEXT],
  ["white on blue hover", white, blueHover, TEXT],
  ["white on blue pressed", white, bluePressed, TEXT],
  ["blue on white (secondary + inverse buttons)", blue, white, TEXT],
  ["inverse button hover text (#002A75) on white", blueHover, white, TEXT],
  ["white on outline-button hover (on blue)", white, outlineHover, TEXT],

  // Solid blue areas: hero, page headers, blue sections, "Ready to try", footer
  ["white text on solid blue", white, blue, TEXT],
  ["white links on solid blue (footer, blue sections)", white, blue, TEXT],
  ["timeline numbers (blue on white circle) in a blue section", blue, white, TEXT],

  // Tinted section bands (mist, soft blue)
  ["body text on mist", ink, mist, TEXT],
  ["muted text on mist", inkMuted, mist, TEXT],
  ["blue text on mist", blue, mist, TEXT],
  ["body text on soft blue", ink, softBlue, TEXT],
  ["muted text on soft blue", inkMuted, softBlue, TEXT],
  ["blue text on soft blue", blue, softBlue, TEXT],
  ["focus ring (blue) on soft blue", blue, softBlue, UI],

  // Deep blue "Ready to try" band
  ["white text and links on the blue band", white, blue, TEXT],
  ["focus ring (white) on the blue band", white, blue, UI],
  ["white button: blue on soft-blue hover", blue, softBlue, TEXT],

  // White navbar and the Home hero color blocks
  ["navbar links (ink) on white", ink, white, TEXT],
  ["current page / hover (blue) on white", blue, white, TEXT],
  ["white text on the navy block (#00205C)", white, bluePressed, TEXT],
  ["muted text on navy (85% white)", mix(bluePressed, white, 0.85), bluePressed, TEXT],
  ["white text and button on the blue block", white, blue, TEXT],
  ["focus ring (white) on navy", white, bluePressed, UI],

  // UI parts
  ["focus ring (blue) on white", blue, white, UI],
  ["focus ring (white) on blue", white, blue, UI],
  ["control borders (blue) on white (secondary button, chips, menu)", blue, white, UI],
  ["outline button border (white) on blue", white, blue, UI],
  ["download icon / arrows (blue) on white", blue, white, UI],
  ["FAQ open/close indicator (blue) on white", blue, white, UI],
];

// Decorative only: card borders and dividers, reported for reference.
const decorative = [
  ["light card border #CCD7EA on white (decorative)", blueBorder, white],
  ["divider rgba(255,255,255,0.25) on blue (decorative)", mix(blue, white, 0.25), blue],
];

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
