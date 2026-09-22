type Profile = {
  name: string
  role: string
  about: string[]
  location: string
  email: string
  githubUrl: string
  linkedinUrl: string
  availableForWork: boolean
}

export const profile: Profile = {
  name: 'Ariel Devananda',
  role: 'Full-Stack Developer & AI Engineer',
  about: [
    'I am a final-year Information Systems student and developer based in Indonesia, focused on full-stack development and applied AI engineering.',
    'My recent work includes AI-powered platforms involving responsive interfaces, REST APIs, LLM integration, streaming responses, authentication, reporting, and PostgreSQL database optimization.',
  ],
  location: 'Yogyakarta, Indonesia',
  email: 'arielruliyadi@gmail.com',
  githubUrl: 'https://github.com/ArielDevananda',
  linkedinUrl: 'https://www.linkedin.com/in/ariel-devananda/',
  availableForWork: true,
}
