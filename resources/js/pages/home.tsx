import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import useModal from '@/hooks/use-modal';
import ModalComputer from '@/components/modal-computer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Home() {
    const { modal, setModal, toggleModal } = useModal(false)

    return (
        <>
            <ModalComputer modal={modal} setModal={setModal} />
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Inicio" />
                <main className="p-4">
                    <section className='flex justify-end'>
                        <Button onClick={toggleModal} className='cursor-pointer' variant="destructive">
                            <span className='flex items-center gap-2'>
                                <PlusIcon /> Añadir
                            </span>
                        </Button>
                    </section>
                </main>
            </AppLayout>
        </>
    );
}
