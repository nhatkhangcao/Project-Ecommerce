import React, { useState } from 'react';
import DetailMealManagementComponent from './DetailMealManagementComponent';
import axios from 'axios';
import Swal from 'sweetalert2';

function DetailMealManagementContainer(props) {
    const [dataList, setDataList] = useState();
    const [paginate, setPaginate] = useState();

    const getMealDetail = (url) => {
        if (!url) {
            url = 'http://127.0.0.1:8000/api/admin/meals-detail-list'
        }
        axios.get(url).then((response) => {
            setDataList(response.data)
            pagination(response)
        });
    }
    const handleDeleteMeal = (item, e) => {
        Swal.fire({
            title: 'Bạn chắc chắn chứ?',
            text: "Bạn muốn xóa meal này?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Hủy bỏ',
            confirmButtonText: 'Chắc chắn'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://127.0.0.1:8000/api/admin/delete-meal-detail/' + item.id)
                    .then((response) => {
                        getMealDetail()
                    })
                Swal.fire(
                    'Bạn chắc chắn chứ!',
                    'B.',
                    'success'
                )
            }
        })
    }
    const pagination = (response) => {
        setPaginate(response)
    }
    return (
        <DetailMealManagementComponent
            getMealDetail={getMealDetail}
            dataList={dataList}
            paginate={paginate}
            setDataList={setDataList}
            handleDeleteMeal={handleDeleteMeal}
        />
    );
}

export default DetailMealManagementContainer;