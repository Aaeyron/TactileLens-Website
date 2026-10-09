import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/content/site";
import About from "@/components/about/About";

export const metadata: Metadata = pageMetadata({ ...aboutPage.meta, path: "/about" });

export default function AboutRoute() {
  return <About />;
}
