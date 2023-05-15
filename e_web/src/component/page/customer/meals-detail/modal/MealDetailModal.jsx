import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function MealDetailModal(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }
    return (
        <>
            <span onClick={handleShow} role="button" title="login">COMBO TUẦN</span>
            <Modal dialogClassName="modal-width" backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='text-title w-100 fw-bold text-success' >HULK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    1. Số ngày trong tuần
                    2. Số buổi ăn trong ngày
                </Modal.Body>
            </Modal >
        </>
    );
}

export default MealDetailModal;