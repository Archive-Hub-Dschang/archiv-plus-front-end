import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronLeft, FileText } from "lucide-react"
import Link from "next/link"

// Données simulées des matières par filière
const matieresData: Record<string, any[]> = {
    "4": [
        { id: 1, nom: "Algorithmique et Programmation", code: "INF101", niveau: "L1", epreuves: 8 },
        { id: 2, nom: "Mathématiques pour l'Informatique", code: "MAT101", niveau: "L1", epreuves: 6 },
        { id: 3, nom: "Architecture des Ordinateurs", code: "INF102", niveau: "L1", epreuves: 5 },
        { id: 4, nom: "Structures de Données", code: "INF201", niveau: "L2", epreuves: 7 },
        { id: 5, nom: "Base de Données", code: "INF202", niveau: "L2", epreuves: 9 },
        { id: 6, nom: "Réseaux Informatiques", code: "INF301", niveau: "L3", epreuves: 6 },
        { id: 7, nom: "Génie Logiciel", code: "INF302", niveau: "L3", epreuves: 8 },
    ],
}

const filieresNoms: Record<string, string> = {
    "4": "Licence Informatique",
}

export default function MatieresPage({ params }: { params: { filiereId: string } }) {
    const matieres = matieresData[params.filiereId] || []
    const filiereNom = filieresNoms[params.filiereId] || "Filière"

    // Grouper les matières par niveau
    const matieresParNiveau = matieres.reduce(
        (acc, matiere) => {
            if (!acc[matiere.niveau]) {
                acc[matiere.niveau] = []
            }
            acc[matiere.niveau].push(matiere)
            return acc
        },
        {} as Record<string, any[]>,
    )

    const niveaux = Object.keys(matieresParNiveau).sort()

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
                <span>{filiereNom}</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Matières - {filiereNom}</h1>
                        <p className="text-gray-600">Sélectionnez une matière pour accéder aux sujets d&#39;examens disponibles.</p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/departements/2/filieres">
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Retour aux filières
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Matières par niveau */}
            {niveaux.map((niveau) => (
                <div key={niveau} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">{niveau}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {matieresParNiveau[niveau].map((matiere) => (
                            <Link key={matiere.id} href={`/matieres/${matiere.id}/epreuves`}>
                                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <FileText className="h-8 w-8 text-orange-600 mb-2" />
                                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="secondary">{matiere.code}</Badge>
                                            <Badge variant="outline">{matiere.niveau}</Badge>
                                        </div>
                                        <CardTitle className="text-lg">{matiere.nom}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-sm text-gray-500">{matiere.epreuves} épreuves disponibles</div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            {matieres.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">Aucune matière disponible pour cette filière.</p>
                </div>
            )}
        </div>
    )
}
