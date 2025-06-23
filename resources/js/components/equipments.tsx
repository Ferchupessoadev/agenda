import { equipmentType } from "@/types"
import { columns } from "./equipments/columns"
import { DataTable } from "./ui/data-table"
import useComputerActions from "@/hooks/use-computer-actions"

const Equipments = ({ equipments }: { equipments: equipmentType[] }) => {

    const { equipmentsState } = useComputerActions(equipments, columns);


    return (
        <section className="flex flex-wrap gap-4 w-full py-4">
            {equipmentsState.length > 0
                ? <DataTable className="w-full" data={equipmentsState} columns={columns} />
                : <p className="w-full text-center text-2xl">Actualmente no se encuentran equipos registrados pendientes de reparación.</p>

            }
        </section>
    )
}

export default Equipments
