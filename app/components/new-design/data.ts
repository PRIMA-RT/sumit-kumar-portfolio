/* Resume-backed content for Sumit Kumar's portfolio. */

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

export const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/prima-rt" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/stkrr002/" },
  { label: "MEDIUM", href: "https://medium.com/@AndroidRayz" },
  { label: "LEETCODE", href: "https://leetcode.com/SR-/" },
];

export const HERO_STATS = [
  {
    icon: "cpu" as const,
    label: "MOBILE PLATFORMS",
    lines: ["ANDROID NATIVE", "IOS NATIVE", "KOTLIN MULTIPLATFORM", "COMPOSE MULTIPLATFORM"],
  },
  {
    icon: "code" as const,
    label: "LANGUAGES & UI",
    lines: ["KOTLIN / JAVA", "SWIFT / SWIFTUI", "JETPACK COMPOSE", "SWIFT CONCURRENCY"],
  },
  {
    icon: "cloud" as const,
    label: "AI & DELIVERY",
    lines: ["AI AGENTS / SKILLS", "MCP / SUBAGENTS", "FASTLANE / CI/CD", "GITHUB ACTIONS"],
  },
  {
    icon: "box" as const,
    label: "ARCHITECTURE",
    lines: ["MVI / MVVM", "CLEAN ARCHITECTURE", "MULTI-MODULE", "TDD / GRAPHQL"],
  },
];

export const SERVICES = [
  {
    index: "01",
    tag: "MOBILE",
    icon: "layers" as const,
    title: "ANDROID & IOS ENGINEERING",
    description: "Building native mobile experiences with Kotlin, Jetpack Compose, Swift, and SwiftUI across complex product workflows.",
    points: ["ANDROID & IOS NATIVE", "JETPACK COMPOSE & SWIFTUI", "KOTLIN MULTIPLATFORM", "ACCESSIBLE, RESPONSIVE UX"],
  },
  {
    index: "02",
    tag: "INTELLIGENCE",
    icon: "cpu" as const,
    title: "AI-ENABLED MOBILE PRODUCTS",
    description: "Bringing agentic AI, streaming experiences, codebase-aware subagents, skills, and MCP workflows into production mobile applications.",
    points: ["AGENTIC AI EXPERIENCES", "STREAMING INTERFACES", "AI SUBAGENTS & SKILLS", "MCP INTEGRATION"],
  },
  {
    index: "03",
    tag: "QUALITY",
    icon: "cloud" as const,
    title: "ARCHITECTURE & DELIVERY",
    description: "Creating predictable state, testable modules, reusable SDKs, and automated release workflows for dependable mobile teams.",
    points: ["MVI / MVVM / CLEAN", "TDD & EVENT-BASED TESTING", "FASTLANE & CI/CD", "GRAPHQL & REST DATA LAYERS"],
  },
];

export const SHOWCASE_PILLARS = [
  { index: "01", title: "NATIVE MOBILE" },
  { index: "02", title: "AGENTIC AI" },
  { index: "03", title: "PRODUCT IMPACT" },
];

export const STACK_GROUPS = [
  { title: "ANDROID", items: ["Kotlin / Java", "Jetpack Compose", "Android Core", "Dagger-Hilt / RoomDB", "Android Studio"] },
  { title: "IOS & MULTIPLATFORM", items: ["Swift / SwiftUI", "Swift Concurrency", "Actors", "Kotlin Multiplatform", "Compose Multiplatform"] },
  { title: "ARCHITECTURE & DATA", items: ["MVI / MVVM", "Clean Architecture", "Multi-Module", "GraphQL / REST APIs", "Firebase / Sockets"] },
  { title: "TESTING & DELIVERY", items: ["JUnit / Espresso", "Mockito / MockK", "Turbine / Compose Node", "Fastlane / GitHub Actions", "Git / Postman / Linux"] },
];

export const STACK_PRINCIPLES = [
  { icon: "zap" as const, title: "PERFORMANCE FIRST", description: "NATIVE-WEB BRIDGES, BATCHING, COROUTINES, AND RESPONSIVE UI" },
  { icon: "shield" as const, title: "TESTED BY DESIGN", description: "TDD, EVENT-BASED TESTING, UI TESTS, AND SAFE DATA FLOWS" },
  { icon: "code" as const, title: "REUSABLE SYSTEMS", description: "MULTI-MODULE ARCHITECTURE, SDKs, TEMPLATES, AND SHARED COMPONENTS" },
];

export const CAPABILITIES = [
  {
    index: "01_NATIVE_ENGINEERING",
    title: "CROSS-PLATFORM MOBILE",
    description: "Leading Android and iOS native feature development while sharing architecture and product thinking across both ecosystems.",
    tags: ["KOTLIN", "SWIFT", "KMP"],
  },
  {
    index: "02_AI_SYSTEMS",
    title: "AGENTIC MOBILE AI",
    description: "Building streaming AI experiences and codebase-aware systems with generated indexes, multiple subagents, reusable skills, and MCP.",
    tags: ["AI AGENTS", "MCP", "STREAMING"],
  },
  {
    index: "03_ENGINEERING_SYSTEMS",
    title: "SCALABLE ARCHITECTURE",
    description: "Designing clean, multi-module mobile systems with predictable state, standardized data layers, automated delivery, and strong tests.",
    tags: ["MVI", "GRAPHQL", "CI/CD"],
  },
];

