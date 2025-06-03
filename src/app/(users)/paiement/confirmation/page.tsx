import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Crown, Home } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPaiementPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <Card className="text-center shadow-xl">
                    <CardHeader className="pb-6">
                        <div className="mx-auto mb-4">
                            <CheckCircle className="h-16 w-16 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl text-green-600">Paiement réussi !</CardTitle>
                        <CardDescription>Votre abonnement ArchivPlus a été activé avec succès</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-800 mb-2">Détails de votre abonnement</h3>
                            <div className="text-sm text-green-700 space-y-1">
                                <p>
                                    <strong>Type :</strong> Abonnement semestriel
                                </p>
                                <p>
                                    <strong>Durée :</strong> un semestre
                                </p>
                                <p>
                                    <strong>Montant :</strong> 1 000 FCFA
                                </p>
                                <p>
                                    <strong>Statut :</strong> Actif
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold">Vous pouvez maintenant :</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Download className="h-4 w-4 text-blue-600" />
                                    <span>Télécharger toutes les corrections</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Crown className="h-4 w-4 text-purple-600" />
                                    <span>Accéder au contenu premium</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span>Profiter de tous les avantages</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button asChild className="w-full">
                                <Link href="/facultes">
                                    <Download className="h-4 w-4 mr-2" />
                                    Commencer à télécharger
                                </Link>
                            </Button>

                            <Button asChild variant="outline" className="w-full">
                                <Link href="/profil">
                                    <Crown className="h-4 w-4 mr-2" />
                                    Voir mon profil
                                </Link>
                            </Button>

                            <Button asChild variant="ghost" className="w-full">
                                <Link href="/">
                                    <Home className="h-4 w-4 mr-2" />
                                    Retour à l&apos;accueil
                                </Link>
                            </Button>
                        </div>

                        <div className="text-xs text-gray-500 pt-4 border-t">
                            <p>Un email de confirmation a été envoyé à votre adresse.</p>
                            <p>Pour toute question, contactez notre support.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
