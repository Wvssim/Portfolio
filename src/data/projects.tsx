import { SKILLS, SkillNames } from "./constants";

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: (typeof SKILLS)[SkillNames][];
    backend: (typeof SKILLS)[SkillNames][];
  };
  content: React.ReactNode;
  github?: string;
  live?: string;
};

const s = (name: SkillNames) => SKILLS[name];

export const PROJECTS: Project[] = [
  {
    id: "swh-negoce",
    category: "Full-Stack · Solo Founder · 2025",
    title: "SWH Négoce — B2B Platform",
    src: "/assets/seo/og-image.png",
    screenshots: [],
    skills: {
      frontend: [s(SkillNames.NEXTJS), s(SkillNames.TS), s(SkillNames.TAILWIND)],
      backend: [s(SkillNames.POSTGRES)],
    },
    content: (
      <>
        <p>
          A live B2B e-commerce catalog for a Moroccan hygiene, workwear and
          IT equipment distributor — built and shipped solo, now in
          production.
        </p>
        <p>
          Product catalog with search and detail pages, a quote-request flow
          (cart, Zod-validated form, email notifications), and a Supabase
          backend with row-level security powering a role-gated private area
          with CSV export.
        </p>
      </>
    ),
    live: "https://swhnegoce.ma",
  },
  {
    id: "smart-irrigation",
    category: "IoT · Hardware · 2025",
    title: "Smart Irrigation System",
    src: "/assets/seo/og-image.png",
    screenshots: [],
    skills: {
      frontend: [s(SkillNames.PYTHON)],
      backend: [s(SkillNames.MONGODB)],
    },
    content: (
      <>
        <p>
          Real-time soil humidity monitoring with BBC Micro:bit sensors
          feeding a Flask/Python REST API.
        </p>
        <p>
          Readings are stored in MongoDB with TTL collections and visualized
          on a Chart.js dashboard — full hardware-to-software integration.
        </p>
      </>
    ),
    github: "https://github.com/Wvssim/Smart-Irrigation-System",
  },
  {
    id: "emsi-chatbot",
    category: "AI · RAG Pipeline · 2025",
    title: "EMSI Chatbot",
    src: "/assets/seo/og-image.png",
    screenshots: [],
    skills: {
      frontend: [s(SkillNames.PYTHON)],
      backend: [s(SkillNames.LANGCHAIN)],
    },
    content: (
      <>
        <p>
          A retrieval-augmented generation assistant that answers questions
          over PDF course material.
        </p>
        <p>
          Full RAG pipeline: PDF ingestion, LangChain, ChromaDB embeddings,
          and Groq inference, served through a Streamlit UI for real-time
          document querying.
        </p>
      </>
    ),
    github: "https://github.com/Wvssim/Emsi-rag-assistant",
  },
  {
    id: "luminos-cinemas",
    category: "Full-Stack · 2026",
    title: "Luminos Cinémas",
    src: "/assets/seo/og-image.png",
    screenshots: [],
    skills: {
      frontend: [s(SkillNames.NEXTJS), s(SkillNames.TS)],
      backend: [s(SkillNames.POSTGRES)],
    },
    content: (
      <>
        <p>
          A cinema booking platform: pick a showtime and seat on an
          interactive floor plan, pay with Stripe, and get a QR-coded ticket.
        </p>
        <p>
          Back-office runs on PostgreSQL with live indicators, plus a
          Groq-powered RAG assistant for support.
        </p>
      </>
    ),
    github: "https://github.com/Wvssim",
  },
  {
    id: "flagguesseur",
    category: "Mobile · Android · 2024",
    title: "FlagGuesseur",
    src: "/assets/seo/og-image.png",
    screenshots: [],
    skills: {
      frontend: [s(SkillNames.KOTLIN)],
      backend: [],
    },
    content: (
      <>
        <p>
          A native Android geography quiz game — guess the country from its
          flag.
        </p>
        <p>
          Built in Kotlin with a clean architecture and smooth UX, covering
          flags from around the world.
        </p>
      </>
    ),
    github: "https://github.com/Wvssim/FlagGuesseur",
  },
];
