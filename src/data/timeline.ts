export type TimelineCategory =
  | 'Experience'
  | 'Education'
  | 'Certification'

export type TimelineItem = {
  id: string
  category: TimelineCategory
  title: string
  organization: string
  period: string
  location?: string
  summary: string
  highlights: string[]
  published: boolean
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'sekolah-menengah-akhir',
    category: 'Education',
    title: 'Jurusan Bahasa',
    organization: 'SMAK Sang Timur Yogyakarta',
    period: '2020 - 2023',
    location: 'Indonesia',
    summary:
      'Studying the structure of foreign languages, literature, and social and cultural sciences such as anthropology to understand the customs and ways of life of people in various parts of the world.',
    highlights: [
      'Studied English and Japanese languages, literature, and cultural studies.',
      'Served as MPK and Deputy MPK, contributing to student governance and extracurricular activities.',
    ],
    published: true,
  },
  {
    id: 'university',
    category: 'Education',
    title: 'Information Systems Student',
    organization: 'Universitas Amikom Yogyakarta',
    period: '2023 - Present',
    location: 'Indonesia',
    summary:
      'Studied Information Systems with a focus on system analysis, software development, databases, business processes, and IT project management.',
    highlights: [
      'Applied system analysis and software development concepts through academic and independent projects.',
      'Built KidsEducation with Kotlin and a port management application with CodeIgniter 3.',
      'Built KreasiKan, an AI-powered SaaS platform for content creation using Next.js.',
    ],
    published: true,
  },
  {
    id: 'juara-3-gemasi-kategori-pemrograman-2025',
    category: 'Certification',
    title: 'Lomba GEMASI',
    organization: 'GEMASI (Gelar Karya Mahasiswa Sistem Informasi)',
    period: '21 Januari 2025',
    summary:
      'Solve 10 programming logic problems in 90 minutes, demonstrating proficiency in algorithms and problem-solving.',
    highlights: [
      'Using the C++ programming language',
    ],
    published: true,
  },
  {
    id: 'juara-2-arcadia-award-kategori-bisnis-digital-dan-fintech-2026',
    category: 'Certification',
    title: 'Lomba ARCADIA Award 2026',
    organization: 'Fakultas Ilmu Komputer Universitas Amikom Yogyakarta',
    period: '10 Februari 2026',
    summary:
      'Developing Kreasikan, a SaaS-based application that leverages AI technology to automate the content production process for SMEs and content creators in Indonesia.',
    highlights: [
      'Built an AI-powered SaaS platform for automated content creation.',
      'Developed AI content generation, workflow automation, and project management features.',
    ],
    published: true,
  },
  {
    id: 'ai-engineer-course',
    category: 'Certification',
    title: 'AI Engineer Program',
    organization: 'SmartBridge Academy',
    period: '9 March 2026 - 31 July 2026',
    summary:
      'Completed an AI engineering program culminating in the WealthVision AI capstone project.',
    highlights: [
      'Built WealthVision, an AI-powered financial application.',
      'Integrated AI streaming, backend APIs, and PostgreSQL.',
    ],
    published: true,
  },
  {
    id: 'professional-experience',
    category: 'Experience',
    title: 'Nama Posisi atau Pengalaman',
    organization: 'Nama Perusahaan atau Organisasi',
    period: 'Bulan Tahun - Bulan Tahun',
    location: 'Lokasi atau Remote',
    summary:
      'Jelaskan tanggung jawab dan konteks pekerjaan secara singkat.',
    highlights: [
      'Tuliskan kontribusi atau hasil pertama.',
      'Tuliskan kontribusi atau hasil kedua.',
    ],
    published: false,
  },
]