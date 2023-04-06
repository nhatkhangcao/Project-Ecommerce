import React from 'react';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function AddMealModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const addMeal = () => {

    }
    return (
        <>
            <i onClick={handleShow} className="fas fa-plus px-3 text-white fw-bold" role="button" title="edit" />
            <Modal backdrop="static" show={show} onHide={() => reset(handleClose)}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD MEMBER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(addMeal)} >
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                placeholder="abc@example.com"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Abc"
                            />
                            {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                            />
                            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                            />
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-end'>
                            <Button className='me-3' variant="primary" type='submit'>
                                Save Changes
                            </Button>
                            <Button variant="secondary" type='button' onClick={() => reset(handleClose)}>
                                Close
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default AddMealModal;