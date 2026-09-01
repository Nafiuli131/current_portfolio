/**
 * Single source of truth for every word on the site.
 * All experience, project, and credential facts come from the CV
 * (public/Nafiul_Islam_Resume.pdf) — nothing here is inferred beyond it.
 */

export const profile = {
  name: 'Nafiul Islam',
  wordmark: 'NAFIUL',
  role: 'Senior Software Engineer & Technical Leader',
  positioning:
    'I build scalable software systems, AI-powered solutions, and cloud infrastructure that solve real-world problems.',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  email: 'nafiuli131@gmail.com',
  phone: '+880 1941627021',
  github: 'https://github.com/Nafiuli131',
  linkedin: 'https://www.linkedin.com/in/nafiul-islam-849265129/',
  scholar: 'https://scholar.google.com/citations?user=RLJlJecAAAAJ&hl=en',
  toolora: 'https://usetoolora.netlify.app/',
  resume: '/Nafiul_Islam_Resume.pdf',
  profileImage: '/profile.png',
  siteUrl: 'https://nafiulislam.netlify.app',
  available: true,
  availabilityNote: 'Available for select projects',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

/* ---------------------------------------------------------------- hero */

export const hero = {
  kicker: 'Senior Software Engineer & Technical Leader',
  headline: ['I build software systems', 'that solve real-world problems.'],
  positioning:
    'Scalable software systems, AI-powered solutions, and cloud infrastructure.',
  lede:
    'Six years shipping production platforms in Java, Spring Boot, and microservices — across industrial IoT, healthcare, travel, aviation, and real-time communication.',
  metrics: [
    { value: '6+', label: 'Years in production' },
    { value: '99.9%', label: 'Uptime · IoT platform' },
    { value: '553+', label: 'Tests at 95% coverage' },
    { value: '5', label: 'Industry domains' },
  ],
};

/* --------------------------------------------------------- track record */

export const track = [
  { org: 'Cloudly Infotech', role: 'Senior Software Engineer', period: '2025 — Present' },
  { org: 'Adventure Dhaka', role: 'Senior Software Engineer', period: '2023 — 2024' },
  { org: 'TechnoNext', role: 'Software Engineer', period: '2022 — 2023' },
  { org: 'Synesis IT', role: 'Programmer', period: '2020 — 2022' },
  { org: 'North South University', role: 'Teaching Assistant', period: '2018 — 2020' },
];

/* -------------------------------------------------------------- about */

export const about = {
  eyebrow: 'About',
  title: 'Engineering that starts with the problem.',
  lede:
    'Six years of backend engineering, most of it on systems that other people depend on being up.',
  paragraphs: [
    "I specialise in backend development with Java, Spring Boot, and microservices — designing scalable systems, RESTful APIs, and database architectures that hold their shape under real load. That work has taken me through industrial IoT, healthcare, travel, aviation, and real-time communication, which is a useful spread: the constraints are different every time, and the engineering discipline is the same.",
    "More recently I've been building AI into products rather than around them — LangGraph multi-agent orchestration, Spring AI, and retrieval-augmented generation over vector stores, backed by the same testing and CI standards as everything else. I also work in Python with FastAPI and on the frontend with React.",
    "Alongside the code, I lead. I own architecture decisions, run code reviews, mentor junior engineers, and work with cross-functional teams to get things shipped. Before that I spent nearly three years as a teaching assistant at North South University, which is where I learned that explaining a system clearly is most of understanding it.",
  ],
  facts: [
    { label: 'Based in', value: 'Dhaka, Bangladesh · GMT+6' },
    { label: 'Focus', value: 'Backend · Applied AI · Cloud' },
    { label: 'Core stack', value: 'Java · Spring Boot · Python · React' },
    { label: 'Open to', value: 'Projects, consulting, and senior roles' },
  ],
  education: [
    {
      degree: 'BSc in Computer Science and Engineering',
      school: 'North South University, Dhaka',
      period: 'January 2016 — May 2020',
      note: 'CGPA 3.77 / 4.00',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'National Ideal College, Dhaka',
      period: '2015',
      note: 'GPA 5.00 / 5.00',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'National Ideal School, Dhaka',
      period: '2013',
      note: 'GPA 5.00 / 5.00',
    },
  ],
  recognition: [
    'Magna Cum Laude distinction, North South University',
    'Merit scholarship covering 75% of undergraduate tuition (NSU)',
    'Board Scholarship — General Category (HSC)',
    'Board Scholarship — Talent-pool Category (JSC)',
  ],
  research: {
    count: '4 peer-reviewed papers',
    titles: [
      'Blockchain Technology Integrated Electronic Vote Casting System',
      'Augmented Reality Marker-Based Technology for Augmenting Newspaper Advertisement',
      'Decentralized Way of Keeping Drug Records Using Blockchain Technology (Hyperledger Fabric)',
      'Cryptographic Ledger of Blockchain Technology in Healthcare',
    ],
  },
};

/* ---------------------------------------------------------- what I do */

export const services = {
  eyebrow: 'What I Do',
  title: 'Three areas, usually at the same time',
  lede:
    'Most of the systems I have shipped needed all three — a backend that scales, a model that behaves, and infrastructure that stays up.',
  cards: [
    {
      key: 'systems',
      index: 'S-01',
      glyph: 'systems',
      title: 'Backend Systems',
      body:
        'Scalable services, RESTful APIs, and database architectures built to stay maintainable as the product and the team grow.',
      items: [
        'Java · Spring Boot',
        'Microservices & REST APIs',
        'Kafka, Redis, WebSocket',
        'PostgreSQL, MySQL, MS SQL',
      ],
    },
    {
      key: 'ai',
      index: 'S-02',
      glyph: 'ai',
      title: 'AI Solutions',
      body:
        'AI built into products as engineered components — grounded in your own data, orchestrated, tested, and observable.',
      items: [
        'RAG over vector stores',
        'LangGraph multi-agent workflows',
        'Spring AI & LangChain',
        'pgvector, ONNX embeddings',
      ],
    },
    {
      key: 'cloud',
      index: 'S-03',
      glyph: 'cloud',
      title: 'Cloud & Architecture',
      body:
        'System design and delivery infrastructure — containers, pipelines, and the observability that makes production legible.',
      items: [
        'AWS (EC2, S3, CloudFront, Cognito)',
        'Docker & Kubernetes',
        'CI/CD with GitHub Actions',
        'ELK Stack, system design',
      ],
    },
  ],
};

/* -------------------------------------------------------- experience */

export const experience = {
  eyebrow: 'Professional Experience',
  title: 'Where the work happened',
  lede:
    'Five organisations, six years, and the systems I owned at each. Client-confidential detail is left out — the engineering is described in full.',
  companies: [
    {
      id: 'cloudly',
      company: 'Cloudly Infotech Limited',
      location: 'Dhaka, Bangladesh',
      period: 'January 2025 — Present',
      current: true,
      roles: [{ title: 'Senior Software Engineer', period: 'January 2025 — Present' }],
      context:
        'Two production platforms running in parallel: a real-time industrial IoT monitoring system I lead as developer, and an AI-enabled healthcare backend.',
      responsibilities: [
        'Own architecture decisions across the IoT platform',
        'Mentor teammates and drive cross-functional delivery',
        'Set testing and CI standards on both products',
      ],
      projects: [
        {
          name: 'Vault — Industrial IoT Monitoring Platform',
          role: 'Lead Developer',
          problem:
            'Thousands of industrial refrigeration sensors were checked by manual inspection, which let costly breakdowns develop unnoticed.',
          work: [
            'Led the end-to-end design and development of a Javalin and Spring Boot IoT platform monitoring thousands of industrial refrigeration sensors in real time.',
            'Developed real-time dashboards with live and historical graphs, and WebSocket-based one-second exports returned in under two seconds.',
            'Implemented alert mechanisms and optimised the SQLite and InfluxDB pipelines.',
            'Owned architecture decisions, mentored teammates on the platform, and collaborated cross-functionally to deliver a scalable, maintainable system.',
          ],
          architecture:
            'Javalin and Spring Boot services ingest sensor telemetry continuously. Live state is held in SQLite for the fast path while InfluxDB carries the time-series history; dashboards subscribe over WebSocket rather than polling, and JUnit covers the service layer.',
          outcomes: [
            { value: '99.9%', label: 'Uptime' },
            { value: '< 2s', label: '1-second-resolution export' },
            { value: 'ms', label: 'Query performance' },
          ],
          impact:
            'Manual inspections reduced and costly breakdowns prevented, with millisecond-level query performance across live and historical views.',
          stack: ['Java', 'Javalin', 'Spring Boot', 'SQLite', 'InfluxDB', 'WebSocket', 'JUnit'],
          accent: 'industrial',
        },
        {
          name: 'CloudlyCare — AI-Enabled Healthcare Platform',
          role: 'Backend & AI Engineer',
          problem:
            'A clinical decision support product needed AI assistance that stays grounded in patient context — and engineering quality high enough for a healthcare setting.',
          work: [
            'Built a production-grade clinical decision support backend in Python (FastAPI) with PostgreSQL 16, Redis 7, and pgvector.',
            'Designed LangGraph-based multi-agent AI workflows for context-aware clinical assistance.',
            'Shipped 553+ automated tests at 95% coverage.',
            'Used GitHub Actions CI/CD and AI-assisted development (Claude, Copilot) to move fast while keeping quality high.',
          ],
          architecture:
            'A FastAPI service layer over PostgreSQL 16, with pgvector holding embeddings for retrieval and Redis 7 for caching. LangGraph orchestrates multi-agent planning, context retrieval, and response generation; GitHub Actions runs the test suite on every change.',
          outcomes: [
            { value: '553+', label: 'Automated tests' },
            { value: '95%', label: 'Coverage' },
          ],
          impact:
            'Production-grade quality maintained on an AI product — the test suite and CI pipeline are what make the AI behaviour safe to change.',
          stack: [
            'Python',
            'FastAPI',
            'PostgreSQL 16',
            'Redis 7',
            'pgvector',
            'LangGraph',
            'GitHub Actions',
          ],
          accent: 'clinical',
        },
      ],
    },
    {
      id: 'adventure',
      company: 'Adventure Dhaka Limited',
      location: 'Dhaka, Bangladesh',
      period: 'August 2023 — December 2024',
      roles: [
        { title: 'Senior Software Engineer', period: 'June 2024 — December 2024' },
        { title: 'Software Engineer', period: 'August 2023 — May 2024' },
      ],
      context:
        'A travel booking platform serving high-traffic flows across multiple languages, currencies, and third-party inventory providers.',
      responsibilities: [
        'Mentored junior team members',
        'Assisted supervisors in critical architectural decisions',
        'Owned authentication, localisation, and booking-path performance',
      ],
      projects: [
        {
          name: 'Travel Booking Platform',
          role: 'Software Engineer → Senior Software Engineer',
          problem:
            'A multi-region booking product was carrying repeated multilingual and currency lookups, plus third-party inventory calls, across high-traffic booking flows.',
          work: [
            'Developed sign-up and login modules with OAuth 2.0 / JWT authentication and role-based access control, ensuring secure authentication and smooth user onboarding.',
            'Designed and implemented the hybrid Localization Module with dynamic multilingual text and multi-currency support.',
            'Optimised queries with Redis caching, reducing server load and improving response time.',
            'Optimised hotel booking by integrating third-party APIs (Agoda, Expedia, Rakuten), caching frequently used data locally and making API calls on demand.',
            'Managed large-scale data storage and retrieval in PostgreSQL, ensuring fast, reliable queries across high-traffic booking flows.',
          ],
          architecture:
            'Spring Boot microservices with Kafka for messaging, PostgreSQL and MySQL for persistence, and Redis in front of the localisation and inventory paths. Third-party supplier APIs are called on demand with frequently used data cached locally.',
          outcomes: [
            { value: '40%', label: 'Lower localisation cost' },
            { value: '↓', label: 'Server load' },
          ],
          impact:
            'Localisation costs cut by up to 40%, server load reduced and response time improved, with better system efficiency and lower operational overhead on the booking path.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Redis', 'Microservices', 'Kafka'],
          accent: 'travel',
        },
      ],
    },
    {
      id: 'technonext',
      company: 'TechnoNext Limited',
      location: 'Dhaka, Bangladesh',
      period: 'June 2022 — July 2023',
      roles: [{ title: 'Software Engineer', period: 'June 2022 — July 2023' }],
      context:
        'Aviation software covering airline resource planning, fleet operations, and day-to-day flight management over large datasets.',
      responsibilities: [
        'Built and maintained core operational modules',
        'Optimised backend services and complex MS SQL queries',
        'Contributed to code reviews and architectural discussions',
      ],
      projects: [
        {
          name: 'Aircraft Management System',
          role: 'Software Engineer',
          problem:
            'Airline resource planning, fleet operations, and daily flight management needed to run as one system over large aviation datasets.',
          work: [
            'Developed and maintained a comprehensive Aircraft Management System using Java and Spring Boot, streamlining airline resource planning, fleet operations, and day-to-day flight management.',
            'Designed the Flight Tracking Module with real-time status updates and route monitoring.',
            'Built the Fuel Management Module for consumption tracking, refuelling schedules, and cost analytics.',
            'Implemented the Fleet Monitoring and Aircraft Tool Maintenance modules, ensuring accurate inventory tracking and scheduled maintenance alerts.',
            'Optimised backend services and complex MS SQL queries on large aviation datasets; collaborated on code reviews and architectural discussions.',
          ],
          architecture:
            'Java and Spring Boot services exposing REST APIs in a microservices layout over MS SQL, with query optimisation work concentrated on the large-dataset reporting paths.',
          outcomes: [
            { value: '4', label: 'Core modules built' },
            { value: '↑', label: 'Fleet availability' },
          ],
          impact:
            'Improved operational efficiency and fuel cost reporting, with accurate inventory tracking and improved aircraft availability across the fleet.',
          stack: ['Java', 'Spring Boot', 'MS SQL', 'REST APIs', 'Microservices'],
          accent: 'aviation',
        },
      ],
    },
    {
      id: 'synesis',
      company: 'Synesis IT Limited',
      location: 'Dhaka, Bangladesh',
      period: 'June 2020 — May 2022',
      roles: [{ title: 'Programmer', period: 'June 2020 — May 2022' }],
      context:
        'Convay, a video conferencing product built on microservices, where I worked across both the frontend and the backend.',
      responsibilities: [
        'Full-stack delivery on meeting and participant features',
        'Real-time session data flow and backend performance',
        'Agile/Scrum code reviews and web UI contributions',
      ],
      projects: [
        {
          name: 'Convay — Video Conferencing Application',
          role: 'Full-stack Programmer',
          problem:
            'A conferencing product needed the full meeting lifecycle — scheduling, history, participants, and live sessions — behind clean service boundaries.',
          work: [
            'Developed a video conferencing application using React and Spring Boot with a microservices architecture, handling both frontend and backend development.',
            'Implemented meeting management features including scheduling, history, and detailed meeting tracking.',
            'Built RESTful APIs for participant management and session history.',
            'Optimised backend Spring Boot code and real-time session data flow for improved performance.',
            'Contributed to the web UI and participated in Agile/Scrum code reviews.',
          ],
          architecture:
            'A React frontend against Spring Boot microservices over MySQL, with REST APIs owning participant management and session history and a tuned path for real-time session data.',
          outcomes: [
            { value: '↑', label: 'Real-time performance' },
            { value: 'Full', label: 'Meeting lifecycle' },
          ],
          impact:
            'Improved performance in real-time session data flow, with meeting scheduling, history, and participant management delivered end to end.',
          stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Microservices'],
          accent: 'realtime',
        },
      ],
    },
    {
      id: 'nsu',
      company: 'North South University',
      location: 'Dhaka, Bangladesh',
      period: 'January 2018 — December 2020',
      teaching: true,
      roles: [
        { title: 'Graduate Assistant (Part-time)', period: 'June 2020 — December 2020' },
        { title: 'Undergraduate Teaching Assistant (Part-time)', period: 'January 2018 — May 2020' },
      ],
      context:
        'Teaching support across five core computer science courses, alongside my undergraduate degree and then graduate study.',
      responsibilities: [
        'Mentored students across discrete maths, OOP, databases, software engineering, and web systems',
        'Created, evaluated, and gave feedback on assignments',
        'Assisted faculty with examinations, grading workflows, and course administration',
      ],
      courses: [
        'CSE 173 — Discrete Mathematics',
        'CSE 215 — Object-Oriented Programming',
        'CSE 311 — Database Systems',
        'CSE 327 — Software Engineering',
        'CSE 482 — Web and Network Technology',
      ],
      highlight: { value: '350+', label: 'Students mentored' },
      projects: [],
    },
  ],
};

