# Sagar Pandya — Portfolio

Personal portfolio site built with Next.js 14, TypeScript, and CSS Modules. Deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Bebas Neue, JetBrains Mono, DM Sans
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Customisation

All content lives in one place — `src/lib/data.ts`. Update your name, roles, projects, skills, experience, and contact details there. No need to touch the components.

### Adding a resume

Drop your resume PDF into the `public/` folder as `resume.pdf`. The Resume button in the nav and the Download CV button in the hero will link to it automatically.

### Adding a new project

In `src/lib/data.ts`, add an entry to the `projects` array:

```ts
{
  tag: 'Your Tag',
  tagVariant: 'teal', // or 'amber'
  industry: 'Industry Label',
  title: 'PROJECT TITLE',
  description: 'Project description...',
  stack: ['Tech1', 'Tech2'],
  href: 'https://github.com/your-repo',
  active: true,
}
```

## Deployment on Vercel

### First time

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import your repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `your-project.vercel.app`

### Subsequent deployments

Just push to `main` — Vercel auto-deploys on every push.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # design tokens + global styles
│   ├── layout.tsx        # root layout + metadata
│   └── page.tsx          # main page — wires all sections
├── components/
│   ├── Nav.tsx           # sticky navigation
│   ├── Hero.tsx          # hero / about section
│   ├── Projects.tsx      # projects grid
│   ├── Skills.tsx        # skills groups
│   ├── Experience.tsx    # career timeline
│   ├── Contact.tsx       # contact form + links
│   └── Footer.tsx        # footer
└── lib/
    └── data.ts           # all content — edit this file
```
