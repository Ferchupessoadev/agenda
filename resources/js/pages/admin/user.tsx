import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"

const User = () => {
    return (
        <AppLayout>
            <Head title="User" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-white">User</h1>
                </div>
            </div>
        </AppLayout>
    )
}

export default User
