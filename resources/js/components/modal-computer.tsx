import { useEffect, useState } from "react"
import Modal from "./modal"
import { router, useForm } from "@inertiajs/react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { DatePickerDemo } from "./ui/data-picker"
import { Textarea } from "./ui/textarea"
import { ArrowDown, ImagePlus, LoaderCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { computerForm, equipmentType, User } from "@/types"

type Props = {
    equipments: string[],
    setEquipments: React.Dispatch<React.SetStateAction<equipmentType[]>>,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<string>>,
    toggleModal: () => void,
    users: User[]
}

const ModalComputer = ({ equipments, setEquipments, modal, setModal, toggleModal, users }: Props) => {

    const { data, setData, reset, post, processing, errors } = useForm<Required<computerForm>>({
        computerType: 'laptop',
        dateTimeFinish: new Date(),
        dateTimeArrival: new Date(),
        description: '',
        posibleFailure: '',
        image: null,
        personInCharge: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('computers.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset('image')
                reset('description')
                reset('posibleFailure')
                reset('personInCharge')
                reset('dateTimeArrival')
                reset('dateTimeFinish')
                setPreviewUrl(null)
                setModal(false)
                location.reload()
            }
        })
    }

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setPreviewUrl(URL.createObjectURL(file)); // crea una URL temporal
        }
    };

    useEffect(() => {
        if (!modal) {
            reset('image')
            reset('description')
            reset('posibleFailure')
            reset('personInCharge')
            reset('dateTimeArrival')
            reset('dateTimeFinish')
            setPreviewUrl(null)
        }
    }, [modal])

    return (
        <>
            <Modal modal={modal} setModal={setModal} classNameBox="bg-slate-800 rounded p-5" >
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
                                onChange={(e) => setData('posibleFailure', e.target.value)}
                                value={data.posibleFailure}
                                id="posible_failure"
                                placeholder="Posibles fallas"
                                className='w-full h-24 bg-slate-900 text-white resize-none' />
                        </div>
                    </div>
                    <div className="flex justify-evenly h-max">
                        <div className='flex flex-col gap-2'>
                            <input
                                type="file"
                                id="image"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />

                            {errors.image && <div className="text-red-500">{errors.image}</div>}

                            <div className='flex gap-2 items-center'>

                                <label htmlFor="image" className="cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white">Adjuntar imagen</span>
                                        <ImagePlus className="h-4 w-4" />
                                    </div>
                                </label>

                                {previewUrl && (
                                    <img
                                        src={previewUrl}
                                        alt="Vista previa"
                                        className="w-14 h-14 object-cover rounded border border-gray-300"
                                    />
                                )}
                            </div>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="min-w-28 px-4 py-1">
                                    {data.personInCharge ? data.personInCharge : 'Docente o alumno a cargo'} <ArrowDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                {users.map((user: User) => (
                                    <DropdownMenuItem
                                        onClick={() => setData('personInCharge', user.name)}
                                        className="cursor-pointer"
                                        key={user.id}
                                    >
                                        {user.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Button type="submit" className="mt-4 w-max px-5 py-2" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Añadir
                    </Button>

                </form>
            </Modal >
        </>
    )
}

export default ModalComputer
