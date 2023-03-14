import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotMatch from '../component/layout/PageNotMatch';
import Dashboard from '../component/page/admin/dashboard/Dashboard';
import Login from '../component/page/admin/login/Login';


function Routing(props) {
    return (
        <>
            <Routes>
                <Route path='admin'>
                    <Route exact path='dashboard' element={<Dashboard />} />
                    <Route exact path='login' element={<Login />} />
                </Route>
                <Route exact path='*' element={<PageNotMatch />} />
            </Routes>
        </>
    );
}

export default Routing;