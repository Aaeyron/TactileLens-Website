import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { notFoundPage } from "@/content/site";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = pageMetadata(notFoundPage.meta);

export default function NotFound() {
  const { header, links } = notFoundPage;

  return (
    <PageHeader {...header}>
      <Button href={links.home.href}>{links.home.label}</Button>
      <Button href={links.download.href} variant="secondary">
        {links.download.label}
      </Button>
    </PageHeader>
  );
}
