"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/auth-context"
import SearchInput from "../ui/search"

export interface NavigationItem {
  name: string
  href: string
  icon: React.ElementType
}

interface DashboardLayoutProps {
  children: ReactNode
  navigation: NavigationItem[]
  variant?: "user" | "admin"
}

interface SheetComponentProps {
  navigation: NavigationItem[]
  brand: ReactNode | null
  logout: () => void
  pathname: string
}

export function DashboardLayout({ children, navigation, variant = "user" }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const brand = variant === "admin" ? (
    <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-primary-foreground">Admin</span>
  ) : null

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
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="px-4 md:px-12 flex items-center gap-2 md:gap-4">
            {/* mobile navigation */}
            <SheetComponent navigation={navigation} brand={brand} logout={logout} pathname={pathname} />
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="hidden md:inline text-blue-600">ArchivPlus</span>
              <span className="md:hidden text-blue-600">AP</span>
            </Link>
            {brand}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/profile" className="flex items-center gap-2">
              <SearchInput isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} handleSubmit={handleSubmit} handleChange={handleChange} />
              <Avatar>
                <AvatarFallback className="font-bold">{user?.username?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user?.username}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* desktop navigation */}
      <div className="flex flex-1">
        {pathname.startsWith("/profile") || pathname.startsWith("/admin") ? (
          <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40 max-h-[calc(100vh-64px)] lg:sticky md:top-0 md:bottom-0 lg:top-16">
            <nav className="flex-1 space-y-2 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href ? "bg-blue-600 text-primary-foreground" : "hover:bg-blue-200"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="border-t p-4">
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={logout}>
                <LogOut className="h-4 w-4" />
                Déconnexion
              </Button>
            </div>
          </aside>

        ) : (
          <></>
        )}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}


function SheetComponent({ navigation, brand, logout, pathname }: SheetComponentProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-6" aria-label="menu" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4">
            <SheetTitle>
              <Link href="/" className="text-xl font-bold text-blue-600">ArchivPlus</Link>
            </SheetTitle>
            {brand}
          </div>
          <nav className="flex-1 space-y-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href ? "bg-blue-600 text-primary-foreground" : "hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t pt-4">
            <Button variant="ghost" className="w-full justify-start gap-3" onClick={logout}>
              <LogOut className="h-4 w-4" aria-label="logout" />
              Déconnexion
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}