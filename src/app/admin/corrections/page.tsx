import AddFile from '@/components/admin/addFile'
import { AdminLayout } from '@/components/layouts/admin-layout'
import React from 'react'

export default function CorrectionPage() {
    return (
       <AdminLayout>
         <AddFile text="Ajouter une correction" link='/admin/corrections/create' />
         
       </AdminLayout>
    )
}
