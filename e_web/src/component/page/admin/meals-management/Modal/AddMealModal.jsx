import axios from 'axios';
import React from 'react';
import { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function AddMealModal(props) {
    const getMealData = props.getMealData
    const [show, setShow] = useState(false);
    const [notice, setNotice] = useState({
        combo_exist: ""
    });
    const handleClose = () => {
        setNotice({})
        deleteImage()
        setShow(false);
        reset({
            id: '',
            combo_name: '',
            combo_price: '',
            meal_image: '',
            detail: '',
            description: '',
            status: 1
        });
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
        mode: 'onChange'
    });

    const handleImage = (file) => {
        setImage(file[0]);
    }
    const deleteImage = () => {
        setImage('')
        aRef.current.value = null;
    }

    const addMeal = (data) => {
        const formData = new FormData();
        formData.append('combo_name', data.combo_name);
        formData.append('combo_price', data.combo_price);
        formData.append('detail', data.detail);
        formData.append('status', data.status);
        formData.append('description', data.description);
        formData.append('combo_image', image);

        axios.post('http://127.0.0.1:8000/api/admin/add-meal', formData)
            .then((response) => {
                if (!response.data.status) {
                    setNotice({ combo_exist: 'Combo Exist!' })
                } else {
                    setShow(false);
                    Swal.fire('Good job!', 'Combo Added Successfully', 'success');
                    reset();
                    getMealData();
                    setImage(null);
                }
            });
    }

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
                                                {...register("combo_name", {
                                                    required: "Combo name is required",
                                                })}
                                            />
                                            {errors.combo_name && (<span className="text-danger">{errors.combo_name.message}</span>)
                                                || (notice && <span className="text-danger">{notice.combo_exist}</span>)}
                                        </div>
                                    </div>
                                    <div className="input-group form-group pt-2">
                                        <label className='col-sm-2 col-form-label '>Price</label>
                                        <div className='col-sm-10'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("combo_price", {
                                                    required: "Combo price is required",
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
                                        <label className='col-sm-2 col-form-label'>Desc</label>
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
                                    <img alt='' className='img-fluid' style={{ maxWidth: '250px', maxHeight: '250px' }} src={image ? URL.createObjectURL(image) : ''} />
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