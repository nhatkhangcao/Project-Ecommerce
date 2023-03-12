import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../component/page/admin/home/Home';
import Login from '../component/page/admin/login/Login';

function Routing(props) {
    return (
        <>
            <Routes>
                <Route exact path='/ok' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </>
    );
}

export default Routing;