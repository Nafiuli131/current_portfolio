export const profile = {
  name: 'Nafiul Islam',
  initials: 'NI',
  role: 'Senior Software Engineer',
  leadRole: 'Lead Developer · Pulse IoT Platform',
  tagline: 'Senior Software Engineer leading Pulse — a real-time industrial IoT platform at 99.9% uptime.',
  location: 'Dhaka, Bangladesh',
  email: 'nafiuli131@gmail.com',
  phone: '+880 1941627021',
  github: 'https://github.com/Nafiuli131',
  linkedin: 'https://www.linkedin.com/in/nafiul-islam-849265129/',
  resumeUrl: '/Nafiul_Islam_Resume.pdf',
  profileImage: '/profile.png',
  available: true,
  summary:
    "I'm a Senior Software Engineer at Cloudly Infotech, currently leading Pulse — an industrial IoT monitoring platform running thousands of refrigeration sensors at 99.9% uptime. Six years building production systems in Java + Spring Boot across IoT, healthcare, travel, aviation, and real-time communication. Skilled in Python (FastAPI), ReactJS, and modern AI-enabled features using LangGraph multi-agent orchestration, Spring AI, and Retrieval-Augmented Generation.",
  highlights: [
    { value: '6+', label: 'Years building production systems' },
    { value: '99.9%', label: 'Uptime · Pulse IoT platform' },
    { value: '553+', label: 'Automated tests at 95% coverage' },
    { value: '350+', label: 'Students mentored at NSU' },
  ],
};

export const skills = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL', 'C', 'C++'],
  },
  {
    title: 'Backend & Frameworks',
    items: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'Microservices',
      'Javalin',
      'FastAPI',
      'WebSocket',
      'Apache Kafka',
      'Redis',
      'JWT / OAuth 2.0',
      'JUnit / Mockito',
    ],
  },
  {
    title: 'AI & Intelligent Systems',
    items: [
      'LangGraph (multi-agent)',
      'LangChain',
      'Spring AI',
      'RAG',
      'pgvector',
      'ONNX embeddings',
      'Groq LLaMA 3.3',
      'OpenAI / Claude APIs',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MS SQL', 'SQLite', 'InfluxDB', 'pgvector'],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'AWS (EC2, S3, CloudFront, Cognito)',
      'GitHub Actions',
      'CI/CD',
      'ELK Stack',
    ],
  },
  {
    title: 'Frontend & Tools',
    items: [
      'ReactJS',
      'HTML5 / CSS3',
      'Tailwind',
      'Git / GitLab / Bitbucket',
      'Jira / ClickUp',
      'Maven / Gradle',
      'Agile / Scrum',
      'System Design',
      'TDD',
    ],
  },
];

