"use client"
import type React from "react"
import {useAuth} from "@/context/auth-context";
import {UserLayout} from "@/components/layouts/user-layout";
import {VisitorLayout} from "@/components/layouts/visitor-layout";

export default function RootLayout({children}: { children: React.ReactNode }) {
    const user = useAuth();
    return (
        <>{user ? (
            <UserLayout>
                {children}
            </UserLayout>
        ) : (
            <VisitorLayout>
                {children}
            </VisitorLayout>
        )}

        </>
    )
}
