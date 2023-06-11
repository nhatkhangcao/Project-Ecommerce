import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";
import ChartContainer from '../../customer/test/ChartContainer';

function Dashboard(props) {
    const [data, setData] = useState();

    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    const getData = () => {
        axios.get('http://127.0.0.1:8000/api/admin/data-analyst').then((response) => {
            setData(response.data)
        })
    }
    // const dataTess = {
    //     labels: ["Sunday", "Monday", "Tuesday",
    //         "Wednesday", "Thursday", "Friday", "Saturday"],
    //     datasets: [
    //         {
    //             label: "Hours Studied in Geeksforgeeks",
    //             data: [2, 5, 7, 9, 7, 6, 4],
    //             fill: true,
    //             backgroundColor: "rgba(6, 156,51, .3)",
    //             borderColor: "#02b844",
    //         }
    //     ]
    // }
    const test = () => {
        console.log(data)
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div className="container-fluid">
            {/* <button onClick={test}>test</button> */}
            <div className="card shadow-style px-4">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h4 fw-bold mb-0 pt-2">Hôm nay chúng ta có gì?</h1>
                </div>
                {
                    data &&
                    <div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6 mb-4 px-2">
                                <div className="card border-bottom-danger shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Doanh thu
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{formatVND(data.totalSale)} VNĐ</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-4 px-2">
                                <div className="card border-bottom-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Đơn hàng</div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{data.orderToday}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-utensils fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-4 px-2">
                                <div className="card border-bottom-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    THÀNH VIÊN MỚI
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{data.newMember}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-users fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h4 fw-bold mb-0 pt-2">
                                Báo cáo Tổng kết Hàng tháng
                            </h1>
                        </div>
                        <div className='row chart-container mx-1 mb-4'>
                            <ChartContainer />
                        </div>
                    </div>

                }
            </div>
        </div>
    );
}

export default Dashboard;