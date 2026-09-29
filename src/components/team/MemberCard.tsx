import Icon from "@/components/ui/Icon";

type MemberCardProps = {
  name: string;
  role: string;
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
 * Team member card with a circular avatar: initials on a tinted circle once a
 * real name is set, a generic person icon while the name is still a TODO.
 * TODO: Swap the avatar for a photo (next/image) when team photos are ready.
 */
export default function MemberCard({ name, role }: MemberCardProps) {
  const isPlaceholder = name.startsWith("TODO");

  return (
    <li className="card member-card">
      <span className="avatar" aria-hidden="true">
        {isPlaceholder ? <Icon name="user" size={36} /> : initials(name)}
      </span>
      <h3 className="card-title">{name}</h3>
      <p className="member-role">{role}</p>
    </li>
  );
}
