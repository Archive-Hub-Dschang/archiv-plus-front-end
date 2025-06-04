"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Header from "@/components/ui/facDepHeader"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { usePathname } from "next/navigation"

// Données simulées des filières par département
const filieresData: Record<string, any[]> = {
    "1": [
        { id: 1, nom: "Licence Mathématiques", description: "L1, L2, L3 Mathématiques", matieres: 12 },
        { id: 2, nom: "Master Mathématiques Appliquées", description: "M1, M2 Maths Appliquées", matieres: 8 },
        { id: 3, nom: "Master Statistiques", description: "M1, M2 Statistiques", matieres: 10 },
    ],
    "2": [
        { id: 4, nom: "Licence Informatique", description: "L1, L2, L3 Informatique", matieres: 15 },
        { id: 5, nom: "Master Génie Logiciel", description: "M1, M2 Génie Logiciel", matieres: 12 },
        { id: 6, nom: "Master Intelligence Artificielle", description: "M1, M2 IA", matieres: 10 },
        { id: 7, nom: "Master Réseaux et Sécurité", description: "M1, M2 Réseaux", matieres: 11 },
    ],
}

const departementsNoms: Record<string, string> = {
    "1": "Mathématiques",
    "2": "Informatique",
}

export default function FilieresPage({ params }: { params: { departementId: string } }) {
    const filieres = filieresData[params.departementId] || []
    const departementNom = departementsNoms[params.departementId] || "Département"

    const [filiere, setFiliere] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const fetchFiliere = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`http://localhost:8080/api/academics/department${pathname}`)
                const filieres = await response.json()
                setFiliere(filieres)
            } catch (e) {
                console.log(e)
                toast("impossible de charger les departements", { description: "veuillez verifier votre réseau ou réessayez" })
            } finally {
                setIsLoading(false)
            }
        }
        fetchFiliere()
    }, [pathname])
    if (isLoading) {
        return <div className="h-[calc(100dvh-128px)] flex justify-center items-center text-xl">Chargement...</div>
    }
    return (

        <div className="container lg:h-[calc(100vh-128px)] mx-auto px-4 py-8 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <Link href="/facultes" className="hover:text-blue-600">
                    Facultés
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/facultes/1/departements" className="hover:text-blue-600">
                    Départements
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{departementNom}</span>
            </div>

            {/* Header */}
            <Header
                title={`Filières - ${departementNom}`}
                description="Choisissez votre filière pour accéder aux matières et examens."
                link="/facultes/1/departements"
                linkText="Retour aux départements"
            />

            {/* Filières Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filieres.map((filiere) => (
                    <Link key={filiere.id} href={`/filieres/${filiere.id}/matieres`}>
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                                    <ChevronRight
                                        className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                                </div>
                                <CardTitle className="text-lg">{filiere.nom}</CardTitle>
                                <CardDescription>{filiere.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-gray-500">{filiere.matieres} matières disponibles</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {filieres.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">Aucune filière disponible pour ce département.</p>
                </div>
            )}
        </div>
    )
}
