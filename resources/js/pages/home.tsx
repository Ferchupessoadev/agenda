import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import Heading from '@/components/heading';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { Button } from '@/components/ui/button';
import Modal from '@/components/modal';
import useModal from '@/hooks/use-modal';
import { ArrowDown, LoaderCircle, PlusIcon } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DatePickerDemo } from '@/components/ui/data-picker';
import { Textarea } from '@/components/ui/textarea';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type computerForm = {
    computerType: string,
    dateTimeFinish: Date,
    description: string,
    posible_failure: string,
    personInCharge: string
}

export default function Home() {
    const { auth } = usePage<SharedData>().props
    const { modal, setModal, toggleModal } = useModal(false)
    const { data, setData, post, processing, errors } = useForm<Required<computerForm>>({
        computerType: 'laptop',
        dateTimeFinish: new Date(),
        description: '',
        posible_failure: '',
        personInCharge: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('computer.store'))
    }

    return (
        <>
            <Modal modal={modal} setModal={setModal} classNameBox="bg-slate-800 rounded p-5">
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='flex justify-between gap-2'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white'>Tipo de computadora</span>
                            <RadioGroup
                                onValueChange={(value) => setData('computerType', value)}
                                defaultValue={data.computerType}
                                className="flex flex-col gap-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem className='cursor-pointer' value="laptop" id="laptop" />
                                    <label className='text-white cursor-pointer' htmlFor="laptop">Laptop</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem className='cursor-pointer' value="escritorio" id="escritorio" />
                                    <label className='text-white cursor-pointer' htmlFor="escritorio">Escritorio</label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            <div className='flex gap-3 items-center w-full'>
                                <span className='text-gray-400 text-sm'>Fecha de llegada</span>
                                <DatePickerDemo id="dateTimeArrival" onChange={setData} inputname='dateTimeArrival' />
                            </div>
                            <div className='flex gap-3 items-center w-full'>
                                <span className='text-gray-400 text-sm'>Fecha de entrega</span>
                                <DatePickerDemo id="dateTimeFinish" onChange={setData} inputname='dateTimeFinish' />
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <Textarea
                            onChange={(e) => setData('description', e.target.value)}
                            value={data.description}
                            id="description"
                            placeholder="Describe el equipo"
                            className='w-1/2 h-24 bg-slate-900 text-white resize-none' />

                        <div className='flex flex-col gap-2 w-1/2'>
                            <Textarea
                                onChange={(e) => setData('posible_failure', e.target.value)}
                                value={data.posible_failure}
                                id="posible_failure"
                                placeholder="Posibles fallas"
                                className='w-full h-24 bg-slate-900 text-white resize-none' />
                        </div>
                    </div>
                    <div className="flex justify-end h-max">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="min-w-28 px-4 py-1">
                                    {data.personInCharge ? data.personInCharge : 'Docente o alumno a cargo'} <ArrowDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem
                                    onClick={() => setData('personInCharge', 'fernando')}
                                    className="cursor-pointer"
                                >
                                    Fernando
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setData('personInCharge', 'matias')}
                                    className="cursor-pointer"
                                >
                                    Matias
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Button type="submit" className="mt-4 w-max px-5 py-2" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Añadir
                    </Button>

                </form>
            </Modal>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Panel" />
                <main className="p-4">
                    <Heading title={"Hola " + auth.user.name} description="Bienvenido al sistema" />

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
