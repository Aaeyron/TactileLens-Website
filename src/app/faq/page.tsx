import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/content/site";
import FAQ from "@/components/faq/FAQ";

export const metadata: Metadata = pageMetadata({ ...faqPage.meta, path: "/faq" });

export default function FaqPage() {
  return <FAQ />;
}
