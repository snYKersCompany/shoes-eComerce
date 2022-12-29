import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormUser from "../CreateUser";

export default function ModalFormUser () {
    // Hooks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Render
    return (
        <>
            <Button variant = 'primary' onClick = {handleShow}>
                Update info
            </Button>
            <Modal show = {show} onHide = {handleClose} size = 'none'>
                <Modal.Body className = "d-flex w-100 form">
                    <FormUser />
                </Modal.Body>
            </Modal>
        </>
    )
}