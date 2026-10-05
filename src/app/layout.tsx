import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { site } from "@/content/site";
import { baseOpenGraph } from "@/lib/metadata";
import "./globals.css";
import "./redesign.css";

// A readable neutral body face paired with expressive geometric headings.
const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
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
    // data-scroll-behavior="smooth": anchor links scroll smoothly, but page
    // changes jump straight to the top (Next.js 16 opt-in).
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="site-body" id="top">
        <SkipLink />
        <Navbar />
        <main id="content" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealOnScroll />
        <SmoothScroll />
      </body>
    </html>
  );
}
