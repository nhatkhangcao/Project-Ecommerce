import React from 'react';
import NavBarComponent from '../../layout/customer/NavBarComponent';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../layout/customer/FooterComponent';

const CustomerContainer = () => {
    return (
        <>
            <NavBarComponent />
            <div>
                <Outlet />
            </div>
            <FooterComponent />
        </>
    );
}

export default CustomerContainer;
