type BrailleCellDiagramProps = {
  label: string;
  caption: string;
};

/**
 * Teaching diagram of one braille cell with numbered dot positions:
 * 1-2-3 down the left column, 4-5-6 down the right.
 * All six positions look the same, so it is not a braille character.
 */
export default function BrailleCellDiagram({ label, caption }: BrailleCellDiagramProps) {
  const dots = [
    { n: 1, x: 40, y: 36 },
    { n: 2, x: 40, y: 84 },
    { n: 3, x: 40, y: 132 },
    { n: 4, x: 100, y: 36 },
    { n: 5, x: 100, y: 84 },
    { n: 6, x: 100, y: 132 },
  ];

  return (
    <figure className="cell-diagram">
      <svg viewBox="0 0 140 168" role="img" aria-label={label} className="cell-diagram-svg">
        <rect x="4" y="4" width="132" height="160" rx="20" className="cell-diagram-frame" />
        {dots.map((dot) => (
          <g key={dot.n}>
            <circle cx={dot.x} cy={dot.y} r="18" className="cell-diagram-dot" />
            <text x={dot.x} y={dot.y} className="cell-diagram-number" aria-hidden="true">
              {dot.n}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="cell-diagram-caption">{caption}</figcaption>
    </figure>
  );
}
