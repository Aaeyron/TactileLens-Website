/**
 * All editable website text lives here, grouped by page.
 *
 * Anything starting with "TODO" is a placeholder that still needs real
 * information from the team. Search this file for "TODO" to find them all.
 * Do not replace a TODO with a guess — only with confirmed product facts.
 * Text marked "DRAFT: review" was written for the team to check and edit.
 */

/* ---------------------------------------------------------------------------
 * Site-wide
 * ------------------------------------------------------------------------- */

export const site = {
  name: "TactileLens",
  // TODO: Production URL (e.g. the Vercel domain), such as "https://tactilelens.vercel.app".
  // Needed for absolute Open Graph URLs. Leave empty until it is known.
  url: "",
  title: "TactileLens: Braille from printed text and math",
  description:
    "TactileLens is an Android app for teachers of visually impaired students. It scans printed text and math with the phone camera and translates them into braille, using the Nemeth code for math.",
  tagline: "An Android app that turns printed text and math into braille.",
};

/** Main pages, in navbar order. Also used for the footer links. */
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Team", href: "/team" },
];

/**
 * App release info: the one place to update for each new APK.
 * Leave a field as "" while it is unknown. The site shows it as TODO,
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
  /** Every Download button except the one on /download goes to this page. */
  pageHref: "/download",
  label: "Download for Android",
  navLabel: "Download App",
  comingSoonLabel: "Download coming soon",
  comingSoonNote: "The Android app will be available to download here soon.",
};

/** "Ready to try" banner at the end of every page except /download. */
export const ctaBanner = {
  title: "Ready to try TactileLens?",
  text: "Get the Android app and follow our step-by-step install guide.",
};

export const footer = {
  navLabel: "Pages",
  contactLabel: "Contact",
  contactEmail: "TODO: contact email",
  capstone: "TODO: capstone course, school, and adviser",
  platformNote: "Available for Android.",
};

/* ---------------------------------------------------------------------------
 * Home (/)
 * ------------------------------------------------------------------------- */

