import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/context/auth-context"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ArchivePlus",
  description: "Plateforme éducative pour accéder à des sujets et corrections"
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
      </body>
    </html>
  )
}
