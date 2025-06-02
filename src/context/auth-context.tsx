"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode
} from "react"
import { useRouter } from "next/navigation"
import { User } from "@/types/user"

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        setIsLoading(false)
        return false
      }

      const data = await response.json()

      const loggedInUser: User = {
        username: data.username,
        email: data.email,
        jwt: data.jwt
      }

      setUser(loggedInUser)
      localStorage.setItem("user", JSON.stringify(loggedInUser))
      setIsLoading(false)
      return true
    } catch (error) {
      console.error("Erreur lors de la connexion:", error)
      setIsLoading(false)
      return false
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: name,
          email,
          password
        })
      })

      if (!response.ok) {
        setIsLoading(false)
        return false
      }

      const data = await response.json()

      const newUser: User = {
        username: data.username,
        email: data.email,
        jwt: data.jwt
      }

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      setIsLoading(false)
      return true
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
      <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
        {children}
      </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
