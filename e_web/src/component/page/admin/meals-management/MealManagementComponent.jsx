import React from 'react';
import AddMealModal from './Modal/AddMealModal';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function MealManagementComponent(props) {
    const getMealData = props.getMealData
    const dataList = props.dataList
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const searchUser = () => {
        console.log(123)
    }
    useEffect(() => {
        getMealData()
    }, []);
    return (
        <div className="container">
            <div className="card shadow-style">
                <div className="card-header bg-white">
                    <form onSubmit={handleSubmit(searchUser)}>
                        <div className="row row-cols-auto">
                            <div className="col-3">
                                <span className='fw-bold'>Name</span>
                                <input
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row row-cols-auto d-flex justify-content-between pt-3">
                            <div className="col">
                                <button className='btn bg-primary text-white'>
                                    <AddMealModal />
                                </button>
                            </div>
                            <div className="col">
                                <button type='submit' className="btn bg-dark text-white me-4">
                                    <i className="px-3 fas fa-search"></i>
                                </button>
                                <button type='button' className="btn bg-secondary text-white">
                                    <i className="px-3 fas fa-eraser"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        {
                            dataList && dataList.data && dataList.data.length > 0 ? dataList.data.map((item, index) =>
                                <div className="col">
                                    <div className="card">
                                        <img src={item.meal_image} className="card-img-top " alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.meal_name}</h5>
                                            <p className="card-text">{item.meal_price} $</p>
                                        </div>
                                        <div className="card-body d-flex justify-content-center">
                                            <a href="#" className="btn bg-light border text-primary me-2"><i className="fas fa-pen">&nbsp;<span>Edit</span></i></a>
                                            <a href="#" className="btn bg-light border text-danger"><i className="fas fa-trash-alt">&nbsp;<span>Delete</span></i></a>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                <tr><td className='text-danger text-center'>NO DATA!</td></tr>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealManagementComponent;