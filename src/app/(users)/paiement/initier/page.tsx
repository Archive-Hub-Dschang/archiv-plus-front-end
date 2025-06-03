"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Smartphone, CreditCard, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function InitierPaiementPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        operateur: "",
        numero: "",
        nom: "",
        prenom: "",
    })
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulation du processus de paiement
        setTimeout(() => {
            setIsProcessing(false)
            router.push("/paiement/confirmation")
        }, 3000)
    }

    const updateFormData = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-4 text-blue-600">Finaliser votre abonnement</h1>
                    <p className="text-gray-600">Effectuez votre paiement via Mobile Money pour activer votre abonnement</p>
                </div>

                {/* Récapitulatif de commande */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            Récapitulatif de la commande
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>Abonnement semestriel ArchivPlus</span>
                                <span className="font-semibold">1 000 FCFA</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Durée</span>
                                <span>un semestre</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Accès</span>
                                <span>Toutes les corrections</span>
                            </div>
                            <hr />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>1 000 FCFA</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Formulaire de paiement */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Smartphone className="h-5 w-5" />
                            Paiement Mobile Money
                        </CardTitle>
                        <CardDescription>Choisissez votre opérateur et entrez vos informations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Alert className="border-blue-200 bg-blue-50">
                                <Shield className="h-4 w-4" />
                                <AlertDescription>Vos informations de paiement sont sécurisées et cryptées</AlertDescription>
                            </Alert>

                            <div className="space-y-2">
                                <Label htmlFor="operateur">Opérateur Mobile Money *</Label>
                                <Select onValueChange={(value) => updateFormData("operateur", value)} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez votre opérateur" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="orange money">Orange Money</SelectItem>
                                        <SelectItem value="mtn money">MTN Mobile Money</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="numero">Numéro de téléphone *</Label>
                                <Input
                                    id="numero"
                                    type="tel"
                                    placeholder="Ex: 07 XX XX XX XX"
                                    value={formData.numero}
                                    onChange={(e) => updateFormData("numero", e.target.value)}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nom">Nom *</Label>
                                    <Input
                                        id="nom"
                                        placeholder="Votre nom"
                                        value={formData.nom}
                                        onChange={(e) => updateFormData("nom", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="prenom">Prénom *</Label>
                                    <Input
                                        id="prenom"
                                        placeholder="Votre prénom"
                                        value={formData.prenom}
                                        onChange={(e) => updateFormData("prenom", e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500" size="lg" disabled={isProcessing}>
                                    {isProcessing ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Traitement en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Smartphone className="h-4 w-4 mr-2" />
                                            Payer 1 000 FCFA
                                        </>
                                    )}
                                </Button>

                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/abonnement">
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Retour à l&#39;abonnement
                                    </Link>
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>
                                En procédant au paiement, vous acceptez nos{" "}
                                <Link href="/conditions" className="text-blue-600 hover:underline">
                                    conditions d&#39;utilisation
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
