"use client"

import { AdminLayout } from '@/components/layouts/admin-layout'
import React from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
    const { user } = useAuth()
    const router = useRouter()
    if(user?.role !== "admin")
        router.push("/")
    return (
        <AdminLayout>
            <div className='size-full flex flex-col items-center justify-center p-4'>
                <h1 className="text-2xl font-bold mb-4">Tableau de bord Administrateur</h1>
            </div>
        </AdminLayout>
    )
}