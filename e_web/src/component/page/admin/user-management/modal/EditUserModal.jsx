import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function EditUserModal(props) {
    const item = props.item;
    const getUserData = props.getUserData;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [disabled, setDisabled] = useState(true);
    // const [checked, setChecked] = useState(false);
    // const handleChangePassword = () => {
    //     setDisabled(!disabled);
    //     setChecked(!checked);
    // }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: item.email,
            name: item.name,
            phone: item.phone,
            id: item.id
        }
    });

    const onSubmit = (item) => {
        axios.post('http://127.0.0.1:8000/api/admin/user-edited/' + item.id, item).then((response) => {
            Swal.fire(
                'Good job!',
                'Expense Added Successfully',
                'success');
            getUserData()
        });
        setShow(false);
    }

    return (
        <>
            <i onClick={handleShow} className="far fa-edit pe-4 text-primary fw-bold" role="button" title="edit" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit(onSubmit)} >

                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                {...register("id")}
                                placeholder="name@example.com"
                            />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                {...register("email")}
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Example"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Example"
                                {...register("phone")}
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                        </Form.Group> */}
                        {/* <Form.Group className="mb-3 d-flex justify-content-end pt-1" controlId="exampleForm.ControlInput1">
                            <input checked={checked} onChange={handleChangePassword} type="checkbox" />
                            <label className='ms-2'>Change Password</label>
                        </Form.Group> */}
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

export default EditUserModal;