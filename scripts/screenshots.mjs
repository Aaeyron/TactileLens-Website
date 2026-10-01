// Full-page screenshots of every route from the running dev server.
// Usage: node scripts/screenshots.mjs [label] [baseUrl]
//   label   — subfolder name, e.g. "before" or "after" (default: "latest")
//   baseUrl — default: http://localhost:3000
// Output: screenshots/<label>/<page>-<width>.png (gitignored)
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const label = process.argv[2] ?? "latest";
const baseUrl = process.argv[3] ?? "http://localhost:3000";
const pages = ["/", "/about", "/features", "/faq", "/team", "/download"];
const widths = [1280, 375, 320];
const outDir = `screenshots/${label}`;

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 800 },
    // Reduced motion turns off scroll reveals, so every section is visible.
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  for (const path of pages) {
    await page.goto(baseUrl + path, { waitUntil: "networkidle" });

    await page.waitForTimeout(300);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    const name = path === "/" ? "home" : path.slice(1);
    await page.screenshot({ path: `${outDir}/${name}-${width}.png`, fullPage: true });
    console.log(`${name} @ ${width}px${overflow > 0 ? `  ⚠ horizontal overflow ${overflow}px` : ""}`);
  }
  await context.close();
}

await browser.close();
