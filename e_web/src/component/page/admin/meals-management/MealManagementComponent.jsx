import React from 'react';
import AddMealModal from './Modal/AddMealModal';

function MealManagementComponent(props) {
    return (
        <div class="container">
            <div class="card shadow-style">
                <div class="card-header bg-white">
                    <form>
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
                <div class="card-body">
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div class="col">
                            <div class="card">
                                <img src={"/images/fruit.png"} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">1$</p>
                                </div>
                                <div class="card-body d-flex justify-content-center">
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp;<span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp;<span>Delete</span></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={"/images/fruit.png"} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">1$</p>
                                </div>
                                <div class="card-body d-flex justify-content-center">
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp;<span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp;<span>Delete</span></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={"/images/fruit.png"} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">1$</p>
                                </div>
                                <div class="card-body d-flex justify-content-center">
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp;<span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp;<span>Delete</span></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={"/images/fruit.png"} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">1$</p>
                                </div>
                                <div class="card-body d-flex justify-content-center">
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp;<span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp;<span>Delete</span></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={"/images/fruit.png"} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">1$</p>
                                </div>
                                <div class="card-body d-flex justify-content-center">
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp;<span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp;<span>Delete</span></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealManagementComponent;