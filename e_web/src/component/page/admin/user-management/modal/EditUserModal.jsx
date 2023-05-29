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
            id: item.id,
            account: item.account
        }
    });

    const editUser = (item) => {
        axios.post('http://127.0.0.1:8000/api/admin/user-edited/' + item.id, item).then((response) => {
            Swal.fire(
                'Cập nhật tài khoản thành công!',
                "Tài khoản " + "[" + item.account + "]" + " đã được cập nhật.",
                'success');
            getUserData()
        });
        setShow(false);
    }
    return (
        <>
            <i onClick={handleShow} className="far fa-edit pe-2 text-primary fw-bold" role="button" title="edit" />
            <Modal backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CẬP NHẬT THÔNG TIN USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(editUser)} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                {...register("email")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tài khoản</Form.Label>
                            <Form.Control
                                type="email"
                                disabled
                                {...register("account")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control
                                type="name"
                                {...register("name", {
                                    required: "Vui lòng nhập họ và tên!",
                                })}
                            />
                            {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                                {...register("phone", {
                                    required: "Vui lòng nhập số điện thoại!",
                                    min: {
                                        value: 1,
                                        message: "Vui lòng không nhập số âm!",
                                    },
                                })}
                            />
                            {errors.phone && (<span className="text-danger">{errors.phone.message}</span>)}
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
                                Lưu thay đổi
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default EditUserModal;