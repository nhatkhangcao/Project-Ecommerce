import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

const FormModal = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [showLogin, setShowLogin] = useState(true);

    const handleClose = () => {
        setShow(false);
    }
    const handleSwitchForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <>
            <i onClick={handleShow} className="fas fa-user" role="button" title="login"></i>
            <Modal dialogClassName="modal-width" backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className='text-title w-100 fw-bold text-success' >{showLogin ? "Login" : "Register"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showLogin ? (
                        <LoginForm handleSwitchForm={handleSwitchForm} />
                    ) : (
                        <RegisterForm handleSwitchForm={handleSwitchForm} />
                    )}
                </Modal.Body>
            </Modal >
        </>
    );
}

export default FormModal;