/* ------------------------------------------------------------ projects */

export const projects = {
  eyebrow: 'Selected Projects',
  title: 'Things I built on my own time',
  lede:
    'Independent builds and applied experiments. Employer and client systems are documented as case studies in Professional Experience above.',
  featured: [
    {
      id: 'toolora',
      name: 'Toolora',
      category: 'Privacy-First Web Tools',
      status: 'Live',
      year: '2025',
      summary:
        "A collection of browser-based tools that process files directly on the user's device whenever possible.",
      problem:
        "Converting or compressing a file normally means uploading it to someone else's server — a trade most people make without being asked.",
      approach:
        'Move the work into the browser so the file never leaves the machine. Anything that genuinely cannot run client-side is either left out or labelled plainly.',
      solution:
        'Tools that open fast, keep working offline, and have no upload queue or retention policy to trust.',
      stack: ['Browser APIs', 'Client-Side Processing', 'React', 'Static Delivery'],
      cta: { label: 'Explore Toolora', href: 'https://usetoolora.netlify.app/' },
      accent: 'privacy',
    },
    {
      id: 'rag-chatbot',
      name: 'AI-Powered Chatbot with RAG',
      category: 'Applied AI · Full-stack',
      status: 'Built',
      year: '2024',
      summary:
        'A full-stack AI chatbot answering from enterprise knowledge bases with retrieval-augmented generation.',
      problem:
        'Generic model output is not much use against a company knowledge base — the answer has to come from your own documents.',
      approach:
        'PDF ingestion into a pgvector store using ONNX embeddings, with Spring AI wiring retrieval into the generation step and Groq LLaMA 3.3 doing the generation.',
      solution:
        'Context-aware responses drawn from the ingested corpus, served through a React frontend.',
      stack: ['Spring AI', 'Groq LLaMA 3.3', 'React', 'pgvector', 'ONNX embeddings', 'RAG'],
      accent: 'ai',
    },
    {
      id: 'multi-agent',
      name: 'AI Multi-Agent Workflow',
      category: 'Applied AI · Orchestration',
      status: 'Built',
      year: '2024',
      summary:
        'A production multi-agent system built on LangGraph that plans, retrieves context, and generates responses.',
      problem:
        'Anything beyond a single prompt — following up, summarising, holding a thread — needs orchestration rather than one long call.',
      approach:
        'A LangGraph graph splits the work into planning, context retrieval, and generation stages, each with its own boundary and state.',
      solution:
        'Smart follow-ups, summarisation, and assistant-style features usable inside enterprise applications.',
      stack: ['LangGraph', 'Multi-agent orchestration', 'RAG', 'Python'],
      accent: 'agents',
    },
  ],
  more: [
    {
      name: 'Weather and Rainfall Prediction',
      domain: 'Machine Learning',
      accent: 'ml',
      note: 'A predictive model built with Python (scikit-learn) and Weka — implemented and compared multiple regression algorithms across preprocessing, training, and evaluation.',
      stack: ['Python', 'scikit-learn', 'Weka', 'Regression'],
    },
    {
      name: 'Facebook Group Clone',
      domain: 'Full-stack Web',
      accent: 'social',
      note: 'A social platform clone with a ReactJS frontend and Spring Boot backend supporting group chats, events, and meetings, with API endpoints optimised for smooth real-time interaction.',
      stack: ['ReactJS', 'Spring Boot', 'REST APIs'],
    },
    {
      name: 'Foodie — Restaurant Management',
      domain: 'Full-stack Web',
      accent: 'crud',
      note: 'A fully responsive restaurant management platform with complete CRUD operations, built with ReactJS and Spring Boot and tuned for efficient backend queries.',
      stack: ['ReactJS', 'Spring Boot', 'Responsive UI'],
    },
  ],
};

