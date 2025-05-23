export type User = {
    id: string
    name: string
    email: string
    role: "admin" | "user"
    avatar: string
    password?: string
} 