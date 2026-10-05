# TactileLens website design reference

## Direction

A friendly, text-first website using white and grey sections. Blue is reserved
for links, active states, and useful actions. Each band explains one main topic.
Remove decorative icons, repeated badges, nested background panels, and duplicate
calls to action. Keep the real logo and accurate product information.

## Typography and colors

- DM Sans throughout: regular body text, medium controls, and semibold headings.
- 16px base text, comfortable line spacing, restrained heading sizes and tracking.
- White `#ffffff`, grey `#f3f4f6`, blue `#003797`, text `#0f1f36`, secondary text
  `#4a5a72`, decorative dividers `#e2e5eb`.
- Content width: 1100px maximum, with responsive gutters.

## Section rhythm

- Every page starts on white. Top-level sections then alternate grey, white, grey.
- `src/app/redesign.css` controls the alternation using top-level content elements;
  nested text, lists, and diagrams do not create additional background bands.
- The first screen contains one introduction and fits the available viewport.
- Desktop content bands have a viewport-aware minimum height capped at 42rem.
  Mobile bands grow naturally with their content; do not clip text or force fixed heights.
- Features each get their own section. FAQ categories also get separate sections.
- About breaks braille basics into one concept per section. Keep project anchors
  available, use concise supporting text, and clearly mark information still pending.
- Use open text columns and fine dividers rather than cards inside cards.

## Actions and navigation

- Action buttons display useful icons, with hidden text for accessible names and
  a hover title. Important content actions also have a nearby text cue.
- Keep text labels for primary navigation, inline links, and native FAQ questions.
- Remove decorative footer arrows, unnecessary capability icons, repeated badges,
  and duplicate homepage links. There is no Back to top button in the footer.
- Keep 48px icon actions, visible focus rings, native keyboard/touch scrolling,
  reduced-motion support, and the sticky-header offset for anchors.

## Content accuracy

Use short, welcoming sentences. Never invent people, pricing, testimonials,
performance statistics, release dates, or privacy details. Offline recognition
is confirmed for printed text only. Show pending information in plain language.
Show actual screenshots once available; omit oversized placeholder previews from
feature sections. The Nemeth example needs verification by a braille reader before launch.

## Review and Git workflow

Check all six routes at 320, 375, 768, and 1280px, plus a short desktop viewport.
Verify alternating backgrounds, text wrapping, focus, icon names, the mobile
menu, native FAQ disclosures, and anchor landings. Run lint, production build,
and contrast checks. Commit and push each meaningful step only after checks pass.
