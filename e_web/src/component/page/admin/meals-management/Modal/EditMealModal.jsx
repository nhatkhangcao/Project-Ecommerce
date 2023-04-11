import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function EditMealModal(props) {
    const getMealData = props.getMealData
    const mealList = props.mealList
    const [show, setShow] = useState(false);
    const handleClose = () => {
        deleteImage()
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [image, setImage] = useState();
    const aRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            meal_name: mealList.meal_name,
            meal_price: mealList.meal_price,
            meal_detail: mealList.meal_detail,
            meal_image: mealList.meal_image,
        }
       
    });

    const checkImage = () => {
        let temp = ''
        if (mealList.meal_image) {
            temp = `http://localhost:8000/${mealList.meal_image}`
        }
        else {
            temp = image ? URL.createObjectURL(image) : ''
        }
        return temp;
    }

    const handleImage = (file) => {
        setImage(file[0]);
    }
    const deleteImage = () => {
        setImage('')
        aRef.current.value = null;
    }

    const editMeal = (data) => {
        console.log(data)
    }

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
                                    <img alt='' className='img-fluid' style={{ maxWidth: '250px', maxHeight: '250px' }} src={checkImage()} />
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

export default EditMealModal;