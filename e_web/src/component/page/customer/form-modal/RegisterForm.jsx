import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function RegisterForm(props) {
    const handleSwitchForm  = props.handleSwitchForm 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegister = () => {

    }
    return (
        <Form onSubmit={handleSubmit(handleRegister)}>
            <Form.Group className="text-center mb-2">
                {/* {loginNotice && (<span className="text-danger">{loginNotice}</span>)} */}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='name'
                    className='input-size'
                    type="text"
                    {...register("name", {
                        required: "Name is required",
                    })}
                    placeholder="Full Name"
                />
                {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='email'
                    className='input-size'
                    type="text"
                    {...register("email", {
                        required: "Email is required",
                    })}
                    placeholder="Email"
                />
                {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='password'
                    className='input-size'
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Name is required",
                    })}
                />
                {errors.name && (<span className="text-danger">{errors.password.message}</span>)}
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    id='confirm_password'
                    className='input-size'
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirm_password")}
                />
                {errors.confirm_password && (<span className="text-danger">{errors.confirm_password.message}</span>)}
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
                <Button className='me-3 btn-login' variant="success" type='submit'>
                    REGISTER
                </Button>
            </Form.Group>
            <Form.Group className='d-flex justify-content-center pt-1'>
                Already have an account?<span className='ps-2 text-success fw-bold' style={{cursor: 'pointer'}} onClick={handleSwitchForm}>Login</span>
            </Form.Group>
        </Form>
    );
}

export default RegisterForm;