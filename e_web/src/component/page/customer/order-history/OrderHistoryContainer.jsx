import React from 'react';

function OrderHistoryContainer(props) {
    return (
        <div class="container">
            <h3>Order History</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-6">
                            <p><strong>Mã đơn hàng:</strong> 001</p>
                            <p><strong>Ngày đặt hàng:</strong> 2023-05-22</p>
                        </div>
                        <div class="col-md-6 text-right">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#orderDetailModal">Chi tiết</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default OrderHistoryContainer;