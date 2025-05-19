import AppLayout from "@/layouts/app-layout"
import { SharedData } from "@/types"
import { Head, usePage } from "@inertiajs/react"

type User = {
    id: number
    name: string
    email: string
    image: string
}

export default function Technical({ users }: { users?: User[] }) {

    const { auth } = usePage<SharedData>().props

    return (
        <AppLayout>
            <Head title="Tecnicos" />

            <main className="p-4">

                {users ?
                    users.map(user => (
                        <div key={user.id} className="flex flex-col gap-2 w-48 h-max">
                            <img className="w-full" src={user.image} alt={user.name} />
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                    ) : (
                        <p>No hay usuarios</p>
                    )
                }
            </main>

        </AppLayout>
    )
}