export const experience = [
  {
    company: 'Cloudly Infotech Limited',
    location: 'Dhaka, Bangladesh',
    role: 'Senior Software Engineer',
    period: 'Jan 2025 – Present',
    current: true,
    projects: [
      {
        name: 'Pulse — Industrial IoT Monitoring Platform',
        role: 'Lead Developer',
        bullets: [
          'Leading end-to-end design and development of a Javalin + Spring Boot IoT platform monitoring thousands of industrial refrigeration sensors in real time, cutting manual inspections and preventing costly breakdowns.',
          'Engineered real-time dashboards with live + historical graphs and WebSocket-based 1-second exports under 2 seconds; tuned SQLite + InfluxDB pipelines for 99.9% uptime and millisecond query latency.',
          'Owning architecture decisions and mentoring teammates; collaborating cross-functionally to deliver a scalable, maintainable system.',
        ],
        stack: ['Java', 'Javalin', 'Spring Boot', 'SQLite', 'InfluxDB', 'WebSocket', 'JUnit'],
      },
      {
        name: 'CloudlyCare — AI-Enabled Healthcare Platform',
        bullets: [
          'Built a production-grade clinical decision support backend in Python (FastAPI) with PostgreSQL 16, Redis 7, and pgvector; designed LangGraph-based multi-agent AI workflows for context-aware clinical assistance.',
          'Shipped 553+ automated tests at 95% coverage; used GitHub Actions CI/CD and AI-assisted development to move fast while keeping quality high.',
        ],
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'pgvector', 'LangGraph', 'GitHub Actions'],
      },
    ],
  },
  {
    company: 'Adventure Dhaka Limited',
    location: 'Dhaka, Bangladesh',
    role: 'Senior Software Engineer → Software Engineer',
    period: 'Aug 2023 – Dec 2024',
    projects: [
      {
        name: 'Travel Booking Platform',
        bullets: [
          'Developed sign-up and login modules with OAuth 2.0 / JWT authentication and role-based access control, ensuring secure authentication and smooth user onboarding.',
          'Designed and implemented the hybrid Localization Module with dynamic multilingual text and multi-currency support; optimized queries with Redis caching, cutting localization costs by up to 40%.',
          'Optimized hotel booking by integrating third-party APIs (Agoda, Expedia, Rakuten), caching frequently used data locally, improving system efficiency.',
          'Managed large-scale data storage and retrieval in PostgreSQL; mentored junior team members and assisted supervisors in critical architectural decisions.',
        ],
        stack: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Redis', 'Microservices', 'Kafka'],
      },
    ],
  },
  {
    company: 'TechnoNext Limited',
    location: 'Dhaka, Bangladesh',
    role: 'Software Engineer',
    period: 'Jun 2022 – Jul 2023',
    projects: [
      {
        name: 'Aircraft Management System',
        bullets: [
          'Developed and maintained a comprehensive Aircraft Management System using Java and Spring Boot, streamlining airline resource planning, fleet operations, and flight management.',
          'Designed the Flight Tracking Module with real-time status updates and the Fuel Management Module for consumption tracking, refueling schedules, and cost analytics.',
          'Implemented the Fleet Monitoring and Aircraft Tool Maintenance modules, ensuring accurate inventory tracking and improved aircraft availability.',
          'Optimized backend services and complex MS SQL queries on large aviation datasets; collaborated on code reviews and architectural discussions.',
        ],
        stack: ['Java', 'Spring Boot', 'MS SQL', 'REST APIs', 'Microservices'],
      },
    ],
  },
  {
    company: 'Synesis IT Limited',
    location: 'Dhaka, Bangladesh',
    role: 'Programmer',
    period: 'Jun 2020 – May 2022',
    projects: [
      {
        name: 'Convay — Video Conferencing Application',
        bullets: [
          'Developed a video conferencing application using React and Spring Boot with a microservices architecture, handling both frontend and backend development.',
          'Implemented meeting management features (scheduling, history, detailed meeting tracking) and built RESTful APIs for participant management and session history.',
          'Optimized backend Spring Boot code and real-time session data flow for improved performance; contributed to the web UI and Agile/Scrum code reviews.',
        ],
        stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Microservices'],
      },
    ],
  },
  {
    company: 'North South University',
    location: 'Dhaka, Bangladesh',
    role: 'Graduate / Undergraduate Teaching Assistant',
    period: 'Jan 2018 – Dec 2020',
    projects: [
      {
        name: 'Teaching & Mentorship',
        bullets: [
          'Mentored 350+ students across CSE 173 (Discrete Math), CSE 215 (OOP), CSE 311 (Databases), CSE 327 (Software Engineering), and CSE 482 (Web & Network).',
          'Designed, evaluated, and gave feedback on assignments; supported faculty with exams, grading workflows, and course administration.',
        ],
        stack: ['Teaching', 'OOP', 'Databases', 'Software Engineering'],
      },
    ],
  },
];

