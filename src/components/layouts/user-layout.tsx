"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Book, Download, Heart, Home, LogOut, Menu, ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface UserLayoutProps {
  children: ReactNode
}

const navigation = [
  { name: "Tableau de bord", href: "/dashboard", icon: Home },
  { name: "Sujets", href: "/fields/:fieldId/levels/:levelId/subjects/:subjectId", icon: Book },
  { name: "Mes téléchargements", href: "/dashboard/downloads", icon: Download },
  { name: "Mes favoris", href: "/dashboard/favorites", icon: Heart }
]

export function UserLayout({ children }: UserLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  return (
    <div className="flex flex-col h-screen">
      <header className="h-16 flex items-center justify-between px-4 md:px-12 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* mobile navigation */}
        <div className="flex items-center gap-2 container md:gap-4">
          <SheetComponent pathname={pathname} logout={logout} />
          <div className="text-xl font-bold text-blue-600">
            <Link href="/" className="hidden md:block">ArchivPlus</Link>
            <Link href="/" className="md:hidden">AP</Link>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="size-5" aria-label="shopping cart" />
            </Button>
          </Link>
          <div className="flex items-center gap- cursor-pointer">
            <Avatar>
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>
      </header>

      {/* desktop navigation */}
      <div className="flex flex-1">
        <aside className="hidden md:block border-r bg-white">
          <nav className="flex-1 space-y-2 py-2 px-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={cn("flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium", pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted")}>
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t p-4 md:px-8">
            <Button variant="ghost" className="w-full justify-start gap-3" onClick={logout}>
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </aside>
        <main className="flex-1 p-2">{children}</main>
      </div>
    </div>
  )
}

function SheetComponent({ pathname, logout }: { pathname: string, logout: () => void }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-9 font-bold" aria-label="menu" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-4">
        <div className="flex items-center">
          <SheetTitle>
            <Link href="/" className="text-blue-600 font-bold px-2">ArchivPlus</Link>
          </SheetTitle>
        </div>
        <nav className="pt-6 flex flex-col text-nowrap space-y-1">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name} className={cn("flex items-center text-sm font-medium p-2 rounded-md", pathname === item.href ? "bg-blue-100 text-blue-600" : "text-gray-900 hover:bg-gray-100")}>
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 p-2 border-t">
          <LogOut className="size-5" aria-label="logout" />
          <Button variant="ghost" size="sm" onClick={logout} className="text-sm font-medium">
            Déconnexion
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
