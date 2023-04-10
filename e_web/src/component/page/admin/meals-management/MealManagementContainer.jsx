import React from 'react';
import MealManagementComponent from './MealManagementComponent';
import axios from 'axios';
import { useState } from 'react';

function MealManagementContainer(props) {
    const [dataList, setDataList] = useState();
    const [paginate, setPaginate] = useState();
    const getMealData = (url) => {
        if (!url) {
            url = 'http://127.0.0.1:8000/api/admin/meals-list'
        }
        axios.get(url).then((response) => {
            setDataList(response.data)
            pagination(response)
        });
    }
    const pagination = (response) => {
        setPaginate(response.data)
    }
    return (
        <MealManagementComponent
            getMealData={getMealData}
            dataList={dataList}
        />
    );
}

export default MealManagementContainer;