export const projects = [
  {
    name: 'Pulse — Industrial IoT Monitoring Platform',
    headline: 'Real-time visibility for thousands of industrial sensors',
    problem:
      'Cold-chain operators were running blind — manual inspections were missing failures, racking up expensive breakdowns and ruined product.',
    solution:
      'Designed and led a Javalin + Spring Boot platform with WebSocket streaming, dual-database storage (SQLite + InfluxDB), and live + historical dashboards engineered for sub-second telemetry.',
    outcome:
      '99.9% uptime · millisecond query latency · 1-second exports under 2s. Always-on monitoring replaced manual checks.',
    stack: ['Java', 'Javalin', 'Spring Boot', 'SQLite', 'InfluxDB', 'WebSocket', 'JUnit'],
    role: 'Senior Software Engineer · Lead Developer',
    featured: true,
    active: true,
  },
  {
    name: 'CloudlyCare — AI Clinical Decision Support',
    headline: 'LangGraph multi-agent workflows, grounded in real patient data',
    problem:
      'Clinicians needed context-aware assistance tied to patient data and trusted medical knowledge — not generic LLM output that hallucinates.',
    solution:
      'Built a FastAPI + PostgreSQL 16 + Redis 7 backend with pgvector, orchestrating LangGraph multi-agent workflows for retrieval, planning, and grounded response generation.',
    outcome:
      '553+ automated tests at 95% coverage with GitHub Actions CI/CD. Production-grade quality on an aggressive timeline.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'pgvector', 'LangGraph', 'GitHub Actions'],
    role: 'Backend & AI Engineer',
    featured: true,
  },
  {
    name: 'AI-Powered Chatbot with RAG',
    headline: 'Sourced answers across enterprise knowledge bases',
    problem:
      'Teams were drowning in scattered PDFs and internal docs — no fast way to get accurate, sourced answers.',
    solution:
      'Built a full-stack Spring AI + React chatbot with PDF ingestion, ONNX embeddings, and a pgvector store powering Retrieval-Augmented Generation backed by Groq LLaMA 3.3.',
    outcome:
      'Context-aware answers across enterprise corpora, with retrieval transparency and a UX tuned for technical users.',
    stack: ['Spring AI', 'Groq LLaMA 3.3', 'React', 'pgvector', 'ONNX', 'RAG'],
    role: 'Full-stack Engineer',
    featured: true,
  },
  {
    name: 'Travel Booking — Localization Engine',
    headline: '40% cost reduction across a high-traffic booking flow',
    problem:
      'A multi-region travel platform was repeatedly paying for the same multilingual lookups and currency conversions — slowing pages and burning budget.',
    solution:
      'Designed a hybrid Localization Module with Redis caching, dynamic multilingual text, multi-currency support, and on-demand integration with Agoda, Expedia, and Rakuten.',
    outcome:
      '40% lower localization cost · faster page response · reduced spend with third-party booking partners.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Microservices'],
    role: 'Senior Software Engineer',
    featured: true,
  },
  {
    name: 'Convay — Video Conferencing',
    headline: 'Real-time meetings on a microservices backend',
    problem:
      'Needed a self-hosted video conferencing platform with full meeting lifecycle, history, and participant management.',
    solution:
      'Built React + Spring Boot microservices owning scheduling, history, and participant APIs — plus real-time session data flow.',
    outcome:
      'A reliable conferencing product with smooth real-time UX and clean, testable backend boundaries.',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Microservices'],
    role: 'Full-stack Engineer',
    featured: false,
  },
];

export const education = [
  {
    school: 'North South University, Dhaka',
    degree: 'B.Sc. in Computer Science and Engineering',
    period: 'Jan 2016 – May 2020',
    note: 'CGPA 3.77 / 4.00',
  },
  {
    school: 'National Ideal College, Dhaka',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2015',
    note: 'GPA 5.00 / 5.00',
  },
  {
    school: 'National Ideal School, Dhaka',
    degree: 'Secondary School Certificate (SSC)',
    period: '2013',
    note: 'GPA 5.00 / 5.00',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
