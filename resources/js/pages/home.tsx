import AppLayout from '@/layouts/app-layout';
import { equipmentType, User, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import useModal from '@/hooks/use-modal';
import ModalComputer from '@/components/modal-computer';
import Equipments from '@/components/equipments';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Home({ equipments, users }: { equipments: equipmentType[], users?: User[] }) {
    const { auth } = usePage<SharedData>().props

    const [equipmentsState, setEquipments] = useState<React.SetStateAction<equipmentType[]>>(equipments)

    const { modal, setModal, toggleModal } = useModal(false)

    return (
        <>
            <ModalComputer equipments={equipmentsState} setEquipments={setEquipments} modal={modal} setModal={setModal} toggleModal={toggleModal} users={users} />
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
