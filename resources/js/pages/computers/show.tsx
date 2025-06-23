import AppLayout from "@/layouts/app-layout"
import { formatDate } from "@/lib/utils"
import { equipmentType } from "@/types"
import { ArrowLeftIcon } from "lucide-react"

const Show = ({ computer }: { computer: equipmentType }) => {

    return (
        <>
            <AppLayout>
                <section className="flex gap-4 w-[97%] m-5 p-5 border border-gray-400">
                    <ArrowLeftIcon className="w-8 cursor-pointer" onClick={() => window.history.back()} />
                    <img className="w-1/3 object-cover rounded" src={"/storage/" + computer.image} alt={computer.computer_type} />
                    <div className="flex flex-col gap-2 py-4 w-full">
                        <p className="text-lg text-gray-200"><b className="text-white">Tipo de computadora: </b>{computer.computer_type}</p>
                        <p className="text-sm text-gray-500"><b className="text-white">Descripcion: </b>{computer.description}</p>
                        <p className="text-sm text-gray-500"><b className="text-white">posibles fallas: </b>{computer.possible_failures}</p>
                        <p className="text-sm text-gray-500"><b className="text-white">Encargado: </b>{computer.person_in_charge}</p>
                        <p className="text-sm text-gray-500"><b className="text-white">Fecha de llegada: </b>{formatDate(computer.date_time_arrival)}</p>
                        <p className="text-sm text-gray-500"><b className="text-white">Fecha de salida: </b>{formatDate(computer.date_time_finish)}</p>
                    </div>
                </section>
            </AppLayout>
        </>
    )
}

export default Show
