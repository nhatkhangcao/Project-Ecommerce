import axios from 'axios';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function EditMealModal(props) {
    const getMealData = props.getMealData;
    const mealList = props.mealList;
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setImage(null);
        reset({
            combo_name: mealList.combo_name,
            combo_price: mealList.combo_price,
            detail: mealList.detail,
            description: mealList.description,
            combo_image: mealList.combo_image,
        });
    };
    const handleShow = () => setShow(true);
    const [image, setImage] = useState(null);
    const aRef = useRef(null);

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        mode: 'onChange',
        defaultValues: {
            id: mealList.id,
            combo_name: mealList.combo_name,
            combo_price: mealList.combo_price,
            detail: mealList.detail,
            description: mealList.description,
            combo_image: mealList.combo_image,
            status: mealList.status
        },
    });

    const checkImage = () => {
        let temp = '';
        if (image !== null) {
            temp = image ? URL.createObjectURL(image) : '';
        } else {
            temp = `http://localhost:8000/${mealList.combo_image}`;
        }
        return temp;
    };

    const handleImage = (file) => {
        setImage(file[0]);
        setValue('combo_image', file[0]);
    };

    const editMeal = (data) => {
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('combo_name', data.combo_name);
        formData.append('combo_price', data.combo_price);
        formData.append('detail', data.detail);
        formData.append('description', data.description);
        formData.append('combo_image', data.combo_image);
        axios.post('http://127.0.0.1:8000/api/admin/edit-meal/' + data.id, formData).then((response) => {
        })
    };
    return (
        <>
            <i onClick={handleShow} className="fas fa-pen">&nbsp;<span>Edit</span></i>
            <Modal
                backdrop='static'
                show={show}
                onHide={() => reset(handleClose)}
                dialogClassName="modal-dialog modal-lg"
            >
                <form onSubmit={handleSubmit(editMeal)}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Edit Meals</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group form-group">
                                        <label className='col-sm-2 col-form-label '>Meal</label>
                                        <div className='col-sm-10'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("combo_name", {
                                                    required: "Meal name is required",
                                                })}
                                            />
                                            {errors.combo_name && (<span className="text-danger">{errors.combo_name.message}</span>)}
                                        </div>
                                    </div>
                                    <div className="input-group form-group pt-2">
                                        <label className='col-sm-2 col-form-label '>Price</label>
                                        <div className='col-sm-10'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("combo_price", {
                                                    required: "Meal price is required",
                                                })}
                                            />
                                            {errors.combo_price && (<span className="text-danger">{errors.combo_price.message}</span>)}
                                        </div>
                                    </div>
                                    <div className="input-group form-group pt-2">
                                        <label className='col-sm-2 col-form-label '>Detail</label>
                                        <div className='col-sm-10'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("detail")}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <label className='col-sm-2 col-form-label'>Describe</label>
                                        <textarea
                                            className="form-control"
                                            rows="6"
                                            {...register("description")}
                                        />
                                    </div>
                                    <div className="input-group py-4">
                                        <label className='col-sm-2 col-form-label '>Status</label>
                                        <div className='col-sm-10'>
                                            <select {...register("status")} className="form-select">
                                                <option value="0">On Sale</option>
                                                <option value="1">Stop Selling</option>
                                                <option value="2">Sold Out</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 ms-auto">
                                    <label className='col-sm-2 col-form-label pe-4'>Image</label>
                                    <img alt='' className='img-fluid' style={{ maxWidth: '250px', maxHeight: '250px' }} src={checkImage()} />
                                    <div className="input-group mb-3 pt-3">
                                        <input ref={aRef} className="form-control" type="file" name='image' onChange={e => handleImage(e.target.files)} />
                                    </div>
                                </div>
                            </div>
                            <hr className="border-2 border-top border-bottom border-secondary" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal >
        </>
    );
}

export default EditMealModal;
