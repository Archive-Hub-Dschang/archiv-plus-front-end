"use client"
import DepartementListItem from "@/components/admin/departmentListItem";
import { AdminLayout } from "@/components/layouts/admin-layout";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface DepartmentProps {
    id: string,
    name: string
}

export default function DepartmentPage(){
    const [departements, setDepartement] = useState<DepartmentProps[]|null>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      const fetchDep = async () => {
        try{
          const response = await fetch(`${process.env.NEXT_PUBLIC_DOCS_URL}/academic/departments`)
          const corrections = await response.json()
          setDepartement(corrections)
        }catch(e){
          console.log(e);
          toast("erreur lors de la recuperation des departements")
        }finally{
          setIsLoading(false)
        }
      }
      fetchDep()
    }, [])
    
    if(isLoading)
      return <div className="size-full flex justify-center items-center">Chargements...</div>
    if(departements===null)
      return <div className="size-full flex justify-center items-center">erreur</div>
    return (
        <AdminLayout>
            {departements?.map((departement)=>
                <DepartementListItem key={departement.id} id={departement.id} name={departement.name} />
            )}
        </AdminLayout>
    )
}