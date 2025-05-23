"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useAuth } from "@/context/auth-context"
import { VisitorLayout } from "@/components/layouts/visitor-layout"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const success = await login(email, password)

      if (success) {
        toast("Connexion réussie", { description: "Vous êtes maintenant connecté." })
        router.push("/dashboard")
      } else {
        toast("Erreur de connexion", { description: "Email ou mot de passe incorrect." })
      }
    } catch (error) {
      console.log(error)
      toast("Erreur", { description: "Une erreur est survenue. Veuillez réessayer." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <VisitorLayout>
        <div className="flex w-full max-sm:py-8 flex-col justify-center space-y-6 sm:w-[350px] md:h-[480px] xl:h-[550px] max-md:px-4">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-blue-600">Connexion</h1>
            <p className="text-sm text-muted-foreground">Entrez vos identifiants pour accéder à votre compte</p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="exemple@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link href="/forgot-password"className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                      Mot de passe oublié?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button className="bg-blue-600 cursor-pointer hover:bg-blue-500" type="submit" disabled={isLoading}>
                  {isLoading ? "Connexion en cours..." : "Se connecter"}
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-gray-500">OU</span>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-center text-sm text-muted-foreground">
                Vous navez pas de compte?{" "}
                <Link href="/register" className="font-medium text-blue-600 underline-offset-4 hover:underline">Créer un compte</Link>
              </p>
            </div>
          </div>
        </div>
    </VisitorLayout>
  )
}
