"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Download, Users, Star } from "lucide-react"
import Link from "next/link"
import { VisitorLayout } from "@/components/layouts/visitor-layout";
import { useAuth } from "@/context/auth-context";
import { UserLayout } from "@/components/layouts/user-layout";

export default function HomePage() {
    const { user } = useAuth()

    const cardItems = [
        {
            icon: <Download className="h-12 w-12 text-blue-600 mb-4" />,
            title: "Sujets gratuits",
            description: "Téléchargez gratuitement tous les sujets d'examens sans inscription",
        },
        {
            icon: <Star className="h-12 w-12 text-purple-600 mb-4" />,
            title: "Corrections détaillées",
            description: "Accédez aux corrections complètes avec un abonnement semestriel",
        },
        {
            icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
            title: "Navigation guidée",
            description: "Trouvez facilement vos documents grâce à notre navigation progressive",
        },
    ];

    return (
        <>
            {user ? (
                <UserLayout>
                    <div>
                        {/* Hero Section */}
                        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-36">
                            <div className="container flex flex-col justify-center items-center px-4">
                                <h1 className="text-5xl font-bold mb-6">ArchivPlus</h1>
                                <p className="text-xl mb-8 max-w-2xl mx-auto">
                                    La plateforme de référence pour accéder aux sujets d&apos;examens de l&apos;université de Dschang et leurs corrections
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 max-sm:w-64">
                                        <Link href="/facultes">
                                            <BookOpen className="mr-2 h-5 w-5" />
                                            Commencer maintenant
                                        </Link>
                                    </Button>

                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 max-sm:w-64">
                                        <Link href="/abonnements">
                                            <BookOpen className="mr-2 h-5 w-5" />
                                            Decouvrir nos abonnements
                                        </Link>
                                    </Button>

                                </div>
                            </div>
                        </section>

                        {/* Features Section */}
                        <section className="py-16 bg-gray-50">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir ArchivPlus ?</h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <Card>
                                        <CardHeader>
                                            <Download className="h-12 w-12 text-blue-600 mb-4" />
                                            <CardTitle>Sujets gratuits</CardTitle>
                                            <CardDescription>Téléchargez gratuitement tous les sujets d&apos;examens sans
                                                inscription</CardDescription>
                                        </CardHeader>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <Star className="h-12 w-12 text-purple-600 mb-4" />
                                            <CardTitle>Corrections détaillées</CardTitle>
                                            <CardDescription>Accédez aux corrections complètes avec un abonnement
                                                semestriel</CardDescription>
                                        </CardHeader>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <Users className="h-12 w-12 text-green-600 mb-4" />
                                            <CardTitle>Navigation guidée</CardTitle>
                                            <CardDescription>Trouvez facilement vos documents grâce à notre navigation
                                                progressive</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </section>

                        {/* How it works */}
                        <section className="py-16">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
                                <div className="max-w-4xl mx-auto">
                                    <div className="grid md:grid-cols-5 gap-4 items-center">
                                        <div className="text-center">
                                            <div
                                                className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-blue-600 font-bold text-xl">1</span>
                                            </div>
                                            <p className="font-semibold">Faculté</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-purple-600 font-bold text-xl">2</span>
                                            </div>
                                            <p className="font-semibold">Département</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-green-600 font-bold text-xl">3</span>
                                            </div>
                                            <p className="font-semibold">Filière</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-orange-600 font-bold text-xl">4</span>
                                            </div>
                                            <p className="font-semibold">Matière</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-red-600 font-bold text-xl">5</span>
                                            </div>
                                            <p className="font-semibold">Épreuves</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-blue-600 text-white py-16">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
                                <p className="text-xl mb-8">Accédez dès maintenant à notre base de données
                                    d&apos;examens</p>
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    <Link href="/facultes">Parcourir les facultés</Link>
                                </Button>
                            </div>
                        </section>
                    </div>
                </UserLayout>
            ) : (
                <VisitorLayout>
                    <div className="min-h-screen">
                        {/* Hero Section */}
                        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-36">
                            <div className="container flex flex-col justify-center items-center px-4">
                                <h1 className="text-5xl font-bold mb-6">ArchivPlus</h1>
                                <p className="text-xl mb-8 max-w-2xl mx-auto">
                                    La plateforme de référence pour accéder aux sujets d&apos;examens de l&apos;université de Dschang et leurs corrections
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 max-sm:w-64">
                                        <Link href="/facultes">
                                            <BookOpen className="mr-2 h-5 w-5" />
                                            Commencer maintenant
                                        </Link>
                                    </Button>

                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 max-sm:w-64">
                                        <Link href="/abonnements">
                                            <BookOpen className="mr-2 h-5 w-5" />
                                            Decouvrir nos abonnements
                                        </Link>
                                    </Button>

                                </div>
                            </div>
                        </section>

                        {/* Features Section */}
                        <section className="px-4 md:px-8 py-16 bg-gray-50">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir ArchivPlus ?</h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {cardItems.map((item, index) => (
                                        <Card key={index}>
                                            <CardHeader>
                                                {item.icon}
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardDescription>{item.description}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    ))}

                                </div>
                            </div>
                        </section>

                        {/* How it works */}
                        <section className="py-16">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
                                <div className="max-w-4xl mx-auto">
                                    <div className="grid md:grid-cols-5 gap-4 items-center">
                                        <div className="text-center">
                                            <div
                                                className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-blue-600 font-bold text-xl">1</span>
                                            </div>
                                            <p className="font-semibold">Faculté</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-purple-600 font-bold text-xl">2</span>
                                            </div>
                                            <p className="font-semibold">Département</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-green-600 font-bold text-xl">3</span>
                                            </div>
                                            <p className="font-semibold">Filière</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-orange-600 font-bold text-xl">4</span>
                                            </div>
                                            <p className="font-semibold">Matière</p>
                                        </div>
                                        <div className="hidden md:block text-center text-gray-400">→</div>
                                        <div className="text-center">
                                            <div
                                                className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <span className="text-red-600 font-bold text-xl">5</span>
                                            </div>
                                            <p className="font-semibold">Épreuves</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-blue-600 text-white py-16">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
                                <p className="text-xl mb-8">Accédez dès maintenant à notre base de données
                                    d&apos;examens</p>
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    <Link href="/facultes">Parcourir les facultés</Link>
                                </Button>
                            </div>
                        </section>
                    </div>
                </VisitorLayout>
            )}
        </>
    )
}