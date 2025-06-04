"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, GraduationCap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Header from "@/components/ui/facDepHeader"
import { useEffect, useState } from "react"

// Données simulées des départements par faculté
const departementsData: Record<string, any[]> = {
    "1": [
        { id: 1, nom: "Mathématiques-Informatique", description: "Informatique, Mathematique", filieres: 2 },
        { id: 3, nom: "Physique", description: "Mécanique, Thermodynamique, Optique", filieres: 1 },
        { id: 4, nom: "Chimie", description: "Chimie organique, Chimie minérale", filieres: 1 },
    ],
    "2": [
        { id: 5, nom: "Médecine Générale", description: "Formation médicale générale", filieres: 2 },
        { id: 6, nom: "Pharmacie", description: "Sciences pharmaceutiques", filieres: 3 },
        { id: 7, nom: "Odontologie", description: "Médecine dentaire", filieres: 2 },
    ],
    "3": [
        { id: 8, nom: "Sciences Économiques", description: "Microéconomie, Macroéconomie", filieres: 4 },
        { id: 9, nom: "Gestion", description: "Management, RH, Marketing", filieres: 5 },
        { id: 10, nom: "Finance", description: "Finance d'entreprise, Marchés financiers", filieres: 3 },
    ],
}

const facultesNoms: Record<string, string> = {
    "1": "Faculté des Sciences",
    "2": "Faculté de Médecine",
    "3": "Faculté des Sciences Économiques et de Gestion",
}

export default function DepartementsPage({ params }: { params: { faculteId: string } }) {
    const departements = departementsData[params.faculteId] || []
    const faculteNom = facultesNoms[params.faculteId] || "Faculté"
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>setIsLoading(false), 1000)
    },[])
    if(isLoading){
        return <div className="size-full flex justify-center items-center">Chargement..</div>
    }
    return (
        <div className="container mx-auto px-4 py-8 md:px-12 lg:h-[calc(100dvh-128px)]">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <Link href="/facultes" className="hover:text-blue-600">
                    Facultés
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{faculteNom}</span>
            </div>

            {/* Header */}
            <Header 
                title="Départements" 
                description="Sélectionnez le département correspondant à votre spécialité."
                link="/facultes"
                linkText="Retour aux facultés"
            />

            {/* Départements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departements.map((departement) => (
                    <Link key={departement.id} href={`${departement.id===1?`/departements/${departement.id}/filieres`:""}`}>
                        <Card className={cn("h-full hover:shadow-lg transition-shadow cursor-pointer group", departement.id ===1 ? "":"opacity-40")}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <GraduationCap className="h-8 w-8 text-purple-600 mb-2" />
                                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                                </div>
                                <CardTitle className="text-lg">{departement.nom}</CardTitle>
                                <CardDescription>{departement.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-gray-500">{departement.filieres} filières disponibles</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {departements.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">Aucun département disponible pour cette faculté.</p>
                </div>
            )}
        </div>
    )
}
