export const siteConfig = {
  name: 'Sagar Pandya',
  initials: 'SP',
  role: 'Software Quality Engineer',
  tagline: 'SDET · AI Engineer · Quality Architect',
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
  { value: '4+', label: 'Years Experience' },
  { value: '90%', label: 'Automation Coverage' },
  { value: '3', label: 'AI Agents Shipped' },
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
    tag: 'Fleet · Coming Soon',
    tagVariant: 'amber' as const,
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
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 65 },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Selenium', level: 92 },
      { name: 'Appium', level: 80 },
      { name: 'REST Assured', level: 88 },
    ],
  },
  {
    title: 'AI & LLMs',
    skills: [
      { name: 'Claude API', level: 82 },
      { name: 'Gemini API', level: 70 },
      { name: 'LLM Evals', level: 75 },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'GitHub Actions', level: 85 },
      { name: 'Docker', level: 68 },
      { name: 'Postman', level: 90 },
    ],
  },
]

export const experience = [
  {
    company: 'Saviynt',
    period: '2023 — Present',
    industryTag: 'Identity Security',
    role: 'Software Quality Engineer',
    description:
      'PAM team. Leading QE for JIT access feature across 25.Amsterdam & 25.Chicago releases. 90% automation coverage across API and UI layers. CI/CD shift-left strategy, customer escalation support, and cross-team onboarding enablement.',
  },
  {
    company: 'Scale AI',
    period: '2022 — 2023',
    industryTag: 'AI / Data Quality',
    role: 'LLM Quality Validator',
    description:
      'LLM training data quality validation. Designed evaluation frameworks for model output accuracy, prompt testing, and response quality assessment — directly informing model training pipelines across multiple providers.',
  },
  {
    company: 'Informatica',
    period: 'Earlier',
    industryTag: 'Data Integration',
    role: 'SDET',
    description:
      'Automation framework development, API testing, and quality engineering across enterprise data integration products. Built the foundation in large-scale data pipeline validation.',
  },
]
