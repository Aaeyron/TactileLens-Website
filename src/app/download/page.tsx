import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { downloadPage } from "@/content/site";
import Download from "@/components/download/Download";

export const metadata: Metadata = pageMetadata({ ...downloadPage.meta, path: "/download" });

export default function DownloadPage() {
  return <Download />;
}
