export type ProjectCategory =
  | 'Full-Stack + AI'
  | 'Full-Stack'
  | 'AI Engineering'
  | 'Frontend'
  | 'Backend'

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
    category: 'Full-Stack + AI',
    description:
      'A personal financial assistant powered by Generative AI that helps users manage and understand their finances. Built as the capstone project during an AI Engineer internship.',
    contribution:
      'Led the full-stack implementation: built seven responsive finance pages, bilingual UI, CSV import/export, and PDF reports; designed Flask REST APIs with authentication, AI streaming, fallback handling, and budget notifications; and optimized a six-table PostgreSQL database.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Python',
      'Flask',
      'PostgreSQL',
      'Generative AI',
      'LLM Integration',
    ],
    imagePath: '/images/projects/wealthvision-ai.webp',
    githubUrl: 'https://github.com/ArielDevananda/Capstone-Project-AI-Finance-App',
    featured: true,
    published: true,
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    category: 'Full-Stack',
    description:
      'Jelaskan tujuan aplikasi dan manfaat utamanya bagi pengguna.',
    contribution:
      'Jelaskan tanggung jawab dan keputusan teknis yang Anda kerjakan.',
    technologies: ['React', 'JavaScript', 'Express', 'MySQL'],
    featured: false,
    published: true,
  },
  {
    id: 'edukids-learning-app',
    title: 'EduKids Learning App',
    category: 'Frontend',
    description:
      'EduKids is an interactive Android learning application for children, featuring on-device machine learning for real-time object recognition, gamified educational activities, and progress tracking to create an engaging and child-friendly learning experience.',
    contribution:
      'Jelaskan bagian UI, integrasi API, accessibility, atau testing yang Anda kerjakan.',
    technologies: ['Kotlin', 'Mobile App'],
    imagePath: '/images/projects/edukids.webp',
    featured: true,
    published: true,
  },
]
