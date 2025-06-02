"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronRight, ChevronLeft, Download, Lock, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Données simulées des épreuves par matière
const epreuvesData: Record<string, any[]> = {
    "1": [
        {
            id: 1,
            annee: "2023-2024",
            type: "CC",
            session: "Session 1",
            date: "2024-01-15",
            sujetDisponible: true,
            correctionDisponible: true,
        },
        {
            id: 2,
            annee: "2023-2024",
            type: "SN",
            session: "Session Normale",
            date: "2024-05-20",
            sujetDisponible: true,
            correctionDisponible: true,
        },
        {
            id: 3,
            annee: "2023-2024",
            type: "Rattrapage",
            session: "Session de Rattrapage",
            date: "2024-07-10",
            sujetDisponible: true,
            correctionDisponible: false,
        },
        {
            id: 4,
            annee: "2022-2023",
            type: "CC",
            session: "Session 1",
            date: "2023-01-18",
            sujetDisponible: true,
            correctionDisponible: true,
        },
        {
            id: 5,
            annee: "2022-2023",
            type: "SN",
            session: "Session Normale",
            date: "2023-05-22",
            sujetDisponible: true,
            correctionDisponible: true,
        },
    ],
}

const matieresNoms: Record<string, string> = {
    "1": "Algorithmique et Programmation",
}

const typeColors: Record<string, string> = {
    CC: "bg-blue-100 text-blue-800",
    SN: "bg-green-100 text-green-800",
    Rattrapage: "bg-orange-100 text-orange-800",
}

export default function EpreuvesPage({ params }: { params: { matiereId: string } }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false) // Simuler l'état de connexion
    const [hasSubscription, setHasSubscription] = useState(false) // Simuler l'abonnement

    const epreuves = epreuvesData[params.matiereId] || []
    const matiereNom = matieresNoms[params.matiereId] || "Matière"

    // Grouper les épreuves par année
    const epreuvesParAnnee = epreuves.reduce(
        (acc, epreuve) => {
            if (!acc[epreuve.annee]) {
                acc[epreuve.annee] = []
            }
            acc[epreuve.annee].push(epreuve)
            return acc
        },
        {} as Record<string, any[]>,
    )

    const annees = Object.keys(epreuvesParAnnee).sort().reverse()

    const handleDownloadSubject = (epreuveId: number) => {
        // Simulation du téléchargement du sujet
        alert(`Téléchargement du sujet ${epreuveId} en cours...`)
    }

    const handleDownloadCorrection = (epreuveId: number) => {
        if (!isLoggedIn) {
            alert("Veuillez vous connecter pour accéder aux corrections")
            return
        }
        if (!hasSubscription) {
            alert("Un abonnement est requis pour accéder aux corrections")
            return
        }
        // Simulation du téléchargement de la correction
        alert(`Téléchargement de la correction ${epreuveId} en cours...`)
    }

    return (
        <div className="container mx-auto px-4 py-8">
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
                <Link href="/departements/2/filieres" className="hover:text-blue-600">
                    Filières
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/filieres/4/matieres" className="hover:text-blue-600">
                    Matières
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{matiereNom}</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Épreuves - {matiereNom}</h1>
                        <p className="text-gray-600">
                            Téléchargez les sujets gratuitement ou accédez aux corrections avec un abonnement.
                        </p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/filieres/4/matieres">
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Retour aux matières
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Alert pour l'abonnement */}
            {!hasSubscription && (
                <Alert className="mb-6 border-blue-200 bg-blue-50">
                    <Lock className="h-4 w-4" />
                    <AlertDescription>
                        Les corrections sont réservées aux abonnés.
                        <Link href="/abonnement" className="text-blue-600 hover:underline ml-1">
                            Découvrez notre abonnement semestriel
                        </Link>
                    </AlertDescription>
                </Alert>
            )}

            {/* Épreuves par année */}
            {annees.map((annee) => (
                <div key={annee} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Année {annee}</h2>
                    <div className="space-y-4">
                        {epreuvesParAnnee[annee].map((epreuve) => (
                            <Card key={epreuve.id} className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-6 w-6 text-gray-600" />
                                            <div>
                                                <CardTitle className="text-lg">{epreuve.session}</CardTitle>
                                                <CardDescription className="flex items-center gap-2 mt-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(epreuve.date).toLocaleDateString("fr-FR")}
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <Badge className={typeColors[epreuve.type]}>{epreuve.type}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4">
                                        {/* Bouton Sujet */}
                                        <Button
                                            onClick={() => handleDownloadSubject(epreuve.id)}
                                            disabled={!epreuve.sujetDisponible}
                                            className="flex-1"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            {epreuve.sujetDisponible ? "Télécharger le sujet" : "Sujet indisponible"}
                                        </Button>

                                        {/* Bouton Correction */}
                                        {epreuve.correctionDisponible ? (
                                            hasSubscription ? (
                                                <Button
                                                    onClick={() => handleDownloadCorrection(epreuve.id)}
                                                    variant="outline"
                                                    className="flex-1"
                                                >
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Télécharger la correction
                                                </Button>
                                            ) : (
                                                <Button asChild variant="outline" className="flex-1">
                                                    <Link href="/abonnement">
                                                        <Lock className="h-4 w-4 mr-2" />
                                                        S'abonner pour la correction
                                                    </Link>
                                                </Button>
                                            )
                                        ) : (
                                            <Button disabled variant="outline" className="flex-1">
                                                <Lock className="h-4 w-4 mr-2" />
                                                Correction indisponible
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}

            {epreuves.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">Aucune épreuve disponible pour cette matière.</p>
                </div>
            )}
        </div>
    )
}
