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
// Next.js has no fallback metrics for this font, so a late swap could shift
// the layout. "optional" avoids that: the font is preloaded, and if it is not
// ready in time on a first visit, that page keeps the system font (no shift).
const bodyFont = Atkinson_Hyperlegible_Next({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
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
