import React from 'react';
import MealManagementComponent from './MealManagementComponent';
import axios from 'axios';
import { useState } from 'react';

function MealManagementContainer(props) {
    const [dataList, setDataList] = useState();
    const getMealData = () => {
        axios.get('http://127.0.0.1:8000/api/admin/meals-list').then((response) => {
            setDataList(response)
        });
    }
    return (
        <MealManagementComponent
            getMealData={getMealData}
            dataList={dataList}
        />
    );
}

export default MealManagementContainer;