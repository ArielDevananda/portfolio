type ProjectCategory =
  | 'Full-Stack + AI'
  | 'Full-Stack'
  | 'AI Engineering'
  | 'Frontend'
  | 'Backend'
  | 'Android application'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  contribution?: string
  outcome?: string
  technologies: string[]
  imagePath?: string
  imageWidth?: number
  imageHeight?: number
  githubUrl?: string
  liveUrl?: string
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
    outcome: 'Completed as the capstone project for my AI Engineer internship at SmartBridge Academy. Source code is available below.',
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
    imageWidth: 1912,
    imageHeight: 1485,
    githubUrl: 'https://github.com/ArielDevananda/Capstone-Project-AI-Finance-App',
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
    published: false,
  },
  {
    id: 'edukids-learning-app',
    title: 'EduKids Learning App',
    category: 'Android application',
    description:
      'EduKids is an interactive Android learning application for children, featuring on-device machine learning for real-time object recognition, gamified educational activities, and progress tracking to create an engaging and child-friendly learning experience.',
    technologies: ['Kotlin', 'Mobile App'],
    imagePath: '/images/projects/edukids.webp',
    imageWidth: 736,
    imageHeight: 612,
    published: true,
  },
]
