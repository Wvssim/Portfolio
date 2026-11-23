const config = {
  title: "Wassim Lazim | Full-Stack Developer",
  description: {
    long: "Portfolio of Wassim Lazim, a full-stack engineer building across web, mobile, IoT and AI. Solo founder of a live B2B e-commerce platform, with hands-on experience in Next.js, Spring Boot, Laravel, Kotlin and embedded systems.",
    short:
      "Full-stack engineer building web, mobile, IoT and AI products — solo founder of a live B2B platform.",
  },
  keywords: [
    "Wassim Lazim",
    "portfolio",
    "full-stack developer",
    "software engineer",
    "Next.js",
    "React",
    "Laravel",
    "Spring Boot",
    "Kotlin",
    "IoT",
    "AI",
    "RAG",
    "Morocco",
    "EMSI",
    "Casablanca",
  ],
  author: "Wassim Lazim",
  email: "wassim.lazim3@gmail.com",
  site: "https://wassim-lazim.vercel.app",

  // for github stars button
  githubUsername: "Wvssim",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/wassim-lazim-124aa935b",
    github: "https://github.com/Wvssim",
  },
};
export { config };
