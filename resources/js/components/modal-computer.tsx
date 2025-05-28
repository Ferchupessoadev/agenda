import Modal from "./modal"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { DatePickerDemo } from "./ui/data-picker"
import { Textarea } from "./ui/textarea"
import { ArrowDown, LoaderCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { equipmentType, User } from "@/types"
import ImageProfile from "./image-profile"
import ImagePreview from "./modal/image-preview"
import { useComputerForm } from "@/hooks/useComputerForm"

type Props = {
    equipments: string[],
    setEquipments: React.Dispatch<React.SetStateAction<equipmentType[]>>,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<string>>,
    toggleModal: () => void,
    users: User[]
}

const ModalComputer = ({ modal, setModal, users }: Props) => {

    const {
        data, setData, errors, processing,
        handleSubmit, handleFileChange,
        previewImage, setPreviewImage,
        previewUrl
    } = useComputerForm(modal, setModal);

    return (
        <>
            <Modal modal={modal} setModal={setModal} classNameBox="bg-slate-700 rounded p-5" >
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
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
                                onChange={(e) => setData('possibleFailures', e.target.value)}
                                value={data.posibleFailure}
                                id="possible_failures"
                                placeholder="Posibles fallas"
                                className='w-full h-24 bg-slate-900 text-white resize-none overflow-y-auto custom-scrollbar' />
                            {errors.posibleFailure && <p className="text-red-500 text-sm">{errors.posibleFailure}</p>}
                        </div>
                    </div>
                    <div className="flex h-max w-full">
                        <div className='flex flex-col w-1/2'>
                            <input
                                type="file"
                                id="image"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <div className='flex gap-2 items-center w-full pr-6'>
                                <label htmlFor="image" className="cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <p className="text-white flex flex-col">
                                            <span>Adjuntar imagen</span>
                                            <span className="text-gray-400 text-[10px]">Max. 4MB</span>
                                        </p>
                                        <ImagePreview imageURL={previewUrl} className="size-14 border border-gray-400" />
                                    </div>
                                </label>
                            </div>
                            {
                                errors.image
                                    ? <p className="text-red-500 text-sm">{errors.image}</p>
                                    : null
                            }
                        </div>
                        <DropdownMenu className="w-1/2">
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-56 px-4 py-1 truncate flex items-center justify-between">
                                    {
                                        data.personInCharge ?
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <ImageProfile src={previewImage} className="h-5 w-5 overflow-hidden rounded-full" alt={data.personInCharge} />
                                                    <span>{data.personInCharge}</span>
                                                </div>
                                            </>
                                            : <span>Persona encargada</span>
                                    }
                                    <ArrowDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 h-40 overflow-y-auto custom-scrollbar">
                                {users.map((user: User) => (
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setData('personInCharge', user.name)
                                            setPreviewImage(user.image)
                                        }}
                                        className="cursor-pointer"
                                        key={user.id}
                                    >
                                        <ImageProfile src={user.image} className="size-8 rounded-full" />
                                        <span>{user.name}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex gap-4">
                        <Button
                            variant='secondary'
                            type="submit"
                            className="mt-4 w-max px-5 py-2 cursor-pointer"
                            tabIndex={4}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Añadir
                        </Button>
                        <Button
                            variant='danger'
                            type="button"
                            className="mt-4 w-max px-5 py-2 cursor-pointer"
                            tabIndex={5}
                            onClick={() => setModal(false)}
                        >
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Modal >
        </>
    )
}

export default ModalComputer
