"use client";

import { useState } from "react";

export interface ExamItemProps {
    id: string
    title: string
    type: "CC" | "normale"
    year: number
    pdfUrl: string
    subjectId: string
}

export function ExamItem({ exam }: { exam: ExamItemProps }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className='grid grid-cols-[auto_auto_auto_auto_auto] md:grid-cols-5 justify-items-start items-center border-b-2 rounded-sm border-gray-200 text-sm p-2 cursor-pointer hover:shadow-lg hover:hover:bg-blue-300'>
            <input type="checkbox" name={`exam-${exam.id}`} id={`exam-${exam.id}`} className='size-4' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <div>
                <p>ID sujet: {exam.subjectId}</p>
            </div>
            <div className='flex flex-col'>
                <div className="justify-self-start">{exam.title}</div>
                <div className="text-xs text-gray-500 justify-self-start">ID: {exam.id}</div>
            </div>
            <div className="flex max-sm:items-center flex-col gap-1">
                <div>annee: {exam.year}</div>
            </div>
            <div>
                <p>{exam.type}</p>
            </div>
        </div>
    )
}
