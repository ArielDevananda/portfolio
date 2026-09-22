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
- Editorial rows for experience, education, and achievements
- Email, GitHub, and LinkedIn contact links
- SEO and social metadata
- Lucide icons imported individually for navigation and action links
- Light Lenis wheel smoothing, with native touch scrolling and a reduced-motion fallback

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
- `public` contains the favicon, original project images, and crawler configuration.

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
- LinkedIn: https://www.linkedin.com/in/ariel-devananda/

## Editorial design and content notes

The light theme uses warm off-white, charcoal text, and a deep blue accent.
The existing theme preference is retained; new visitors start in the light theme.
Work appears directly after the introduction, with WealthVision AI featured
because its screenshot, contribution, and repository are available.
Original section anchors and published certificate URLs are retained.

Content still needed before adding further claims or links:

- The CV file is absent. Add it as `public/cv-ariel-devananda.pdf`
  before adding a download link.
- EduKids needs a confirmed personal contribution, technical decisions,
  verifiable outcome, and a repository or demo URL. Its existing description
  and original screenshot remain visible.
- Habit Tracker and unpublished timeline placeholders remain unpublished.
- No separate design reference screenshot accompanied the written brief.

Validation performed for the redesign: production build, ESLint, browser
inspection at 375px, 768px, and 1440px, overflow checks, image loading,
internal anchors, mobile navigation, Escape focus return, and theme persistence.
External repository and certificate destinations were preserved, not audited.

Lenis is initialized in `src/hooks/useSmoothScroll.ts` with `lerp: 0.18`,
`syncTouch: false`, and anchor support. It is destroyed when reduced motion
is requested and recreated if the preference changes back. Cleanup also runs
on unmount, including React Strict Mode's development remount.
Native anchor hashes and the keyboard skip link are retained.

The scroll integration was checked in the browser's actual reduced-motion mode
and in an isolated temporary page emulating the normal preference, including
wheel scrolling, anchor offsets, live preference changes, and keyboard navigation.
Touch behavior is configured as native; it has not been tested on a physical phone.
- Email: arielruliyadi@gmail.com

## License

This project is intended as a personal portfolio. Please do not reuse personal
content, identity, or project information without permission.
