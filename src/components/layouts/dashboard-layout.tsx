"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Menu, LogOut, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/auth-context"

export interface NavigationItem {
  name: string
  href: string
  icon: React.ElementType
}

interface DashboardLayoutProps {
  children: ReactNode
  navigation: NavigationItem[]
  variant?: "user" | "admin"
  withSearch?: boolean
}

export function DashboardLayout({ children, navigation, variant = "user", withSearch = false }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const brand = variant === "admin" ? (
    <span className="rounded-full bg-blue-500 bg-primary px-2 py-1 text-xs text-primary-foreground">Admin</span>
  ) : null

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="px-4 md:px-8 flex items-center gap-2 md:gap-4">
            {/* mobile navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-6" aria-label="menu"/>
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
                      <LogOut className="h-4 w-4" aria-label="logout"/>
                      Déconnexion
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="hidden md:inline text-blue-600">ArchivPlus</span>
              <span className="md:hidden text-blue-600">AP</span>
            </Link>
            {brand}
          </div>

          <div className="flex items-center gap-4">
            {withSearch && isSearchOpen ? (
              <div className="relative w-full md:w-60 flex items-center">
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full pl-8"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" aria-label="search"/>
                <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <>
                {withSearch && (
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                  </Button>
                )}
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback className="font-bold">{user?.name?.charAt(0)}s</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

            {/* desktop navigation */}
      <div className="flex flex-1">
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

        <main className="flex-1 px-3">{children}</main>
      </div>
    </div>
  )
}
