import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, GraduationCap } from "lucide-react"
import Link from "next/link"

// Données simulées des départements par faculté
const departementsData: Record<string, any[]> = {
    "1": [
        { id: 1, nom: "Mathématiques", description: "Algèbre, Analyse, Géométrie", filieres: 4 },
        { id: 2, nom: "Informatique", description: "Programmation, Réseaux, IA", filieres: 6 },
        { id: 3, nom: "Physique", description: "Mécanique, Thermodynamique, Optique", filieres: 3 },
        { id: 4, nom: "Chimie", description: "Chimie organique, Chimie minérale", filieres: 3 },
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
    "1": "Faculté des Sciences et Techniques",
    "2": "Faculté de Médecine",
    "3": "Faculté des Sciences Économiques et de Gestion",
}

export default function DepartementsPage({ params }: { params: { faculteId: string } }) {
    const departements = departementsData[params.faculteId] || []
    const faculteNom = facultesNoms[params.faculteId] || "Faculté"

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <Link href="/facultes" className="hover:text-blue-600">
                    Facultés
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{faculteNom}</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Départements</h1>
                        <p className="text-gray-600">Sélectionnez le département correspondant à votre spécialité.</p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/facultes">
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Retour aux facultés
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Départements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departements.map((departement) => (
                    <Link key={departement.id} href={`/departements/${departement.id}/filieres`}>
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
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
