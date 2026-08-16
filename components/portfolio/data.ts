export const profile = {
  name: 'Roshan Kumar Jha',
  role: 'Full-Stack Software Engineer',
  location: 'Bengaluru, India',
  email: 'connect.rosn@gmail.com',
  phone: '+91-6363493731',
  github: 'https://github.com/rosnnn',
  linkedin: 'https://linkedin.com/in/rosnnn',
  hackerrank: 'https://www.hackerrank.com/profile/thevisinary1',
  hackerrankBadge: '5★ Python Coder',
  resume: '/pdf/CV.pdf',
  tagline:
    'Full-stack software engineer (React, Flutter, Node.js, FastAPI, Python) shipping production ERPs, mobile apps, REST APIs, and ML pipelines. Published ML researcher & 5-Star HackerRank Coder.',
  summary:
    'Full-stack software engineer (React, Flutter, Node.js, FastAPI, Python) with hands-on experience shipping production ERP systems, mobile apps, REST APIs, and ML pipelines across three engineering roles and two competitive job simulations (JPMorgan Chase & Co., Walmart Global Tech). Published ML researcher (JETIR, Dec 2025) and 5-star Coder on HackerRank. Strong in system design, Agile delivery, and CI/CD.',
  stats: [
    { label: 'HackerRank', value: '5★ Python' },
    { label: 'Work roles', value: '3' },
    { label: 'Job simulations', value: '2' },
    { label: 'Published papers', value: '1' },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'SQL'],
  },
  {
    title: 'Frontend / Mobile',
    items: ['React', 'Next.js', 'Flutter', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'Django', 'REST APIs', 'Celery', 'Microservices'],
  },
  {
    title: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'LSTM / GRU', 'LLM Integration'],
  },
  {
    title: 'Data / Cloud',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes'],
  },
  {
    title: 'AI Dev Tools',
    items: ['Cursor', 'Claude', 'GitHub Copilot', 'Antigravity'],
  },
  {
    title: 'Practices',
    items: ['Agile / Scrum', 'CI/CD', 'Git', 'System Design', 'Unit / Integration Testing'],
  },
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  proofUrl?: string
  pendingProof?: boolean
  proofs?: { title: string; url: string }[]
  stack: string[]
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Zetheta Algorithms Private Limited',
    period: 'Jun 2026 – Aug 2026',
    proofs: [
      {
        title: 'DevOps & Cloud DR Certificate',
        url: '/pdf/DevOps & Cloud Engineer Multi Region DR Architecture Payment Systems.pdf',
      },
      {
        title: 'Loan App Certificate',
        url: '/pdf/Front End Developer Multi Step Loan Application For.pdf',
      },
      {
        title: 'API Integration Certificate',
        url: '/pdf/Custom API Integration.pdf',
      },
    ],
    stack: ['React 19', 'TypeScript', 'Node.js', 'Kafka', 'RabbitMQ', 'Redis', 'Terraform', 'OpenAPI', 'Cypress'],
    points: [
      'Built LendSwift, an 8-step multi-step loan application form (React 19, React Hook Form, Zod) with encrypted auto-save, e-signature capture, and a 30+ case Cypress test suite.',
      'Designed a 12-domain SAP S/4HANA-to-analytics integration architecture with a retry, circuit-breaker, and DLQ framework.',
      'Authored a multi-region DR architecture for payment systems (active-active/active-passive designs, DNS failover, 12 disaster runbooks) and built an event-driven notification engine with compliance checks.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Karunadu Technologies Pvt. Ltd.',
    period: 'Feb 2026 – May 2026',
    proofUrl: '/pdf/Karundau.pdf',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    points: [
      'Built a Movie Classification and Rating Prediction system and a Job Role Prediction model using supervised machine learning techniques.',
      'Performed data preprocessing, feature engineering, model training, and evaluation, improving prediction accuracy through data cleaning and model optimization.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Visabi Technologies Pvt. Ltd.',
    period: 'Oct 2025 – Feb 2026',
    pendingProof: true,
    proofs: [
      {
        title: 'vERP 2.0 (Play Store)',
        url: 'https://play.google.com/store/apps/details?id=verp.visabitech.com&hl=en_IN',
      },
    ],
    stack: ['Flutter', 'Dart', 'React', 'PostgreSQL', 'REST APIs', 'Android'],
    points: [
      'Built the sign-in/sign-up flow of the Android app in Flutter and extended development across the app\'s React-based screens; the app (vERP 2.0) is live on the Play Store.',
      'Played a key role in re-architecting the web ERP from single-tenant to multi-tenant and led a substantial revamp of the web application, improving both structure and user experience.',
    ],
  },
]

