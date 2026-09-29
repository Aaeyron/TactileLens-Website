/**
 * All editable website text lives here.
 *
 * Anything starting with "TODO" is a placeholder that still needs real
 * information from the team. Search this file for "TODO" to find them all.
 * Do not replace a TODO with a guess — only with confirmed product facts.
 */

export const site = {
  name: "TactileLens",
  // TODO: Production URL (e.g. the Vercel domain), such as "https://tactilelens.vercel.app".
  // Needed for absolute Open Graph URLs. Leave empty until it is known.
  url: "",
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

/**
 * App release info: the one place to update for each new APK.
 * Leave a field as "" while it is unknown. The site hides empty fields,
 * and the download button shows "coming soon" until apkUrl is filled in.
 */
export const appRelease = {
  // TODO: APK download URL. Either a GitHub Releases asset URL, or a file in
  // /public, written as a path like "/downloads/tactilelens.apk".
  apkUrl: "",
  // TODO: Current version, e.g. "1.0.0".
  version: "",
  // TODO: APK file size, e.g. "42 MB".
  fileSize: "",
  // TODO: Minimum Android version, e.g. "8.0".
  minAndroidVersion: "",
};

export const downloadCta = {
  label: "Download for Android",
  /** Navbar button: jumps to the download and install section. */
  shortLabel: "Download App",
  href: "#download",
  comingSoonLabel: "Download coming soon",
  comingSoonNote: "The Android app will be available to download here soon.",
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
  mockup: {
    // TODO: Add a real app screenshot. Put the file in /public/screenshots/,
    // then fill in src (e.g. "/screenshots/scan.png"), the image's real pixel
    // width and height, and alt text describing what the screen shows.
    // Portrait phone screenshots (about 9:19.5) fit the frame best.
    screenshot: { src: "", width: 0, height: 0, alt: "" },
    // Placeholder screen shown until the screenshot above is filled in.
    placeholder: {
      label:
        "Illustration of a phone scanning the printed expression x + 1 and showing it in Nemeth braille.",
      scanLabel: "Scan",
      printed: "x + 1",
      translateLabel: "Translate",
      brailleLabel: "Nemeth braille",
      // TODO: Team to verify. Intended as "x + 1" in Nemeth code (x, plus, 1).
      braille: "⠭⠬⠂",
    },
  },
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
