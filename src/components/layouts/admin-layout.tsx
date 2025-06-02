"use client"

import { type ReactNode } from "react"
import { BarChart, Book, FileText, Folder, GraduationCapIcon as Graduation, Home, Settings, } from "lucide-react"
import { DashboardLayout } from "./dashboard-layout"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {

  const navigation = [
    { name: "Tableau de bord", href: "/admin", icon: Home },
    { name: "Utilisateurs", href: "/admin/users", icon: Folder },
    { name: "Sujets", href: "/admin/exams", icon: Book },
    { name: "Corrections", href: "/admin/corrections", icon: FileText },
    { name: "Départements", href: "/admin/departments", icon: Folder },
    { name: "Filières", href: "/admin/fields", icon: Graduation },
    { name: "Niveaux", href: "/admin/levels", icon: BarChart },
    { name: "Matières", href: "/admin/subjects", icon: Book },
    { name: "Paramètres", href: "#", icon: Settings },
  ]

  return (
    <DashboardLayout navigation={navigation} variant="admin" withSearch={true}>
        {children}
    </DashboardLayout>
  )
}
