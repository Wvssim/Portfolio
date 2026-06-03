export type Lang = 'en' | 'fr' | 'ar'

export const LANGS: { code: Lang; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
]

// Translatable text for each project (zipped by index with WORKS in lib/data.ts).
// `title` is optional: only set when we want to override the data.ts name
// (e.g. keep the company subtle while still linking to the live site).
interface WorkText { cat: string; desc: string; badge: string; title?: string }
// Translatable text for each experience (zipped by index with EXPERIENCES).
// `company` optional — same subtlety override as WorkText.title.
interface XpText { role: string; period: string; desc: string; company?: string }
// Translatable text for each school (zipped by index with SCHOOLS).
interface SchoolText { degree: string }

interface Dict {
  brand: { name: string; suffix: string }
  stamp: { first: string; last: string }
  nav: { work: string; skills: string; xp: string; contact: string; hire: string }
  hero: {
    tagline: string
    titlePre: string
    titleEm: string
    titlePost: string
    p1: string
    link: string
    p2: string
    viewWork: string
    cv: string
    scroll: string
  }
  stats: { value: string; label: string }[]
  about: {
    kicker: string
    titleLine1: string
    titleLine2: string
    role1Label: string
    role1Quote: string
    role2Label: string
    role2Quote: string
  }
  work: {
    kicker: string
    titleLine1: string
    titleLine2: string
    viewGithub: string
    visitSite: string
    private: string
    items: WorkText[]
  }
  skills: {
    kicker: string
    titleLine1: string
    titleLine2: string
    titles: string[]
  }
  experience: {
    kicker: string
    titleLine1: string
    titleLine2: string
    items: XpText[]
  }
  education: {
    kicker: string
    titleLine1: string
    titleLine2: string
    certKicker: string
    certTitleLine1: string
    certTitleLine2: string
    viewCert: string
    schools: SchoolText[]
  }
  cta: {
    kicker: string
    titleLine1: string
    titleLine2: string
    line1: string
    line2: string
    button: string
  }
  footer: { email: string }
}

const en: Dict = {
  brand: { name: 'Wassim', suffix: 'lz' },
  stamp: { first: 'WASSIM', last: 'LAZIM' },
  nav: { work: 'Work', skills: 'Skills', xp: 'XP', contact: 'Contact', hire: 'HIRE ME' },
  hero: {
    tagline: 'ENGINEER · FOUNDER · SHIPPER',
    titlePre: 'Builder',
    titleEm: 'by',
    titlePost: 'obsession',
    p1: 'Most engineers pick a lane — I built the whole road. From circuit board to cloud, full-stack across web, mobile, IoT, AI & systems. Solo founder of a live ',
    link: 'B2B platform ↗',
    p2: '. Founder by choice. I don’t write code — I ship products.',
    viewWork: 'VIEW WORK',
    cv: 'RESUME ↓',
    scroll: 'SCROLL',
  },
  stats: [
    { value: '4th year', label: 'Engineering student' },
    { value: '3', label: 'Human languages' },
    { value: '∞', label: 'Tech stacks' },
    { value: '24/7', label: 'Product live in prod' },
  ],
  about: {
    kicker: 'ABOUT',
    titleLine1: 'Both',
    titleLine2: 'worlds.',
    role1Label: 'POLYGLOT ENGINEER',
    role1Quote:
      '“I work across every layer — web, mobile, IoT, AI, systems. Laravel, Symfony, Next.js, Kotlin, Python, C/C++, PHP. The stack is whatever the problem needs.”',
    role2Label: 'SOLO FOUNDER',
    role2Quote:
      '“I built a live B2B platform alone, from scratch, in production. Not a school project — a real business, live, with real clients.”',
  },
  work: {
    kicker: 'SELECTED WORK',
    titleLine1: 'Things I’ve',
    titleLine2: 'shipped.',
    viewGithub: 'VIEW ON GITHUB',
    visitSite: 'VISIT SITE',
    private: 'PRIVATE PROJECT',
    items: [
      {
        title: 'B2B Platform',
        cat: 'Full-Stack · Solo Founder',
        desc: 'Live B2B e-commerce platform for Moroccan businesses — hygiene products, workwear, IT equipment. Built solo: Next.js, Sanity.io, PostgreSQL, Vercel, SEO, GTM.',
        badge: '🟢 LIVE IN PRODUCTION',
      },
      {
        cat: 'IoT · Hardware',
        desc: 'Real-time soil humidity monitoring with BBC Microbit sensors. REST API (Flask/Python), MongoDB with TTL, Chart.js dashboard. Full hardware + software integration.',
        badge: 'IoT + Hardware',
      },
      {
        cat: 'AI · RAG Pipeline',
        desc: 'Full RAG pipeline: PDF ingestion → LangChain → ChromaDB → Groq inference. Streamlit UI for real-time document querying.',
        badge: 'AI · Generative',
      },
      {
        cat: 'Mobile · Android',
        desc: 'Native Android app in Kotlin — a geographic quiz game. Clean architecture, smooth UX, flags from around the world.',
        badge: 'Android · Kotlin',
      },
    ],
  },
  skills: {
    kicker: 'SKILLS',
    titleLine1: 'The',
    titleLine2: 'arsenal.',
    titles: ['Frontend', 'Backend', 'Mobile & Systems', 'IoT', 'AI / Data', 'DevOps', 'CMS'],
  },
  experience: {
    kicker: 'EXPERIENCE',
    titleLine1: 'Where I’ve',
    titleLine2: 'worked.',
    items: [
      {
        role: 'Full-Stack Engineer & Solo Founder',
        company: 'B2B Platform · Self-founded',
        period: 'July 2025 → Present',
        desc: 'Built and launched a live B2B e-commerce platform entirely solo, serving Moroccan businesses. Full ownership: architecture, development, deployment, SEO, and client acquisition.',
      },
      {
        role: 'Backend Developer Intern',
        period: 'June 2025 → July 2025',
        desc: 'Backend development internship. Contributed to production systems, APIs, and internal tooling within a professional team environment.',
      },
    ],
  },
  education: {
    kicker: 'EDUCATION',
    titleLine1: 'Where I',
    titleLine2: 'studied.',
    certKicker: 'CERTIFICATIONS',
    certTitleLine1: 'Things I',
    certTitleLine2: 'earned.',
    viewCert: 'View certificate ↗',
    schools: [
      { degree: 'Engineering degree — DSI' },
      { degree: 'Full-Stack Technician' },
    ],
  },
  cta: {
    kicker: 'OPEN TO OPPORTUNITIES',
    titleLine1: 'Let’s build',
    titleLine2: 'something.',
    line1: 'Internships · Freelance · Collabs · Interesting problems.',
    line2: 'If you’re building something real, let’s talk.',
    button: 'GET IN TOUCH',
  },
  footer: { email: 'Email' },
}

