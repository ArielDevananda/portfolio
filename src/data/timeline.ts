type TimelineCategory =
  | 'Experience'
  | 'Education'
  | 'Certification'
  | 'Award'

type TimelineItem = {
  id: string
  category: TimelineCategory
  title: string
  organization: string
  period: string
  location?: string
  summary: string
  highlights: string[]
  published: boolean
  certificateUrl?: string
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'university',
    category: 'Education',
    title: 'Information Systems Student',
    organization: 'Universitas Amikom Yogyakarta',
    period: '2023 – Present',
    location: 'Indonesia',
    summary:
      'Studying Information Systems with a focus on system analysis, software development, databases, business processes, and IT project management.',
    highlights: [
      'Applied system analysis and software development concepts through academic and independent projects.',
      'Built KidsEducation with Kotlin and a port management application with CodeIgniter 3.',
      'Built KreasiKan, an AI-powered SaaS platform for content creation using Next.js.',
    ],
    published: true,
  },
  {
    id: 'ai-engineer-internship',
    category: 'Experience',
    title: 'AI Engineer Internship',
    organization: 'SmartBridge Academy',
    period: 'Mar 2026 – Jul 2026',
    summary:
      'Completed an AI engineering internship culminating in the WealthVision AI capstone project.',
    highlights: [
      'Built WealthVision, an AI-powered financial application.',
      'Integrated AI streaming, backend APIs, and PostgreSQL.',
    ],
    certificateUrl:
      'https://drive.google.com/file/d/1bu3MU5RUXfUSTKKqgIC2C_DzyPslDwN3/view?usp=sharing',
    published: true,
  },
  {
    id: 'juara-2-arcadia-award-kategori-bisnis-digital-dan-fintech-2026',
    category: 'Award',
    title: 'ARCADIA Award 2026 – 2nd Place',
    organization: 'Fakultas Ilmu Komputer Universitas Amikom Yogyakarta',
    period: '10 Feb 2026',
    summary:
      'Developed KreasiKan, an AI-powered SaaS platform that automates content production for SMEs and content creators in Indonesia.',
    highlights: [
      'Built an AI-powered SaaS platform for automated content creation.',
      'Developed AI content generation, workflow automation, and project management features.',
    ],
    certificateUrl: 'https://drive.google.com/file/d/1cqa9FmeSQBXoahozNIcHSif_QhTwSa1Q/view?usp=sharing',
    published: true,
  },
  {
    id: 'juara-3-gemasi-kategori-pemrograman-2025',
    category: 'Award',
    title: 'GEMASI Programming Competition – 3rd Place',
    organization: 'GEMASI (Gelar Karya Mahasiswa Sistem Informasi)',
    period: '21 Jan 2025',
    summary:
      'Solved 10 programming logic problems in 90 minutes, demonstrating algorithmic thinking and problem-solving skills.',
    highlights: [
      'Used C++ to solve the programming challenges.',
    ],
    certificateUrl: 'https://drive.google.com/file/d/1fAXfzpC0vv1KwsKCxEfpXeEV0LoXfUqZ/view?usp=sharing',
    published: true,
  },
  {
    id: 'sekolah-menengah-akhir',
    category: 'Education',
    title: 'Language Studies',
    organization: 'SMAK Sang Timur Yogyakarta',
    period: '2020 – 2023',
    location: 'Indonesia',
    summary:
      'Studied foreign languages, literature, anthropology, and cultural studies to understand different societies and ways of life.',
    highlights: [
      'Studied English and Japanese languages, literature, and cultural studies.',
      'Served as MPK and Deputy MPK, contributing to student governance and extracurricular activities.',
    ],
    published: false,
  },
  {
    id: 'professional-experience',
    category: 'Experience',
    title: 'Nama Posisi atau Pengalaman',
    organization: 'Nama Perusahaan atau Organisasi',
    period: 'Bulan Tahun – Bulan Tahun',
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
