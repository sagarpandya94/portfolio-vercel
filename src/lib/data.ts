export const siteConfig = {
  name: 'Sagar Pandya',
  initials: 'SP',
  role: 'Software Quality Engineer',
  tagline: 'SDET who builds AI agents, not just tests them.',
  description:
    'Quality engineering for SaaS products where system reliability, data integrity, and compliance carry real weight. 4+ years building AI-integrated test systems across data, identity, and health domains — from pipeline validation to LLM quality to mobile automation.',
  contact: {
    email: 'sagarpandya94@gmail.com',
    github: 'https://github.com/sagarpandya94',
    linkedin: 'https://linkedin.com/in/sagarpandya94',
    githubHandle: 'github.com/sagarpandya94',
    linkedinHandle: 'linkedin.com/in/sagarpandya94',
  },
  contactBlurb:
    "Open to senior SDET, Software Quality Engineer, and AI tooling roles at SaaS companies where reliability and data integrity are non-negotiable. Let's build something where quality actually matters.",
}

export const stats = [
  { value: '5', label: 'Years Experience' },
  { value: '90%', label: 'Automation Coverage' },
  { value: '4', label: 'AI Agents Shipped' },
  { value: '80+', label: 'Mobile Tests' },
]

export const industryTags = [
  'Data Integrity',
  'AI-Integrated Testing',
  'Compliance-Critical Systems',
  'High-Stakes SaaS',
]

export const philosophyBlocks = [
  {
    icon: '◎',
    title: 'Correctness Over Coverage',
    description:
      "Testing strategies built around what actually fails in production — not what's easiest to automate. Every suite is designed to catch the bugs that matter before they reach users.",
  },
  {
    icon: '◈',
    title: 'Shift-Left By Design',
    description:
      'Validation and automation baked into the pipeline from day one — not bolted on after. CI/CD-native quality engineering that gives teams confidence to ship fast without breaking things.',
  },
]

export const projects = [
  {
    tag: 'Healthcare · AI',
    tagVariant: 'teal' as const,
    industry: 'Health Data Intelligence',
    title: 'OURA AI AGENT',
    description:
      'Multi-agent health data validation system built on the Oura wearable API. Validates sleep, HRV, and activity telemetry using Claude & Gemini strategy pattern. HealthAgent, ToolCallingAgent, and MemoryAgent with full CI/CD.',
    stack: ['Python', 'Claude API', 'PyTest', 'Appium', 'React Native'],
    href: 'https://github.com/sagarpandya94/oura-ai-agent',
    active: true,
  },
  {
    tag: 'Security · AI',
    tagVariant: 'teal' as const,
    industry: 'NHI Security',
    title: 'AGENT-PAM',
    description:
      'PAM (Privileged Access Management) for AI agents — a proof-of-concept governance layer for Claude agents accessing privileged infrastructure. JIT credential checkout, policy enforcement, prompt injection detection, full audit trail with session replay, and a React dashboard for vault admin and agent dispatch.',
    stack: ['Python', 'FastAPI', 'Claude API', 'React', 'Tailwind', 'Docker', 'SQLite'],
    href: 'https://github.com/sagarpandya94/agent-pam',
    active: true,
  },
  {
    tag: 'Mobile · Testing',
    tagVariant: 'teal' as const,
    industry: 'Health App Automation',
    title: 'OURA MOCK APP',
    description:
      'React Native health dashboard mock with 80+ Appium mobile tests validating patient-facing UI flows. Page Object Model architecture, HTML reporting, and full CI/CD integration.',
    stack: ['React Native', 'Appium', 'Java', 'JUnit'],
    href: 'https://github.com/sagarpandya94/oura-mock-app',
    active: true,
  },
  {
    tag: 'API · Java',
    tagVariant: 'amber' as const,
    industry: 'API Test Automation',
    title: 'REST ASSURED SPOTIFY',
    description:
      'End-to-end REST Assured framework testing Spotify APIs from scratch — OAuth2 auth flow, playlist and track endpoints, schema validation, and reusable request specs built in pure Java.',
    stack: ['Java', 'REST Assured', 'TestNG', 'Maven'],
    href: 'https://github.com/sagarpandya94/RestAssuredFramework-Spotify',
    active: true,
  },
  {
    tag: 'E2E · BDD',
    tagVariant: 'amber' as const,
    industry: 'UI Test Automation',
    title: 'CYPRESS AUTOMATION',
    description:
      'Cypress + Cucumber BDD automation suite for an ecommerce web app. Gherkin feature files, custom commands, and HTML reporting — full end-to-end coverage of critical purchase flows.',
    stack: ['Cypress', 'JavaScript', 'Cucumber', 'Gherkin'],
    href: 'https://github.com/sagarpandya94/CypressAutomation',
    active: true,
  },
  {
    tag: 'React · Full Stack',
    tagVariant: 'amber' as const,
    industry: 'Web Application',
    title: 'TOOLSHARE',
    description:
      'Collaborative React web app built at SF State for peer-to-peer tool sharing. Features user listings, request flows, and a full PR-driven development workflow with 10 merged pull requests.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/sagarpandya94/toolshare',
    active: true,
  },
  {
    tag: 'Fleet · Coming Soon',
    tagVariant: 'teal' as const,
    industry: 'Fleet Management SaaS',
    title: 'FLEET TELEMETRY QA',
    description:
      'Vehicle event data validation framework — real-time telemetry testing, GPS accuracy assertions, and SLA uptime verification for fleet dispatch systems.',
    stack: ['Python', 'PyTest', 'Kafka', 'REST Assured'],
    href: '#',
    active: false,
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 65 },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'PyTest', level: 85 },
      { name: 'REST Assured', level: 90 },
      { name: 'Selenium', level: 70 },
      { name: 'Cypress', level: 80 },
      { name: 'Appium', level: 80 },
    ],
  },
  {
    title: 'AI & LLMs',
    skills: [
      { name: 'Kiro CLI', level: 90 },
      { name: 'Claude', level: 95 },
      { name: 'LLM Evals', level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Postman', level: 90 },
      { name: 'Jira', level: 90 },
      { name: 'Jenkins', level: 80 },
      { name: 'GitLab', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Perforce', level: 75 },
      { name: 'Confluence', level: 80 },
      { name: 'FastAPI', level: 75 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Azure CosmosDB', level: 85 },
      { name: 'AWS DocumentDB', level: 80 },
      { name: 'Elasticsearch', level: 75 },
      { name: 'AWS DynamoDB', level: 80 },
    ],
  },
]

export const experience = [
  {
    company: 'Saviynt',
    period: 'Jul 2024 — Present',
    industryTag: 'Identity Security',
    role: 'Software Quality Engineer 3',
    description:
      'PAM team. Leading QE for JIT access feature across 25.Amsterdam & 25.Chicago releases. 90% automation coverage across API and UI layers. CI/CD shift-left strategy, customer escalation support, and cross-team onboarding enablement.',
  },
  {
    company: 'Scale AI',
    period: 'Mar 2024 — May 2024',
    industryTag: 'AI / Data Quality',
    role: 'LLM Quality Validator',
    description:
      'LLM training data quality validation. Designed evaluation frameworks for model output accuracy, prompt testing, and response quality assessment — directly informing model training pipelines across multiple providers.',
  },
  {
    company: 'Informatica',
    period: 'Apr 2021 - Dec 2023',
    industryTag: 'Data Integration',
    role: 'SDET',
    description:
      'Automation framework development, API testing, and quality engineering across enterprise data integration products. Built the foundation in large-scale data pipeline validation.',
  },
]
