"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import SearchInput from "../ui/search"

interface VisitorLayoutProps {
  children: ReactNode
}

export function VisitorLayout({ children }: VisitorLayoutProps) {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Handle search logic here
    setIsSearchOpen(false)
    setIsLoading(false)
  }

  return (
    <>
      <header className="flex justify-between h-16 px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="hidden sm:block text-xl text-blue-600 font-bold">ArchivePlus</span>
            <span className="text-xl text-blue-600 font-bold sm:hidden">AP</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="/facultes" className="text-sm font-medium transition-colors hover:text-primary">Facultés</Link>
            <Link href="/#" className="text-sm font-medium transition-colors hover:text-primary">À propos</Link>
            <Link href="/#" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <SearchInput isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} handleSubmit={handleSubmit} handleChange={handleChange}/>
          <div className="flex items-center gap-4">
            <Link href="/login" className={cn("cursor-pointer", pathname === "/login" && "hidden")}>
              <Button variant="outline" size="sm">Connexion</Button>
            </Link>
            <Link href="/register" className={cn(" cursor-pointer", pathname === "/register" && "hidden")}>
              <Button className="bg-blue-600 hover:bg-blue-500" size="sm">Inscription</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 md:py-0 md:px-12">
        <p className="text-sm text-gray-500">
          &copy; 2025 ArchivePlus. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4 text-center">
          <Link href="/terms" className="text-sm text-gray-500 hover:text-foreground">Conditions d&apos;utilisation</Link>
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-foreground">Politique de confidentialité</Link>
        </div>
      </footer>
    </>
  )
}
