import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const OrderHistoryContainer = () => {
    const [orderHistory, setOrderHistory] = useState();
    const loginResponse = JSON.parse(localStorage.getItem('account_user'));
    const account = loginResponse?.user?.account;
    if (account == null) {
        window.location.href = 'page-not-match';
    }
    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    const getListOrderHistory = () => {
        axios.get("http://127.0.0.1:8000/api/customer/order-history", {
            params: { account }
        }).then((response) => {
            setOrderHistory(response.data.data)
        })
    }
    const checkStatus = (status) => {
        if (status == 0) {
            return 'Đơn hàng mới'
        } else if (status == 1) {
            return 'Đang được giao'
        } else {
            return 'Đã giao'
        }
    }
    const statusText = (status) => {
        if (status == 0) {
            return 'bg-success'
        } else if (status == 1) {
            return 'bg-warning'
        } else {
            return 'bg-danger'
        }
    }
    useEffect(() => {
        getListOrderHistory()
    }, []);
    return (
        <div className="container order-history">
            <h3 className="mb-3">Lịch sử đặt hàng</h3>
            <div className="row">
                {orderHistory && orderHistory.length > 0 ? orderHistory.map((order) => (
                    <div className="col-md-12" key={order.id}>
                        <div className="order-card">
                            <div className="order-info">
                                <span>Mã đơn hàng: </span>
                                <span>{order.order_code}</span>
                            </div>
                            <div className="order-info">
                                <span>Combo:  </span>
                                <span>{order.order_name}</span>
                            </div>
                            <div className="order-info">
                                <span>Ngày đặt hàng: </span>
                                <span>{moment(order.created_at).format('MMMM YYYY, h:mm:ss a')}</span>
                            </div>
                            <div className="order-info">
                                <span>Giá: </span>
                                <span>{formatVND(order.order_price)}VNĐ</span>
                            </div>
                            <div className="order-status text-white">
                                <span className={statusText(order.status)}>{checkStatus(order.status)}</span>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="h4 text-danger text-center col-12">Hiện tại bạn chưa có đơn hàng nào!!!</div>
                )}
            </div>
        </div>
    );
};

export default OrderHistoryContainer;
