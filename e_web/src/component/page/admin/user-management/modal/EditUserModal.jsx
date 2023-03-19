import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function EditUserModal(props) {
    const handleEditUser = props.handleEditUser
    const item = props.item

    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [checked, setChecked] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangePassword = () => {
        setDisabled(!disabled);
        setChecked(!checked);
    }
    return (
        <>
            <i onClick={handleShow} className="far fa-edit pe-4 text-primary fw-bold" role="button" title="edit" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                value={item.email}
                                placeholder="name@example.com"

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                value={item.name}
                                placeholder="Example"

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="number"
                                value={item.phone}
                                placeholder="Example"

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                disabled={disabled}
                                type="password"
                                placeholder="******"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                disabled={disabled}
                                type="password"
                                placeholder="******"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-end pt-1" controlId="exampleForm.ControlInput1">

                            <input checked={checked} onChange={handleChangePassword} type="checkbox" />
                            <label className='ms-2'>Change Password</label>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditUserModal;