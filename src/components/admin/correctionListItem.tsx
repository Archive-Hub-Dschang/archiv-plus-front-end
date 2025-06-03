"use client"

import { useState } from "react";
import { CorrectionProps } from "@/app/admin/corrections/page";

export function CorrectionItem({ correction }: { correction: CorrectionProps }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className='grid grid-cols-[auto_auto_auto_auto] md:grid-cols-4 justify-items-start items-center border-b-2 rounded-sm border-gray-200 text-sm p-2 cursor-pointer hover:shadow-lg hover:hover:bg-blue-300' onClick={() => setIsChecked(!isChecked)}>
            <input type="checkbox" name={`exam-${correction.id}`} id={`exam-${correction.id}`} className='size-4' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <div className='flex flex-col items-center'>
                <div className="font-semibold justify-self-start">ID sujet: {correction.examId}</div>
            </div>
            <div className="font-semibold justify-self-start">ID correction: {correction.id}</div>
            <div className="flex max-sm:items-center flex-col gap-1">
                <div>Chemin: {correction.pdfUrl}</div>
            </div>
        </div>
    )
}