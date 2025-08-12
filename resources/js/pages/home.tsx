import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Home() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Inicio" />
                <main className="p-4">
                    <section className='flex justify-end'>
                    </section>
                </main>
            </AppLayout>
        </>
    );
}
