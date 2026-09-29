import type { Metadata } from "next";
import { site } from "@/content/site";

/** Site-wide Open Graph defaults, shared by every page. */
export const baseOpenGraph = {
  type: "website",
  siteName: site.name,
  locale: "en_US",
} as const;

/**
 * Metadata for an inner page: "<title> | TactileLens" in the browser tab,
 * and the same title and description in social previews.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    ...(site.url && path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      ...baseOpenGraph,
      title: fullTitle,
      description,
      ...(site.url && path ? { url: path } : {}),
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
