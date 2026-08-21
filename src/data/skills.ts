export type SkillGroup = {
  id: string
  number: string
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'full-stack',
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building complete web applications from responsive interfaces to secure backend services.',
    skills: [
      'PHP',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Flask',
      'Laravel',
      'REST APIs',
    ],
  },
  {
    id: 'ai-engineering',
    number: '02',
    title: 'AI Engineering & Integration',
    description:
      'Integrating generative AI into reliable, responsive, and user-focused applications.',
    skills: [
      'Python',
      'Generative AI',
      'LLM Integration',
      'RAG',
      'Prompt Engineering',
      'Fallback Handling',
    ],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Databases',
    description:
      'Designing and optimizing relational data for reliable applications.',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Relational Schema',
      'Query Optimization',
      'Connection Pooling',
    ],
  },
  {
    id: 'tools',
    number: '04',
    title: 'Tools & Delivery',
    description:
      'Maintaining code quality and delivering applications to production.',
    skills: [
      'Git',
      'GitHub',
      'Figma',
    ],
  },
]
