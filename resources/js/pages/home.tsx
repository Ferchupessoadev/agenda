import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Heading from '@/components/heading';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Home() {
    const { auth } = usePage<SharedData>().props
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Panel" />
            <main className="p-4">
                <Heading title={"Hola " + auth.user.name} description="Bienvenido al sistema" />
            </main>

        </AppLayout >
    );
}
