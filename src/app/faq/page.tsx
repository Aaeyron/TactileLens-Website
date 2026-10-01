import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import Callout from "@/components/ui/Callout";
import Container from "@/components/ui/Container";
import FaqList from "@/components/ui/FaqList";
import Glossary from "@/components/ui/Glossary";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({ ...faqPage.meta, path: "/faq" });

export default function FaqPage() {
  const { header, categories, glossary, contactNote } = faqPage;

  return (
    <>
      <PageHeader {...header} />

      <div className="section">
        <Container>
          <FaqList categories={categories} />
          <div className="section-callout faq-contact">
            <Callout variant="note" text={contactNote} />
          </div>
        </Container>
      </div>

      <Section
        id={glossary.id}
        eyebrow={glossary.eyebrow}
        title={glossary.title}
        description={glossary.description}
      >
        <Glossary items={glossary.items} />
      </Section>

      <CtaBanner />
    </>
  );
}
