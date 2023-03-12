import React from 'react';

function Login(props) {
    const handleSubmit = () => {
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
                                <input name="email" placeholder="Email" className="form-control form-control-lg"
                                />
                            </div>
                        </div>
                        <div className="row mb-3 d-flex justify-content-center">
                            <div className="col-md-6">
                                <input name="password" placeholder="Password" type="password" className="form-control form-control-lg"
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
                            <a href='/home' className="btn btn-danger btn-lg w-50">
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;