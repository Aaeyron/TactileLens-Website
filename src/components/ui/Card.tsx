import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  /** Use "li" when the card is an item in a list of cards. */
  as?: "article" | "li" | "div";
  /** Show the small teal accent bar above the title. */
  accent?: boolean;
};

export default function Card({
  title,
  children,
  as: Tag = "div",
  accent = false,
}: CardProps) {
  return (
    <Tag className="card">
      {accent && <div className="card-accent" aria-hidden="true" />}
      <h3 className="card-title">{title}</h3>
      <div className="card-body">{children}</div>
    </Tag>
  );
}
