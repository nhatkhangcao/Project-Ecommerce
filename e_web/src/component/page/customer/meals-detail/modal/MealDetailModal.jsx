import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import MealStepper from '../stepper/MealStepper';

function MealDetailModal(props) {
    const item = props.item
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }
    return (
        <>
            <span onClick={handleShow} role="button" title="login">ĐẶT MÓN</span>
            <Modal backdrop="static" show={show} size='lg' onHide={handleClose} dialogClassName="modal-dialog-scrollable">
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='text-title w-100 fw-bold text-success' >{item.combo_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MealStepper item={item} />
                </Modal.Body>
            </Modal >
        </>
    );
}

export default MealDetailModal;