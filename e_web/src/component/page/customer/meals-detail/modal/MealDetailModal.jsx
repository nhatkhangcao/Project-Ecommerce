import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { CDBStepper, CDBStep } from "cdbreact";
import MealStepper from '../stepper/MealStepper';

function MealDetailModal(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }
    const item = props.item
    return (
        <>
            <span onClick={handleShow} role="button" title="login">COMBO TUẦN</span>
            <Modal backdrop="static" show={show} size='lg' onHide={handleClose} dialogClassName="modal-dialog-scrollable">
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='text-title w-100 fw-bold text-success' >{item.meal_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MealStepper item = {item} />
                    {/* <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>1. Chọn ngày trong tuần</Form.Label>

                        </Form.Group>
                    </Form> */}
                </Modal.Body>
            </Modal >
        </>
    );
}

export default MealDetailModal;