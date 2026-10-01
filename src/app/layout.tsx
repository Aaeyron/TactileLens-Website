import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { site } from "@/content/site";
import { baseOpenGraph } from "@/lib/metadata";
import "./globals.css";

// Body: designed by the Braille Institute for low-vision readers.
// "swap" so the font always appears, even on slow Wi-Fi. Next.js has no
// built-in fallback metrics for this font, so we provide our own tuned
// fallback ("Atkinson Hyperlegible Next Fallback" in globals.css) to keep the
// layout from shifting when the font arrives.
const bodyFont = Atkinson_Hyperlegible_Next({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Atkinson Hyperlegible Next Fallback"],
});

// Headings, buttons and the navbar: clean, straight geometric sans.
const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// TODO: When the social preview image is ready, add src/app/opengraph-image.png
// (1200×630) plus opengraph-image.alt.txt, and change the Twitter card to
// "summary_large_image". Next.js picks the file up automatically.
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  // Inner pages set a short title, e.g. "Features" → "Features | TactileLens".
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    ...baseOpenGraph,
    title: site.title,
    description: site.description,
    ...(site.url ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="site-body">
        <SkipLink />
        <Navbar />
        <main id="content" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}
