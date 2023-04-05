import React from 'react';

function MealManagementComponent(props) {
    return (
        <div class="container">
            <div class="card shadow-style">
                <div class="card-header bg-white">
                    Meals List
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
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp; <span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp; <span>Delete</span></i></a>
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
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp; <span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp; <span>Delete</span></i></a>
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
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp; <span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp; <span>Delete</span></i></a>
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
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp; <span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp; <span>Delete</span></i></a>
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
                                    <a href="#" class="btn bg-light border text-primary me-2"><i class="fas fa-pen">&nbsp; <span>Edit</span></i></a>
                                    <a href="#" class="btn bg-light border text-danger"><i class="fas fa-trash-alt">&nbsp; <span>Delete</span></i></a>
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