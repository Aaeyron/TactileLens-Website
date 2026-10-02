import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { teamPage } from "@/content/site";
import CtaBanner from "@/components/download/CtaBanner";
import MemberCard from "@/components/team/MemberCard";
import CardGrid from "@/components/ui/CardGrid";
import InfoList from "@/components/ui/InfoList";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({ ...teamPage.meta, path: "/team" });

export default function TeamPage() {
  const { header, members, projectFacts, school, acknowledgements } = teamPage;

  return (
    <>
      <PageHeader {...header} />

      <Section id="members" eyebrow={members.eyebrow} title={members.title}>
        <ul className="card-grid card-grid--4" role="list">
          {members.list.map((member, index) => (
            // Index in the key: placeholder entries share the same name.
            <MemberCard
              key={`${member.name}-${index}`}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </ul>
      </Section>

      <Section id="project" eyebrow={projectFacts.eyebrow} title={projectFacts.title}>
        <CardGrid items={projectFacts.items} columns={4} />
      </Section>

      <Section id="school" eyebrow={school.eyebrow} title={school.title}>
        <div className="split">
          <MemberCard
            as="div"
            name={school.adviser.name}
            role={school.adviser.role}
            description={school.adviser.description}
          />
          <InfoList items={school.details} />
        </div>
      </Section>

      <Section id="acknowledgements" eyebrow={acknowledgements.eyebrow} title={acknowledgements.title}>
        <Prose paragraphs={acknowledgements.paragraphs} />
      </Section>

      <CtaBanner />
    </>
  );
}
