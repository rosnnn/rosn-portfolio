export const profile = {
  name: 'Roshan Kumar Jha',
  role: 'Full-Stack Software Engineer',
  location: 'Bengaluru, India',
  email: 'connect.rosn@gmail.com',
  phone: '+91-6363493731',
  github: 'https://github.com/rosnnn',
  linkedin: 'https://linkedin.com/in/rosnnn',
  tagline:
    'I build production-grade web, mobile, and AI/ML systems — from ERP platforms and REST APIs to LSTM forecasting pipelines and multi-agent tooling.',
  summary:
    'Full-stack software engineer with production experience across ERP systems, mobile apps, REST APIs, and AI/ML pipelines. Published ML researcher (JETIR, Dec 2025). I care about clean system design, reliable delivery through Agile and CI/CD, and shipping things people actually use.',
  stats: [
    { label: 'Years building', value: '3+' },
    { label: 'Projects shipped', value: '8+' },
    { label: 'Published papers', value: '1' },
    { label: 'ML accuracy', value: '92%' },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'SQL', 'PL/SQL'],
  },
  {
    title: 'Frontend / Mobile',
    items: ['React', 'Next.js', 'Flutter', 'Capacitor', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'Django', 'REST APIs', 'Celery', 'Microservices', 'Playwright'],
  },
  {
    title: 'Databases & Cloud',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'LSTM / GRU', 'OpenAI API', 'Anthropic API'],
  },
  {
    title: 'Practices',
    items: ['Agile / Scrum', 'CI/CD', 'Git', 'GitHub Actions', 'Testing', 'System Design'],
  },
]

export const experience = [
  {
    role: 'Applied Machine Learning Intern',
    company: 'Karunadu Technologies Pvt. Ltd.',
    period: 'Feb 2026 – May 2026',
    stack: ['Python', 'FastAPI', 'PyTorch', 'scikit-learn', 'CI/CD'],
    points: [
      'Built a Python experiment-tracking system for dataset versioning, model configs, and run history — cutting manual tracking effort by ~60%.',
      'Designed a modular batch + REST pipeline for training and evaluation with structured logging and deterministic job configs for fully reproducible iterations.',
      'Wrote unit and integration tests for ML workflows and enforced lightweight performance benchmarks before each production handoff.',
      'Collaborated in Agile sprints across code reviews, bug triage, and documentation alongside ML and software engineers.',
    ],
  },
  {
    role: 'Application Developer Apprentice',
    company: 'VISABI Technologies Pvt. Ltd.',
    period: 'Oct 2025 – Feb 2026',
    stack: ['Flutter', 'Dart', 'React', 'PostgreSQL', 'REST APIs'],
    points: [
      'Led the revamp of a production web ERP and shipped its Android companion app — modernizing inventory, operations, and reporting modules.',
      'Built Flutter screens integrated with 10+ REST endpoints, reducing perceived load time by ~30% via optimized response mapping and client-side caching.',
      'Improved error handling, input validation, and edge-case coverage across web and Android, reducing user-reported bugs by an estimated 40%.',
      'Coordinated with the backend team on API contracts and iterative Agile feature releases.',
    ],
  },
]

export const projects = [
  {
    name: 'FinSight',
    subtitle: 'AI Personal Finance Platform',
    badge: 'Published · JETIR2512044',
    stack: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'PyTorch', 'Solana'],
    points: [
      'End-to-end ML pipeline ingesting PDF / CSV / Excel with LSTM/GRU forecasting at 92% / 90% accuracy on financial time-series data.',
      'React + FastAPI dashboard with ML-based categorization and fiat + crypto tracking via Solana / Web3.js.',
      'Awarded 2nd runner-up at the department exhibition.',
    ],
  },
  {
    name: 'Job OS',
    subtitle: 'Multi-Agent Job Acquisition Platform',
    badge: 'Multi-agent',
    stack: ['FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Next.js', 'Playwright'],
    points: [
      '10+ agent pipeline handling job aggregation, deduplication, filtering, and resume-to-job matching with LLMs.',
      'Playwright ATS automation with audit logs, plus a Next.js dashboard for approvals, Gmail tracking, and dry-run submission.',
      'Celery + Redis orchestration for fault-tolerant, rate-limited task execution.',
    ],
  },
  {
    name: 'FlowStack',
    subtitle: 'Automation & Integration Platform',
    badge: 'Infra',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Webhooks'],
    points: [
      'Multi-tenant job runner with webhooks, idempotent task execution, and configurable rate limits.',
      'Fault-tolerant retries and structured observability for production-grade reliability.',
    ],
  },
]

export const education = {
  degree: 'B.E. in Computer Science',
  school: 'Sri Krishna Institute of Technology, Bengaluru',
  period: 'Aug 2022 – May 2026',
  score: 'GPA 8.23 / 10.0 (82.32%)',
}

export const certifications = [
  { name: 'Crash Course on Python', issuer: 'Google · Coursera', date: 'Aug 2025' },
  { name: 'Generative AI: Beyond the Chatbot', issuer: 'Google Cloud · Coursera', date: 'Aug 2025' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'IBM · Coursera', date: 'Aug 2025' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
