import AddFile from '@/components/admin/addFile'
import { UserListItem } from '@/components/admin/userListItem'
import { AdminLayout } from '@/components/layouts/admin-layout'
import React from 'react'


const userMocks = [
  {
    name: "Floyd Miles",
    birthDate: "6/19/14",
    id: 521,
    startDate: "5/30/2023",
    endDate: "5/19/2023",
    code: "asws4uf433"
  },
  {
    name: "Jane Cooper",
    birthDate: "2/12/98",
    id: 872,
    startDate: "4/15/2023",
    endDate: "5/10/2023",
    code: "hgf53dfgy"
  },
  {
    name: "Albert Flores",
    birthDate: "9/01/90",
    id: 109,
    startDate: "3/20/2023",
    endDate: "4/25/2023",
    code: "lpok3k9ff"
  },
  {
    name: "Jenny Wilson",
    birthDate: "11/05/89",
    id: 342,
    startDate: "6/01/2023",
    endDate: "6/30/2023",
    code: "x1c7g6zzr"
  },
  {
    name: "Robert Fox",
    birthDate: "7/21/87",
    id: 777,
    startDate: "1/05/2023",
    endDate: "2/05/2023",
    code: "rmk84dfe"
  },
]

export default function page() {
    return (
        <AdminLayout>
          <AddFile text='Ajouter un utilisateur' link='#'/>
            {userMocks.map((user) => (
              <div className='max-sm:px-4' key={user.id}>
                <UserListItem name={user.name} id={user.id} startDate={user.startDate} endDate={user.endDate}/>
                <UserListItem name={user.name} id={user.id} startDate={user.startDate} endDate={user.endDate}/>
              </div>
            ))}
        </AdminLayout>
    )
}