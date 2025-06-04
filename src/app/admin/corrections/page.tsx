"use client"

import AddFile from '@/components/admin/addFile'
import { CorrectionItem } from '@/components/admin/correctionListItem'
import { AdminLayout } from '@/components/layouts/admin-layout'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

export interface CorrectionProps {
  id: string
  examId: string
  pdfUrl: string
  createdAt: string
}

export default function CorrectionPage() {

  const pathname = usePathname()
  const [corrections, setCorrections] = useState([])
  const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      const fetchCor = async () => {
        try{
          const response = await fetch(`${process.env.NEXT_PUBLIC_DOCS_URL}/academics/exams/with-corrections`)
          const corrections = await response.json()
          setCorrections(corrections)
        }catch(e){
          console.log(e);
          toast("erreur lors de la recuperation des corrections")
        }finally{
          setIsLoading(false)
        }
      }
      fetchCor()
    }, [pathname])
    
    if(isLoading)
      return <div className="">Chargements</div>
  return (
    <AdminLayout>
      <AddFile text="Ajouter une correction" link='/admin/corrections/create' />
      {corrections.map((correction: CorrectionProps) => (
        <CorrectionItem key={correction.id} correction={correction} />
      ))}
    </AdminLayout>
  )
}
