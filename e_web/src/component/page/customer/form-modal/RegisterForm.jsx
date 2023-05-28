import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';
import Swal from "sweetalert2";

function RegisterForm(props) {
    const handleSwitchForm = props.handleSwitchForm;
    const [notice, setNotice] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch, // Add the watch function from react-hook-form
    } = useForm();

    const password = watch('password'); // Get the value of the password field

    const handleRegister = (data) => {
        axios.get('http://127.0.0.1:8000/api/customer/register', {
            params: {
                account: data.account,
                name: data.name,
                password: data.password,
                email: data.email
            }
        })
            .then((response) => {
                if (response.data.status === false) {
                    setNotice(response.data.message);
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Đăng ký tài khoản thành công',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 2000);
                }
            });
    };

    const validateConfirmPassword = (value) => {
        if (value !== password) {
            return 'Mật khẩu không khớp';
        }
        return true;
    };

    const validateAccount = (value) => {
        const pattern = /^[a-zA-Z0-9]*$/;
        if (!pattern.test(value)) {
            return 'Tài khoản không được chứa ký tự đặc biệt';
        }
        return true;
    };

    const validateEmail = (value) => {
        const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!pattern.test(value)) {
            return 'Email không hợp lệ';
        }
        return true;
    };
    return (
        <Form onSubmit={handleSubmit(handleRegister)}>
            <Form.Group className="text-center mb-2">
                {notice && <span className="text-danger">{notice}</span>}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='account'
                    className='input-size'
                    type="text"
                    {...register("account", {
                        required: "Vui lòng nhập tài khoản!",
                        validate: validateAccount,
                    })}
                    placeholder="Tài khoản"
                />
                {errors.account && <span className="text-danger">{errors.account.message}</span>}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='email'
                    className='input-size'
                    type="text"
                    {...register("email", {
                        required: "Vui lòng nhập email!",
                        validate: validateEmail,
                    })}
                    placeholder="Email"
                />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='name'
                    className='input-size'
                    type="text"
                    {...register("name", {
                        required: "Vui lòng nhập tên!",
                    })}
                    placeholder="Họ và tên"
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='password'
                    className='input-size'
                    type="password"
                    placeholder="Mật khẩu"
                    {...register("password", {
                        required: "Vui lòng nhập password!",
                    })}
                />
                {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='confirm_password'
                    className='input-size'
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    {...register("confirm_password", {
                        required: "Vui lòng nhập mật khẩu xác nhận!",
                        validate: validateConfirmPassword, // Add the custom validation function
                    })}
                />
                {errors.confirm_password && <span className="text-danger">{errors.confirm_password.message}</span>}
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
                <Button className='me-3 btn-login' variant="success" type='submit'>
                    ĐĂNG KÝ
                </Button>
            </Form.Group>
            <Form.Group className='d-flex justify-content-center pt-1'>
                Bạn đã có tài khoản?<span className='ps-2 text-success fw-bold' style={{ cursor: 'pointer' }} onClick={handleSwitchForm}>Đăng nhập</span>
            </Form.Group>
        </Form>
    );
}

export default RegisterForm;
