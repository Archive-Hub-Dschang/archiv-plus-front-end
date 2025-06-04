"use client"

import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { DepartmentProps } from '../departments/page'
import { AdminLayout } from '@/components/layouts/admin-layout'

export default function Levelspage() {
    const [levels, setLevels] = useState<DepartmentProps[] | null>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchLevels = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_DOCS_URL}/academic/levels`)
                const levels = await response.json()
                setLevels(levels)
            } catch (e) {
                console.log(e);
                toast("erreur lors de la recuperation des niveaux")
            } finally {
                setIsLoading(false)
            }
        }
        fetchLevels()
    }, [])

    if (isLoading)
        return <div className="size-full flex justify-center items-center">Chargements...</div>
    if (levels === null)
        return <div className="size-full flex justify-center items-center">erreur</div>

    return (
        <AdminLayout>
            <div>
                {levels.map((level) =>
                    <div key={level.id} className='flex items-center justify-between hover:bg-blue-400 cursor-pointer'>
                        <div className="text-xs text-gray-500 justify-self-start">ID: {level.id}</div>
                        <div className="justify-self-start">label: {level.name}</div>
                    </div>
                )}
            </div>
        </AdminLayout>
    )
}