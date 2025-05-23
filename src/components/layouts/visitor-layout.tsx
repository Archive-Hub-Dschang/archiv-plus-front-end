import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface VisitorLayoutProps {
  children: ReactNode
}

export function VisitorLayout({ children }: VisitorLayoutProps) {
  return (
    <>
      <header className="flex justify-between h-16 px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl text-blue-600 font-bold">ArchivePlus</span>
            </Link>
            <nav className="hidden md:flex gap-6 ml-6">
              <Link href="/subjects" className="text-sm font-medium transition-colors hover:text-primary">Sujets</Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">À propos</Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" >
              <Button className="cursor-pointer" variant="outline" size="sm">Connexion</Button>
            </Link>
            <Link href="/register" className="hidden md:block">
              <Button className="bg-blue-600 cursor-pointer hover:bg-blue-500" size="sm">Inscription</Button>
            </Link>
          </div>
      </header>

      <main className="flex items-center justify-center">{children}</main>

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
