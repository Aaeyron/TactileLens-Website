import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/content/site";
import CtaBanner from "@/components/ui/CtaBanner";
import FaqList from "@/components/ui/FaqList";
import InfoList from "@/components/ui/InfoList";
import OnThisPage from "@/components/ui/OnThisPage";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({ ...faqPage.meta, path: "/faq" });

export default function FaqPage() {
  const { header, categories, glossary } = faqPage;
  return (
    <>
      <PageHeader {...header}>
        <OnThisPage links={[
          ...categories.map((category) => ({ label: category.title, href: `#${category.id}` })),
          { label: glossary.title, href: `#${glossary.id}` },
        ]} />
      </PageHeader>
      {categories.map((category) => (
        <Section key={category.id} id={category.id} eyebrow="Your questions" title={category.title}>
          <div className="faq-topic"><FaqList items={category.items} /></div>
        </Section>
      ))}
      <Section id={glossary.id} eyebrow={glossary.eyebrow} title={glossary.title} description={glossary.description}>
        <InfoList items={glossary.items} />
      </Section>
      <CtaBanner />
    </>
  );
}
