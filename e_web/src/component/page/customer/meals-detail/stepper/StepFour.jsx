import React from 'react';
import { Button, Form } from 'react-bootstrap';

function StepFour(props) {
    const errors = props.errors
    const totalFee = props.totalFee
    const formatVND = props.formatVND
    const register = props.register
    const payment = props.payment
    const handleSubmit = props.handleSubmit
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (
        <div className='container'>
            <div className="bill-card">
                <div className="row">
                    <div className="col-md cart">
                        <div className='title h5 text-center text-danger fw-bold'>Thanh Toán</div>
                        <Form onSubmit={handleSubmit(payment)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ và Tên<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("name", {
                                        required: "Vui lòng nhập họ và tên!",
                                    })}
                                />
                                {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Số điện thoại<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("phone", {
                                        required: "Vui lòng nhập số điện thoại!",
                                        min: {
                                            value: 1,
                                            message: "Vui lòng không nhập số âm!",
                                        },
                                    })}
                                    type='number'

                                />
                                {errors.phone && (<span className="text-danger">{errors.phone.message}</span>)}
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
                                {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("address", {
                                        required: "Vui lòng nhập địa chỉ!",
                                    })}
                                />
                                {errors.address && (<span className="text-danger">{errors.address.message}</span>)}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    {...register("note")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phương thức thanh toán</Form.Label>
                                <Form.Check
                                    type='radio'
                                    label='VNPAY'
                                    {...register('paymentMethod')}
                                    value='VNPAY'
                                />
                                <Form.Check
                                    type='radio'
                                    label='COD'
                                    {...register('paymentMethod')}
                                    value='COD'
                                />
                            </Form.Group>
                            <div className="text-start">
                                <div>TỔNG TIỀN: <span className='text-danger'>{formatVND(totalFee())}VNĐ</span></div>
                            </div>
                            <hr className="border-2 border-top border-bottom border-secondary" />
                            <Form.Group className='d-flex justify-content-center'>
                                <Button className='me-3' variant="primary" type='submit'>
                                    THANH TOÁN
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default StepFour;