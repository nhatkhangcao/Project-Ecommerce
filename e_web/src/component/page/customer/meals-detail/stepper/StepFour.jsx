import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function StepFour(props) {
    const feeTotal = props.feeTotal
    const register = props.register
    const payment = props.payment
    const handleSubmit = props.handleSubmit

    return (
        <div className='pt-3'>
            <div className="bill-card">
                <div className="row">
                    <div className="col-md cart">
                        <div className='title h5 text-center text-danger fw-bold'>Thanh Toán</div>
                        <Form onSubmit={handleSubmit(payment)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ và Tên<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("name")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Số điện thoại<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("phone")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("email")}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                    {...register("address")}
                                />
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
                                    value='vnPay'
                                />
                                <Form.Check
                                    type='radio'
                                    label='COD'
                                    {...register('paymentMethod')}
                                    value='cod'
                                />
                            </Form.Group>
                            <div className="text-start">
                                <div>TỔNG TIỀN: <span className='text-danger'>{feeTotal()}VNĐ</span></div>
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