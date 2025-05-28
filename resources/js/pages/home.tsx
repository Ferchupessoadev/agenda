import AppLayout from '@/layouts/app-layout';
import { equipmentType, User, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import useModal from '@/hooks/use-modal';
import ModalComputer from '@/components/modal-computer';
import Equipments from '@/components/equipments';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Home({ equipments, users }: { equipments: equipmentType[], users?: User[] }) {
    const { modal, setModal, toggleModal } = useModal(false)

    return (
        <>
            <ModalComputer modal={modal} setModal={setModal} users={users} />
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Panel" />
                <main className="p-4">
                    <section className='flex justify-end'>
                        <Button onClick={toggleModal} className='cursor-pointer' variant="destructive">
                            <span className='flex items-center gap-2'>
                                <PlusIcon /> Añadir
                            </span>
                        </Button>
                    </section>
                    <Equipments equipments={equipments} />
                </main>
            </AppLayout>
        </>
    );
}
