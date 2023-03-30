import React from 'react';
import SlideShow from '../../layout/customer/SlideShow';
import NavBarComponent from '../../layout/customer/NavBarComponent';
import Home from './index/Home';

const CustomerContainer = () => {
    return (
        <>
            <NavBarComponent />
            <SlideShow />
            <Home/>
        </>
    );
}

export default CustomerContainer;