/* ----------------------------------------------------------------- stack */

export const stack = {
  eyebrow: 'Technology',
  title: 'The Engineering Stack',
  lede: 'Tools, not identity. The choice always follows the problem.',
  groups: [
    {
      name: 'Languages',
      code: 'LN',
      items: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL', 'C', 'C++'],
    },
    {
      name: 'Backend',
      code: 'BE',
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
      name: 'AI & Intelligent Systems',
      code: 'AI',
      items: [
        'LangGraph (multi-agent)',
        'LangChain',
        'Spring AI',
        'RAG',
        'pgvector',
        'ONNX embeddings',
        'Groq LLaMA 3.3',
        'OpenAI / Claude APIs',
        'Prompt engineering',
      ],
    },
    {
      name: 'Databases',
      code: 'DB',
      items: ['PostgreSQL', 'MySQL', 'MS SQL', 'SQLite', 'InfluxDB', 'pgvector'],
    },
    {
      name: 'Cloud & DevOps',
      code: 'CL',
      items: [
        'Docker',
        'Kubernetes',
        'AWS (EC2, S3, CloudFront, Cognito)',
        'CI/CD — GitHub Actions',
        'ELK Stack',
      ],
    },
    {
      name: 'Frontend & Practice',
      code: 'FE',
      items: [
        'ReactJS',
        'Angular',
        'HTML5 / CSS3',
        'Real-time UIs (WebSocket)',
        'System design',
        'REST API design',
        'TDD',
        'Agile / Scrum',
      ],
    },
  ],
};

