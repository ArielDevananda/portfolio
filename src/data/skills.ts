type SkillGroup = {
  id: string
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
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
    title: 'AI Engineering & Integration',
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
    title: 'Data & Databases',
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
    title: 'Tools & Delivery',
    skills: [
      'Git',
      'GitHub',
      'Figma',
    ],
  },
]
