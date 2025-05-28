import { X } from "lucide-react";
import { useState } from "react"

export default function ModalImage({ src, alt = "Imagen" }: { src: string; alt?: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <img
                src={src}
                alt={alt}
                className="rounded cursor-pointer size-16"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-80"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative p-2 w-[90%] h-[100%] flex items-center justify-center">
                        <img
                            src={src}
                            alt={alt}
                            className="rounded object-cover w-3/4 h-[90%]"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
