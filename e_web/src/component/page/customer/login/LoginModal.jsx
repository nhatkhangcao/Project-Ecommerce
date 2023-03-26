import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const LoginModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const login = () => {
        console.log(123)
    }

    return (
        <>
            <i onClick={handleShow} class="fas fa-user" role="button" title="login"></i>
            <Modal backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='w-100 fw-bold' >Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(login)} >
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                placeholder="Email"
                            />
                            {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                        </Form.Group>

                        <Form.Group className='d-flex justify-content-center'>
                            <Button className='me-3' variant="success" type='submit'>
                                LOGIN
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default LoginModal;
