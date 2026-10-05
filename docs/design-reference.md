# TactileLens website design reference

## Direction

Build a calm, modern website around grey, white, and blue. Use generous spacing,
clear geometric headings, rounded surfaces, and subtle shadows to distinguish
content groups. Blue identifies actions, active navigation, and important details.
Keep the real logo and explain the product with accurate, readable content.

## Homepage layout

1. **Header:** compact logo, pill navigation, and Download App action.
2. **Hero:** rounded grey panel with an outcome headline, blue emphasis, two
   actions, capability badges, and an upright phone preview on soft blue.
   Three small workflow tiles connect the preview to Scan, Recognize, and Braille.
3. **Overview:** two icon panels introducing printed text and math recognition.
4. **Capabilities:** three linked cards with concise feature details.
5. **Workflow:** horizontal numbered steps on desktop, stacked cards on mobile.
6. **Example:** printed input beside braille output, with a supporting explanation.
7. **Purpose:** three teacher-focused cards and four factual product details.
8. **Comparison:** readable before-and-after panels on a white section.
9. **Closing action:** rounded blue banner linking to the download page.
10. **Footer:** grey surface with brand summary, grouped navigation, and credits.
    There is no Back to top text button inside the footer.

## Shared page layouts

| Page | Layout |
| --- | --- |
| About | Split intro, purpose, braille basics, objectives, mission, audience, timeline |
| Features | Split intro, alternating media-and-text panels, workflow, scan tips |
| FAQ | Split intro, page links, grouped question panels, glossary, support |
| Team | Split intro, profile cards, project facts, acknowledgements |
| Download | Split intro, release status, requirements, install cards, troubleshooting |

## Design rules

- Content width: 1184px maximum, with responsive gutters and generous section spacing.
- Typography: Plus Jakarta Sans headings and Inter body text; 16px base text,
  comfortable line spacing, fluid headings, and one h1 per page.
- Palette: white `#ffffff`, grey `#f3f4f6`, soft blue `#edf2fa`, brand blue
  `#003797`, text `#0f1f36`, secondary text `#4a5a72`, borders `#e2e5eb`.
- Use 20–32px rounded panels, blue icon/number tiles, fine borders, and soft shadows.
  Hover and active states use blue emphasis while keeping text readable.
- Alternate white and grey sections. Use a two-column heading/description on wide
  screens and stacked content on mobile. Feature panels alternate their media position.
- Keep navigation and controls usable at 320px, with visible focus indicators.
- Preserve native keyboard and touch scrolling, reduced-motion behavior, scroll
  reveals, and the sticky-header offset for anchors.
- Keep all shared styles in `src/app/redesign.css`, loaded after the existing base CSS.

## Product accuracy

Do not invent testimonials, usage numbers, awards, performance timings, people,
or release details. Offline recognition is confirmed for printed text only.
Missing screenshots stay labeled as placeholders. The existing Nemeth example
requires verification by someone who reads the code before launch.

## Review and Git workflow

Review all six routes on desktop, tablet, and mobile. Check heading wrapping,
card spacing, navigation, keyboard focus, FAQ controls, and anchor behavior.
Run lint, the production build, and the palette contrast check. Commit and push
small, meaningful steps only after these checks pass.
