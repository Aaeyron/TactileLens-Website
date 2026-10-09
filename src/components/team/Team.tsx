import { teamPage } from "@/content/site";
import CtaBanner from "@/components/ui/CtaBanner";
import InfoList from "@/components/ui/InfoList";
import ItemGrid from "@/components/ui/ItemGrid";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import Section from "@/components/ui/Section";
import "./team.css";

type MemberProfileProps = {
  name: string;
  role: string;
  description?: string;
  as?: "li" | "div";
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function MemberProfile({ name, role, description, as: Tag = "li" }: MemberProfileProps) {
  const isPlaceholder = name.startsWith("TODO");

  return (
    <Tag className="member">
      {!isPlaceholder && <span className="avatar" aria-hidden="true">{initials(name)}</span>}
      <h3 className="item-title">{isPlaceholder ? "Profile coming soon" : name}</h3>
      <p className="label member-role">{role.startsWith("TODO") ? "TactileLens team" : role}</p>
      {description && (
        <p className="member-description">
          {description.startsWith("TODO") ? "We'll share more about this person and their work soon." : description}
        </p>
      )}
    </Tag>
  );
}

export default function Team() {
  const { header, members, projectFacts, school, acknowledgements } = teamPage;
  const confirmedMembers = members.list.filter((member) => !member.name.startsWith("TODO"));

  return (
    <>
      <PageHeader {...header} />

      <Section id="members" tone="mist" eyebrow={members.eyebrow} title={members.title}>
        {confirmedMembers.length ? (
          <ul className="item-grid item-grid--4" role="list">
            {confirmedMembers.map((member, index) => (
              <MemberProfile
                key={`${member.name}-${index}`}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </ul>
        ) : (
          <p className="section-description">
            We&apos;re preparing the team profiles. Check back soon to meet the students behind TactileLens.
          </p>
        )}
      </Section>

      <Section id="project" eyebrow={projectFacts.eyebrow} title={projectFacts.title}>
        <ItemGrid items={projectFacts.items} columns={4} />
      </Section>

      <Section id="school" tone="mist" eyebrow={school.eyebrow} title={school.title}>
        <div className="split">
          {school.adviser.name.startsWith("TODO") ? (
            <p className="section-description">Our school and adviser details will be shared once confirmed.</p>
          ) : (
            <MemberProfile
              as="div"
              name={school.adviser.name}
              role={school.adviser.role}
              description={school.adviser.description}
            />
          )}
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
