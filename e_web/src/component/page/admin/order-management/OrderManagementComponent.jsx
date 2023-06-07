import React, { useEffect } from 'react';
import EditOderModal from './modal/EditOderModal';

function OrderManagementComponent(props) {
    const orderData = props.orderData
    const paginate = props.paginate
    const getOrderData = props.getOrderData

    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    const checkStatus = (status) => {
        if (status == 0) {
            return 'Đơn hàng mới'
        } else if (status == 1) {
            return 'Đang được giao'
        } else if (status == 2) {
            return 'Đã giao'
        } else {
            return 'Đã hủy'
        }
    }
    const statusText = (status) => {
        if (status == 0) {
            return 'text-success fw-bold'
        } else if (status == 1) {
            return 'text-warning fw-bold'
        } else if (status == 2) {
            return 'text-danger fw-bold'
        } else {
            return 'text-secondary fw-bold'
        }
    }

    useEffect(() => {
        getOrderData()
    }, []);
    return (
        <div className='container-fluid'>
            <div className="card shadow-style">
                <div className="card-body">
                    {orderData && orderData.data && orderData.data.length > 0 &&
                        <div className="d-flex justify-content-start pb-2">
                            Từ {paginate && paginate.from}~{paginate && paginate.to} tổng số &nbsp;<div className='text-danger'>{paginate && paginate.total} Đơn Hàng</div>
                        </div>
                    }
                    <div className='table-responsive'>
                        <table className="table table-bordered table-striped">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Mã đơn hàng</th>
                                    <th scope="col">Combo</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Trạng thái</th>
                                    <th className='text-center' scope="col">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderData && orderData.data && orderData.data.length > 0 ? orderData.data.map((item, index) =>
                                        <tr key={item.id}>
                                            <th scope="row">{(orderData.current_page - 1) * orderData.per_page + index + 1}</th>
                                            <td>{item.order_code}</td>
                                            <td>{item.order_name}</td>
                                            <td>{formatVND(item.order_price)} VNĐ</td>
                                            <td className={statusText(item.status)}>{checkStatus(item.status)}</td>
                                            <td className='text-center' >
                                                <EditOderModal getOrderData={getOrderData} item={item} />
                                            </td>
                                        </tr>
                                    ) :
                                        <tr><td className='text-danger text-center'>Không có dữ liệu!</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example" className=''>
                        <ul className="pagination d-flex justify-content-center">
                            {paginate && paginate.last_page >= 2 && paginate.links && paginate.links.map((link) => {
                                let url = link.url === null ? paginate.links[1].url : link.url;
                                let className = link.active === true ? "page-item active" : "page-item"
                                return (
                                    <li className={className} key={link.label}>
                                        <button className="page-link" onClick={e => getOrderData(url)}>{link.label}</button>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default OrderManagementComponent;