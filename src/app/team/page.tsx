import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { teamPage } from "@/content/site";
import Team from "@/components/team/Team";

export const metadata: Metadata = pageMetadata({ ...teamPage.meta, path: "/team" });

export default function TeamPage() {
  return <Team />;
}
