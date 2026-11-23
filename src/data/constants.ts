// order = keycap layout, 6 per row
export enum SkillNames {
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  ANGULAR = "angular",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  PHP = "php",
  LARAVEL = "laravel",
  JAVA = "java",
  SPRING = "spring",
  KOTLIN = "kotlin",
  PYTHON = "python",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  DOCKER = "docker",
  GIT = "git",
  LANGCHAIN = "langchain",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  keyboardIcon?: string;
  keyboardColor?: string;
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "The glue holding every one of my frontends together.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Catches my bugs before the browser does.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 3,
    name: "react",
    label: "React",
    shortDescription: "My default for anything with a UI.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    keyboardIcon: "/assets/keyboard/logos/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.NEXTJS]: {
    id: 4,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Shipped my live B2B platform on it, solo.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nextjs.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.ANGULAR]: {
    id: 5,
    name: "angular",
    label: "Angular",
    shortDescription: "Used it to build audit dashboards at 6Solutions.",
    color: "#dd0031",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/angular.svg",
    keyboardColor: "#dd0031",
  },
  [SkillNames.TAILWIND]: {
    id: 6,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility classes, zero regrets.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    keyboardIcon: "/assets/keyboard/logos/tailwind.svg",
    keyboardColor: "#00bfd8",
  },
  [SkillNames.NODEJS]: {
    id: 7,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Backend APIs when I want to stay in JS-land.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nodejs.svg",
    keyboardColor: "#00952c",
  },
  [SkillNames.PHP]: {
    id: 8,
    name: "php",
    label: "PHP",
    shortDescription: "Where I started shipping real backends.",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    keyboardIcon: "/assets/keyboard/logos/php.svg",
    keyboardColor: "#777bb4",
  },
  [SkillNames.LARAVEL]: {
    id: 9,
    name: "laravel",
    label: "Laravel",
    shortDescription: "Built REST APIs with it at ENES Société.",
    color: "#ff2d20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    keyboardIcon: "/assets/keyboard/logos/laravel.svg",
    keyboardColor: "#ff2d20",
  },
  [SkillNames.JAVA]: {
    id: 10,
    name: "java",
    label: "Java",
    shortDescription: "Still my go-to for anything enterprise-shaped.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    keyboardIcon: "/assets/keyboard/logos/java.svg",
    keyboardColor: "#f89820",
  },
  [SkillNames.SPRING]: {
    id: 11,
    name: "spring",
    label: "Spring Boot",
    shortDescription: "Microservices with Kafka behind the scenes.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    keyboardIcon: "/assets/keyboard/logos/spring.svg",
    keyboardColor: "#6db33f",
  },
  [SkillNames.KOTLIN]: {
    id: 12,
    name: "kotlin",
    label: "Kotlin",
    shortDescription: "Native Android, no React Native shortcuts.",
    color: "#7f52ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    keyboardIcon: "/assets/keyboard/logos/kotlin.svg",
    keyboardColor: "#7f52ff",
  },
  [SkillNames.PYTHON]: {
    id: 13,
    name: "python",
    label: "Python",
    shortDescription: "IoT dashboards, RAG pipelines, and everything in between.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#3776ab",
  },
  [SkillNames.POSTGRES]: {
    id: 14,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "My default database, full stop.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/postgres.svg",
    keyboardColor: "#146888",
  },
  [SkillNames.MONGODB]: {
    id: 15,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "TTL collections for sensor data that ages out.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    keyboardIcon: "/assets/keyboard/logos/mongodb.svg",
    keyboardColor: "#00c51b",
  },
  [SkillNames.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "Ships my side projects as cleanly as the big ones.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.GIT]: {
    id: 17,
    name: "git",
    label: "Git",
    shortDescription: "GitHub Actions running my builds while I sleep.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.LANGCHAIN]: {
    id: 18,
    name: "langchain",
    label: "LangChain",
    shortDescription: "RAG pipelines over PDFs with ChromaDB and Groq.",
    color: "#1c3c3c",
    icon: "https://cdn.simpleicons.org/langchain/1C3C3C",
    keyboardIcon: "/assets/keyboard/logos/langchain.svg",
    keyboardColor: "#1c3c3c",
  },
};

export type Experience = {
  id: number;
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "Jul 2026", end: "Aug 2026" }],
    title: "Full Stack Developer Intern",
    company: "6Solutions · Remote",
    description: [
      "Built a document platform with audit trails, OCR and anomaly detection.",
      "Shipped the Angular frontend: dashboard, document views, audit trail, JWT-gated alerts.",
      "Built Spring Boot microservices for document ingestion (PostgreSQL, MinIO) over Kafka.",
      "Wrote JUnit tests and set up an automated Angular build in GitHub Actions.",
    ],
    skills: [
      SkillNames.ANGULAR,
      SkillNames.JAVA,
      SkillNames.SPRING,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    periods: [{ start: "Oct 2025", end: "Mar 2026" }],
    title: "Web Developer",
    company: "SWH Négoce · Casablanca",
    description: [
      "Built and shipped a live B2B e-commerce catalog, solo, now in production.",
      "Next.js/TypeScript frontend: product catalog with search and detail pages.",
      "Quote request flow: cart, Zod-validated form, email notifications.",
      "Supabase backend with row-level security for a role-gated private area and CSV export.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.POSTGRES,
      SkillNames.TAILWIND,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    periods: [{ start: "Jun 2025", end: "Jul 2025" }],
    title: "Backend Developer Intern",
    company: "ENES Société SARL",
    description: [
      "Built backend APIs automating internal business processes.",
      "Handled customer and product data flows end to end.",
      "Optimized SQL queries to speed up data retrieval.",
    ],
    skills: [SkillNames.PHP, SkillNames.LARAVEL, SkillNames.POSTGRES],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
