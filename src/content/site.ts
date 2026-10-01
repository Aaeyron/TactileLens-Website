/**
 * All editable website text lives here, grouped by page.
 *
 * Anything starting with "TODO" is a placeholder that still needs real
 * information from the team. Search this file for "TODO" to find them all.
 * Do not replace a TODO with a guess — only with confirmed product facts.
 * Text marked "DRAFT: review" was written for the team to check and edit
 * (braille content should be checked by a teammate who reads braille).
 *
 * Offline rule: only TEXT recognition is confirmed to work offline. Never say
 * or imply that math works offline.
 * TODO: Confirm whether math recognition works offline.
 *
 * Formatting: **double asterisks** mark a key term, shown in bold logo blue.
 */

/* ---------------------------------------------------------------------------
 * Site-wide
 * ------------------------------------------------------------------------- */

export const site = {
  name: "TactileLens",
  // TODO: Production URL (e.g. the Vercel domain), such as "https://tactilelens.vercel.app".
  // Needed for absolute Open Graph URLs and the QR code. Leave empty until known.
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

/**
 * App screenshots. Until `src` is filled in, each spot shows an empty
 * placeholder box with the label and file path below (hidden from screen
 * readers). To add a screenshot:
 *   1. Save the image at the `file` path (inside web-app/).
 *   2. Fill in `src` (the path without "public") and a short `alt`.
 *   3. Check `width`/`height` match the image (1080×2340 is a common phone size).
 * The same entry can be used in more than one place (e.g. scanResult).
 */
export const screens = {
  // TODO: Screenshot — used in the Home hero and Home "How it works" step 2.
  scanResult: { label: "App screen: Scan result (printed equation converted to text and braille)", file: "public/screenshots/scan-result.png", src: "", width: 1080, height: 2340, alt: "" },
  // TODO: Screenshot — Home "How it works" step 1.
  camera: { label: "App screen: Camera", file: "public/screenshots/camera.png", src: "", width: 1080, height: 2340, alt: "" },
  // TODO: Screenshot — Home "How it works" step 3 and Features "Math to Nemeth".
  brailleOutput: { label: "App screen: Braille output", file: "public/screenshots/braille-output.png", src: "", width: 1080, height: 2340, alt: "" },
  // TODO: Screenshot — Features "Camera scanning".
  home: { label: "App screen: Home", file: "public/screenshots/home.png", src: "", width: 1080, height: 2340, alt: "" },
  // TODO: Screenshot — Features "Text to braille".
  materials: { label: "App screen: Materials", file: "public/screenshots/materials.png", src: "", width: 1080, height: 2340, alt: "" },
  // TODO: Screenshot — Features "Online and offline".
  onlineOffline: { label: "App screen: Online/offline mode", file: "public/screenshots/online-offline-mode.png", src: "", width: 1080, height: 2340, alt: "" },
};

/**
 * Sample shown in the "See it in action" card.
 * TODO: A teammate who reads Nemeth must verify this braille before launch.
 * Intended as "x + 1" in Nemeth code: x (⠭), plus (⠬), 1 (⠂).
 */
export const sampleMath = {
  printed: "x + 1",
  braille: "⠭⠬⠂",
};

export const downloadCta = {
  /** Every Download button except the one on /download goes to this page. */
  pageHref: "/download",
  label: "Download for Android",
  navLabel: "Download App",
  comingSoonLabel: "Download coming soon",
  comingSoonNote: "The Android app will be available to download here soon.",
};

/** Solid blue "Ready to try" band at the end of every page except /download. */
export const ctaBanner = {
  title: "Ready to try TactileLens?",
  text: "Get the Android app and follow our step-by-step install guide.",
};

export const footer = {
  // DRAFT: review.
  audienceLine: "Built for teachers of students who read braille.",
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
  // Confirmed facts only. Offline = text only (see the offline rule at the top).
  trustBadges: [
    { label: "Android" },
    { label: "Offline text scanning" },
    { label: "Nemeth math" },
  ],
  screen: screens.scanResult,
} as const;

export const homeSteps = {
  eyebrow: "How it works",
  title: "From printed page to braille",
  description: "TactileLens turns printed text and math into braille in three steps.",
  steps: [
    { title: "Scan", description: "Point your phone camera at a printed page.", screen: screens.camera },
    {
      title: "Recognize",
      description: "The app reads the text and math on the page.",
      screen: screens.scanResult,
    },
    {
      title: "Braille",
      description: "TactileLens turns it into braille. Math uses the Nemeth code.",
      screen: screens.brailleOutput,
    },
  ],
  link: { label: "Learn how it works", href: "/features#how-it-works" },
} as const;

export const seeItInAction = {
  eyebrow: "See it in action",
  title: "Printed math in, Nemeth braille out",
  description: "Here is a simple algebra expression, before and after.",
  beforeLabel: "Printed",
  afterLabel: "Nemeth braille",
  /** What screen readers hear instead of the visual comparison. */
  srText: "Example: the printed expression x + 1, shown as Nemeth braille.",
  // DRAFT: review (braille reader to check).
  fact: "In **Nemeth code**, numbers are written in the lower part of the braille cell.",
};

export const homeHighlights = {
  eyebrow: "Highlights",
  title: "Built for teachers",
  description: "The main things TactileLens does for you and your students.",
  // DRAFT: review (chips and bullets).
  items: [
    {
      chip: "Text",
      title: "Text to braille",
      description: "Turn printed text into braille.",
      bullets: ["Works with printed pages", "No retyping needed"],
      href: "/features",
    },
    {
      chip: "Math",
      title: "Math to Nemeth",
      description:
        "Turn printed algebra equations into Nemeth code, the braille code for math.",
      bullets: ["Made for general algebra", "Uses **Nemeth**, the braille code for math"],
      href: "/features",
    },
    {
      // TODO: Confirm whether math recognition works offline.
      chip: "Offline",
      title: "Offline text scanning",
      description: "Recognize printed text even without an internet connection.",
      bullets: ["Offline: text is recognized on the phone", "Online: pages are recognized on our server"],
      href: "/features",
    },
  ],
  cardLinkLabel: "Learn more",
  // DRAFT: review.
  fact: "A braille cell has six dots. That makes 64 possible patterns, counting the blank cell.",
  link: { label: "See all features", href: "/features" },
} as const;

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
  comparison: {
    eyebrow: "Why it matters",
    title: "Braille takes time to prepare",
    // DRAFT: review.
    description: "Here is what makes braille slow today, and how TactileLens helps.",
    items: [
      {
        // DRAFT: review. Plain-language draft, no statistics.
        title: "The problem",
        bullets: [
          "Most worksheets, handouts and textbooks are printed. Students who read braille need them in braille.",
          "Materials often have to be **retyped** before they can be turned into braille.",
          "Turning printed text into braille takes time, and every page needs **checking**.",
          "Math takes even longer, because equations must be written in a special braille code called **Nemeth**.",
        ],
      },
      {
        // Confirmed facts only.
        // TODO: Confirm whether math recognition works offline.
        title: "Our solution",
        bullets: [
          "Scan printed pages with an Android phone camera.",
          "Turn printed text into braille.",
          "Turn printed algebra into **Nemeth** code.",
          "Recognize printed text online or offline.",
        ],
      },
    ],
  },
  // DRAFT: review — general braille knowledge; a braille reader should check it.
  basics: {
    eyebrow: "Braille basics",
    title: "A quick guide to braille",
    description: "A few ideas that explain why braille, and math braille, take care to prepare.",
    diagramLabel:
      "Diagram of a braille cell: six dot positions in two columns. Dots 1, 2 and 3 run down the left column; dots 4, 5 and 6 run down the right column.",
    diagramCaption: "The six dot positions of a braille cell",
    items: [
      {
        chip: "Basics",
        title: "What braille is",
        description: "Braille is a system of **raised dots** that people read by touch.",
        bullets: ["Each character sits in a **cell** of six dots", "Dots are numbered 1 to 6"],
      },
      {
        chip: "Text",
        title: "Grade 1 and Grade 2",
        description: "Braille for text comes in two main forms.",
        bullets: [
          "**Grade 1** spells words letter by letter",
          "**Grade 2** uses **contractions** that shorten common words",
        ],
      },
      {
        chip: "Code",
        title: "UEB",
        description: "**Unified English Braille** is a braille code for English used in many countries.",
        bullets: ["Covers letters, numbers and punctuation", "Can be written in Grade 1 or Grade 2"],
      },
      {
        chip: "Math",
        title: "Nemeth, and why math is harder",
        description:
          "Math has fractions, exponents and symbols laid out on the page. In braille, math is usually written in a single line.",
        bullets: [
          "**Nemeth code** is a braille code for math and science",
          "Spacing and **indicators** show where parts begin and end",
        ],
      },
    ],
  },
  // DRAFT: review.
  mission: {
    eyebrow: "Our mission",
    title: "Faster braille for every lesson",
    quote:
      "We want to help teachers turn printed text and math into braille faster, so students who read braille can work with the same materials as their classmates, at the same time.",
    attribution: "The TactileLens team",
  },
  // DRAFT: review.
  audience: {
    eyebrow: "Who benefits",
    title: "Made for the people who prepare braille",
    description: "TactileLens is built for teachers, and it helps everyone around them.",
    items: [
      {
        chip: "Teachers",
        title: "Teachers of visually impaired students",
        description: "Prepare braille versions of printed text and math for your students.",
        bullets: ["Scan with the phone you already have", "Math in **Nemeth** code"],
      },
      {
        chip: "SPED",
        title: "Special education (SPED) staff",
        description: "Help students who read braille get their class materials sooner.",
        bullets: ["Quick to learn", "Useful for everyday handouts"],
      },
      {
        chip: "Transcribers",
        title: "Braille transcribers",
        description: "Get printed text and math into braille with less retyping.",
        bullets: ["Start from a scan, not a blank page", "Text and algebra in one app"],
      },
      {
        chip: "Students",
        title: "Students who read braille",
        description: "Get learning materials sooner, so you can start with your classmates.",
        bullets: ["Same lesson, same time", "Math written in **Nemeth**"],
      },
    ],
    fact: "The **Nemeth Code** was developed by Abraham Nemeth, a blind mathematician.",
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
} as const;

/* ---------------------------------------------------------------------------
 * Features (/features)
 * ------------------------------------------------------------------------- */

export const featuresPage = {
  meta: {
    title: "Features",
    description:
      "See what TactileLens can do: camera scanning, text to braille, math to Nemeth code, and offline text recognition.",
  },
  header: {
    eyebrow: "Features",
    title: "What TactileLens can do",
    intro: "TactileLens scans printed text and math with your phone camera and turns them into braille.",
  },
  list: {
    eyebrow: "All features",
    title: "Everything in the app",
    description: "Four features that take a printed page to braille.",
    // Removed until confirmed: "Review before you use it — check the recognized
    // text and math in a readable view." (from the earlier draft copy).
    items: [
      {
        chip: "Camera",
        screen: screens.home,
        title: "Camera scanning",
        // TODO: Confirm whether teachers can also pick existing photos from the gallery.
        description: "Use your phone camera to scan printed pages, such as worksheets and handouts.",
        // DRAFT: review.
        bullets: ["Works with printed worksheets and handouts", "No separate scanner needed"],
      },
      {
        chip: "Text",
        screen: screens.materials,
        title: "Text to braille",
        description: "Turn printed text into braille.",
        // DRAFT: review.
        bullets: ["No retyping needed", "Text recognition also works offline"],
        note: "TODO: braille code used for text (for example, UEB Grade 1 or Grade 2).",
      },
      {
        chip: "Math",
        screen: screens.brailleOutput,
        title: "Math to Nemeth",
        description:
          "Turn printed algebra equations into Nemeth code, the braille code for math.",
        // DRAFT: review.
        bullets: ["Built for general algebra", "Nemeth is the braille code for math"],
      },
      {
        // TODO: Confirm whether math recognition works offline.
        chip: "Online + offline",
        screen: screens.onlineOffline,
        title: "Online and offline",
        description:
          "With internet, TactileLens reads the page using our server. Without internet, it recognizes printed text on the phone itself.",
        // DRAFT: review.
        bullets: ["Online: pages are recognized on our server", "Offline: printed text is recognized on the phone"],
      },
    ],
    // DRAFT: review.
    tip: "Good scans give better braille. See our **tips for good scans** below.",
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "Four simple steps",
    description: "From a printed page to braille you can use.",
    steps: [
      {
        title: "Scan",
        description: "Take a photo of the printed page with your phone camera.",
      },
      {
        // TODO: Confirm whether math recognition works offline.
        title: "Recognize",
        description:
          "TactileLens finds the text and math on the page. Text recognition also works offline.",
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
  // DRAFT: review. General camera advice, not product claims.
  scanTips: {
    id: "scan-tips",
    eyebrow: "Tips",
    title: "Tips for good scans",
    description: "A clear photo helps the app read the page correctly.",
    items: [
      {
        chip: "Light",
        title: "Use good light",
        description: "Scan in bright, even light.",
        bullets: ["Avoid shadows across the page", "Tilt the page to stop glare"],
      },
      {
        chip: "Page",
        title: "Keep the page flat",
        description: "Flat pages are easier to read than curved ones.",
        bullets: ["Press down folds and creases", "Hold book pages open and flat"],
      },
      {
        chip: "Frame",
        title: "Fit the whole equation",
        description: "Keep the full expression inside the camera view.",
        bullets: ["Don't cut off exponents or fractions", "Move closer for small print"],
      },
      {
        chip: "Steady",
        title: "Hold steady",
        description: "A still camera takes a sharper photo.",
        bullets: ["Rest your elbows on the table", "Wait for the camera to focus"],
      },
    ],
    note: "TactileLens is made for **printed** text. Handwriting may not be recognized.",
  },
} as const;

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
  categories: [
    {
      title: "General",
      items: [
        {
          question: "Is TactileLens free?",
          answer: "TODO: confirm whether the app is free.",
        },
        {
          question: "Is there an iPhone (iOS) version?",
          answer: "No. TactileLens is for Android only. An iOS version is not planned for now.",
        },
      ],
    },
    {
      title: "Braille and math",
      items: [
        {
          question: "Which braille codes does it use?",
          answer:
            "Math is translated into Nemeth code. TODO: braille code used for regular text (for example, UEB Grade 1 or Grade 2).",
        },
      ],
    },
    {
      title: "Installing",
      items: [
        {
          // Confirmed: APK only, not on the Play Store.
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
      ],
    },
    {
      title: "Privacy and offline use",
      items: [
        {
          question: "Does it work without internet?",
          // TODO: Confirm whether math recognition works offline.
          answer:
            "Yes, for printed text. With internet, TactileLens reads the page using our server. Without internet, it recognizes printed text on the phone itself.",
        },
        {
          question: "What happens to the photos I scan?",
          answer:
            "TODO: explain what happens to scanned images in online mode (sent to the server? stored? for how long?) and in offline mode.",
        },
      ],
    },
  ],
  // DRAFT: review — plain-language definitions; a braille reader should check them.
  glossary: {
    id: "glossary",
    eyebrow: "Glossary",
    title: "Words you may see",
    description: "Short, plain definitions of terms used on this site.",
    items: [
      {
        label: "Braille cell",
        value: "The space for one braille character: six dot positions in two columns of three.",
      },
      {
        label: "Grade 1 / Grade 2 braille",
        value:
          "Grade 1 spells words letter by letter. Grade 2 uses contractions that shorten common words.",
      },
      {
        label: "UEB",
        value: "Unified English Braille, a braille code for English used in many countries.",
      },
      {
        label: "Nemeth Code",
        value: "A braille code for math and science.",
      },
      {
        label: "OCR",
        value:
          "Optical character recognition: turning a photo of text into text a computer can read.",
      },
      {
        label: "APK",
        value: "The file used to install an app on an Android phone.",
      },
    ],
  },
  contactNote: "Can't find your answer? Contact the team. TODO: contact email.",
} as const;

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
    // Avatars show initials once a real name is set.
    list: [
      { name: "TODO: Name", role: "TODO: Role" },
      { name: "TODO: Name", role: "TODO: Role" },
      { name: "TODO: Name", role: "TODO: Role" },
      { name: "TODO: Name", role: "TODO: Role" },
    ],
  },
  // Confirmed facts only.
  projectFacts: {
    eyebrow: "The project",
    title: "About the project",
    items: [
      { title: "Capstone project", description: "Built by students." },
      { title: "Built with Flutter", description: "A cross-platform app toolkit." },
      { title: "Android app", description: "Released for Android." },
      // TODO: Confirm whether math recognition works offline.
      { title: "Offline text", description: "Printed text works without internet." },
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
} as const;

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
  card: {
    title: "TactileLens for Android",
    subtitle: "Android app (APK)",
    chips: ["Android", "APK file", "Not on Google Play"],
  },
  // DRAFT: review.
  beforeYouStart: {
    title: "Before you start",
    items: ["An Android phone", "An internet connection for the download", "Free space for the app file"],
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
      { label: "Distribution", value: "APK file (not on the Google Play Store)" },
    ],
  },
  qr: {
    title: "Open this page on your phone",
    text: "Scan this QR code with your phone camera to open the download page.",
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
    // DRAFT: review.
    safetyTip: "Only download TactileLens from **this website**.",
    note: 'Setting names can look a little different on different phone brands and Android versions. After installing, you can turn "Allow from this source" off again in Settings.',
    scanTipsLink: { label: "Once installed, see our tips for good scans", href: "/features#scan-tips" },
  },
} as const;

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
} as const;
