import Modal from "./modal"

type Props = {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<string>>,
}

const ModalComputer = ({ modal, setModal }: Props) => {

    return (
        <>
            <Modal modal={modal} setModal={setModal} classNameBox="bg-slate-700 rounded p-5">
                <form className='flex flex-col gap-2'>

                </form>
            </Modal >
        </>
    )
}

export default ModalComputer
