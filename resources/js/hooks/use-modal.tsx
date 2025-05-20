import { useState } from "react"


export default function(isModalOpen: boolean) {
    const [modal, setModal] = useState(isModalOpen);

    function toggleModal() {
        setModal(modal => !modal ? modal = !modal : modal)
    }

    return { modal, setModal, toggleModal }

}

