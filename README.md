# AI Portfolio Site

Personal developer portfolio showcasing a 10-week AI project series focused on DevOps, SRE, and infrastructure automation.

**Live:** [Deployed on Vercel](#) *(link updated after deployment)*

## Overview

A single-page portfolio built to present 10 standalone projects, each shipped weekly between Apr 13 – Jun 21, 2025. The site serves as the central hub linking to each project's live demo and source code.

### Sections

- **Hero** — Introduction with name, role, and call-to-action links
- **About** — Background, focus areas, and skills grouped by category (Cloud & Infra, DevOps & SRE, Languages, AI & Tools)
- **Projects** — Card grid for all 10 weekly projects with status indicators, descriptions, tags, and repo links
- **Contact** — Email, GitHub, and LinkedIn links

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Typography:** Geist Sans & Geist Mono (via `next/font`)
- **Hosting:** Vercel (free tier)
- **Language:** TypeScript

## Project Structure

```
app/
  layout.tsx        # Root layout with fonts and metadata
  page.tsx          # Home page composing all sections
  globals.css       # Global styles and Tailwind config
components/
  header.tsx        # Sticky nav with mobile menu
  hero.tsx          # Landing section
  about.tsx         # Bio and skills grid
  projects.tsx      # 10-project card grid with status badges
  contact.tsx       # Contact links
  footer.tsx        # Copyright footer
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

### Build

```bash
npm run build     # Production build
npm run start     # Serve production build locally
npm run lint      # Run ESLint
```

## Part of the 10-Week AI Project Series

| Week | Project |
|------|---------|
| 1 | **AI Portfolio Site** *(this repo)* |
| 2 | AI Data Dashboard |
| 3 | Cybersecurity Scanner |
| 4 | Skills & MCP Dashboard |
| 5 | IaC Generator (NL to Terraform) |
| 6 | RAG Knowledge Base |
| 7 | Changelog Generator |
| 8 | CLI Tool (npm package) |
| 9 | Multi-Model Arena |
| 10 | DevOps Incident Dashboard |

## License

MIT
