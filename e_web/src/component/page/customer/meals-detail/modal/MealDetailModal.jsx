import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { CDBStepper, CDBStep } from "cdbreact";
import MealStepper from '../stepper/MealStepper';

function MealDetailModal(props) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }
    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];
    return (
        <>
            <span onClick={handleShow} role="button" title="login">COMBO TUẦN</span>
            <Modal backdrop="static" show={show} size='lg' onHide={handleClose}>
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='text-title w-100 fw-bold text-success' >HULK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MealStepper />
                    {/* <div class="container">
                        <div>
                            <div class="row">
                                <span>1. Chọn số ngày trong tuần</span>
                            </div>
                            <div class="row py-2">
                                <ButtonGroup>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div>
                            <div class="row">
                                <span>2. Chọn số bữa trong ngày</span>
                            </div>
                            <div class="row pt-3">
                                <ButtonGroup>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </div>
                    </div> */}
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