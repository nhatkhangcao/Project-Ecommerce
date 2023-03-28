import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function AddUserModal(props) {
    const [show, setShow] = useState(false);
    const [notice, setNotice] = useState();
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addUser = (data) => {
        axios.get('http://127.0.0.1:8000/api/admin/get-email', {
            params: { email: data.email }
        }).then((response => {
            if (response.data.status === true) {
                setNotice()

            } else {
                setNotice(response.data.message)
            }
        }))
    }
    return (
        <>
            <i onClick={handleShow} className="fas fa-user-plus px-3 text-white fw-bold" role="button" title="edit" />
            <Modal backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD MEMBER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(addUser)} >
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: regexEmail,
                                        message: "Email Invalid"
                                    },
                                })}
                                placeholder="abc@example.com"
                            />
                            {errors.email && (<span className="text-danger">{errors.email.message}</span>)
                                || <span className="text-danger">{notice}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Abc"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
                            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                {...register("confirm_password", {
                                    required: "Confirm password is required",
                                })}
                            />
                            {errors.confirm_password && (<span className="text-danger">{errors.confirm_password.message}</span>)}
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-end'>
                            <Button className='me-3' variant="primary" type='submit'>
                                Save Changes
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default AddUserModal;