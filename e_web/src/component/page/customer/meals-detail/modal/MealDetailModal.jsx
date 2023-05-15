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
                    {/* <Modal.Title className='text-title w-100 fw-bold text-success' >{showLogin ? "Login" : "Register"}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default MealDetailModal;