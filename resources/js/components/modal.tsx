import { Button } from "@headlessui/react";
import { X } from "lucide-react";

interface Props {
    className?: string,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<string>>,
    classNameBox: string,
    children: React.ReactNode
}

export default function Modal({ modal, setModal, classNameBox, children, className, ...props }: Props) {

    return (
        <div {...props} className={`${modal ? "flex" : "hidden"} fixed z-50 w-full h-full flex items-center justify-center overflow-y-auto overflow-x-hidden ${className}`}>
            <div
                onClick={() => setModal(false)}
                className={`absolute size-full bg-[rgba(0,0,0,0.5)] `}
            ></div>
            <div className={`relative w-2/3 h-2/3 ${classNameBox}`}>
                {children}
            </div>

            <Button onClick={() => setModal(false)}>
                <X className="absolute top-4 right-4 cursor-pointer" />
            </Button>
        </div >
    )
}

