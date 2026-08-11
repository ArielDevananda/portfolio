export type SkillGroup = {
  id: string
  number: string
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend',
    description:
      'Building responsive, accessible, and maintainable user interfaces.',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend',
    description:
      'Designing APIs, application logic, authentication, and integrations.',
    skills: [
      'Python',
      'Flask',
      'REST APIs',
      'Authentication',
      'Server-Sent Events',
      'AI Integration',
    ],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data',
    description:
      'Structuring and optimizing relational data for reliable applications.',
    skills: [
      'PostgreSQL',
      'SQL',
      'Relational Schema',
      'Query Optimization',
      'Connection Pooling',
    ],
  },
  {
    id: 'tools',
    number: '04',
    title: 'Tools & Workflow',
    description:
      'Maintaining code quality and an organized development workflow.',
    skills: ['Git', 'GitHub', 'Vite', 'ESLint', 'Technical Documentation'],
  },
]