import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function AbonnementPage() {
    const avantages = [
        "Accès illimité à toutes les corrections d'examens",
        "Téléchargements illimités de sujets et corrections",
        "Corrections détaillées et expliquées",
        "Accès prioritaire aux nouveaux contenus",
        "Support client dédié",
        "Historique de téléchargements sauvegardé",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Crown className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                        <h1 className="text-4xl font-bold mb-6">Abonnement ArchivPlus</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Débloquez l'accès complet aux corrections d'examens et boostez vos révisions
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Card */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-lg mx-auto">
                        <Card className="border-2 border-blue-200 shadow-xl">
                            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Star className="h-6 w-6" />
                                    <CardTitle className="text-2xl">Abonnement Semestriel</CardTitle>
                                </div>
                                <CardDescription className="text-blue-100">Accès complet pendant 6 mois</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">15 000</span>
                                    <span className="text-xl ml-2">FCFA</span>
                                    <p className="text-blue-100 mt-2">pour 6 mois d'accès</p>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="space-y-4 mb-8">
                                    {avantages.map((avantage, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{avantage}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                >
                                    <Link href="/paiement/initier">
                                        <Zap className="h-5 w-5 mr-2" />
                                        Payer avec Mobile Money
                                    </Link>
                                </Button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Paiement sécurisé • Activation immédiate • Annulation possible
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Que comprend l'abonnement ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    L'abonnement vous donne accès à toutes les corrections d'examens disponibles sur la plateforme, avec
                                    des téléchargements illimités pendant 6 mois.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Comment effectuer le paiement ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Le paiement s'effectue via Mobile Money (Orange Money, MTN Money, Moov Money). Votre abonnement est
                                    activé immédiatement après confirmation du paiement.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Puis-je annuler mon abonnement ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Oui, vous pouvez annuler votre abonnement à tout moment depuis votre profil. Vous conserverez l'accès
                                    jusqu'à la fin de la période payée.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Les sujets restent-ils gratuits ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Absolument ! Tous les sujets d'examens restent accessibles gratuitement. Seules les corrections
                                    nécessitent un abonnement.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Prêt à améliorer vos résultats ?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Rejoignez des milliers d&apos;étudiants qui utilisent ArchivPlus pour réussir leurs examens
                    </p>
                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                        <Link href="/paiement/initier">Commencer maintenant</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
