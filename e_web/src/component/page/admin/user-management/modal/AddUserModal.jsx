import axios from 'axios';
import React, { Children, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function AddUserModal(props) {
    const getUserData = props.getUserData;
    const [show, setShow] = useState(false);
    const [notice, setNotice] = useState({
        password_confirm: "",
        email_exist: "",
        account_exist: "",
    });
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const addUser = (data) => {
        if (data.password === data.confirm_password) {
            axios.get('http://127.0.0.1:8000/api/admin/get-email', {
                params: { email: data.email, account: data.account }
            }).then((response => {
                if (response.data.status === true) {
                    axios.post('http://127.0.0.1:8000/api/admin/user-added', data).then((response) => {
                        Swal.fire(
                            'Thành công!',
                            'Tài khoản mới đã được tạo',
                            'success');
                    });
                    getUserData()
                    reset()
                    setShow(false);
                } else {
                    if (response.data.type == 'email') {
                        setNotice({ email_exist: 'Email đã tồn tại!' })
                    } else {
                        setNotice({ account_exist: 'Tài khoản đã tồn tại!' })
                    }

                }
            }))
        } else {
            setNotice({ password_confirm: 'Mật khẩu không khớp!' })
        }
    }

    const validateAccount = (value) => {
        const pattern = /^[a-zA-Z0-9]*$/;
        if (!pattern.test(value)) {
            return 'Tài khoản không được chứa ký tự đặc biệt!';
        }
        return true;
    };
    return (
        <>
            <i onClick={handleShow} className="fas fa-user-plus px-3 text-white fw-bold" role="button" title="edit" />
            <Modal backdrop="static" show={show} onHide={() => reset(handleClose)}>
                <Modal.Header closeButton>
                    <Modal.Title>THÊM TÀI KHOẢN USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(addUser)} >
                        <Form.Group className="mb-3">
                            <Form.Label>Tài khoản<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control
                                {...register("account", {
                                    required: "Vui lòng nhập tài khoản!",
                                    validate: validateAccount, // Add the custom validation function
                                })}
                            />
                            {errors.account && (<span className="text-danger">{errors.account.message}</span>)
                                || (notice && <span className="text-danger">{notice.account_exist}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control
                                {...register("email", {
                                    required: "Vui lòng nhập email!",
                                    pattern: {
                                        value: regexEmail,
                                        message: "Email không hợp lệ!"
                                    },
                                })}
                            />
                            {errors.email && (<span className="text-danger">{errors.email.message}</span>)
                                || (notice && <span className="text-danger">{notice.email_exist}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Họ và tên<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Abc"
                                {...register("name", {
                                    required: "Vui lòng nhập họ và tên!",
                                })}
                            />
                            {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control
                                type="password"
                                {...register("password", {
                                    required: "Vui lòng nhập mật khẩu!",
                                })}
                            />
                            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Xác nhận mật khẩu<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control
                                type="password"
                                {...register("confirm_password")}
                            />
                            {notice && <span className="text-danger">{notice.password_confirm}</span>}
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-end'>
                            <Button className='me-3' variant="primary" type='submit'>
                                Lưu thay đổi
                            </Button>
                            <Button variant="secondary" type='button' onClick={() => reset(handleClose)}>
                                Đóng lại
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default AddUserModal;