'use client'

import { AdminLayout } from '@/components/layouts/admin-layout'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface UploadPdfFormData {
  examId: string
  pdfUrl: string
}

export default function UploadPdfForm() {
  const [formData, setFormData] = useState<UploadPdfFormData>({ examId: '', pdfUrl: '' })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // envoie au backend
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${formData.examId}/correction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok)
        throw new Error('Erreur lors de la soumission')
      toast('PDF lié à l&apos;examen avec succès !')
      router.push('/admin/corrections')
    } catch (err) {
      console.error(err)
      toast.error('Erreur lors de l&apos;envoi.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <AdminLayout>
      <div className='h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 space-y-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl text-blue-600 font-bold">Ajouter la correction d&apos;un examen</h2>
          <div>
            <label className="block mb-1 font-medium">ID de l&apos;examen</label>
            <input
              type="text"
              name="examId"
              value={formData.examId}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">URL du PDF</label>
            <input
              type="file"
              name="pdfUrl"
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isLoading ? "Ajout en cours..." : "Ajouter"}
          </Button>
        </form>
      </div>
    </AdminLayout>
  )
}