# Ariel Devananda - Portfolio

Personal portfolio website showcasing my work in full-stack development and
applied AI engineering.

## About

I am a final-year Information Systems student and developer based in Indonesia,
focused on full-stack development and applied AI engineering. I build
responsive interfaces, backend services, intelligent integrations, APIs, and
database-driven applications. My recent experience includes an AI Engineer
internship culminating in the WealthVision AI capstone project.

## Features

- Responsive portfolio layout
- Accessible semantic HTML
- Mobile navigation
- Dark and light themes with saved user preference
- Featured projects with View All controls
- Full-stack and AI engineering skill groups
- Experience, education, and achievements timeline
- Email, GitHub, and LinkedIn contact links
- SEO and social metadata

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- ESLint

## Getting Started

1. Install dependencies with `npm install`.
2. Start development with `npm run dev`.
3. Run ESLint with `npm run lint`.
4. Create a production build with `npm run build`.
5. Preview production with `npm run preview`.

## Deployment

For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist`

## Project Structure

- `src/components` contains reusable UI components.
- `src/sections` contains page sections.
- `src/data` contains editable portfolio content.
- `public` contains the CV, favicon, project images, and crawler configuration.

## Updating Content

Update portfolio content through:

- `src/data/portfolio.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/timeline.ts`

Projects and timeline entries are displayed only when their `published` value
is set to `true`.

## Contact

- GitHub: https://github.com/ArielDevananda
- LinkedIn: https://linkedin.com/in/arielruliyadi
- Email: arielruliyadi@gmail.com

## License

This project is intended as a personal portfolio. Please do not reuse personal
content, identity, or project information without permission.
