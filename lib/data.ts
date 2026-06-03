// Non-translatable / structural data only.
// Human-readable text (categories, descriptions, roles, periods…) lives in
// lib/translations.ts and is zipped with these arrays by index.

export interface Work {
  num: string
  title: string
  year: string
  link: string | null
  bg: string
  accent: string
}

export interface SkillDomain {
  n: string
  title: string // fallback label; translated via translations.skills.titles[i]
  tags: string[]
}

export interface ExperienceItem {
  company: string
  tags: string[]
}

export interface Cert {
  title: string
  issuer: string
  date: string
  image?: string // preview thumbnail under /public
  link?: string  // credential URL — shows a "View certificate" link when present
}

export const WORKS: Work[] = [
  {
    num: '01', title: 'SWH Négoce', year: '2025',
    link: 'https://swhnegoce.ma',
    bg: '#0D1F14', accent: '#22C55E',
  },
  {
    num: '02', title: 'Smart Irrigation', year: '2025',
    link: 'https://github.com/Wvssim/Smart-Irrigation-System',
    bg: '#0A1A18', accent: '#4ADE80',
  },
  {
    num: '03', title: 'EMSI Chatbot', year: '2025',
    link: 'https://github.com/Wvssim/Emsi-rag-assistant',
    bg: '#11101E', accent: '#818CF8',
  },
  {
    num: '04', title: 'FlagGuesseur', year: '2024',
    link: 'https://github.com/Wvssim/FlagGuesseur',
    bg: '#1A130A', accent: '#F59E0B',
  },
]

export const SKILL_DOMAINS: SkillDomain[] = [
  { n: '01', title: 'Frontend',         tags: ['JS ES6+', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { n: '02', title: 'Backend',          tags: ['Node.js', 'Express', 'PHP', 'Laravel', 'Symfony', 'Java', 'Spring Boot', 'REST API', 'JWT'] },
  { n: '03', title: 'Mobile & Systems', tags: ['Kotlin', 'Java', 'Android SDK', 'React Native', 'Python', 'C/C++', 'Unix/Shell'] },
  { n: '04', title: 'IoT',              tags: ['Python', 'Flask', 'MicroPython', 'MQTT', 'HiveMQ', 'BBC Microbit', 'REST API', 'Sensor integration'] },
  { n: '05', title: 'AI / Data',        tags: ['LangChain', 'ChromaDB', 'Groq', 'Streamlit', 'RAG pipelines'] },
  { n: '06', title: 'DevOps',           tags: ['Git', 'Docker', 'Vercel', 'Netlify', 'CI/CD'] },
  { n: '07', title: 'CMS',              tags: ['Sanity.io', 'GROQ', 'Strapi', 'WordPress', 'Contentful', 'Headless CMS', 'Schema design', 'CDN APIs'] },
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'SWH Négoce',
    tags: ['Next.js', 'Sanity.io', 'PostgreSQL', 'Vercel', 'SEO', 'GTM'],
  },
  {
    company: 'ENES Société SARL',
    tags: ['PHP', 'Laravel', 'REST API', 'MySQL'],
  },
]

// Newest first. Add `link:` (Coursera credential URL) to any entry to surface a
// "View certificate" link on its card.
export const CERTS: Cert[] = [
  { title: 'Foundations of Project Management',                              issuer: 'Google',                  date: 'Mar 2026', image: '/certs/foundations-pm.webp',        link: 'https://coursera.org/verify/FAVRVB93G7XT' },
  { title: 'React Native',                                                   issuer: 'Meta',                    date: 'Dec 2025', image: '/certs/react-native.webp',          link: 'https://coursera.org/verify/A2K61VG1X80B' },
  { title: 'React Basics',                                                   issuer: 'Meta',                    date: 'Dec 2025', image: '/certs/react-basics.webp',          link: 'https://coursera.org/verify/GLR8SKG5WDUC' },
  { title: 'Software Engineering: Software Design and Project Management',    issuer: 'HKUST',                   date: 'Jun 2025', image: '/certs/software-engineering.webp',  link: 'https://coursera.org/verify/8O3RKITTC27E' },
  { title: 'Using Python to Access Web Data',                                issuer: 'University of Michigan',   date: 'Jun 2025', image: '/certs/python-web-data.webp',       link: 'https://coursera.org/verify/3K28OCEGYZV3' },
  { title: 'Introduction à la programmation orientée objet (en C++)',        issuer: 'EPFL',                    date: 'Jan 2025', image: '/certs/oop-cpp.webp',               link: 'https://coursera.org/verify/4JJ9Q5YMLGKT' },
  { title: 'The Unix Workbench',                                             issuer: 'Johns Hopkins University', date: 'Jan 2025', image: '/certs/unix-workbench.webp',        link: 'https://coursera.org/verify/HKPWKTIV6G5X' },
  { title: 'Google Cloud Fundamentals: Core Infrastructure',                 issuer: 'Google Cloud',            date: 'Jan 2025', image: '/certs/gcp-core-infra.webp',        link: 'https://coursera.org/verify/9OH5T0EP61GW' },
  { title: 'Interactivity with JavaScript',                                  issuer: 'University of Michigan',   date: 'Jan 2025', image: '/certs/interactivity-js.webp',      link: 'https://coursera.org/verify/VQX58ID0Y02L' },
  { title: 'Successful Negotiation: Essential Strategies and Skills',        issuer: 'University of Michigan',   date: 'Dec 2024', image: '/certs/successful-negotiation.webp', link: 'https://coursera.org/verify/QZ8W8X8OAO3Z' },
]
