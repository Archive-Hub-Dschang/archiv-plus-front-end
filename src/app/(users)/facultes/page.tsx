import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronRight, Building2 } from "lucide-react"
import Link from "next/link"

const mockfacultes = [
    {
        id: 1,
        nom: "Faculté des Sciences",
        description: "Mathématiques, Physique, Chimie, Informatique....",
        departements: 4,
    },
    {
        id: 2,
        nom: "Faculté de Médecine",
        description: "Médecine générale, Pharmacie, Odontologie...",
        departements: 5,
    },
    {
        id: 3,
        nom: "Faculté des Sciences Économiques et de Gestion",
        description: "Économie, Gestion, Finance, Marketing...",
        departements: 6,
    },
    {
        id: 4,
        nom: "Faculté de Droit",
        description: "Droit privé, Droit public, Relations internationales...",
        departements: 4,
    },
    {
        id: 5,
        nom: "Faculté des Lettres et Sciences Humaines",
        description: "Littérature, Histoire, Géographie, Philosophie...",
        departements: 7,
    },
    {
        id: 6,
        nom: "Faculté d'Agronomie et de Sciences Agricoles",
        description: "Pédagogie, Psychologie, Sciences de l'éducation...",
        departements: 3,
    },
]

export default function FacultesPage() {
    return (
        <div className="container mx-auto px-4 py-8 md:px-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Choisissez votre faculté</h1>
                <p className="text-gray-600">
                    Sélectionnez la faculté correspondant à votre domaine d&apos;études pour accéder aux sujets d&apos;examens.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockfacultes.map((faculte) => (
                    <Link key={faculte.id} href={`${faculte.id===1 ? `/facultes/${faculte.id}/departements`:""}`}>
                        <Card className={cn("h-full hover:shadow-lg transition-shadow cursor-pointer group", faculte.id !==1 ? "opacity-40": "")}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <CardTitle className="text-lg">{faculte.nom}</CardTitle>
                                <CardDescription>{faculte.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-gray-500">{faculte.departements} départements disponibles</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
