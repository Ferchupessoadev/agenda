import { useEffect, useState } from "react"
import { useForm } from "@inertiajs/react"
import { computerForm } from "@/types"

export function useComputerForm(modal: boolean, setModal: React.Dispatch<React.SetStateAction<string>>) {
    const { data, setData, reset, post, processing, errors } = useForm<Required<computerForm>>({
        computerType: 'laptop',
        dateTimeFinish: new Date(),
        dateTimeArrival: new Date(),
        description: '',
        possibleFailures: '',
        image: null,
        personInCharge: ''
    })

    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const resetAll = () => {
        reset('image')
        reset('description')
        reset('posibleFailure')
        reset('personInCharge')
        reset('dateTimeArrival')
        reset('dateTimeFinish')
        setPreviewUrl(null)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('computers.store'), {
            forceFormData: true,
            onSuccess: () => {
                resetAll()
                setModal(false)
                location.reload()
            },
            onError: () => {
                if (errors.image) {
                    reset('image')
                    setPreviewUrl(null)
                }
            }
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setData('image', file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    useEffect(() => {
        if (!modal) {
            resetAll()
            setPreviewUrl(null)
        }
    }, [modal])

    return {
        data, setData, errors, processing,
        handleSubmit, handleFileChange,
        previewImage, setPreviewImage,
        previewUrl
    }
}
