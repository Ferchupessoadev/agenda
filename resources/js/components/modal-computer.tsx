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

    return (
        <>
            <Modal modal={modal} setModal={setModal} classNameBox="bg-slate-700 rounded p-5">
                <form className='flex flex-col gap-2'>

                </form>
            </Modal >
        </>
    )
}

export default ModalComputer