export const virtualExperience = [
  {
    role: 'Software Engineering Job Simulation Participant',
    company: 'JPMorgan Chase & Co.',
    platform: 'Forage',
    period: 'Jul 2026',
    badge: '🏦 #1 US Bank · Fortune 50',
    proofUrl: '/pdf/Software Engineering Job Simulation.pdf',
    stack: ['Java', 'Python', 'Kafka', 'H2 Database', 'REST APIs'],
    points: [
      'Completed practical tasks in project setup, Kafka message stream integration, H2 database connection, REST API endpoint integration, and REST API controller design.',
    ],
  },
  {
    role: 'Advanced Software Engineering Job Simulation Participant',
    company: 'Walmart Global Tech',
    platform: 'Forage',
    period: 'Jul 2026',
    badge: '🏆 #1 Fortune 500 Company',
    proofUrl: '/pdf/Advanced Software Engineering Job_walmart.pdf',
    stack: ['Advanced Data Structures', 'Software Architecture', 'Relational DB', 'Data Munging'],
    points: [
      'Completed practical engineering tasks in advanced data structures, software architecture, relational database design, and data munging pipelines.',
    ],
  },
]

export const projects = [
  {
    name: 'FinSight',
    subtitle: 'AI Personal Finance Platform',
    badge: 'Published · JETIR2512044',
    paperUrl: '/pdf/JETIR_CERTIFICATE.pdf',
    liveUrl: 'http://finsight-app.duckdns.org/',
    stack: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'PyTorch', 'Solana'],
    points: [
      'React + FastAPI dashboard with LSTM/GRU forecasting (92%/90% accuracy) and Solana/Web3.js fiat + crypto tracking.',
      'Awarded 2nd runner-up at the department exhibition. Published research paper in JETIR (Dec 2025).',
    ],
  },
  {
    name: 'Job OS',
    subtitle: 'Multi-Agent Job Acquisition Platform',
    badge: 'Multi-agent',
    liveUrl: 'http://jobos.duckdns.org:3000/',
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Celery', 'Redis', 'Playwright'],
    points: [
      '10+ agent pipeline for job aggregation, resume-to-job LLM matching, and Playwright-based ATS automation with a Next.js approval dashboard.',
    ],
  },
]

export const education = {
  degree: 'B.E. in Computer Science',
  school: 'Sri Krishna Institute of Technology (VTU), Bengaluru',
  period: 'Aug 2022 – May 2026',
  score: 'GPA 8.23 / 10.0',
}

export const academicProofs = [
  {
    title: 'Provisional Degree Certificate',
    issuer: 'Sri Krishna Institute of Technology',
    pdfUrl: '/pdf/Provisional_Degree_Certificate.pdf',
    type: 'Official Degree',
  },
  {
    title: 'Official Academic Transcript',
    issuer: 'Sri Krishna Institute of Technology',
    pdfUrl: '/pdf/Transcript.pdf',
    type: 'Academic Marksheet',
  },
  {
    title: 'Medium of Instruction (English)',
    issuer: 'Sri Krishna Institute of Technology',
    pdfUrl: '/pdf/Medium_Of_Instruction.pdf',
    type: 'Language Verification',
  },
]

export const jobSimulations = [
  {
    title: 'Software Engineering Job Simulation',
    company: 'JPMorgan Chase & Co.',
    platform: 'Forage (Jul 2026)',
    pdfUrl: '/pdf/Software Engineering Job Simulation.pdf',
    badge: 'Enterprise SWE',
    skills: ['Project Setup', 'Kafka Integration', 'H2 Database', 'REST API Design & Controllers'],
  },
  {
    title: 'Advanced Software Engineering Job Simulation',
    company: 'Walmart Global Tech',
    platform: 'Forage (Jul 2026)',
    pdfUrl: '/pdf/Advanced Software Engineering Job_walmart.pdf',
    badge: 'Advanced SWE',
    skills: ['Advanced Data Structures', 'Software Architecture', 'Relational DB Design', 'Data Munging'],
  },
]

export const certifications = [
  {
    name: 'DevOps & Cloud Engineer Certificate (Multi Region DR Architecture Payment Systems)',
    issuer: 'Zetheta Algorithms Private Limited',
    date: 'Jul 2026',
    pdfUrl: '/pdf/DevOps & Cloud Engineer Multi Region DR Architecture Payment Systems.pdf',
  },
  {
    name: 'Custom API Integration Certificate',
    issuer: 'Zetheta Algorithms Private Limited',
    date: 'Jul 2026',
    pdfUrl: '/pdf/Custom API Integration.pdf',
  },
  {
    name: 'Front End Developer Certificate (Loan Application Form)',
    issuer: 'Zetheta Algorithms Private Limited',
    date: 'Jul 2026',
    pdfUrl: '/pdf/Front End Developer Multi Step Loan Application For.pdf',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Coursera_Crash Course on Python.pdf',
  },
  {
    name: 'Foundations of Data Science',
    issuer: 'Google · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Coursera_Foundations of Data Science.pdf',
  },
  {
    name: 'Generative AI: Beyond the Chatbot',
    issuer: 'Google Cloud · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Coursera_Gen AI Beyond the Chatbot.pdf',
  },
  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'IBM · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Coursera_IBM_AI.pdf',
  },
  {
    name: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Coursera_Project_Initiation_Starting_a_Successful.pdf',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'Google · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Coursera_Project_Management.pdf',
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Google · Coursera',
    date: 'Aug 2025',
    pdfUrl: '/pdf/Foundation_of_Cyber_Security_Google - Copy.pdf',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Virtual Exp', href: '#virtual-experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]
