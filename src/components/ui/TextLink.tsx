import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: string;
};

/** An inline "Learn more →" style link to another page. */
export default function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link href={href} className="text-link">
      {children}
      <span className="text-link-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
