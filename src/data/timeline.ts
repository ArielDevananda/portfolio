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
    id: 'university',
    category: 'Education',
    title: 'Information Systems Student',
    organization: 'Universitas Amikom Yogyakarta',
    period: '2023 - Present',
    location: 'Indonesia',
    summary:
      'Final-year student focusing on software engineering and full-stack web development.',
    highlights: [
      'Tuliskan mata kuliah atau bidang yang paling relevan.',
      'Tuliskan proyek akhir, organisasi, atau pencapaian yang relevan.',
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
      'Built an AI-powered financial application.',
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