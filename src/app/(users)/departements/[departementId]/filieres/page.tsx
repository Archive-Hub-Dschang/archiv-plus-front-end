import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {ChevronRight, ChevronLeft, BookOpen} from "lucide-react"
import Link from "next/link"

// Données simulées des filières par département
const filieresData: Record<string, any[]> = {
    "1": [
        {id: 1, nom: "Licence Mathématiques", description: "L1, L2, L3 Mathématiques", matieres: 12},
        {id: 2, nom: "Master Mathématiques Appliquées", description: "M1, M2 Maths Appliquées", matieres: 8},
        {id: 3, nom: "Master Statistiques", description: "M1, M2 Statistiques", matieres: 10},
    ],
    "2": [
        {id: 4, nom: "Licence Informatique", description: "L1, L2, L3 Informatique", matieres: 15},
        {id: 5, nom: "Master Génie Logiciel", description: "M1, M2 Génie Logiciel", matieres: 12},
        {id: 6, nom: "Master Intelligence Artificielle", description: "M1, M2 IA", matieres: 10},
        {id: 7, nom: "Master Réseaux et Sécurité", description: "M1, M2 Réseaux", matieres: 11},
    ],
}

const departementsNoms: Record<string, string> = {
    "1": "Mathématiques",
    "2": "Informatique",
}

export default function FilieresPage({params}: { params: { departementId: string } }) {
    const filieres = filieresData[params.departementId] || []
    const departementNom = departementsNoms[params.departementId] || "Département"

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <Link href="/facultes" className="hover:text-blue-600">
                    Facultés
                </Link>
                <ChevronRight className="h-4 w-4"/>
                <Link href="/facultes/1/departements" className="hover:text-blue-600">
                    Départements
                </Link>
                <ChevronRight className="h-4 w-4"/>
                <span>{departementNom}</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Filières - {departementNom}</h1>
                        <p className="text-gray-600">Choisissez votre filière pour accéder aux matières et examens.</p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/facultes/1/departements">
                            <ChevronLeft className="h-4 w-4 mr-2"/>
                            Retour aux départements
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Filières Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filieres.map((filiere) => (
                    <Link key={filiere.id} href={`/filieres/${filiere.id}/matieres`}>
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <BookOpen className="h-8 w-8 text-green-600 mb-2"/>
                                    <ChevronRight
                                        className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors"/>
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
