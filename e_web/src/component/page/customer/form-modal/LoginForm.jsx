import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function LoginForm(props) {
    const handleSwitchForm = props.handleSwitchForm
    const [loginNotice, setLoginNotice] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const login = (dataLogin) => {
        axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then(() => {
            axios.post("http://127.0.0.1:8000/api/login", dataLogin).then((response) => {
                if (response.data?.user?.role == 0) {
                    localStorage.setItem('account_user', JSON.stringify(response.data))
                    window.location.reload(true)
                } else {
                    setLoginNotice("Tài khoản hoặc mật khẩu đã sai!")
                }
            }).catch(function (error) { console.log(error) })
        })
    }

    return (
        <Form onSubmit={handleSubmit(login)}>
            <Form.Group className="text-center mb-2">
                {loginNotice && (<span className="text-danger">{loginNotice}</span>)}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='account'
                    className='input-size'
                    type="text"
                    {...register("account", {
                        required: "Vui lòng nhập tài khoản",
                    })}
                    placeholder="Tài khoản"
                />
                {errors.account && (<span className="text-danger">{errors.account.message}</span>)}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='password'
                    className='input-size'
                    type="password"
                    placeholder="Mật khẩu"
                    {...register("password", {
                        required: "Vui lòng nhập password",
                    })}
                />
                {errors.name && (<span className="text-danger">{errors.password.message}</span>)}
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
                <Button className='me-3 btn-login' variant="success" type='submit'>
                    ĐĂNG NHẬP
                </Button>
            </Form.Group>
            <Form.Group className='d-flex justify-content-center pt-1'>
                Bạn chưa có tài khoản?<span className='ps-2 text-success fw-bold' style={{ cursor: 'pointer' }} onClick={handleSwitchForm}>Tham gia ngay</span>
            </Form.Group>
        </Form>
    );
}

export default LoginForm;