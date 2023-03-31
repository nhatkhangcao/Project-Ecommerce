import React from 'react';
import NavBarComponent from '../../layout/customer/NavBarComponent';
import { Outlet } from 'react-router-dom';

const CustomerContainer = () => {
    return (
        <>
            <NavBarComponent />
            <div>
                <Outlet/>
            </div>
        </>
    );
}

export default CustomerContainer;
