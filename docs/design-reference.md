# TactileLens website design reference

## Direction

Use a calm editorial layout for a teacher-facing product. Lead with the outcome,
show the workflow, then explain the capabilities. Keep the existing brand blue
and real logo, navy headings, white space, and open content columns. Use shadows
for physical objects such as phones and floating navigation.

## Homepage layout

1. **Header:** logo and Home, About, Features, FAQ, Team navigation; Download App action.
2. **Hero:** audience eyebrow, clear outcome headline, short explanation, primary
   Download for Android action, secondary See features link, and confirmed capabilities.
   Pair the text with the existing phone composition on a soft blue panel.
3. **How it works:** an alternating split with three numbered steps and an output preview.
4. **Why it matters:** a headline beside three concise reasons for teachers.
5. **Example:** printed input and braille output, with a supporting explanation.
6. **Before and after:** navy band with two readable comparison columns.
7. **Capabilities:** open feature columns, factual supporting details, and a features link.
8. **Closing action:** blue band directing visitors to the Android download and install page.
9. **Footer:** brand summary, grouped Product/Learn/Project navigation, FAQ access, and credit.

## Shared page layouts

| Page | Layout |
| --- | --- |
| About | Intro → purpose → braille basics → objectives → mission → audience → timeline |
| Features | Intro → alternating feature rows → workflow → scanning tips |
| FAQ | Intro → grouped questions → glossary → support information |
| Team | Intro → people → project facts → acknowledgements |
| Download | Intro → release status → requirements → install steps → troubleshooting |

## Design rules

- Content width: 1120px maximum; 20px mobile gutters and 32px tablet/desktop gutters.
- Typography: Manrope headings and Atkinson Hyperlegible Next body text. Use one h1
  per page, fluid headings, 17px body text, and short readable text measures.
- Color: white `#ffffff`, mist `#f6f8fb`, soft blue `#edf3fb`, brand blue `#003797`,
  navy `#00205c`, body text `#0f1f36`, secondary text `#4a5a72`.
- Use full-width color bands to separate major ideas. Avoid framing every section
  or adding a shadow to every content item.
- Keep accents tied to meaning: step numbers, eyebrow markers, fine dividers, and links.
- Stack split layouts below 960px; collapse columns on small phones. Keep controls
  at least 44px high and prevent horizontal overflow at 320px.
- Preserve native keyboard and touch scrolling, visible focus indicators, reduced-motion
  behavior, and the sticky-header offset for anchors.

## Product accuracy

Do not invent testimonials, usage numbers, awards, performance timings, or release details.
Offline recognition is confirmed for printed text only. Missing screenshots remain clearly
labeled placeholders; they must not be presented as actual app screens. The existing
Nemeth example still requires verification by someone who reads the code before launch.

## Review

Preview the implementation on desktop and at 375px and 320px. Check headline wrapping,
navigation, call-to-action placement, section rhythm, and anchor/focus behavior. Run lint,
production build, and the palette contrast check before committing and pushing.
