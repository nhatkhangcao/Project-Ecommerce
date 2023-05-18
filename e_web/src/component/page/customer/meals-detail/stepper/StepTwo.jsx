import React, { useState } from 'react';

function StepTwo(props) {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <div className="sp-card">
                <div className="row">
                    <div className="col-md cart">
                        <div className='title h5 text-center text-danger fw-bold'>Chọn Món</div>

                        <div className='text-success'>
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Thứ 2</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">3 item</div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4 col-md-2"><img className="img-fluid" src="images/fruit.png" /></div>
                                <div className="col-8 col-md-5">
                                    <div className="row text-muted">Hulk</div>
                                    <div className="row">JD</div>
                                </div>
                                <div className="col col-md-5 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                                    <button className="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                                    <span>{quantity}</span>
                                    <button className="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-4 col-md-2"><img className="img-fluid" src="images/fruit.png" /></div>
                                <div className="col-8 col-md-5">
                                    <div className="row text-muted">Hulk</div>
                                    <div className="row">JD</div>
                                </div>
                                <div className="col col-md-5 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                                    <button className="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                                    <span>{quantity}</span>
                                    <button className="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-2 border-top border-bottom border-secondary" />

                        <div className='text-info'>
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Thứ 3</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">3 item</div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4 col-md-2"><img className="img-fluid" src="images/fruit.png" /></div>
                                <div className="col-8 col-md-5">
                                    <div className="row text-muted">Hulk</div>
                                    <div className="row">JD</div>
                                </div>
                                <div className="col col-md-5 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                                    <button className="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                                    <span>{quantity}</span>
                                    <button className="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-4 col-md-2"><img className="img-fluid" src="images/fruit.png" /></div>
                                <div className="col-8 col-md-5">
                                    <div className="row text-muted">Hulk</div>
                                    <div className="row">JD</div>
                                </div>
                                <div className="col col-md-5 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                                    <button className="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                                    <span>{quantity}</span>
                                    <button className="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-2 border-top border-bottom border-secondary" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StepTwo;