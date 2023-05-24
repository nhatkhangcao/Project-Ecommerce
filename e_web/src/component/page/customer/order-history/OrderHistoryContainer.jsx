import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

const OrderHistoryContainer = () => {

    const navigate = useNavigate();
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
        if (status == 1) {
            return 'completed'
        } else {
            return 'cancelled'
        }
    }
    useEffect(() => {
        getListOrderHistory()
    }, []);
    return (
        <div className="container order-history">
            <h2 className="mb-3">Order History</h2>
            <div className="row">
                {orderHistory && orderHistory.map((order) => (
                    <div className="col-md-6" key={order.id}>
                        <div className="order-card">
                            <div className="order-info">
                                <span>Sản phẩm: </span>
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
                            <div className="order-status">
                                <span className={checkStatus(order.status)}>Trạng thái</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistoryContainer;
