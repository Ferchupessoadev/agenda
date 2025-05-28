"use client"

import { ColumnDef } from "@tanstack/react-table"
import ModalImage from "../modal/modal-image"

export type Computer = {
    image: string
    computer_type: string
    person_in_charge: string
    posible_failures: string
    date_time_arrival: string
    date_time_finish: string
}

export const columns: ColumnDef<Computer>[] = [
    {
        accessorKey: "image",
        header: "Imagen",
        cell: ({ row }) => {
            return <ModalImage src={'/storage/' + row.original.image} alt={row.original.computer_type} />
        },
    },
    {
        accessorKey: "computer_type",
        header: "Tipo de equipo",
    },
    {
        accessorKey: "description",
        header: "Descripcion",
        cell: ({ row }) => {
            return row.original.description.length > 50 ? row.original.description.slice(0, 50) + "..." : row.original.description
        }
    },
    {
        accessorKey: "possible_failures",
        header: "Posibles fallas",
    },
    {
        accessorKey: "person_in_charge",
        header: "Persona a cargo",
    },
    {
        accessorKey: "date_time_arrival",
        header: "Fecha de llegada",
    },
    {
        accessorKey: "date_time_finish",
        header: "Fecha de entrega",
    },
    {
        accessorKey: "actions",
        header: "Acciones",
    },
]
