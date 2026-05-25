export interface Work {
  num: string
  title: string
  cat: string
  year: string
  desc: string
  badge: string
  link: string | null
  bg: string
  accent: string
}

export interface SkillDomain {
  n: string
  title: string
  tags: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  desc: string
  tags: string[]
}

export interface Cert {
  title: string
  issuer: string
  platform: string
}

export const STATS = [
  { value: '4th year', label: 'Engineering student' },
  { value: '3',        label: 'Human languages' },
  { value: '∞',        label: 'Tech stacks' },
  { value: '1',        label: 'Product live in prod' },
]

export const WORKS: Work[] = [
  {
    num: '01', title: 'SWH Négoce', cat: 'Full-Stack · Solo Founder', year: '2025',
    desc: 'Live B2B e-commerce platform for Moroccan businesses — hygiene products, workwear, IT equipment. Built solo: Next.js, Sanity.io, PostgreSQL, Vercel, SEO, GTM.',
    badge: '🟢 LIVE IN PRODUCTION', link: 'https://swhnegoce.ma',
    bg: '#0D1F14', accent: '#22C55E',
  },
  {
    num: '02', title: 'Smart Irrigation', cat: 'IoT · Hardware', year: '2025',
    desc: 'Real-time soil humidity monitoring with BBC Microbit sensors. REST API (Flask/Python), MongoDB with TTL, Chart.js dashboard. Full hardware + software integration.',
    badge: 'IoT + Hardware', link: 'https://github.com/Wvssim/Smart-Irrigation-System',
    bg: '#0A1A18', accent: '#4ADE80',
  },
  {
    num: '03', title: 'EMSI Chatbot', cat: 'AI · RAG Pipeline', year: '2025',
    desc: 'Full RAG pipeline: PDF ingestion → LangChain → ChromaDB → Groq inference. Streamlit UI for real-time document querying.',
    badge: 'AI · Generative', link: 'https://github.com/Wvssim/Emsi-rag-assistant',
    bg: '#11101E', accent: '#818CF8',
  },
  {
    num: '04', title: 'FlagGuesseur', cat: 'Mobile · Android', year: '2024',
    desc: 'Native Android app in Kotlin — a geographic quiz game. Clean architecture, smooth UX, flags from around the world.',
    badge: 'Android · Kotlin', link: 'https://github.com/Wvssim/FlagGuesseur',
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
    role: 'Full-Stack Engineer & Solo Founder',
    company: 'SWH Négoce',
    period: 'July 2025 → Present',
    desc: 'Built and launched swhnegoce.ma entirely solo — a live B2B e-commerce platform serving Moroccan businesses. Full ownership: architecture, development, deployment, SEO, and client acquisition.',
    tags: ['Next.js', 'Sanity.io', 'PostgreSQL', 'Vercel', 'SEO', 'GTM'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'ENES Société SARL',
    period: 'June 2025 → July 2025',
    desc: 'Backend development internship. Contributed to production systems, APIs, and internal tooling within a professional team environment.',
    tags: ['PHP', 'Laravel', 'REST API', 'MySQL'],
  },
]

export const CERTS: Cert[] = [
  { title: 'React & React Native', issuer: 'Meta',      platform: 'Coursera' },
  { title: 'Google Cloud Core',    issuer: 'Google',    platform: 'Coursera' },
  { title: 'Software Engineering', issuer: 'HKUST',     platform: 'Coursera' },
  { title: 'Unix & Python',        issuer: 'JHU/UMich', platform: 'Coursera' },
]
