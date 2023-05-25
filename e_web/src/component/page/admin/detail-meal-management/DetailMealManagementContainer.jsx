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
            title: 'Are you sure?',
            text: "You want to delete?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://127.0.0.1:8000/api/admin/delete-meal-detail/' + item.id)
                    .then((response) => {
                        getMealDetail()
                    })
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            }
        })
    }
    const pagination = (response) => {
        setPaginate(response.data)
    }
    return (
        <DetailMealManagementComponent
            getMealDetail={getMealDetail}
            dataList={dataList}
            setDataList={setDataList}
            handleDeleteMeal={handleDeleteMeal}
        />
    );
}

export default DetailMealManagementContainer;