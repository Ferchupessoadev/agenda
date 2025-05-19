import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"
import { useEffect } from "react"


export default function Technical({ users }: { users?: { id: number, name: string } }) {

    useEffect(() => {
        console.log(users)
    }, [])

    return (
        <AppLayout>
            <Head title="Panel" />

            {users ? (
                users.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            ) : (
                <p>No hay usuarios</p>
            )

            }

        </AppLayout>
    )
}
