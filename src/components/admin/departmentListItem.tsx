"use client"

import { useState } from "react";
import { DepartmentProps } from "@/app/admin/departments/page";

export default function DepartementListItem(department:DepartmentProps){
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className='grid grid-cols-[auto_auto_auto_auto_auto] md:grid-cols-5 justify-items-start items-center border-b-2 rounded-sm border-gray-200 text-sm p-2 cursor-pointer hover:shadow-lg hover:hover:bg-blue-300'>
            <input type="checkbox" name={`department-${department.id}`} id={`department-${department.id}`} className='size-4' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <div className='flex flex-col'>
                <div className="justify-self-start">Nom: {department.name}</div>
                <div className="text-xs text-gray-500 justify-self-start">ID: {department.id}</div>
            </div>
        </div>
    )
}