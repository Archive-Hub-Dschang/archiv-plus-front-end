"use client"

import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { useState } from 'react'

export function UserListItem({ name, id, startDate, endDate }: { name: string, id: number, startDate: string, endDate: string }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className='grid grid-cols-[auto_auto_auto_auto] md:grid-cols-4 justify-items-start items-center border-b-2 rounded-sm border-gray-200 text-sm p-2 cursor-pointer hover:shadow-lg hover:hover:bg-blue-300' onClick={() => setIsChecked(!isChecked)}>
            <input type="checkbox" name={`user-${id}`} id={`user-${id}`} className='size-4' checked={isChecked}  onChange={() => setIsChecked(!isChecked)}/>
            <div className='flex gap-4 flex-wrap items-center'>
                <Avatar className='hidden size-8 font-bold bg-gray-300 rounded-full sm:flex items-center justify-center'>
                    <AvatarFallback>{name?.[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold justify-self-start">{name}</div>
                    <div className="text-xs text-gray-500 justify-self-start">ID: {id}</div>
                </div>
            </div>
            <div className="flex max-sm:items-center flex-col gap-1">
                <div>Start: {startDate}</div>
                <div>End: {endDate}</div>
            </div>
        </div>
    )
}
