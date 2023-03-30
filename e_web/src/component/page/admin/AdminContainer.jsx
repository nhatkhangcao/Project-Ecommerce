import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBarComponent from '../../layout/admin/NavbarComponent';
import SideBarComponent from '../../layout/admin/SideBarComponent';

function AdminContainer(props) {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0" style={{ maxWidth: "1500px" }}>
            <SideBarComponent />
            <div className='content bg-content'>
                <NavBarComponent />
                <div className="container-fluid pt-4 px-4">
                    <Outlet />
                </div>
            </div>
            {/* <FooterComponent /> */}
        </div>
    );
}

export default AdminContainer;