import axios from 'axios';
import { data } from 'jquery';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
function ProfileContainer(props) {
    const account = JSON.parse(localStorage.getItem('account_user'))?.user?.account;
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setIsEditing(false);
        setShow(false);
        reset({
            name: dataList.name,
            phone: dataList.phone,
        });
    }
    const handleShow = () => setShow(true);
    const [dataList, setDataList] = useState({
        name: '',
        phone: '',
        calories_in: '',
        email: '',
        height: '',
        body_weight: '',
        goal: ''
    })


    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const getInfoCustomer = () => {
        axios.post('http://127.0.0.1:8000/api/customer/customer-info', {
            params: { account }
        }).then((response) => {
            setDataList(response.data)
        })
    }

    const editCustomer = (data) => {
        axios.post('http://127.0.0.1:8000/api/customer/update-info-customer/' + dataList.id, data).then((response) => {
            Swal.fire({
                position: 'mid-center',
                icon: 'success',
                title: 'Thông tin của bạn đã được cập nhật',
                showConfirmButton: false,
                timer: 1500
            })
            getInfoCustomer()
        })
    }
    useEffect(() => {
        getInfoCustomer()
    }, []);
    return (
        <>
            <span onClick={handleShow}>Thông tin cá nhân</span>
            <Modal dialogClassName="modal-width" backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header className='text-center' closeButton>
                    <Modal.Title className='text-success w-100' >THÔNG TIN CÁ NHÂN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(editCustomer)}>
                        <Form.Group controlId="name">
                            <Form.Label className='fw-bold'>Họ và Tên:</Form.Label>
                            {isEditing ? (
                                <Form.Control
                                    type="text"
                                    {...register('name')}
                                />
                            ) : (
                                <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.name} />
                            )}
                        </Form.Group>

                        <Form.Group controlId="age">
                            <Form.Label className='fw-bold'>Số điện thoại:</Form.Label>
                            {isEditing ? (
                                <Form.Control
                                    type="number"
                                    {...register('phone')}
                                />
                            ) : (
                                <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.phone} />
                            )}
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label className='fw-bold'>Email:</Form.Label>
                            <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.email} />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label className='fw-bold'>Chiều cao</Form.Label>
                            <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.height} />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label className='fw-bold'>Cân nặng</Form.Label>
                            <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.body_weight} />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label className='fw-bold'>Mục tiêu</Form.Label>
                            <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.goal} />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label className='fw-bold'>Calories cần nạp mỗi ngày</Form.Label>
                            <Form.Control className='ms-4' plaintext readOnly defaultValue={dataList.calories_in} />
                        </Form.Group>
                        <hr />
                        <Form.Group className='d-flex justify-content-end'>
                            {isEditing ? (
                                <Button variant="primary" type='button' className='me-3' onClick={handleSave}>
                                    Lưu thay đổi
                                </Button>
                            ) : (
                                <Button variant="dark" type='submit' className='me-3' onClick={handleEdit}>
                                    Chỉnh sửa
                                </Button>
                            )}
                            <Button variant="secondary" type='button' onClick={handleClose}>
                                Đóng
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProfileContainer;