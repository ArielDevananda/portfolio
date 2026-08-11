export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Backend'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  contribution: string
  technologies: string[]
  imagePath?: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  published: boolean
}

export const projects: Project[] = [
  {
    id: 'wealthvision-ai',
    title: 'WealthVision AI',
    category: 'Full Stack',
    description:
      'A personal financial assistant powered by Generative AI that helps users manage and understand their finances. Built as the capstone project for an AI Engineer course.',
    contribution:
      'Led the full-stack implementation: built seven responsive finance pages, bilingual UI, CSV import/export, and PDF reports; designed Flask REST APIs with authentication, AI streaming, fallback handling, and budget notifications; and optimized a six-table PostgreSQL database.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Flask',
      'PostgreSQL',
      'Git',
    ],
    featured: true,
    published: true,
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    category: 'Full Stack',
    description:
      'Jelaskan tujuan aplikasi dan manfaat utamanya bagi pengguna.',
    contribution:
      'Jelaskan tanggung jawab dan keputusan teknis yang Anda kerjakan.',
    technologies: ['React', 'JavaScript', 'Express', 'MySQL'],
    featured: false,
    published: false,
  },
  {
    id: 'project-three',
    title: 'Nama Proyek Ketiga',
    category: 'Frontend',
    description:
      'Jelaskan pengalaman pengguna atau masalah antarmuka yang diselesaikan.',
    contribution:
      'Jelaskan bagian UI, integrasi API, accessibility, atau testing yang Anda kerjakan.',
    technologies: ['React', 'TypeScript', 'CSS'],
    featured: false,
    published: false,
  },
]