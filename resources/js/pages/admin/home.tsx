import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem, SharedData } from "@/types"
import { Head, usePage } from "@inertiajs/react"

const Home = () => {
    const page = usePage<SharedData>().props
    const { user, roles } = page.auth

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: "Panel de administración",
            href: "/admin",
        },
    ]

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-white">Panel de administración</h1>
                    <div className="text-gray-300">Hola {user.name}</div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Home