export type Project = {
  index: string;
  meta: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  points: string[];
  image: string;
  layout: "media-top" | "media-side" | "media-bg" | "text";
  theme: "light" | "dark";
  ctaStyle: "arrow" | "accent" | "bar" | "box" | "none";
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    meta: "KOTLIN / COMPOSE / GEMINI",
    title: "MEDICOZ AI",
    description: "An AI-powered white-label mobile solution for small and medium clinics, connecting healthcare professionals and patients.",
    cta: { label: "VIEW ON GITHUB", href: "https://github.com/prima-rt/Medicoz" },
    image: "",
    points: ["Real-time video consultation with Jitsi Meet", "Gemini-powered healthcare chat and medicine recognition", "Public community and private messaging", "Multi-module Clean Architecture with Hilt, Room, sockets, Firebase, and CI/CD"],
    layout: "text",
    theme: "dark",
    ctaStyle: "arrow",
  },
  {
    index: "02",
    meta: "SWIFTUI / JSON / GRAPH EXPLORER",
    title: "JSON VISUALIZER PRO",
    description: "A native SwiftUI application for parsing, visualizing, searching, and inspecting complex JSON payloads at multiple levels.",
    cta: { label: "VIEW ON GITHUB", href: "https://github.com/PRIMA-RT/Json-Visualizer-Pro" },
    image: "",
    points: ["Explorer, Nodes, History, and Settings workflows", "Presentation, Domain, and Data architecture", "Pan, zoom, fullscreen, branch expansion, and search navigation", "File import, formatting, schema generation, statistics, and history"],
    layout: "text",
    theme: "dark",
    ctaStyle: "arrow",
  },
  {
    index: "03",
    meta: "ANDROID / ZXING / OFFLINE",
    title: "SCANALPHA",
    description: "A lightweight Android application for scanning and generating QR codes and barcodes with a focused, responsive interface.",
    cta: { label: "VIEW ON PLAY STORE", href: "https://play.google.com/store/apps/details?id=com.alpharays.scanalpha" },
    image: "",
    points: ["Real-time QR and barcode scanning with ZXing", "Custom QR code generation", "Offline image saving", "Simple navigation and responsive feedback"],
    layout: "text",
    theme: "dark",
    ctaStyle: "accent",
  },
];

export const JOURNEY = [
  {
    period: "MARCH 2026 - PRESENT",
    location: "BENGALURU, INDIA",
    role: "SDE-2, MOBILE - ANDROID & IOS",
    company: "NEW RELIC",
    detail: "AskAI, dashboards, real-time logs, and mobile engineering systems",
    point: [
      "Led AskAI across Android and iOS from scratch, adding agentic AI, complex UX, and streaming support that increased user attraction by 37%.",
      "Reduced dashboard visualization effort and LOC by 74% while improving visualization-screen speed by 16%.",
      "Led a real-time Logs vertical that increased client traction by 16%.",
      "Built a codebase-aware AI system with generated indexes, subagents, and reusable skills for mobile engineering.",
      "Automated builds, tests, and AI-powered PR reviews with Fastlane, and standardized GraphQL code to reduce LOC by 18%.",
    ],
    current: true,
  },
  {
    period: "JANUARY 2025 - FEBRUARY 2026",
    location: "BENGALURU, INDIA",
    role: "SDE, ANDROID",
    company: "YULU BIKES",
    detail: "Modern Android product architecture and hardware-integrated mobility experiences",
    point: [
      "Modernized the app with Jetpack Compose and created an MVI-based unidirectional architecture.",
      "Built Google Maps location and tracking workflows plus BLE, scanner, service, and broadcast-receiver integrations.",
      "Reduced repetitive MVI implementation work by 27% through custom file templates.",
      "Applied TDD and event-based testing with Espresso, Compose Node, Mockito, and Hilt.",
    ],
    current: false,
  },
  {
    period: "FEBRUARY 2023 - DECEMBER 2024",
    location: "GURUGRAM, INDIA",
    role: "SDE, ANDROID",
    company: "RAAHO",
    detail: "Quick digital solutions for logistics",
    point: [
      "Migrated legacy threaded code to coroutines for better responsiveness and maintainability.",
      "Published reusable UI and Kotlin SDKs through JFrog to accelerate development across projects.",
      "Created a reusable network layer that reduced LOC by 23% and helped reduce crashes and ANRs by 3%.",
      "Designed MVVM and Clean Architecture API flows and wrote tests for more than 20 distinct features.",
    ],
    current: false,
  },
  {
    period: "2020 - 2024",
    location: "NEW DELHI, INDIA",
    role: "B.TECH, COMPUTER SCIENCE ENGINEERING",
    company: "GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY",
    detail: "Graduated with a 9.0 CGPA",
    point: [
      "Studied data structures and algorithms, OOP, DBMS, operating systems, and computer networks.",
      "Solved 300+ DSA problems and ranked under 3,000 in the Google Kick Start final round.",
      "Earned Anthropic certifications in MCP, AI Skills, and Subagents, plus Swift Concurrency and SwiftUI credentials.",
    ],
    current: false,
  },
];

export const CONTACT_EMAIL = "sumitkrr2002@gmail.com";
