const { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun, HeadingLevel, AlignmentType, UnderlineType, BorderStyle, WidthType, PositionalTab, PositionalTabAlignment, PositionalTabLeader } = require('docx');
const fs = require('fs');
const path = require('path');

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      // Header
      new Paragraph({
        text: "Wassim Lazim",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 0 },
        run: { size: 28, bold: true, color: "1a3d5c" }
      }),
      new Paragraph({
        text: "Développeur Full Stack – Stage PFE | 6 mois dès février 2027, avec convention",
        alignment: AlignmentType.CENTER,
        spacing: { after: 0 },
        run: { size: 10, color: "444444" }
      }),
      new Paragraph({
        text: "Casablanca, Maroc | +212 6 63 22 37 79 | wassim.lazim3@gmail.com",
        alignment: AlignmentType.CENTER,
        spacing: { after: 0 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "github.com/Wvssim | linkedin.com/in/wassim-lazim-124aa935b",
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        run: { size: 9 }
      }),

      // Formation
      new Paragraph({
        text: "FORMATION",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 100, after: 100 },
        border: { bottom: { color: "333333", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        run: { size: 12, bold: true }
      }),
      new Paragraph({
        text: "Cycle ingénieur d'État (Bac+5) – Développement Digital et Systèmes d'Information",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "EMSI, Casablanca – option DSI",
        spacing: { after: 100 },
        run: { size: 10, italics: true }
      }),
      new Paragraph({
        text: "2024 – 2027",
        alignment: AlignmentType.RIGHT,
        spacing: { before: -120, after: 100 },
        run: { size: 10 }
      }),

      new Paragraph({
        text: "Technicien Spécialisé, DTS (Bac+2) – Développement Digital Web Full Stack",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "OFPPT – CFPM de Skhirat",
        spacing: { after: 100 },
        run: { size: 10, italics: true }
      }),
      new Paragraph({
        text: "2022 – 2024",
        alignment: AlignmentType.RIGHT,
        spacing: { before: -120, after: 200 },
        run: { size: 10 }
      }),

      // Expériences
      new Paragraph({
        text: "EXPÉRIENCES PROFESSIONNELLES",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 100, after: 100 },
        border: { bottom: { color: "333333", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        run: { size: 12, bold: true }
      }),

      new Paragraph({
        text: "Stagiaire développeur full stack",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "6Solutions",
        spacing: { after: 100 },
        run: { size: 10 }
      }),
      new Paragraph({
        text: "07/2026 – 08/2026",
        alignment: AlignmentType.RIGHT,
        spacing: { before: -120, after: 60 },
        run: { size: 9, italics: true }
      }),
      new Paragraph({
        text: "• Plateforme de documents: chaque dépôt déclenche audit, e-mails, OCR, intégrité et détection d'anomalies.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Frontend Angular: tableau de bord, documents, piste d'audit, alertes de sécurité, connexion JWT.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Backend Spring Boot: API de dépôt (PostgreSQL, MinIO) et 5 microservices Kafka (CDC), dont 3 règles d'anomalies.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Qualité: tests JUnit (JWT, règles de détection, OCR, bout en bout) et build Angular à chaque push (GitHub Actions).",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      new Paragraph({
        text: "Développeur web – catalogue B2B en production",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "SWH Négoce",
        spacing: { after: 100 },
        run: { size: 10 }
      }),
      new Paragraph({
        text: "10/2025 – 03/2026",
        alignment: AlignmentType.RIGHT,
        spacing: { before: -120, after: 60 },
        run: { size: 9, italics: true }
      }),
      new Paragraph({
        text: "• Frontend Next.js/TypeScript: catalogue avec recherche, filtres et fiches produits, contenu géré dans Sanity.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Parcours de demande de devis: panier, formulaire validé par Zod et notification par e-mail.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Backend Supabase: espace privé sécurisé par rôles (RLS) avec export CSV.",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      new Paragraph({
        text: "Stagiaire développeur backend",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "ENES Société SARL",
        spacing: { after: 100 },
        run: { size: 10 }
      }),
      new Paragraph({
        text: "06/2025 – 07/2025",
        alignment: AlignmentType.RIGHT,
        spacing: { before: -120, after: 60 },
        run: { size: 9, italics: true }
      }),
      new Paragraph({
        text: "• API backend pour automatiser les processus internes: données clients et produits, calcul des montants.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Optimisation de requêtes SQL pour accélérer la récupération des données.",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      // Projets
      new Paragraph({
        text: "PROJETS",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 100, after: 100 },
        border: { bottom: { color: "333333", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        run: { size: 12, bold: true }
      }),

      new Paragraph({
        text: "Portfolio v2.0 – Système d'Animation Avancée",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "Next.js, Framer Motion, GSAP, Lenis, Three.js | github.com/Wvssim/portfolio",
        spacing: { after: 100 },
        run: { size: 9, italics: true, color: "0066cc" }
      }),
      new Paragraph({
        text: "• Migration vers animations professionnelles: Framer Motion pour révélations scroll-triggered, GSAP pour timelines haute performance.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Système de particules Canvas réactif à la souris avec optimisation performance et détection de réduction de mouvement.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Scroll fluide global via Lenis, architecture Three.js prête pour effets 3D futurs.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Animation library réutilisable: BlurIn, SlideIn, BoxReveal, ScaleIn pour révélations avec viewport-awareness.",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      new Paragraph({
        text: "Luminos Cinémas – Système de réservation de cinéma",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "Next.js, TypeScript, Supabase, Stripe | 05/2026 – 06/2026 | github.com/Wvssim/luminos-cinemas",
        spacing: { after: 100 },
        run: { size: 9, italics: true, color: "0066cc" }
      }),
      new Paragraph({
        text: "• Réservation de cinéma: choix de la séance et de la place sur un plan interactif, paiement en ligne et billet QR.",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Back-office PostgreSQL: rôles, indicateurs de réservations et de chiffre d'affaires; assistant RAG (TF-IDF, Groq).",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      new Paragraph({
        text: "EMSI Chatbot – IA Générative (RAG)",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "Python, LangChain, ChromaDB | 04/2026 | github.com/Wvssim/Emsi-rag-assistant",
        spacing: { after: 100 },
        run: { size: 9, italics: true, color: "0066cc" }
      }),
      new Paragraph({
        text: "• Répondre aux questions sur des PDF: embeddings via Groq et indexation vectorielle sous ChromaDB, interface Streamlit.",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      new Paragraph({
        text: "Presenton – Correcteur d'export de titres japonais",
        spacing: { after: 0 },
        run: { size: 10, bold: true }
      }),
      new Paragraph({
        text: "open source, Python, FastAPI, Node.js | 05/2026 – 08/2026 | PR 609, PR 814",
        spacing: { after: 100 },
        run: { size: 9, italics: true, color: "0066cc" }
      }),
      new Paragraph({
        text: "• Correction de l'export des titres japonais (UTF-8, tests unitaires) et crash au démarrage sous OpenShift.",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      // Compétences
      new Paragraph({
        text: "COMPÉTENCES",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 100, after: 100 },
        border: { bottom: { color: "333333", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        run: { size: 12, bold: true }
      }),

      new Paragraph({
        text: "Frontend: React, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, HTML/CSS responsive",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "Animation avancée: Framer Motion (révélations scroll-triggered, animations viewport), GSAP 3 (timelines, interactions haute performance), Lenis (smooth scroll)",
        spacing: { after: 40 },
        run: { size: 9, bold: true, color: "b8571a" }
      }),
      new Paragraph({
        text: "3D & Graphics: Three.js, React Three Fiber (prêt pour effets 3D), Canvas API, Particle systems",
        spacing: { after: 40 },
        run: { size: 9, bold: true, color: "b8571a" }
      }),
      new Paragraph({
        text: "Backend: Java/Spring Boot (API REST, microservices), Node.js (Express, Vendre), Python/Flask, authentification JWT",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "Bases de données: PostgreSQL, Supabase, MongoDB, Redis, SQL streaming Kafka/Debezium (CDC)",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "CMS & E-commerce: Sanity.io (maîtrise du langage GROQ, modélisation de schémas), gestion de catalogues produits",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "DevOps & Qualité: Git/GitHub, GitHub Actions, Docker (notions), déploiement Vercel et Netlify, tests JUnit/Jest/Testing Library",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "Performance: Optimisation des Web Vitals (Lighthouse), traitement d'images (Sharp)",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "Design & Méthodologies: Figma, approche Mobile-first, Design Responsive, Accessibilité Web (WCAG 2.1), SEO technique",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "IA & LLM: RAG, LLM, LangChain, embeddings; développement assisté par IA (Claude Code, ChatGPT, GitHub Copilot)",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      // Certificats
      new Paragraph({
        text: "CERTIFICATS",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 100, after: 100 },
        border: { bottom: { color: "333333", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        run: { size: 12, bold: true }
      }),

      new Paragraph({
        text: "• Software Engineering: Software Design and Project Management (HKUST)",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• React Basics (Meta)",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Agile Project Management (Google)",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "• Foundations of Cybersecurity (Google)",
        spacing: { after: 150 },
        run: { size: 9 }
      }),

      // Langues
      new Paragraph({
        text: "LANGUES ET CENTRES D'INTÉRÊT",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 100, after: 100 },
        border: { bottom: { color: "333333", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        run: { size: 12, bold: true }
      }),

      new Paragraph({
        text: "Langues: arabe (maternelle), français (courant), anglais (courant)",
        spacing: { after: 40 },
        run: { size: 9 }
      }),
      new Paragraph({
        text: "Centres d'intérêt: voyage, littérature, projets freelance, musique, musculationassistant IA, tech open source",
        spacing: { after: 150 },
        run: { size: 9 }
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(path.join(__dirname, '../public/Wassim_Lazim_CV_Full_Stack.docx'), buffer);
  console.log('✓ CV updated: Wassim_Lazim_CV_Full_Stack.docx');
});
