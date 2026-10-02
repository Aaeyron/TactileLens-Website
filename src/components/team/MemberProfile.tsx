type MemberProfileProps = {
  name: string;
  role: string;
  /** Short description of what the person did. */
  description?: string;
  /** "div" for a single profile outside a list (e.g. the adviser). */
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
 * Open team member profile (no box) with a round avatar: initials once a real name is set,
 * an empty circle while the name is still a TODO.
 * TODO: Swap the avatar for a photo (next/image) when team photos are ready.
 */
export default function MemberProfile({ name, role, description, as: Tag = "li" }: MemberProfileProps) {
  const isPlaceholder = name.startsWith("TODO");

  return (
    <Tag className="member">
      <span className="avatar" aria-hidden="true">
        {isPlaceholder ? null : initials(name)}
      </span>
      <h3 className="item-title">{name}</h3>
      <p className="label member-role">{role}</p>
      {description && <p className="member-description">{description}</p>}
    </Tag>
  );
}
