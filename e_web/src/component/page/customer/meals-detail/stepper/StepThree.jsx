import React from 'react';

function StepThree(props) {
    return (
        <div className='pt-3'>
            <div className="sp-card">
                <div className="row">
                    <div className="col-md cart">
                        <div className='title h5 text-center text-danger fw-bold'>Hóa Đơn</div>
                        <div className=''>
                            <div className="title">
                                <div className="row">
                                    <div className="col text-start"><b className='h5 fw-bolder'>Sản phẩm</b></div>
                                </div>
                            </div>
                            <div className='ms-4'>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Combo </div>
                                    </div>
                                    <div className="col">
                                        <div className="h5 row">Hulk</div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Số ngày</div>
                                    </div>
                                    <div className="col">
                                        <div className="h5 row">3 ngày/1 tuần</div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Số bữa</div>
                                    </div>
                                    <div className="col">
                                        <div className="h5 row">3 bữa/1 ngày</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-top border-bottom border-secondary" />
                        <div className=''>
                            <div className="title">
                                <div className="row">
                                    <div className="col text-start"><b className='h5 fw-bolder'>Thông tin giao hàng:</b></div>
                                </div>
                            </div>
                            <div className='ms-4'>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Địa chỉ </div>
                                    </div>
                                    <div className="col">
                                        <select className="form-select">
                                            <option value="1.2">Q1</option>
                                            <option value="1.375">Q2</option>
                                            <option value="1.55">Q3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Ghi Chú</div>
                                    </div>
                                    <div className="col">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Giá Gói</div>
                                    </div>
                                    <div className="col">
                                        <div>450.000VND</div>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Phí Ship</div>
                                    </div>
                                    <div className="col">
                                        <div>50.000VND</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-top border-bottom border-secondary" />
                        <div className='d-flex h5 justify-content-end fw-bold'>
                            <span >TỔNG TIỀN: <span className='text-danger'>500.000 VND</span></span>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default StepThree;