import axios from 'axios';
import React from 'react';
import { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function AddMealModal(props) {
    const getMealData = props.getMealData
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange'
    });

    const handleImage = (file) => {
        setImage(file[0]);
    }
    function deleteImage() {
        setImage('')
        aRef.current.value = null;
    }
    const aRef = useRef(null);
    const addMeal = (data) => {
        const formData = new FormData();
        formData.append('meal_name', data.meal_name);
        formData.append('meal_price', data.meal_price);
        formData.append('meal_detail', data.meal_detail);
        formData.append('status', data.status);
        formData.append('image', image);
        
        axios.post('http://127.0.0.1:8000/api/admin/add-meal', formData)
        .then((response) => {
            Swal.fire('Good job!', 'Expense Added Successfully', 'success');
        });
        reset();
        getMealData();
        setShow(false);
        setImage(null);
    }
    return (
        <>
            <i onClick={handleShow} className="fas fa-plus px-3 text-white fw-bold" role="button" title="edit" />
            <Modal
                backdrop='static'
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-dialog modal-lg"
            >
                <form onSubmit={handleSubmit(addMeal)}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Add Meals</Modal.Title>
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
                                                placeholder="Enter meal name"
                                                {...register("meal_name", {
                                                    required: "Meal name is required",
                                                })}
                                            />
                                            {errors.meal_name && (<span className="text-danger">{errors.meal_name.message}</span>)}
                                        </div>
                                    </div>
                                    <div className="input-group form-group pt-2">
                                        <label className='col-sm-2 col-form-label '>Price</label>
                                        <div className='col-sm-10'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter price"
                                                {...register("meal_price", {
                                                    required: "Meal price is required",
                                                })}
                                            />
                                            {errors.meal_price && (<span className="text-danger">{errors.meal_price.message}</span>)}
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <label className='col-sm-2 col-form-label'>Detail</label>
                                        <textarea
                                            className="form-control"
                                            rows="6"
                                            {...register("meal_detail")}
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
                                    <img className='img-fluid' style={{maxWidth:'250px', maxHeight:'250px'}} src={image ? URL.createObjectURL(image) : ''} />
                                    <div className="input-group mb-3 pt-3">
                                        <button className="btn btn-danger" onClick={deleteImage} type="button">Delete</button>
                                        <input ref={aRef} className="form-control" type="file" name='image' onChange={e => handleImage(e.target.files)} />
                                    </div>
                                </div>
                            </div>
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

export default AddMealModal;