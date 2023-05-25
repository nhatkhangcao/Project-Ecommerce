import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function EditOderModal(props) {
    const item = props.item;
    const getOrderData = props.getOrderData;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
        reset({
            id: item.id,
            status: item.status,
        });
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            status: item.status,
            id: item.id
        }
    });

    const editOrder = (data) => {
        axios.post('http://127.0.0.1:8000/api/admin/order-edit/' + data.id, {
            data: data.status
        }).then((response) => {
            Swal.fire(
                'Good job!',
                'Expense Edited Successfully',
                'success');
            getOrderData()
        });
        setShow(false);
    }
    return (
        <>
            <i onClick={handleShow} className="far fa-edit pe-2 text-primary fw-bold" role="button" title="edit" />
            <Modal backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(editOrder)} >
                        <Form.Group>
                            <Form.Label>Order Code:</Form.Label>
                            <Form.Control type="text" readOnly value={item.order_code} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Order Name:</Form.Label>
                            <Form.Control type="text" readOnly value={item.order_name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Order Price:</Form.Label>
                            <Form.Control type="text" readOnly value={item.order_price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Payment Method:</Form.Label>
                            <Form.Control type="text" readOnly value={item.payment_method} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Account:</Form.Label>
                            <Form.Control type="text" readOnly value={item.account} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address:</Form.Label>
                            <Form.Control type="text" readOnly value={item.address} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" readOnly value={item.email} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Customer Name:</Form.Label>
                            <Form.Control type="text" readOnly value={item.customer_name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Note:</Form.Label>
                            <Form.Control type="text" readOnly value={item.note} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control type="text" readOnly value={item.phone} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status:</Form.Label>
                            <select {...register("status")} className="form-select">
                                <option value="0">Đơn hàng mới</option>
                                <option value="1">Đang được giao</option>
                                <option value="2">Đã giao</option>
                            </select>
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-end pt-3'>
                            <Button className='me-3' variant="primary" type='submit'>
                                Save Changes
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default EditOderModal;