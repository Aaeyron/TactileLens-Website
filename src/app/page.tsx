import type { Metadata } from "next";
import { site } from "@/content/site";
import Home from "@/components/home/Home";

export const metadata: Metadata = site.url ? { alternates: { canonical: "/" } } : {};

export default function HomePage() {
  return <Home />;
}