const fr: Dict = {
  brand: { name: 'Wassim', suffix: 'lz' },
  stamp: { first: 'WASSIM', last: 'LAZIM' },
  nav: { work: 'Projets', skills: 'Compétences', xp: 'XP', contact: 'Contact', hire: 'ME RECRUTER' },
  hero: {
    tagline: 'INGÉNIEUR · FONDATEUR · CRÉATEUR',
    titlePre: 'Bâtir',
    titleEm: 'par',
    titlePost: 'obsession',
    p1: 'La plupart des ingénieurs choisissent une voie — moi, j’ai construit toute la route. Du circuit imprimé au cloud : full-stack sur le web, le mobile, l’IoT, l’IA et les systèmes. Fondateur solo d’une ',
    link: 'plateforme B2B ↗',
    p2: ' bien vivante en prod. Fondateur par choix. Je ne code pas — je livre des produits.',
    viewWork: 'VOIR MES PROJETS',
    cv: 'CV ↓',
    scroll: 'DÉFILER',
  },
  stats: [
    { value: '4e année', label: 'Étudiant ingénieur' },
    { value: '3', label: 'Langues parlées' },
    { value: '∞', label: 'Stacks techniques' },
    { value: '24/7', label: 'Produit en production' },
  ],
  about: {
    kicker: 'À PROPOS',
    titleLine1: 'Les deux',
    titleLine2: 'mondes.',
    role1Label: 'INGÉNIEUR POLYVALENT',
    role1Quote:
      '« Je touche à toutes les couches — web, mobile, IoT, IA, systèmes. Laravel, Symfony, Next.js, Kotlin, Python, C/C++, PHP. La stack ? Celle que le problème exige. »',
    role2Label: 'FONDATEUR SOLO',
    role2Quote:
      '« J’ai bâti une plateforme B2B seul, de zéro, jusqu’en production. Pas un projet d’école — une vraie entreprise, en ligne, avec de vrais clients. »',
  },
  work: {
    kicker: 'SÉLECTION DE PROJETS',
    titleLine1: 'Ce que j’ai',
    titleLine2: 'livré.',
    viewGithub: 'VOIR SUR GITHUB',
    visitSite: 'VISITER LE SITE',
    private: 'PROJET PRIVÉ',
    items: [
      {
        title: 'Plateforme B2B',
        cat: 'Full-Stack · Fondateur solo',
        desc: 'Plateforme e-commerce B2B en production pour les entreprises marocaines — produits d’hygiène, vêtements de travail, matériel informatique. Conçue seul : Next.js, Sanity.io, PostgreSQL, Vercel, SEO, GTM.',
        badge: '🟢 EN PRODUCTION',
      },
      {
        cat: 'IoT · Hardware',
        desc: 'Suivi en temps réel de l’humidité du sol avec des capteurs BBC Microbit. API REST (Flask/Python), MongoDB avec TTL, tableau de bord Chart.js. Intégration matériel et logiciel de bout en bout.',
        badge: 'IoT + Hardware',
      },
      {
        cat: 'IA · Pipeline RAG',
        desc: 'Pipeline RAG complet : ingestion de PDF → LangChain → ChromaDB → inférence Groq. Interface Streamlit pour interroger les documents en temps réel.',
        badge: 'IA générative',
      },
      {
        cat: 'Mobile · Android',
        desc: 'Application Android native en Kotlin — un quiz géographique. Architecture soignée, expérience fluide, des drapeaux du monde entier.',
        badge: 'Android · Kotlin',
      },
    ],
  },
  skills: {
    kicker: 'COMPÉTENCES',
    titleLine1: 'L’',
    titleLine2: 'arsenal.',
    titles: ['Frontend', 'Backend', 'Mobile & Systèmes', 'IoT', 'IA / Données', 'DevOps', 'CMS'],
  },
  experience: {
    kicker: 'EXPÉRIENCE',
    titleLine1: 'Où j’ai',
    titleLine2: 'travaillé.',
    items: [
      {
        role: 'Ingénieur Full-Stack & Fondateur solo',
        company: 'Plateforme B2B · Fondée en solo',
        period: 'Juillet 2025 → Aujourd’hui',
        desc: 'Conçu et lancé une plateforme e-commerce B2B en production, entièrement seul, au service des entreprises marocaines. De A à Z : architecture, développement, déploiement, SEO et acquisition de clients.',
      },
      {
        role: 'Stagiaire Développeur Backend',
        period: 'Juin 2025 → Juillet 2025',
        desc: 'Stage en développement backend. Contribution à des systèmes en production, des API et des outils internes au sein d’une équipe professionnelle.',
      },
    ],
  },
  education: {
    kicker: 'FORMATION',
    titleLine1: 'Où j’ai',
    titleLine2: 'étudié.',
    certKicker: 'CERTIFICATIONS',
    certTitleLine1: 'Ce que j’ai',
    certTitleLine2: 'obtenu.',
    viewCert: 'Voir le certificat ↗',
    schools: [
      { degree: 'Diplôme d’ingénieur — DSI' },
      { degree: 'Technicien Full-Stack' },
    ],
  },
  cta: {
    kicker: 'OUVERT AUX OPPORTUNITÉS',
    titleLine1: 'Construisons',
    titleLine2: 'ensemble.',
    line1: 'Stages · Freelance · Collaborations · Beaux problèmes à résoudre.',
    line2: 'Si vous montez quelque chose de concret, parlons-en.',
    button: 'ME CONTACTER',
  },
  footer: { email: 'Email' },
}

