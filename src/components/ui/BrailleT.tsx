import type { SVGProps } from "react";

type BrailleTProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/**
 * The braille letter "t" (⠞, dots 2-3-4-5): our brand motif.
 * This is intentional, correct braille: "t" for TactileLens.
 * Raised dots are filled; unraised dots (1 and 6) are faint rings
 * so the 2×3 cell shape stays visible. Always decorative.
 */
export default function BrailleT({ size = 24, ...props }: BrailleTProps) {
  // Cell positions: left column = dots 1,2,3; right column = dots 4,5,6.
  const raised = [
    [9, 12], // dot 2
    [9, 18], // dot 3
    [15, 6], // dot 4
    [15, 12], // dot 5
  ];
  const unraised = [
    [9, 6], // dot 1
    [15, 18], // dot 6
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {raised.map(([cx, cy]) => (
        <circle key={`r${cx}-${cy}`} cx={cx} cy={cy} r="2.25" fill="currentColor" />
      ))}
      {unraised.map(([cx, cy]) => (
        <circle
          key={`u${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="1.75"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
