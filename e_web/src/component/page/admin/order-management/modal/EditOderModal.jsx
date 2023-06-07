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
                'Cập nhật thông tin đơn hàng thành công!',
                "Đơn hàng " + "[" + item.order_code + "]" + " đã được cập nhật.",
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
                    <Modal.Title>CẬP NHẬT ĐƠN HÀNG</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(editOrder)} >
                        <Form.Group>
                            <Form.Label>Mã đơn hàng:</Form.Label>
                            <Form.Control type="text" readOnly value={item.order_code} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Combo:</Form.Label>
                            <Form.Control type="text" readOnly value={item.order_name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Giá:</Form.Label>
                            <Form.Control type="text" readOnly value={item.order_price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phương thức thanh toán:</Form.Label>
                            <Form.Control type="text" readOnly value={item.payment_method} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tài khoản:</Form.Label>
                            <Form.Control type="text" readOnly value={item.account} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Địa chỉ:</Form.Label>
                            <Form.Control type="text" readOnly value={item.address} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" readOnly value={item.email} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tên khách hàng:</Form.Label>
                            <Form.Control type="text" readOnly value={item.customer_name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lưu ý:</Form.Label>
                            <Form.Control type="text" readOnly value={item.note} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control type="text" readOnly value={"0" + item.phone} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Trạng thái:</Form.Label>
                            <select {...register("status")} className="form-select">
                                <option className='fw-bold' disabled={item.status != 0} value="0">Đơn hàng mới</option>
                                <option className='fw-bold' disabled={item.status == 2 || item.status == 3} value="1">Đang được giao</option>
                                <option className='fw-bold' disabled={item.status == 0 || item.status == 3} value="2">Đã giao</option>
                                <option className='fw-bold' disabled={item.status == 0 || item.status == 1 || item.status == 2} value="3">Đã hủy</option>
                            </select>
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-end pt-3'>
                            <Button className='me-3' variant="primary" type='submit'>
                                Lưu thay đổi
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default EditOderModal;