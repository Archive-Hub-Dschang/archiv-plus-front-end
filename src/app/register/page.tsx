"use client"

import type React from "react"
import {useState} from "react"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useAuth} from "@/context/auth-context"
import {toast} from "sonner"
import {VisitorLayout} from "@/components/layouts/visitor-layout"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {register} = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast("Erreur", {
                description: "Les mots de passe ne correspondent pas."
            })
            return
        }

        setIsLoading(true)

        const success = await register(name, email, password)

        if (success) {
            toast("Inscription réussie", {
                description: "Votre compte a été créé avec succès."
            })
            router.push("/profile")
        } else {
            toast("Erreur d'inscription", {
                description: "Cet email est déjà utilisé ou une erreur est survenue."
            })
        }

        setIsLoading(false)
    }

    return (
        <div className="flex flex-col justify-center w-full py-10 space-y-3 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center text-blue-600">
                <h1 className="text-2xl font-semibold">Créer un compte</h1>
                <p className="text-sm text-gray-500">
                    Inscrivez-vous pour accéder à toutes les fonctionnalités
                </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 md:px-0">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Jean Dupont"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="exemple@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                    <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <Button
                    className="bg-blue-600 cursor-pointer hover:bg-blue-500"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Inscription en cours..." : "S'inscrire"}
                </Button>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-background px-2 text-muted-foreground">OU</span>
                </div>
            </div>
            <p className="text-center text-sm text-gray-500">
                Vous avez déjà un compte?{" "}
                <Link
                    href="/login"
                    className="font-medium underline-offset-4 hover:underline text-blue-600"
                >
                    Se connecter
                </Link>
            </p>
        </div>
    )
}
