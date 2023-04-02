import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotMatch from '../component/layout/PageNotMatch';
import AdminContainer from '../component/page/admin/AdminContainer';
import Dashboard from '../component/page/admin/dashboard/Dashboard';
import Login from '../component/page/admin/login/Login';
import UserManagementContainer from '../component/page/admin/user-management/UserManagementContainer';
import CustomerContainer from '../component/page/customer/CustomerContainer';
import Home from '../component/page/customer/index/Home';
import MealContainer from '../component/page/customer/meals/MealContainer';
import Calculator from '../component/page/customer/tdee/Calculator';

function Routing(props) {
    return (
        <>
            <Routes>
                //ADMIN ROUTING
                <Route path='admin'>
                    <Route exact path='login' element={<Login />} />
                    <Route element={<AdminContainer />}>
                        <Route exact path='dashboard' element={<Dashboard />} />
                        <Route exact path='meals' element={<Dashboard />} />
                        <Route exact path='user-management' element={<UserManagementContainer />} />
                    </Route>
                </Route>

                //CUSTOMER ROUTING
                <Route element={<CustomerContainer />}>
                    <Route path='' element={<Home />} />
                    <Route exact path='calculator' element={<Calculator />} />
                    <Route exact path='meals' element={<MealContainer />} />
                </Route>
                //PAGE NOT MATCH
                <Route exact path='*' element={<PageNotMatch />} />
            </Routes>
        </>
    );
}

export default Routing;