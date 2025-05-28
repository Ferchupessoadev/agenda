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
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
import { Button } from "../components/ui/button"

const POSTION_ACTIONS = 7

export default function useComputerActions(equipments: equipmentType[], columns: ColumnDef<Computer>) {
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
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(computer.id)}
                    >
                        Copiar computer ID
                    </DropdownMenuItem>
                    <DropdownMenuItem><Eye className="mr-2" /> Ver detalles</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Edit className="mr-2" />Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(computer.id)}><Trash className="mr-2" />Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return { equipmentsState, setEquipments, handleDelete }
}
