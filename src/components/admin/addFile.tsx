import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function AddFile({text, link}: { text: string, link: string }) {
    return (
        <div className="p-2 flex items-end justify-end gap-2">
            <Link href={link}>
                <Button className="text-white text-center hover:text-white bg-blue-600 hover:bg-blue-500" size="lg" variant="outline">
                    {text}
                </Button>
            </Link>
        </div>
    )
}