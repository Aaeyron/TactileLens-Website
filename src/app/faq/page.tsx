import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import Callout from "@/components/ui/Callout";
import Container from "@/components/ui/Container";
import FaqList from "@/components/ui/FaqList";
import InfoList from "@/components/ui/InfoList";
import OnThisPage from "@/components/ui/OnThisPage";
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
          <OnThisPage
            links={[
              ...categories.map((category) => ({ label: category.title, href: `#${category.id}` })),
              { label: glossary.title, href: `#${glossary.id}` },
            ]}
          />
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
        <InfoList items={glossary.items} />
      </Section>

      <CtaBanner />
    </>
  );
}
