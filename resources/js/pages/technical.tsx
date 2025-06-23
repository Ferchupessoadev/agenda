import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"

type User = {
    id: number
    name: string
    email: string
    image: string
}

export default function Technical({ users }: { users?: User[] }) {

    return (
        <AppLayout>
            <Head title="Tecnicos" />

            <main className="p-4">

                <div className="flex flex-col flex-wrap gap-4 w-full">
                    {users ?
                        users.map(user => (
                            <div key={user.id} className="flex items-center gap-4 w-full h-40">
                                {
                                    user.image == "default-user.jpg"
                                        ? <img className="w-40 h-40 object-cover rounded-full" src={user.image} alt={user.name} />
                                        : <img className="w-40 h-40 object-cover rounded-full" src={'/storage/' + user.image} alt={user.name} />
                                }
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </div>
                        )) : (
                            <p>No hay usuarios</p>
                        )
                    }
                </div>
            </main>

        </AppLayout >
    )
}
