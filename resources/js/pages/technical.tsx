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

                <div className="flex flex-col flex-wrap gap-4 w-full">
                    {users ?
                        users.map(user => (
                            <div key={user.id} className="flex gap-2 w-40 h-max border border-gray-400">
                                <img className="w-full" src={user.image} alt={user.name} />
                                <div className="flex flex-col gap-2">

                                    <p>{user.name}</p>
                                    <p className="">{user.email}</p>
                                </div>
                            </div>
                        )
                        ) : (
                            <p>No hay usuarios</p>
                        )
                    }
                </div>
            </main>

        </AppLayout>
    )
}
