/** A decorative lens and braille motif shared by page and section headings. */
export default function SectionDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`section-decoration ${className}`.trim()}
      viewBox="0 0 160 160"
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <circle cx="80" cy="80" r="68" stroke="currentColor" />
      <rect x="28" y="28" width="104" height="104" rx="24" transform="rotate(-12 80 80)" stroke="currentColor" />
      <circle cx="80" cy="80" r="42" stroke="currentColor" />
      <path d="M80 4v12M80 144v12M4 80h12M144 80h12" stroke="currentColor" strokeWidth="2" />
      <g className="section-decoration-dots">
        <circle cx="70" cy="60" r="5" stroke="currentColor" />
        <circle cx="70" cy="80" r="5" fill="currentColor" />
        <circle cx="70" cy="100" r="5" fill="currentColor" />
        <circle cx="90" cy="60" r="5" fill="currentColor" />
        <circle cx="90" cy="80" r="5" fill="currentColor" />
        <circle cx="90" cy="100" r="5" stroke="currentColor" />
      </g>
    </svg>
  );
}
