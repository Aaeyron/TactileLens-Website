import type { ReactNode } from "react";

/**
 * Next.js gives a template a new key on every navigation, so this wrapper
 * re-mounts and its CSS enter animation (.page-transition in globals.css)
 * plays each time. It sits inside <main> in the root layout, so only the
 * page content animates; the navbar and footer stay still.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
