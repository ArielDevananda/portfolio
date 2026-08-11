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
  availableForWork: boolean
}

export const profile: Profile = {
  name: 'Ariel Devananda',
  role: 'Full Stack Developer',
  introduction: 
  'I build responsive and accessible full-stack web applications, from user-friendly interfaces to reliable backend services.',
  about: [
  'I am a final-year student and full-stack developer based in Indonesia. I enjoy turning ideas into complete web applications, from accessible interfaces to backend services and databases.',
  'My recent work includes an AI-powered financial platform involving responsive interfaces, REST APIs, real-time streaming, authentication, reporting, and PostgreSQL database optimization.',],
  location: 'Indonesia',
  email: 'arielruliyadi@gmail.com',
  githubUrl: 'https://github.com/ArielDevananda',
  linkedinUrl: 'https://linkedin.com/in/arielruliyadi',
  cvPath: '/cv-ariel-devananda.pdf',
  availableForWork: true,
}