/* -------------------------------------------------------------- insights */

export const insights = {
  eyebrow: 'Insights',
  title: 'Insights & Technical Thinking',
  lede:
    'How I approach engineering decisions, and short notes on the trade-offs I keep running into.',
  principles: [
    {
      step: 'Step 01',
      title: 'Start With The Problem',
      quote: 'Technology should serve the problem — not the other way around.',
      body:
        'A stack chosen before the problem is understood is a bet placed before the cards are dealt. I start by finding out who is hurting and what would have to be true for that to stop.',
    },
    {
      step: 'Step 02',
      title: 'Design Before Scaling',
      quote: 'Good architecture creates options for future growth.',
      body:
        'The point of design is not to predict the future — it is to keep it affordable. Clean boundaries mean the expensive decisions can be deferred until you actually know the answer.',
    },
    {
      step: 'Step 03',
      title: 'Keep Systems Understandable',
      quote: 'Complexity should be intentional, not accidental.',
      body:
        'Every abstraction is a tax on whoever reads it next. I pay it when it buys something real, and refuse it when it only buys cleverness.',
    },
    {
      step: 'Step 04',
      title: 'Build For Reality',
      quote: 'Production systems need reliability, observability, and maintainability.',
      body:
        'Code that works on a laptop is a prototype. Code that recovers from a bad night, tells you what it is doing, and can be changed safely is a system.',
    },
  ],
  posts: [
    {
      n: '001',
      title: 'Why I Decided Not to Upload User Files to a Server',
      excerpt:
        "Every upload endpoint is a promise you have to keep forever: storage, retention, breach response, someone's ID scan sitting in a bucket. The browser can already do the work. Here is what that constraint cost me, and what it bought.",
      topic: 'Privacy · Architecture',
      href: null,
    },
    {
      n: '002',
      title: 'Not Every Application Needs a Backend',
      excerpt:
        'A server is a permanent operational commitment — patching, scaling, on-call, a bill that arrives whether anyone uses it or not. Sometimes the honest architecture is a static bundle and a CDN, and saying so is the senior move.',
      topic: 'Architecture · Pragmatism',
      href: null,
    },
    {
      n: '003',
      title: 'AI Can Generate Code. Engineering Still Requires Thinking.',
      excerpt:
        'Generation collapsed the cost of writing code. It did nothing to the cost of being wrong about the design. The bottleneck was never typing speed — it was knowing which system to build.',
      topic: 'AI · Practice',
      href: null,
    },
  ],
};

