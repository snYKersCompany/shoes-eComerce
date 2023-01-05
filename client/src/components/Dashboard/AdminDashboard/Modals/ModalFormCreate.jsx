import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Create from '../../../Create/Create';

export default function ModalFormCreate () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant = 'primary' onClick = {handleShow}>
                Add Products
            </Button>
            <Modal show = {show} onHide = {handleClose} size = 'lg'>
            <Modal.Body className='d-flex'>
                <Create />
            </Modal.Body>
            </Modal>
        </>        
    )
}