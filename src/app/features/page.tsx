import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { featuresPage } from "@/content/site";
import Features from "@/components/features/Features";

export const metadata: Metadata = pageMetadata({ ...featuresPage.meta, path: "/features" });

export default function FeaturesPage() {
  return <Features />;
}
