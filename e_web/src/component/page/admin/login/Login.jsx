import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [data, setData] = useState();
    const navigate = useNavigate();
    const handleChange = (e) => {
        let value = e.target.value.trim();
        setData({
            ...data,
            [e.target.name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault(); 
        axios.post("http://127.0.0.1:8000/api/admin/login",data).then((response)=> {
            if(response.data.user.role) {
                navigate('../dashboard', { replace: true });
            }
        })
    }
    return (
        <div className='container'>
            <div className=" row justify-content-center pt-5">
                <div className=" col-md-8 ">
                    <div className="py-4" >
                        <h1 className='text-center text-danger'>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3 d-flex justify-content-center">
                            <div className="col-md-6 ">
                                <input onChange={handleChange} name="email" placeholder="Email" className="form-control form-control-lg"
                                />
                            </div>
                        </div>
                        <div className="row mb-3 d-flex justify-content-center">
                            <div className="col-md-6">
                                <input onChange={handleChange} name="password" placeholder="Password" type="password" className="form-control form-control-lg"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
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
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button type='submit' className="btn btn-danger btn-lg w-50">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;