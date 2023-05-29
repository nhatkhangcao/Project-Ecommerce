import axios from 'axios';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function AddMealDetail(props) {
    const getMealDetail = props.getMealDetail;
    const mealList = props.mealList;
    const [notice, setNotice] = useState({
        meal_exist: ""
    });
    const [show, setShow] = useState(false);
    const [option, setOption] = useState([]);
    const handleClose = () => {
        setShow(false);
        setImage(null);
        setNotice({})
        reset({
            id: '',
            meal_name: '',
            meal_detail: '',
            meal_image: '',
            combo_type: 2,
            day: 2,
        });
    };
    const handleShow = () => setShow(true);
    const [image, setImage] = useState(null);
    const aRef = useRef(null);

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({});

    const handleImage = (file) => {
        setImage(file[0]);
        setValue('meal_image', file[0]);
    };

    const addMeal = (data) => {
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('meal_name', data.meal_name);
        formData.append('meal_detail', data.meal_detail);
        formData.append('meal_image', data.meal_image);
        formData.append('combo_type', data.combo_type);
        axios.post('http://127.0.0.1:8000/api/admin/add-meal-detail/', formData).then((response) => {
                Swal.fire(
                    'THÀNH CÔNG!',
                    'Món ăn đã được thêm vào',
                    'success');
                getMealDetail()
                setShow(false)
        })
    };
    const comboOption = () => {
        axios.get('http://127.0.0.1:8000/api/admin/combo-option').then((response) => {
            setOption(response.data.data)
        })
    }
    useEffect(() => {
        comboOption()
    }, []);
    return (
        <>
            <i onClick={handleShow} className="fas fa-plus px-3 text-white fw-bold" role="button" title="edit" />
            <Modal
                backdrop='static'
                show={show}
                onHide={() => reset(handleClose)}
                dialogClassName="modal-dialog modal-lg"
            >
                <form onSubmit={handleSubmit(addMeal)}>
                    <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title">THÊM MÓN ĂN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group form-group">
                                        <label className='col-sm-2 col-form-label'>Combo</label>
                                        <div className='col-sm-10'>
                                            <select {...register('combo_type')}
                                                className='form-select'>
                                                {option.map((option) => (
                                                    <option key={option.id} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-group form-group pt-2">
                                        <label className='col-sm-2 col-form-label'>Món ăn</label>
                                        <div className='col-sm-10'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("meal_name", {
                                                    required: "Vui lòng nhập món ăn!",
                                                })}
                                            />
                                            {errors.meal_name && (<span className="text-danger">{errors.meal_name.message}</span>)}
                                        </div>
                                    </div>
                                    <div className="input-group form-group pt-2">
                                        <label className='col-sm-2 col-form-label'>Detail</label>
                                        <div className='col-sm-10'>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                {...register("meal_detail")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 ms-auto">
                                    <label className='col-sm-2 col-form-label pe-4'>Image</label>
                                    <img alt='' className='img-fluid' style={{ maxWidth: '250px', maxHeight: '250px' }} src={image ? URL.createObjectURL(image) : ''} />
                                    <div className="input-group mb-3 pt-3">
                                        <input ref={aRef} className="form-control" type="file" name='image' onChange={e => handleImage(e.target.files)} />
                                    </div>
                                </div>
                            </div>
                            <hr className="border-2 border-top border-bottom border-secondary" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type='submit'>
                            Lưu thay đổi
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>

                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default AddMealDetail;