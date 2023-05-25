import React, { useState } from 'react';
import OrderManagementComponent from './OrderManagementComponent';
import axios from 'axios';

function OrderManagementContainer(props) {
    const [orderData, setOrderData] = useState();
    const [paginate, setPaginate] = useState();

    const getOrderData = (url) => {
        if (!url) {
            url = 'http://127.0.0.1:8000/api/admin/order'
        }
        axios.get(url).then((response) => {
            setOrderData(response.data)
            pagination(response)
        });
    }

    const pagination = (response) => {
        setPaginate(response.data)
    }
    return (
        <OrderManagementComponent
            orderData={orderData}
            getOrderData={getOrderData}
            paginate={paginate}
        />
    );
}

export default OrderManagementContainer; 