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
                            <div key={user.id} className="flex gap-2 w-40 h-40 border border-gray-400">
                                {
                                    user.image == 'default-user.jpg' ?
                                        <img className="w-full object-cover" src={user.image} alt={user.name} />
                                        :
                                        <img className="w-full object-cover" src={'/storage/' + user.image} alt={user.name} />
                                }
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

        </AppLayout >
    )
}
