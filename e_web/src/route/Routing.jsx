import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotMatch from '../component/layout/PageNotMatch';
import AdminContainer from '../component/page/admin/AdminContainer';
import Dashboard from '../component/page/admin/dashboard/Dashboard';
import Login from '../component/page/admin/login/Login';
import UserManagementContainer from '../component/page/admin/user-management/UserManagementContainer';


function Routing(props) {
    return (
        <>
            <Routes>
                <Route path='admin'>
                    <Route exact path='login' element={<Login />} />
                    <Route element={<AdminContainer />}>
                        <Route exact path='dashboard' element={<Dashboard />} />
                        <Route exact path='user-management' element={<UserManagementContainer />} />
                    </Route>
                </Route>

                <Route exact path='*' element={<PageNotMatch />} />
            </Routes>
        </>
    );
}

export default Routing;