import { equipmentType, SharedData } from "@/types"
import { Button } from "@headlessui/react"
import { router, usePage } from "@inertiajs/react"
import { Trash } from "lucide-react"
import { useState } from "react"

const Equipments = ({ equipments }: { equipments: equipmentType[] }) => {
    const { auth } = usePage<SharedData>().props
    const [equipmentsState, setEquipments] = useState<equipmentType[]>(equipments)

    const handleSubmit = (id: number) => {
        router.delete(route('computers.destroy', id))

        setEquipments(equipmentsState.filter(equipment => equipment.id !== id))
    }

    return (
        <section className="flex flex-wrap gap-4 w-full">
            {equipmentsState ?
                equipmentsState.map(equipment => (
                    <div key={equipment.id} className="flex gap-2 w-full h-max relative">
                        <img className="w-40" src={"storage/" + equipment.image} />
                        <div className='flex flex-col gap-2'>
                            <p><b>Tipo de equipo: </b>{equipment.computer_type}</p>
                            <p className=""><b>Descripcion: </b>{equipment.description}</p>
                            <p className=""><b>Persona a cargo: </b>{equipment.person_in_charge}</p>
                            <p className=""><b>Fecha de llegada: </b>{equipment.date_time_arrival}</p>
                            <p className=""><b>Fecha de entrega: </b>{equipment.date_time_finish}</p>
                        </div>
                        <div className="absolute top-0 right-0 h-full w-max flex items-center">
                            <Button onClick={() => handleSubmit(equipment.id)} className="cursor-pointer flex items-center gap-2 bg-red-900 p-3 rounded">
                                <Trash /> <span>Eliminar</span>
                            </Button>
                        </div>
                    </div>
                )
                ) : (
                    <p>No hay equipos</p>
                )
            }
        </section>
    )
}

export default Equipments
