import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = "http://localhost:3000";
const routes = ["/", "/about", "/features", "/faq", "/team", "/download"];
const widths = [320, 375, 768, 1280];
const routesWithBanner = new Set(["/", "/about", "/features", "/faq", "/team"]);
const expectedGray = "rgb(243, 244, 246)";
const expectedBlue = "rgb(0, 55, 151)";
const outputDir = "screenshots/cta-unified";

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch();
const results = [];

for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: 800 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  for (const route of routes) {
    await page.goto(baseUrl + route, { waitUntil: "networkidle" });
    const cta = page.locator(".cta-band");
    const count = await cta.count();
    const expectedCount = routesWithBanner.has(route) ? 1 : 0;
    if (count !== expectedCount) throw new Error(`${route} has ${count} CTA banners; expected ${expectedCount}`);

    const data = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      footerBackground: getComputedStyle(document.querySelector(".site-footer")).backgroundColor,
    }));
    if (data.overflow !== 0) throw new Error(`${route} at ${width}px overflows by ${data.overflow}px`);

    if (count) {
      await cta.scrollIntoViewIfNeeded();
      const styles = await cta.evaluate((element) => {
        const button = element.querySelector(".button--primary");
        return {
          background: getComputedStyle(element).backgroundColor,
          title: element.querySelector(".cta-band-title")?.textContent?.trim(),
          buttonBackground: getComputedStyle(button).backgroundColor,
          buttonHref: button?.getAttribute("href"),
          transitionDuration: getComputedStyle(button).transitionDuration,
        };
      });
      if (styles.background !== expectedGray) throw new Error(`${route} CTA is ${styles.background}`);
      if (styles.buttonBackground !== expectedBlue) throw new Error(`${route} button is ${styles.buttonBackground}`);
      if (styles.buttonHref !== "/download") throw new Error(`${route} CTA points to ${styles.buttonHref}`);
      if (Number.parseFloat(styles.transitionDuration) > 0.00001) {
        throw new Error(`${route} reduced-motion transition is ${styles.transitionDuration}`);
      }

      const button = cta.locator(".button--primary");
      await button.focus();
      const focus = await button.evaluate((element) => {
        const style = getComputedStyle(element);
        return { active: document.activeElement === element, outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth };
      });
      if (!focus.active || focus.outlineStyle === "none" || focus.outlineWidth === "0px") {
        throw new Error(`${route} CTA focus is not visibly rendered`);
      }

      if (width === 375 || width === 1280) {
        const name = route === "/" ? "home" : route.slice(1);
        await cta.screenshot({ path: `${outputDir}/${name}-${width}.png` });
      }
      results.push({ route, width, ...styles, focus, overflow: data.overflow });
    } else {
      results.push({ route, width, cta: "not applicable", overflow: data.overflow });
    }
  }
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
