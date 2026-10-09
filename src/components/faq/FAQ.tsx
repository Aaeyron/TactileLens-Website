import { faqPage } from "@/content/site";
import CtaBanner from "@/components/ui/CtaBanner";
import InfoList from "@/components/ui/InfoList";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import "./faq.css";

type PageLink = { label: string; href: string };
type FaqItem = { question: string; answer: string };

function OnThisPage({ links }: { links: readonly PageLink[] }) {
  return (
    <nav className="on-this-page" aria-labelledby="on-this-page-label">
      <p id="on-this-page-label" className="label">On this page</p>
      <ul className="on-this-page-links" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a className="on-this-page-link" href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary className="faq-question">
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function FAQ() {
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
