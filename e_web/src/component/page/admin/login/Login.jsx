import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Login(props) {
    const navigate = useNavigate();
    const [loginNotice, setLoginNotice] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (dataLogin) => {
        axios.post("http://127.0.0.1:8000/api/login", dataLogin).then((response) => {
            if (response.data.status === true) {
                if (response.data?.user.role === 2 || response.data?.user.role === 1) {
                    navigate('/admin/dashboard', { replace: true });
                    localStorage.setItem('account', JSON.stringify(response.data))
                }
            }
            setLoginNotice(response.data.message)
        })
    }
    return (
        <div className='container'>
            <div className=" row justify-content-center pt-5">
                <div className=" col-md-8 ">
                    <div className="py-4" >
                        <h1 className='text-center text-success'>ĐĂNG NHẬP</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-3 d-flex justify-content-center">
                            {loginNotice && (<span className="text-danger text-center mb-2">{loginNotice}</span>)}
                            <div className="col-md-6 ">
                                <input
                                    {...register("account", {
                                        required: "Vui lòng nhập tài khoản!",
                                    })}
                                    name="account"
                                    placeholder="Tài khoản"
                                    className="form-control form-control-lg"
                                />
                                {errors.account && (<span className="text-danger">{errors.account.message}</span>)}
                            </div>
                        </div>
                        <div className="row mb-3 d-flex justify-content-center">
                            <div className="col-md-6">
                                <input
                                    {...register("password", {
                                        required: "Vui lòng nhập mật khẩu!",
                                    })}
                                    name="password"
                                    placeholder="Mật khẩu"
                                    type="password"
                                    className="form-control form-control-lg"
                                />
                                {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <div className="col-md-6 offset-md-4 ">
                                <div className="form-check">
                                    <div className='d-flex justify-content-start'>
                                        <input className="form-check-input me-2" type="checkbox" name="remember" id="remember" />
                                        <label className="form-check-label " >
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="d-flex justify-content-center ">
                            <button type='submit' className="btn btn-success btn-lg w-50">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;