export const hero = {
  badge: "Accessible learning materials",
  titleLead: "Make printed learning materials more accessible with",
  titleHighlight: "TactileLens.",
  // TODO: Confirm the input language(s). "English" below comes from the
  // earlier draft copy and has not been confirmed yet.
  description:
    "TactileLens helps teachers recognize printed English text and algebraic equations, review scanned content, and generate Braille output for learners who are blind or have low vision.",
  secondaryCta: { label: "See features", href: "/features" },
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

export const homeSteps = {
  eyebrow: "What it does",
  title: "From printed page to braille",
  description: "TactileLens turns printed text and math into braille in three steps.",
  steps: [
    { title: "Scan", description: "Point your phone camera at a printed page." },
    { title: "Recognize", description: "The app reads the text and math on the page." },
    {
      title: "Translate",
      description: "TactileLens turns it into braille. Math uses the Nemeth code.",
    },
  ],
  link: { label: "Learn how it works", href: "/features#how-it-works" },
};

export const homeHighlights = {
  eyebrow: "Highlights",
  title: "Built for teachers",
  description: "The main things TactileLens does for you and your students.",
  items: [
    { title: "Text to braille", description: "Turn printed text into braille." },
    {
      title: "Math to Nemeth",
      description:
        "Turn printed algebra equations into Nemeth code, the braille code for math.",
    },
    {
      title: "Works offline",
      description: "Use TactileLens with or without an internet connection.",
    },
  ],
  link: { label: "See all features", href: "/features" },
};

/* ---------------------------------------------------------------------------
 * About (/about)
 * ------------------------------------------------------------------------- */

export const aboutPage = {
  meta: {
    title: "About",
    description:
      "Why we built TactileLens: helping teachers turn printed text and math into braille faster.",
  },
  header: {
    eyebrow: "About",
    title: "Why we built TactileLens",
    intro:
      "TactileLens is a capstone project. It helps teachers make printed learning materials ready for students who read braille.",
  },
  // DRAFT: review. Plain-language draft, no statistics. Replace with the
  // problem statement from the capstone paper if you prefer.
  problem: {
    eyebrow: "The problem",
    title: "Braille takes time to prepare",
    paragraphs: [
      "Students who are blind or have low vision need their learning materials in braille. But most worksheets, handouts and textbooks are printed.",
      "Turning printed text into braille takes time. Math takes even longer, because equations must be written in a special braille code called Nemeth.",
      "When materials take a long time to convert, students may have to wait before they can start the same work as their classmates.",
    ],
  },
  // DRAFT: review.
  mission: {
    eyebrow: "Our mission",
    title: "Faster braille for every lesson",
    paragraphs: [
      "We want to help teachers turn printed text and math into braille faster, so students who read braille can work with the same materials as their classmates, at the same time.",
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    title: "Made for the people who prepare braille",
    items: [
      {
        title: "Teachers of visually impaired students",
        description: "Prepare braille versions of printed text and math for your students.",
      },
      {
        title: "Special education (SPED) staff",
        description: "Help students who read braille get their class materials sooner.",
      },
    ],
  },
  capstone: {
    eyebrow: "Capstone project",
    title: "A student capstone project",
    paragraphs: [
      "TactileLens was developed as a capstone project.",
      "TODO: course name, school, school year, and adviser.",
    ],
    link: { label: "Meet the team", href: "/team" },
  },
};

/* ---------------------------------------------------------------------------
 * Features (/features)
 * ------------------------------------------------------------------------- */

export const featuresPage = {
  meta: {
    title: "Features",
    description:
      "See what TactileLens can do: camera scanning, text to braille, math to Nemeth code, and online or offline use.",
  },
  header: {
    eyebrow: "Features",
    title: "What TactileLens can do",
    intro: "TactileLens scans printed text and math with your phone camera and turns them into braille.",
  },
  list: {
    eyebrow: "All features",
    title: "Everything in the app",
    items: [
      {
        title: "Camera scanning",
        // TODO: Confirm whether teachers can also pick existing photos from the gallery.
        description: "Use your phone camera to scan printed pages, such as worksheets and handouts.",
      },
      {
        title: "Text to braille",
        description: "Turn printed text into braille.",
        note: "TODO: braille code used for text (for example, UEB Grade 1 or Grade 2).",
      },
      {
        title: "Math to Nemeth",
        description:
          "Turn printed algebra equations into Nemeth code, the braille code for math.",
      },
      {
        title: "Online and offline",
        description:
          "With internet, TactileLens reads the page using our server. Without internet, it reads the page on the phone itself.",
      },
      {
        title: "Review before you use it",
        // TODO: Confirm. This comes from the earlier draft copy.
        description: "Check the recognized text and math in a readable view.",
      },
    ],
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "Four simple steps",
    steps: [
      {
        title: "Scan",
        description: "Take a photo of the printed page with your phone camera.",
      },
      {
        title: "Recognize",
        description: "TactileLens finds the text and math on the page, online or offline.",
      },
      {
        title: "Translate",
        description: "Text is turned into braille, and math into Nemeth code.",
      },
      {
        title: "Use",
        description:
          "TODO: what teachers do with the braille (for example, view it on screen, save a BRF file, or send it to an embosser).",
      },
    ],
  },
};

/* ---------------------------------------------------------------------------
 * FAQ (/faq)
 * ------------------------------------------------------------------------- */

export const faqPage = {
  meta: {
    title: "FAQ",
    description:
      "Answers to common questions about TactileLens: price, offline use, braille codes, iOS, and installing the Android app.",
  },
  header: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    intro: "Short answers to the questions teachers ask most.",
  },
  items: [
    {
      question: "Is TactileLens free?",
      answer: "TODO: confirm whether the app is free.",
    },
    {
      question: "Does it work without internet?",
      // TODO: Confirm that math recognition and translation also work offline.
      answer:
        "Yes. TactileLens works online and offline. With internet, it reads the page using our server. Without internet, it reads the page on the phone itself.",
    },
    {
      question: "Which braille codes does it use?",
      answer:
        "Math is translated into Nemeth code. TODO: braille code used for regular text (for example, UEB Grade 1 or Grade 2).",
    },
    {
      question: "Is there an iPhone (iOS) version?",
      answer: "No. TactileLens is for Android only. An iOS version is not planned for now.",
    },
    {
      question: "Is it on the Google Play Store?",
      answer:
        "No. You download the app file (APK) from this website. The download page shows how to install it, step by step.",
    },
    {
      question: "Which Android version do I need?",
      answer: appRelease.minAndroidVersion
        ? `Android ${appRelease.minAndroidVersion} or newer.`
        : "TODO: minimum Android version.",
    },
    {
      question: "What happens to the photos I scan?",
      answer:
        "TODO: explain what happens to scanned images in online mode (sent to the server? stored? for how long?) and in offline mode.",
    },
  ],
};

/* ---------------------------------------------------------------------------
 * Team (/team)
 * ------------------------------------------------------------------------- */

export const teamPage = {
  meta: {
    title: "Team",
    description: "Meet the student team behind TactileLens, a capstone project.",
  },
  header: {
    eyebrow: "Team",
    title: "Meet the team",
    intro: "TactileLens was built by a team of students as a capstone project.",
  },
  members: {
    eyebrow: "Members",
    title: "The people behind TactileLens",
    // TODO: Replace with real names and roles. Add or remove entries as needed.
    list: [
      { name: "TODO: Name", role: "TODO: Role" },
      { name: "TODO: Name", role: "TODO: Role" },
      { name: "TODO: Name", role: "TODO: Role" },
      { name: "TODO: Name", role: "TODO: Role" },
    ],
  },
  school: {
    eyebrow: "School",
    title: "Our school and adviser",
    details: [
      { label: "School", value: "TODO: school name" },
      { label: "Course", value: "TODO: capstone course" },
      { label: "Adviser", value: "TODO: adviser name" },
      { label: "School year", value: "TODO: school year" },
    ],
  },
};

/* ---------------------------------------------------------------------------
 * Download (/download)
 * ------------------------------------------------------------------------- */

export const downloadPage = {
  meta: {
    title: "Download",
    description:
      "Download the TactileLens Android app (APK) and follow the step-by-step guide to install it.",
  },
  header: {
    eyebrow: "Download",
    title: "Download TactileLens for Android",
    intro: "Download the app file (APK) and install it on your Android phone. The steps below show you how.",
  },
  release: {
    title: "Release information",
    details: [
      { label: "Version", value: appRelease.version || "TODO: version" },
      { label: "File size", value: appRelease.fileSize || "TODO: file size" },
      {
        label: "Requires",
        value: appRelease.minAndroidVersion
          ? `Android ${appRelease.minAndroidVersion} or newer`
          : "TODO: minimum Android version",
      },
      { label: "Platform", value: "Android only" },
      { label: "Distribution", value: "APK file (not on the Google Play Store)" },
    ],
  },
  install: {
    eyebrow: "Install guide",
    title: "How to install the app",
    description:
      "TactileLens is not on the Google Play Store, so Android will ask you to allow the install. Follow these steps on your phone.",
    steps: [
      {
        title: "Download the app",
        description:
          "Tap Download for Android on this page. Your phone saves the APK file to your Downloads folder.",
      },
      {
        title: "Open the file",
        description:
          "When the download finishes, tap the notification. Or open the Files app, go to Downloads, and tap the APK file.",
      },
      {
        title: "Allow the install",
        description:
          'Android may say your browser is not allowed to install unknown apps. Tap Settings, turn on "Allow from this source", then go back.',
      },
      {
        title: "Install",
        description:
          "Tap Install. Because the app is not from the Play Store, Google Play Protect may show a warning. If you downloaded the file from this website, you can choose to install anyway.",
      },
      {
        title: "Open TactileLens",
        description: "Tap Open, or find TactileLens on your home screen or in your app list.",
      },
    ],
    tips: [
      "Setting names can look a little different on different phone brands and Android versions.",
      'After installing, you can turn "Allow from this source" off again in Settings.',
    ],
  },
};

/* ---------------------------------------------------------------------------
 * 404
 * ------------------------------------------------------------------------- */

export const notFoundPage = {
  meta: { title: "Page not found" },
  header: {
    eyebrow: "Error 404",
    title: "Page not found",
    intro: "The page you are looking for doesn't exist or has moved.",
  },
  links: {
    home: { label: "Go to Home", href: "/" },
    download: { label: "Download the app", href: "/download" },
  },
};
