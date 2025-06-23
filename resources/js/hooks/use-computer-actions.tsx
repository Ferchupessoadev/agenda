import { Computer } from "@/components/equipments/columns"
import { equipmentType } from "@/types"
import { router } from "@inertiajs/react"
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../components/ui/dropdown-menu"
import { Edit, Eye, IdCard, MoreHorizontal, Trash } from "lucide-react"
import { Button } from "../components/ui/button"


export default function useComputerActions(equipments: equipmentType[], columns: ColumnDef<Computer>) {
    const POSTION_ACTIONS = 7
    const [equipmentsState, setEquipments] = useState<equipmentType[]>(equipments)

    const handleDelete = (id: number) => {
        router.delete(route('computers.destroy', id), {
            onSuccess: () => {
                setEquipments(prev => prev.filter(equipment => equipment.id !== id))
            },
            preserveScroll: true
        })
    }

    columns[POSTION_ACTIONS].cell = ({ row }) => {
        const computer = row.original

        return (
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center" asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 flex items-center justify-center">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => {
                            navigator.clipboard.writeText(computer.id)
                            alert('ID copiado al portapapeles')
                        }}
                    >
                        <IdCard className="mr-2" /> Copiar ID
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.get(route('computers.show', computer.id))}><Eye className="mr-2" />Ver detalles</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Edit className="mr-2" />Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(computer.id)}><Trash className="mr-2" />Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return { equipmentsState, setEquipments, handleDelete }
}