/* --------------------------------------------------------- work with me */

export const workWithMe = {
  eyebrow: 'Work With Me',
  title: 'Have a problem worth solving?',
  lede:
    "If you're building a product, improving an existing system, exploring AI, or need help with backend architecture and cloud infrastructure, let's talk.",
  tags: [
    'Software Development',
    'Backend Systems',
    'AI Solutions',
    'Cloud Architecture',
    'Technical Consulting',
  ],
  facts: [
    { label: 'Response', value: 'Usually within a day' },
    { label: 'Based in', value: 'Dhaka, Bangladesh · GMT+6' },
    { label: 'Overlap', value: 'Kept with your working hours' },
  ],
  fit: [
    {
      title: 'Teams shipping a first version',
      body: 'Architecture that will not need replacing at the second funding round.',
    },
    {
      title: 'Systems under strain',
      body: 'Slow queries, brittle integrations, a service nobody wants to deploy on a Friday.',
    },
    {
      title: 'AI that has to reach production',
      body: 'Grounding, evaluation, cost control, and the plumbing between a model and a product.',
    },
  ],
  cta: 'Start a Conversation',
};

/* --------------------------------------------------------------- contact */

export const contact = {
  eyebrow: 'Work With Me',
  title: 'Have a problem worth solving?',
  lede:
    "If you're building a product, improving an existing system, exploring AI, or need help with backend architecture and cloud infrastructure, let's talk. I'm also open to senior engineering roles.",
  prompt: 'Start a conversation',
  promptNote:
    'Email is the fastest route. Tell me what you are building, where it is stuck, and what good would look like — that is usually enough to give you a useful answer in the first reply.',
  include: [
    'What you are building',
    'Where it is stuck today',
    'What good would look like',
  ],
  responseNote: 'Usually replies within a day',
};

export const footer = {
  tagline: 'Scalable software systems, AI-powered solutions, and cloud infrastructure.',
};
