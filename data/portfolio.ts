// ─── Portfolio Data ────────────────────────────────────────
// Single source of truth pulled from Shroyash Shrestha's resume

export const personal = {
  name: "Shroyash Shrestha",
  title: "Full Stack Developer | Java Spring Boot Engineer",
  tagline: "Building scalable backend systems, microservices & modern web apps",
  summary:
    "Results driven Java Backend Developer with hands-on industry experience building scalable, secure, and high-performance backend systems using Spring Boot, Spring Security, and microservices architecture. Proficient in designing REST APIs, implementing JWT-based authentication, and applying SOLID principles. 200+ DSA problems solved.",
  email: "shroyash35@gmail.com",
  phone: "9818824609",
  location: "Kathmandu, Nepal",
  github: "https://github.com/shroyash",
  linkedin: "https://www.linkedin.com/in/shroyash-shrestha-3862b2254/",
  available: true,
};

export const stats = [
  { number: "200+", label: "LeetCode Problems" },
  { number: "6mo", label: "Industry Exp" },
  { number: "5+", label: "Projects Built" },
  { number: "🏆", label: "Hackathon Award" },
];

export const skills = [
  {
    category: "Backend",
    subtitle: "Core expertise",
    icon: "☕",
    color: "blue",
    tags: [
      "Java", "Spring Boot", "Spring Security", "Spring Cloud",
      "Microservices", "REST APIs", "JWT", "Kafka", "RSA Encryption",
    ],
  },
  {
    category: "Frontend",
    subtitle: "Full-stack capable",
    icon: "⚛️",
    color: "purple",
    tags: [
      "React", "Next.js", "TypeScript", "JavaScript",
      "Tailwind CSS", "Redux", "HTML", "CSS", "Bootstrap",
    ],
  },
  {
    category: "Databases",
    subtitle: "Relational & caching",
    icon: "🗄️",
    color: "cyan",
    tags: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    subtitle: "Infra & workflow",
    icon: "🛠️",
    color: "green",
    tags: [
      "Docker", "Docker Compose", "Git", "GitHub",
      "Postman", "IntelliJ IDEA", "VS Code",
    ],
  },
  {
    category: "Design Patterns",
    subtitle: "Clean architecture",
    icon: "📐",
    color: "orange",
    tags: [
      "SOLID", "Factory", "Strategy", "Observer",
      "Repository", "Template Method", "Dependency Injection",
    ],
  },
  {
    category: "CS Fundamentals",
    subtitle: "Problem solving",
    icon: "🧠",
    color: "blue",
    tags: [
      "Operating Systems","DBMS", "System Design",
      "Data Structures", "Algorithms", "C", "Networking"
    ],
  },
];

export const experiences = [
  {
    role: "Java Backend Developer",
    company: "Kritim Guru — Entrance Prep App",
    duration: "Oct 2025 – March 2026",
    period: "6 Months",
    icon: "☕",
    link: "https://example.com",
    linkLabel: "Kritim Guru Project",
    bullets: [
      "Designed and implemented a secure auth system using Spring Security with JWT (access & refresh tokens), RSA encryption, and Redis-based token blacklisting with TTL — reducing unauthorized access risk.",
      "Built an OTP verification system using Redis for fast, reliable validation — improving authentication response time and user flow.",
      "Developed a scalable mock test module using Repository and Template Method design patterns, adhering to SOLID principles throughout.",
      "Engineered a dynamic question generation system capable of producing 100+ questions per test based on course syllabus.",
      "Implemented global and local ranking systems for mock tests, optimizing SQL queries to reduce leaderboard API response latency.",
      "Improved overall API performance via refined database queries and asynchronous background email processing.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Microservices System",
    description:
      "Architected a scalable healthcare platform with 5+ independent Spring Boot microservices. Features appointment management, patient records, WebRTC video calling, WebSocket/STOMP chat, JWT with JTI blacklisting, and Khalti payment integration. Containerized with Docker Compose.",
    icon: "🏥",
    color: "health",
    badge: "new",
    badgeLabel: "2026",
    stack: ["Spring Boot", "Kafka", "React", "Next.js 14", "PostgreSQL", "Docker", "Redis", "Spring Security", "WebRTC"],
    github: "https://github.com/shroyash",
    live: "https://example.com",
    year: "2026",
  },
  {
    title: "AI Interview Preparation App",
    description:
      "Hackathon-winning full-stack AI platform built with Next.js. Integrates Claude AI API for dynamic interview question generation and real-time AI-driven performance evaluation. Delivered under strict time constraints, earning 2nd Runner-Up for innovation and technical execution.",
    icon: "🤖",
    color: "ai",
    badge: "winner",
    badgeLabel: "🏆 2nd Runner-Up",
    stack: ["Next.js", "Claude AI API", "TypeScript", "REST APIs"],
    github: "https://github.com/shroyash",
    live: "https://example.com",
    year: "2025",
  },
  {
    title: "Kritim Guru — Company Project",
    description:
      "Production-level backend for an entrance exam prep app serving real students. Built secure auth with JWT + Redis blacklisting, scalable mock test engine, dynamic question generation (100+ per test), and global leaderboard systems with optimized SQL queries.",
    icon: "📚",
    color: "company",
    badge: "prod",
    badgeLabel: "Production",
    stack: ["Spring Boot", "Spring Security", "Redis", "PostgreSQL", "JWT", "RSA"],
    github: "https://github.com/shroyash",
    live: "https://example.com",
    year: "2025–26",
  },
];

export const certifications = [
  {
    org: "Hackathon Committee",
    title: "Hackathon Certificate — AI Interview Prep App (2nd Runner-Up)",
    date: "2025",
    icon: "🏆",
    desc: "Recognized for delivering an innovative AI-powered interview platform under competitive hackathon conditions.",
    link: "https://example.com",
  },
  {
    org: "Kritim Guru / KritimGuru Inc.",
    title: "Work Completion Certificate — Java Backend Developer",
    date: "2082 B.S. (2025/26)",
    icon: "✅",
    desc: "Issued upon successful completion of the backend developer role, validating professional Java backend contributions.",
    link: "https://example.com",
  },
];

export const achievements = [
  {
    emoji: "🏆",
    title: "Hackathon 2nd Runner-Up",
    desc: "Built a full-stack AI interview prep platform under hackathon time constraints — awarded 2nd Runner-Up for innovation.",
  },
  {
    emoji: "🏗️",
    title: "Production Microservices",
    desc: "Architected a healthcare platform with 5+ Spring Boot microservices — Kafka, Redis, Docker, and PostgreSQL.",
  },
  {
    emoji: "💼",
    title: "6 Months Industry Exp",
    desc: "Worked as a Java Backend Developer at Kritim Guru, delivering real features used by real students in production.",
  },
  {
    emoji: "🧮",
    title: "200+ LeetCode Problems",
    desc: "Consistently solving DSA across arrays, trees, graphs, binary search, sliding window, and dynamic programming.",
  },
  {
    emoji: "🔐",
    title: "Advanced Security Systems",
    desc: "Implemented JWT + RSA + Redis-based token blacklisting and OTP verification in a production environment.",
  },
  {
    emoji: "🤖",
    title: "Claude AI Integration",
    desc: "Integrated Claude AI API for dynamic question generation and real-time feedback in a full-stack hackathon app.",
  },
];

export const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Certs", href: "certifications" },
  { label: "Contact", href: "contact" },
];
