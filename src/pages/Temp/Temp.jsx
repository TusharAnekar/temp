import { useState } from "react";
import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export function Temp () {
    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);
    return(
        <>
        <div>
            <button onClick={() => setOpen(true)}>Open Modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <p>Modal</p>
                <form action="">
                <label htmlFor="">
                    <input type="text" name="name"/>
                    Name
                </label>
                </form>
            </Modal>
        </div>

        <div>
            <button onClick={() => toast.success("This is toast message")}>Open Toast Message</button>
            <ToastContainer />
        </div>
        </>
    )
}