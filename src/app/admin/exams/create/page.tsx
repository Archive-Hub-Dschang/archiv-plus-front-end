'use client'

import { AdminLayout } from '@/components/layouts/admin-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { toast } from 'sonner'

type ExamType = 'CC' | 'Normale' | 'Rattrapage' 

interface ExamFormData {
  title: string
  type: ExamType
  year: number
  pdfUrl: string
}

export default function AdminExamForm() {
  const [formData, setFormData] = useState<ExamFormData>({
    title: '',
    type: 'CC',
    year: new Date().getFullYear(),
    pdfUrl: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Envoie au backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOCS_URL}/exams`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Erreur lors de la soumission')
      toast('Examen ajouté avec succès !')
    } catch (error) {
      console.error(error)
      toast.error('Erreur lors de la soumission du formulaire.')
    }finally {
      setIsLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className='h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 space-y-3 shadow-md rounded-lg">
          <h2 className="text-xl text-center font-bold text-blue-600">Ajouter un examen</h2>

          <div>
            <label className="block mb-1 font-medium">Titre</label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="CC">Contrôle Continu</option>
              <option value="Normale">Normale</option>
              <option value="Rattrapage">Rattrapage</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Année</label>
            <Input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">PDF</label>
            <Input
              type="file"
              name="pdfUrl"
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            {isLoading ? "Ajout en cours..." : "Ajouter"}
          </Button>
        </form>
      </div>
    </AdminLayout>
  )
}