const ar: Dict = {
  brand: { name: 'وسيم', suffix: '' },
  stamp: { first: 'وسيم', last: 'لازم' },
  nav: { work: 'المشاريع', skills: 'المهارات', xp: 'الخبرة', contact: 'تواصل', hire: 'وظّفني' },
  hero: {
    tagline: 'مهندس · مؤسّس · مُنجِز',
    titlePre: 'ابني',
    titleEm: 'بدافع',
    titlePost: 'الشغف',
    p1: 'معظم المهندسين يختارون مسارًا واحدًا — أمّا أنا فبنيتُ الطريق كاملًا. من الدائرة الإلكترونية إلى الـCloud: تطوير متكامل (Full-Stack) عبر الويب والموبايل وIoT والذكاء الاصطناعي والأنظمة. مؤسّسٌ منفردٌ لـ',
    link: 'منصّة B2B ↗',
    p2: ' تعمل فعلًا في الإنتاج. مؤسّس عن اقتناع. لا أكتب كودًا فحسب — بل أُطلِق منتجات.',
    viewWork: 'استعرض المشاريع',
    cv: 'CV ↓',
    scroll: 'مرّر للأسفل',
  },
  stats: [
    { value: 'السنة الرابعة', label: 'طالب هندسة' },
    { value: '3', label: 'لغات أتحدّثها' },
    { value: '∞', label: 'تقنيات أتقنها' },
    { value: '24/7', label: 'منتج قيد التشغيل' },
  ],
  about: {
    kicker: 'نبذة',
    titleLine1: 'كِلا',
    titleLine2: 'العالَمين.',
    role1Label: 'مهندس متعدّد التقنيات',
    role1Quote:
      '«أعمل على كل الطبقات — الويب، الموبايل، IoT، الذكاء الاصطناعي، الأنظمة. Laravel وSymfony وNext.js وKotlin وPython وC/C++ وPHP. والتقنية؟ أستخدمُ ما يحتاجه المشروع.»',
    role2Label: 'مؤسّس منفرد',
    role2Quote:
      '«بنيتُ منصّة B2B وحدي، من الصفر، حتى الإنتاج. ليس مشروعًا دراسيًا — بل شركة حقيقية، تعمل فعلًا، بعملاء حقيقيين.»',
  },
  work: {
    kicker: 'أعمال مختارة',
    titleLine1: 'ما',
    titleLine2: 'أطلقتُه.',
    viewGithub: 'عرض على GitHub',
    visitSite: 'زيارة الموقع',
    private: 'مشروع خاص',
    items: [
      {
        title: 'منصّة B2B',
        cat: 'تطوير متكامل (Full-Stack) · مؤسّس منفرد',
        desc: 'منصّة تجارة إلكترونية B2B تعمل فعلًا للشركات المغربية — منتجات النظافة، وملابس العمل، والمعدّات المعلوماتية. بنيتُها وحدي: Next.js وSanity.io وPostgreSQL وVercel وSEO وGTM.',
        badge: '🟢 تعمل في الإنتاج',
      },
      {
        cat: 'IoT · Hardware',
        desc: 'مراقبة رطوبة التربة لحظيًا عبر مستشعرات BBC Microbit. واجهة REST (Flask/Python)، وMongoDB مع TTL، ولوحة تحكّم Chart.js. تكامل كامل بين الـHardware والبرمجيات.',
        badge: 'IoT + Hardware',
      },
      {
        cat: 'ذكاء اصطناعي · منظومة RAG',
        desc: 'منظومة RAG متكاملة: قراءة ملفات PDF ← LangChain ← ChromaDB ← استدلال Groq. واجهة Streamlit للاستعلام عن المستندات لحظيًا.',
        badge: 'ذكاء اصطناعي توليدي',
      },
      {
        cat: 'موبايل · أندرويد',
        desc: 'تطبيق أندرويد أصلي بلغة Kotlin — لعبة اختبار جغرافي. بنية نظيفة، وتجربة سلسة، وأعلام من كل أنحاء العالم.',
        badge: 'أندرويد · Kotlin',
      },
    ],
  },
  skills: {
    kicker: 'المهارات',
    titleLine1: 'الترسانة',
    titleLine2: 'التقنية.',
    titles: ['الواجهة (Frontend)', 'الخوادم (Backend)', 'الموبايل والأنظمة', 'IoT', 'الذكاء الاصطناعي / البيانات', 'DevOps', 'إدارة المحتوى (CMS)'],
  },
  experience: {
    kicker: 'الخبرة',
    titleLine1: 'أين',
    titleLine2: 'عملت.',
    items: [
      {
        role: 'مهندس Full-Stack ومؤسّس منفرد',
        company: 'منصّة B2B · تأسيس منفرد',
        period: 'يوليو 2025 ← الآن',
        desc: 'صمّمتُ وأطلقتُ منصّة تجارة إلكترونية B2B بمفردي بالكامل، تخدم الشركات المغربية. من الألف إلى الياء: البنية، والتطوير، والنشر، وتحسين محركات البحث (SEO)، واكتساب العملاء.',
      },
      {
        role: 'متدرّب في تطوير الخوادم (Backend)',
        period: 'يونيو 2025 ← يوليو 2025',
        desc: 'تدريب في تطوير الـBackend. ساهمتُ في أنظمة الإنتاج وواجهات API والأدوات الداخلية ضمن فريق احترافي.',
      },
    ],
  },
  education: {
    kicker: 'التعليم',
    titleLine1: 'أين',
    titleLine2: 'درست.',
    certKicker: 'الشهادات',
    certTitleLine1: 'ما',
    certTitleLine2: 'أنجزته.',
    viewCert: 'عرض الشهادة ↗',
    schools: [
      { degree: 'دبلوم مهندس دولة — DSI' },
      { degree: 'تقني تطوير متكامل' },
    ],
  },
  cta: {
    kicker: 'منفتح على الفرص',
    titleLine1: 'لنبنِ',
    titleLine2: 'شيئًا معًا.',
    line1: 'تدريبات · عمل حر · تعاونات · مشكلات تستحقّ الحلّ.',
    line2: 'إن كنت تبني شيئًا حقيقيًا، فلنتحدّث.',
    button: 'تواصل معي',
  },
  footer: { email: 'البريد' },
}

export const translations: Record<Lang, Dict> = { en, fr, ar }
export type { Dict }
