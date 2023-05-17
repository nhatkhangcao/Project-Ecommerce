import React from 'react';
import { Button, Form } from 'react-bootstrap';

function StepFour(props) {
    return (
        <div>
            <div className="sp-card">
                <div className="row">
                    <div className="col-md cart">
                        <div className='title h5 text-center text-danger fw-bold'>Thanh Toán</div>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ và Tên<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Số điện thoại<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control />

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ<span className='text-danger fw-bold'> *</span></Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phương thức thanh toán</Form.Label>
                                <Form.Check type='radio'>
                                    <Form.Check.Input type='radio' />
                                    <Form.Check.Label C>VNPAY</Form.Check.Label>
                                </Form.Check>
                                <Form.Check type='radio'>
                                    <Form.Check.Input type='radio' />
                                    <Form.Check.Label>COD</Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                            <Form.Group className='d-flex justify-content-center'>
                                <Button className='me-3' variant="primary" type='button'>
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