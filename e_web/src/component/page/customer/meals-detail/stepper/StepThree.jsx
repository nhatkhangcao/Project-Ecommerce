import React from 'react';
import { useState } from 'react';

function StepThree(props) {
    const item = props.item
    const fee = props.fee
    const feeTotal = props.feeTotal
    const radioValue = props.radioValue
    const cartPrice = props.cartPrice
    const handleChangeFee = props.handleChangeFee
    const shipFee = props.shipFee
    return (
        <div className='container'>
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
                                        <div className="h5 row fw-bold">Combo</div>
                                    </div>
                                    <div className="col">
                                        <div className="h5 row">{item.combo_name}</div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Số ngày</div>
                                    </div>
                                    <div className="col">
                                        <div className="h5 row">{radioValue.day} ngày/1 tuần</div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Số bữa</div>
                                    </div>
                                    <div className="col">
                                        <div className="h5 row">{radioValue.meal} bữa/1 ngày</div>
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
                                        <select defaultValue={fee ?? 10} onChange={(e) => handleChangeFee(e)} className="form-select">
                                            <option value="10">Quận 1</option>
                                            <option value="20">Quận 2</option>
                                            <option value="30">Quận 3</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className="row py-1">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Ghi Chú</div>
                                    </div>
                                    <div className="col">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Giá Gói</div>
                                    </div>
                                    <div className="col">
                                        <div>{cartPrice()}VND</div>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col">
                                        <div className="h5 row fw-bold">Phí Ship</div>
                                    </div>
                                    <div className="col">
                                        <div>{shipFee()}VND</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-top border-bottom border-secondary" />
                        <div className='d-flex h5 justify-content-end fw-bold'>
                            <span >TỔNG TIỀN: <span className='text-danger'>{feeTotal()} VND</span></span>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default StepThree;