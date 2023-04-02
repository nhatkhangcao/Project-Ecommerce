import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [loginNotice, setLoginNotice] = useState()
    const handleClose = () => {
        setLoginNotice();
        setShow(false);
        reset()
    }
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const login = (dataLogin) => {
        axios.post("http://127.0.0.1:8000/api/login", dataLogin).then((response) => {
            if (response.data?.user?.role == 0) {
                localStorage.setItem('account_user', JSON.stringify(response.data))
                window.location.reload(true)
            } else {
                setLoginNotice("Email or Password is wrong")
            }
        })
    }
    return (
        <>
            <i onClick={handleShow} className="fas fa-user" role="button" title="login"></i>
            <Modal dialogClassName="modal-width" backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='text-title w-100 fw-bold text-success' >Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(login)} >
                        <Form.Group className="text-center mb-2">
                            {loginNotice && (<span className="text-danger">{loginNotice}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control
                                id='email'
                                className='input-size'
                                type="text"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                placeholder="Email"
                            />
                            {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control
                                id='password'
                                className='input-size'
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (<span className="text-danger">{errors.password.message}</span>)}
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center'>
                            <Button className='me-3 btn-login' variant="success" type='submit'>
                                LOGIN
                            </Button>
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center pt-1'>
                            Don't have an account?<span className='ps-2 text-success fw-bold'>Join us</span>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default LoginModal;
