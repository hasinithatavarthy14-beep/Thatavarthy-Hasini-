export interface PortfolioMetric {
  value: string;
  label: string;
  context: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details: string;
  coursework?: string[];
}

export interface SkillGroup {
  id: 'languages' | 'technical' | 'other';
  index: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: string;
    context: string;
  }[];
}

export type ProjectCategory = 'All' | 'Web Systems' | 'AI & Data' | 'Academic';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  role: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  architecture: string[];
  stack: string[];
  outcome: string;
  repoUrl: string;
  demoFocus: string;
}

export type AchievementCategory = 'All' | 'Certifications' | 'Awards' | 'Participation';

export interface AchievementItem {
  id: string;
  category: Exclude<AchievementCategory, 'All'>;
  year: string;
  title: string;
  issuer: string;
  credentialNote: string;
  description: string;
}

export const PORTFOLIO_PROFILE = {
  fullName: 'Hasini Thatavarthy',
  firstName: 'Hasini',
  roleTitle: 'Computer Science & Engineering Undergraduate',
  academicStatus: 'B.Tech in Computer Science & Engineering · Class of 2027',
  location: 'India',
  email: 'thatavarthy.hasini@gmail.com',
  intro:
    'I design and build structured web applications, thoughtful data interfaces, and practical software systems grounded in computer science fundamentals.',
  heroImage: '/src/assets/images/hero_engineering_studio_1794845485536.jpg',
  heroImageAlt:
    'Minimalist engineering desk with a silver laptop displaying system architecture diagrams, a linen notebook, and morning window light',
  links: {
    github: 'https://github.com/hasini-thatavarthy',
    linkedin: 'https://www.linkedin.com/in/hasini-thatavarthy',
    leetcode: 'https://leetcode.com/u/hasini-thatavarthy',
  },
};

export const HERO_METRICS: PortfolioMetric[] = [
  {
    value: '04',
    label: 'Featured Projects',
    context: 'Full-stack & ML prototypes',
  },
  {
    value: '06',
    label: 'Core Languages',
    context: 'Python, Java, C++, TS, JS, SQL',
  },
  {
    value: '07',
    label: 'Honors & Credentials',
    context: 'Certifications & awards',
  },
  {
    value: '2027',
    label: 'Expected Graduation',
    context: 'B.Tech CSE Track',
  },
];

