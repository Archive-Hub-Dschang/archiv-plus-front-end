"use client"

import { AdminLayout } from "@/components/layouts/admin-layout"
import { ExamItem } from "../../../components/admin/examListItem"
import { ExamItemProps } from "../../../components/admin/examListItem"

const mockExams: ExamItemProps[] = [
  {
    id: "1",
    title: "Analyse1",
    type: "CC",
    year: 2014,
    pdfUrl: "/pdfs/exam1.pdf",
    subjectId: "math-analyse"
  },
  {
    id: "2",
    title: "Mécanique",
    type: "normale",
    year: 2021,
    pdfUrl: "/pdfs/exam2.pdf",
    subjectId: "physique-mecanique"
  },
  {
    id: "3",
    title: "Programmation Web",
    type: "CC",
    year: 2022,
    pdfUrl: "/pdfs/exam3.pdf",
    subjectId: "chimie-org"
  },
  {
    id: "4",
    title: "Ana",
    type: "CC",
    year: 2020,
    pdfUrl: "/pdfs/exam4.pdf",
    subjectId: "eco-gen"
  },
  {
    id: "5",
    title: "Informatique - Structures de données",
    type: "CC",
    year: 2023,
    pdfUrl: "/pdfs/exam5.pdf",
    subjectId: "info-sd"
  }
]

export default function ExamList() {
  return (
    <AdminLayout>
      {mockExams.map((exam) => (
        <div className="max-sm:px-4" key={exam.id}>
          <ExamItem exam={exam} />
        </div>
      ))}
    </AdminLayout>
  )
}
