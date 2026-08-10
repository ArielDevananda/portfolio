export type Profile = {
  name: string
  role: string
  introduction: string
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
  location: 'Indonesia',
  email: 'arielruliyadi@gmail.com',
  githubUrl: 'https://github.com/ArielDevananda',
  linkedinUrl: 'https://linkedin.com/in/arielruliyadi',
  cvPath: '/cv-ariel-devananda.pdf',
  availableForWork: true,
}