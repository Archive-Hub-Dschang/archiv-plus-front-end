export type User = {
    username: string
    email: string
    role: "user"|"admin"
    jwt: string
}