export const ABOUT_CONTENT = {
  narrative: [
    'I am a Computer Science and Engineering undergraduate focused on bridging solid algorithmic foundations with clean, usable software design. My coursework and independent builds center on web engineering, relational data modeling, and applied machine learning.',
    'Beyond coursework, I enjoy breaking down complex everyday workflows—such as campus navigation, semester planning, and personal budgeting—into clear, fast, browser-first tools that prioritize clarity and reliability.',
  ],
  education: [
    {
      period: '2023 — 2027',
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'School of Engineering & Technology · Department of CSE',
      details:
        'Undergraduate honors track focusing on software systems, algorithms, and human-centered computing.',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Object-Oriented Programming in Java',
        'Machine Learning Foundations',
      ],
    },
    {
      period: '2021 — 2023',
      degree: 'Senior Secondary Education (Class XII — MPC)',
      institution: 'Higher Secondary Board of Education',
      details:
        'Mathematics, Physics, and Chemistry specialization with early distinction in analytical problem solving and introductory Python programming.',
    },
  ] as EducationItem[],
  interests: [
    {
      title: 'Full-Stack Web Architecture',
      detail: 'Designing type-safe React interfaces backed by structured REST APIs and clean relational schemas.',
    },
    {
      title: 'Applied Machine Learning',
      detail: 'Building interpretable computer vision and classification workflows using Python and PyTorch.',
    },
    {
      title: 'Human-Centered UI Systems',
      detail: 'Creating calm, accessible typography-driven interfaces with WCAG contrast discipline.',
    },
  ],
  careerGoals: [
    {
      horizon: 'Short-Term Learning Goal',
      statement:
        'Deepen proficiency in distributed backend patterns, automated testing, and cloud deployment pipelines through production-grade team projects and technical internships.',
    },
    {
      horizon: 'Long-Term Career Aspiration',
      statement:
        'Grow into a Software Development Engineer building dependable, high-utility digital products in education technology, developer tooling, or applied AI systems.',
    },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    index: '01',
    title: 'Programming Languages',
    subtitle: 'Core languages used across coursework, algorithms, and software projects.',
    items: [
      {
        name: 'Python',
        level: 'Primary',
        context: 'Data processing, scripting, FastAPI services, and ML pipelines',
      },
      {
        name: 'Java',
        level: 'Primary',
        context: 'Object-oriented design, data structures, and algorithmic problem solving',
      },
      {
        name: 'TypeScript & JavaScript',
        level: 'Primary',
        context: 'Type-safe frontend applications, DOM tooling, and Node.js backends',
      },
      {
        name: 'C / C++',
        level: 'Proficient',
        context: 'Systems programming fundamentals, memory models, and competitive coding',
      },
      {
        name: 'SQL (PostgreSQL / SQLite)',
        level: 'Proficient',
        context: 'Schema normalization, relational joins, indexing, and analytical queries',
      },
      {
        name: 'HTML5 & CSS3',
        level: 'Primary',
        context: 'Semantic document structure, responsive grid layouts, and accessibility',
      },
    ],
  },
  {
    id: 'technical',
    index: '02',
    title: 'Technical Skills',
    subtitle: 'Frameworks, engineering tools, and architectural practices.',
    items: [
      {
        name: 'React & Vite',
        level: 'Primary',
        context: 'Modular component architecture, hooks, state management, and SPA routing',
      },
      {
        name: 'Tailwind CSS',
        level: 'Primary',
        context: 'Design token systems, responsive grids, and accessible contrast pairing',
      },
      {
        name: 'Node.js & Express',
        level: 'Proficient',
        context: 'REST API design, input validation, and server-side middleware',
      },
      {
        name: 'Git & GitHub',
        level: 'Primary',
        context: 'Branching workflows, pull request reviews, and repository documentation',
      },
      {
        name: 'Scikit-Learn & PyTorch Basics',
        level: 'Working Knowledge',
        context: 'Model training loops, evaluation metrics, and confusion matrix diagnostics',
      },
      {
        name: 'REST APIs & JSON Modeling',
        level: 'Proficient',
        context: 'Client-server contracts, error handling, and async data fetching',
      },
    ],
  },
  {
    id: 'other',
    index: '03',
    title: 'Other Relevant Skills',
    subtitle: 'Analytical, collaborative, and communication capabilities.',
    items: [
      {
        name: 'Data Structures & Problem Solving',
        level: 'Core Practice',
        context: 'Graph traversal, dynamic programming, and time-space complexity analysis',
      },
      {
        name: 'UI/UX Wireframing',
        level: 'Core Practice',
        context: 'Information hierarchy, user flow mapping, and interactive prototyping',
      },
      {
        name: 'Technical Documentation',
        level: 'Core Practice',
        context: 'Architecture write-ups, README authoring, and structured lab reports',
      },
      {
        name: 'Agile Team Collaboration',
        level: 'Core Practice',
        context: 'Sprint task breakdown, peer code reviews, and milestone tracking',
      },
      {
        name: 'Presentation & Communication',
        level: 'Core Practice',
        context: 'Explaining technical trade-offs clearly to peers and faculty reviewers',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'campus-route',
    title: 'CampusRoute — Smart Transit & Building Pathfinder',
    category: 'Academic',
    year: '2026',
    role: 'Lead Developer & UI Architect',
    image: '/src/assets/images/project_campus_transit_1794845484935.jpg',
    imageAlt: 'Laptop displaying the CampusRoute building pathfinder interface on a stone bench',
    summary:
      'An interactive campus navigation web application computing shortest accessible walking routes between lecture halls, laboratories, and libraries.',
    description:
      'Built to help incoming students and visitors navigate multi-block university grounds efficiently. CampusRoute models campus walkways as a weighted graph and computes optimal paths with step-free accessibility preferences.',
    architecture: [
      'Implemented Dijkstra shortest-path traversal over 48 mapped campus nodes and weighted pedestrian edges.',
      'Added accessible-only route filtering to prioritize ramps, covered walkways, and elevator-connected corridors.',
      'Designed a high-contrast two-pane interface displaying live route distance, estimated walking minutes, and turn steps.',
    ],
    stack: ['TypeScript', 'React', 'Graph Algorithms', 'Tailwind CSS', 'Vite'],
    outcome: '2nd Place at Campus Civic-Tech Hackathon · Validated across 48 campus landmarks',
    repoUrl: 'https://github.com/hasini-thatavarthy/campus-route',
    demoFocus: 'Graph Pathfinding & Accessibility',
  },
  {
    id: 'term-grid',
    title: 'TermGrid — Academic Semester & Study Planner',
    category: 'Web Systems',
    year: '2026',
    role: 'Full-Stack Designer & Developer',
    image: '/src/assets/images/project_academic_planner_1794845486389.jpg',
    imageAlt: 'Desktop monitor displaying the TermGrid academic semester planner and weekly study breakdown',
    summary:
      'A structured weekly workload and exam milestone planner built for engineering students to balance lectures, lab submissions, and revision hours.',
    description:
      'TermGrid replaces scattered spreadsheets with a unified weekly schedule grid, course-by-course study hour tracking, and upcoming midterm countdowns—persisting user schedules locally with zero account friction.',
    architecture: [
      'Structured a deterministic weekly time-blocking matrix with conflict detection across overlapping lab slots.',
      'Built custom SVG activity bars and course hour progress indicators using tabular numeric alignment.',
      'Implemented instant client-side persistence and printable semester summaries for advisor check-ins.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage API'],
    outcome: 'Adopted by 35+ classmates during midterm revision cycles',
    repoUrl: 'https://github.com/hasini-thatavarthy/term-grid',
    demoFocus: 'Productivity & Data Visualization',
  },
  {
    id: 'leaf-scan',
    title: 'LeafScan — Botanical Species & Health Classifier',
    category: 'AI & Data',
    year: '2025',
    role: 'ML Pipeline & Evaluation Lead',
    image: '/src/assets/images/project_vision_diagnostics_1794845486227.jpg',
    imageAlt: 'Monitor displaying LeafScan precision-recall curves and botanical leaf segmentation grid',
    summary:
      'A computer vision classification pipeline that identifies plant species from leaf scans and highlights visual indicators of early foliar stress.',
    description:
      'Developed as an applied machine learning academic project to evaluate lightweight convolutional architectures alongside clear model diagnostics—presenting precision-recall curves, confusion matrices, and leaf segmentation previews.',
    architecture: [
      'Preprocessed and augmented 2,400+ leaf specimen images using OpenCV threshold masking and contour isolation.',
      'Fine-tuned a lightweight ResNet backbone in PyTorch achieving 0.967 macro-average AUC across 4 target classes.',
      'Exposed inference predictions and confidence breakdowns through a clean FastAPI endpoint.',
    ],
    stack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Scikit-Learn'],
    outcome: '96.7% AUC on validation split · Presented at Departmental ML Showcase',
    repoUrl: 'https://github.com/hasini-thatavarthy/leaf-scan',
    demoFocus: 'Computer Vision & Diagnostics',
  },
  {
    id: 'clear-ledger',
    title: 'ClearLedger — Student Expense & Budget Analyzer',
    category: 'Web Systems',
    year: '2025',
    role: 'Sole Developer',
    image: '/src/assets/images/project_ledger_analytics_1794845487321.jpg',
    imageAlt: 'Tablet resting on concrete displaying the ClearLedger expense table and category breakdown',
    summary:
      'A lightweight personal finance ledger helping students log monthly expenses, track category limits, and review spending patterns with tabular precision.',
    description:
      'ClearLedger emphasizes financial clarity through clean monochrome tables, strict tabular numeral alignment, and automated monthly category rollups for housing, meals, transit, and academic supplies.',
    architecture: [
      'Designed normalized SQLite tables for transactions, recurring bills, and monthly category budgets.',
      'Built Express REST endpoints with server-side validation and CSV statement export.',
      'Crafted a keyboard-friendly entry ledger and clean horizontal category comparison bars.',
    ],
    stack: ['TypeScript', 'Node.js', 'Express', 'SQLite', 'React'],
    outcome: 'Sub-50ms query rollups across 1,000+ sample ledger entries',
    repoUrl: 'https://github.com/hasini-thatavarthy/clear-ledger',
    demoFocus: 'Relational Modeling & REST APIs',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'cert-google-cloud',
    category: 'Certifications',
    year: '2025',
    title: 'Google Cloud Computing Foundations & GenAI Basics',
    issuer: 'Google Cloud Skills Boost',
    credentialNote: 'Verified Completion Credential',
    description:
      'Completed hands-on cloud infrastructure, networking, IAM fundamentals, and foundational generative AI application labs.',
  },
  {
    id: 'cert-meta-frontend',
    category: 'Certifications',
    year: '2025',
    title: 'Meta Front-End Developer — React & UI Design',
    issuer: 'Coursera / Meta',
    credentialNote: 'Course Certificate with Capstone',
    description:
      'Completed structured modules covering semantic HTML, responsive CSS grid architectures, accessible React components, and version control.',
  },
  {
    id: 'cert-nptel-java',
    category: 'Certifications',
    year: '2024',
    title: 'Programming in Java (Elite + Silver)',
    issuer: 'NPTEL · IIT Kharagpur',
    credentialNote: 'Top 5% Proctored Exam Score',
    description:
      'Earned Elite + Silver certification covering object-oriented architecture, multithreading, collections, and exception handling in Java.',
  },
  {
    id: 'award-deans-list',
    category: 'Awards',
    year: '2025',
    title: "Dean's Academic Merit Recognition",
    issuer: 'School of Engineering & Technology',
    credentialNote: 'Top 5% Cohort Standing',
    description:
      'Recognized for sustained academic excellence across core Computer Science theory and laboratory coursework.',
  },
  {
    id: 'award-hackathon',
    category: 'Awards',
    year: '2025',
    title: '2nd Place — Campus Civic-Tech Hackathon',
    issuer: 'University Innovation Cell',
    credentialNote: '24-Hour Build Sprint · Team Lead',
    description:
      'Awarded runner-up among 42 competing teams for designing and shipping the CampusRoute accessible pathfinder prototype.',
  },
  {
    id: 'part-acm',
    category: 'Participation',
    year: '2024 — Present',
    title: 'Active Member & Peer Study Mentor',
    issuer: 'University ACM Student Chapter',
    credentialNote: 'Weekly Algorithms & Web Workshops',
    description:
      'Co-facilitate introductory peer sessions on Git workflows, React fundamentals, and graph traversal problem sets for first-year students.',
  },
  {
    id: 'part-symposium',
    category: 'Participation',
    year: '2025',
    title: 'Student Web Coordinator — Annual Tech Symposium',
    issuer: 'Department of Computer Science & Engineering',
    credentialNote: 'Event Portal & Schedule Ops',
    description:
      'Coordinated the department symposium microsite, session schedules, and participant registration workflows for 300+ attendees.',
  },
];
