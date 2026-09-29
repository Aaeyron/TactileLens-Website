/**
 * All editable website text lives here.
 *
 * Anything starting with "TODO" is a placeholder that still needs real
 * information from the team. Search this file for "TODO" to find them all.
 * Do not replace a TODO with a guess — only with confirmed product facts.
 */

export const site = {
  name: "TactileLens",
  title: "TactileLens: Braille from printed text and math",
  description:
    "TactileLens is an Android app for teachers of visually impaired students. It scans printed text and math with the phone camera and translates them into braille, using the Nemeth code for math.",
};

/** In-page anchor links shown in the navbar. Each href matches a section id. */
export const navigation = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

export const downloadCta = {
  label: "Download for Android",
  shortLabel: "Download App",
  href: "#download",
};

export const hero = {
  badge: "Accessible learning materials",
  titleLead: "Make printed learning materials more accessible with",
  titleHighlight: "TactileLens.",
  // TODO: Confirm the input language(s). "English" below comes from the
  // earlier draft copy and has not been confirmed yet.
  description:
    "TactileLens helps teachers recognize printed English text and algebraic equations, review scanned content, and generate Braille output for learners who are blind or have low vision.",
  secondaryCta: { label: "See features", href: "#features" },
};

export const features = {
  eyebrow: "Key features",
  title: "What TactileLens offers",
  description:
    "Tools to help teachers prepare printed learning materials in a more accessible format.",
  items: [
    {
      title: "Printed Text Recognition",
      // TODO: Confirm the input method. "uploaded or captured" comes from the
      // earlier draft copy; camera-only vs. camera + gallery is not confirmed.
      description:
        "Recognize printed English text from uploaded or captured learning materials.",
    },
    {
      title: "Algebra Recognition",
      description:
        "Recognize algebraic equations and mathematical notation in printed materials.",
    },
    {
      title: "Content Preview",
      description:
        "Review recognized text and mathematical expressions in a readable document view.",
    },
    {
      title: "Braille Translation",
      description:
        "Generate Braille output from recognized content for review and accessible use.",
    },
  ],
};

export const footer = {
  contactLabel: "Contact",
  contactEmail: "TODO: contact email",
  capstone: "TODO: capstone course, school, and adviser",
  platformNote: "Available for Android.",
};
