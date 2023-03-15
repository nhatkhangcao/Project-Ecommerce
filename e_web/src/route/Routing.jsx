import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotMatch from '../component/layout/PageNotMatch';
import AdminContainer from '../component/page/admin/AdminContainer';
import Dashboard from '../component/page/admin/dashboard/Dashboard';
import Login from '../component/page/admin/login/Login';
import UserManagamentContainer from '../component/page/admin/user-management/UserManagamentContainer';


function Routing(props) {
    return (
        <>
            <Routes>
                <Route path='admin'>
                    <Route exact path='login' element={<Login />} />
                    <Route element={<AdminContainer />}>
                        <Route exact path='dashboard' element={<Dashboard />} />
                        <Route exact path='user-management' element={<UserManagamentContainer />} />
                    </Route>
                </Route>

                <Route exact path='*' element={<PageNotMatch />} />
            </Routes>
        </>
    );
}

export default Routing;