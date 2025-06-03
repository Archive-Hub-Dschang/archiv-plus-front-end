import AddFile from '@/components/admin/addFile'
import { CorrectionItem } from '@/components/admin/correctionListItem'
import { AdminLayout } from '@/components/layouts/admin-layout'
import React from 'react'

export interface CorrectionProps {
  id: string
  examId: string
  pdfUrl: string
}

export default function CorrectionPage() {
  const mockCorrections = [
  {
    id: "corr1",
    examId: "exam001",
    pdfUrl: "https://example.com/corrections/exam001.pdf",
    createdAt: "2024-10-01",
  },
  {
    id: "corr2",
    examId: "exam002",
    pdfUrl: "https://example.com/corrections/exam002.pdf",
    createdAt: "2024-10-05",
  },
  {
    id: "corr3",
    examId: "exam003",
    pdfUrl: "https://example.com/corrections/exam003.pdf",
    createdAt: "2024-10-12",
  },
  {
    id: "corr4",
    examId: "exam004",
    pdfUrl: "https://example.com/corrections/exam004.pdf",
    createdAt: "2024-11-01",
  },
  {
    id: "corr5",
    examId: "exam005",
    pdfUrl: "https://example.com/corrections/exam005.pdf",
    createdAt: "2024-11-15",
  },
  {
    id: "corr6",
    examId: "exam006",
    pdfUrl: "https://example.com/corrections/exam006.pdf",
    createdAt: "2024-12-03",
  },
  {
    id: "corr7",
    examId: "exam007",
    pdfUrl: "https://example.com/corrections/exam007.pdf",
    createdAt: "2024-12-20",
  },
  {
    id: "corr8",
    examId: "exam008",
    pdfUrl: "https://example.com/corrections/exam008.pdf",
    createdAt: "2025-01-10",
  },
  {
    id: "corr9",
    examId: "exam009",
    pdfUrl: "https://example.com/corrections/exam009.pdf",
    createdAt: "2025-02-05",
  },
  {
    id: "corr10",
    examId: "exam010",
    pdfUrl: "https://example.com/corrections/exam010.pdf",
    createdAt: "2025-03-01",
  },
]


  return (
    <AdminLayout>
      <AddFile text="Ajouter une correction" link='/admin/corrections/create' />
      {mockCorrections.map((correction: CorrectionProps) => (
        <CorrectionItem key={correction.id} correction={correction} />
      ))}
    </AdminLayout>
  )
}
