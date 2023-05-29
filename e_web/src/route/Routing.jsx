import React from 'react';
import axios from 'axios';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import PageNotMatch from '../component/layout/PageNotMatch';
import AdminContainer from '../component/page/admin/AdminContainer';
import Dashboard from '../component/page/admin/dashboard/Dashboard';
import Login from '../component/page/admin/login/Login';
import UserManagementContainer from '../component/page/admin/user-management/UserManagementContainer';
import CustomerContainer from '../component/page/customer/CustomerContainer';
import Home from '../component/page/customer/index/Home';
import Calculator from '../component/page/customer/tdee/Calculator';
import MealManagementContainer from '../component/page/admin/meals-management/MealManagementContainer';
import MealContainer from '../component/page/customer/meals/MealContainer';
import MealDetailContainer from '../component/page/customer/meals-detail/MealDetailContainer';
import OrderHistoryContainer from '../component/page/customer/order-history/OrderHistoryContainer';
import DetailMealManagementContainer from '../component/page/admin/detail-meal-management/DetailMealManagementContainer';
import OrderManagementContainer from '../component/page/admin/order-management/OrderManagementContainer';
import ProfileContainer from '../component/page/customer/profile/ProfileContainer';

function Routing(props) {
    const PrivateRoute = () => {
        const isAuthorize = localStorage.getItem('account');
        axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('account'))?.token}`;
        return isAuthorize ? <Outlet /> : <Navigate to="/page-not-match" />;
    }

    const loginResponse = JSON.parse(localStorage.getItem('account'));
    const account = loginResponse?.user?.role;

    return (
        <>
            <Routes>
                //ADMIN ROUTING
                <Route exact path='admin/login' element={<Login />} />
                <Route exact path='admin/' element={<PrivateRoute />}>
                    <Route element={<AdminContainer />}>
                        <Route exact path='dashboard' element={<Dashboard />} />
                        <Route exact path='meal-management' element={<MealManagementContainer />} />
                        <Route exact path='meal-detail-management' element={<DetailMealManagementContainer />} />
                        {account == 2 && <Route exact path='user-management' element={<UserManagementContainer />} />}
                        <Route exact path='order-management' element={<OrderManagementContainer />} />
                    </Route>
                </Route>
                //CUSTOMER ROUTING
                <Route element={<CustomerContainer />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/detail/:meal_name' element={<MealDetailContainer />} />
                    <Route exact path='calculator' element={<Calculator />} />
                    <Route exact path='meals' element={<MealContainer />} />
                    <Route exact path='history' element={<OrderHistoryContainer />} />
                </Route>
                //PAGE NOT MATCH
                <Route exact path='*' element={<PageNotMatch />} />
            </Routes>
        </>
    );
}

export default Routing;