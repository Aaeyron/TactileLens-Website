import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import Container from "@/components/ui/Container";
import FaqList from "@/components/ui/FaqList";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = pageMetadata({ ...faqPage.meta, path: "/faq" });

export default function FaqPage() {
  return (
    <>
      <PageHeader {...faqPage.header} />

      <div className="section">
        <Container>
          <FaqList categories={faqPage.categories} />
        </Container>
      </div>

      <CtaBanner />
    </>
  );
}
