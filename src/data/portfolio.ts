export type Profile = {
  name: string
  role: string
  introduction: string
  about: string[]
  location: string
  email: string
  githubUrl: string
  linkedinUrl: string
  cvPath: string
  experienceStartYear: number
  availableForWork: boolean
}

export const profile: Profile = {
  name: 'Ariel Devananda',
  role: 'Full-Stack Developer & AI Engineer',
  introduction:
    'I build full-stack and AI-powered web applications, combining accessible interfaces, reliable backend services, intelligent features, and well-structured data.',
  about: [
    'I am a final-year Information Systems student and developer based in Indonesia, focused on full-stack development and applied AI engineering.',
    'My recent work includes AI-powered platforms involving responsive interfaces, REST APIs, LLM integration, streaming responses, authentication, reporting, and PostgreSQL database optimization.',
  ],
  location: 'Yogyakarta, Indonesia',
  email: 'arielruliyadi@gmail.com',
  githubUrl: 'https://github.com/ArielDevananda',
  linkedinUrl: 'https://linkedin.com/in/arielruliyadi',
  cvPath: '/cv-ariel-devananda.pdf',
  experienceStartYear: 2023,
  availableForWork: true,
}
