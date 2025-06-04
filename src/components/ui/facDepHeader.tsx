"use client"
import { ChevronLeft } from "lucide-react"
import { Button } from "./button"
import Link from "next/link"

interface HeaderProps{
    title:string, 
    description:string, 
    link:string, 
    linkText:string
}

export default function Header({title, description, link, linkText}:HeaderProps){
    return (
        <div className="mb-8">
                <div className="flex flex-col-reverse items-end md:flex-row md:items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href={link}>
                            <ChevronLeft className="size-4 mr-2"/>
                            {linkText}
                        </Link>
                    </Button>
                </div>
            </div>

    )
}