import { useState } from 'react'
import Modal from 'react-modal'

const Test = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div>
            <h1>Test</h1>
            <h4>Create a Modal</h4>
            <button type='button' onClick={handleOpen} >Open modal</button>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>Modal</h1>
                    <h3>Prepare for the react interview</h3>
                </>
            </Modal>
        </div>

    )
}

export default Test
