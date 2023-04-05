import React from 'react';
import { NavLink } from 'react-router-dom';

function PageNotMatch(props) {
    return (
        <div class="container-fluid">
            <div class="row vh-100 bg-light rounded align-items-center justify-content-center">
                <div class="col-md-6 text-center p-4">
                    <i class="bi bi-exclamation-triangle display-1 text-success"></i>
                    <h1 class="display-1 fw-bold">404</h1>
                    <h1 class="mb-4">OOPS! Page Not Found</h1>
                    <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    {/* <NavLink to="admin/login">
                        <a class="btn btn-success rounded-pill py-3 px-5" href="">Back To Home</a>
                    </NavLink> */}
                </div>
            </div>
        </div>
    );
}

export default PageNotMatch;