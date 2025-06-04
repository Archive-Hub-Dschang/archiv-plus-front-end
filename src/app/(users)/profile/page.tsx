"use client"

import React from 'react'
import {Avatar, AvatarFallback} from '@/components/ui/avatar'
import {useAuth} from '@/context/auth-context'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {

    const {user} = useAuth()
    const router = useRouter()

    if(!user){
        return router.push("/login")
    }
    return (
        <div className="flex flex-col p-3 lg:flex-row gap-5 size-full">
            <div
                className="w-full lg:w-5/12 md:h-1/3 bg-blue-400 rounded-lg p-4 flex flex-col items-center justify-center space-y-2 text-white">
                <Avatar className='size-24'>
                    <AvatarFallback
                        className="font-bold text-black text-3xl">{user?.username?.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">{user?.username}</h2>
                {/*<h2 className="text-2xl font-bold">{user?.role}</h2>*/}
            </div>
            <div className='bg-gray-100 rounded-lg px-4 py-5 w-full lg:w-3/4 lg:h-2/3'>
                <section>
                    <h2 className='text-2xl font-bold text-blue-600 border-b py-1'>ArchivPlus</h2>
                    <p className='py-2'>
                        Fort d&apos;un réseau regroupant des enseignants chevronnés et des étudiants brillants issus
                        de diverses disciplines, ArchivPlus met à votre disposition un ensemble d&apos;outils de
                        corrigés d&apos;épreuves pour assurer votre réussite académique.
                        <br/>
                        <br/>
                        Grâce à l&apos;expertise de notre équipe, chaque ressource est pensée pour maximiser votre
                        compréhension et booster vos performances académiques.
                    </p>
                </section>
                <section className='flex flex-col space-y-2 mt-4'>
                    <h4 className="font-light">Détails du profil</h4>
                    <p className="text-sm text-gray-600"><span className='text-sm'>Nom: </span>{user?.username}</p>
                    <p className="text-sm text-gray-600"><span className='text-sm'>Email: </span> {user?.email}</p>
                </section>
            </div>
        </div>
    )
}