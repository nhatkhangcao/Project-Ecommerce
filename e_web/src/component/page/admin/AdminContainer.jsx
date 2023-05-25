import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBarComponent from '../../layout/admin/NavbarComponent';
import SideBarComponent from '../../layout/admin/SideBarComponent';

function AdminContainer(props) {
    return (
        <div className="position-relative bg-white d-flex p-0">
            <SideBarComponent />
            <div className='content bg-content'>
                <NavBarComponent />
                <div className="pt-3">
                    <Outlet />
                </div>
            </div>
            {/* <FooterComponent /> */}
        </div>
    );
}

export default AdminContainer;