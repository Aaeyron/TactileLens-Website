type MemberCardProps = {
  name: string;
  role: string;
  /** Short description of what the person did. */
  description?: string;
  /** "div" for a single card outside a list (e.g. the adviser). */
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

/**
 * Team member card with a circular avatar: initials once a real name is set,
 * an empty circle while the name is still a TODO.
 * TODO: Swap the avatar for a photo (next/image) when team photos are ready.
 */
export default function MemberCard({ name, role, description, as: Tag = "li" }: MemberCardProps) {
  const isPlaceholder = name.startsWith("TODO");

  return (
    <Tag className="card member-card">
      <span className="avatar" aria-hidden="true">
        {isPlaceholder ? null : initials(name)}
      </span>
      <h3 className="card-title">{name}</h3>
      <p className="label member-role">{role}</p>
      {description && <p className="member-description">{description}</p>}
    </Tag>
  );
}
