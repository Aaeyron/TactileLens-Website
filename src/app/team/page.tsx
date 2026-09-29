import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { teamPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import Card from "@/components/ui/Card";
import InfoList from "@/components/ui/InfoList";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({ ...teamPage.meta, path: "/team" });

export default function TeamPage() {
  const { header, members, school } = teamPage;

  return (
    <>
      <PageHeader {...header} />

      <Section id="members" eyebrow={members.eyebrow} title={members.title}>
        <ul className="card-grid card-grid--3" role="list">
          {members.list.map((member, index) => (
            // Index in the key: placeholder entries share the same name.
            <Card as="li" key={`${member.name}-${index}`} title={member.name}>
              <p>{member.role}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section id="school" tone="soft" eyebrow={school.eyebrow} title={school.title}>
        <InfoList items={school.details} />
      </Section>

      <CtaBanner />
    </>
  );
}
