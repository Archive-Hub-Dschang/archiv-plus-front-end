"use client"

import { type ReactNode } from "react"
import { Book, Download, Heart, Home } from "lucide-react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"

interface UserLayoutProps {
  children: ReactNode
}

const navigation = [
  { name: "Tableau de bord", href: "profile/dashboard", icon: Home },
  { name: "Sujets", href: "/fields/:fieldId/levels/:levelId/subjects/:subjectId", icon: Book },
  { name: "Mes téléchargements", href: "profile/downloads", icon: Download },
  { name: "Mon profil", href: "/profile", icon: Home },
  { name: "Mes favoris", href: "profile/favorites", icon: Heart }
]

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <DashboardLayout navigation={navigation}>
      {children}
    </DashboardLayout>
  )
}
