import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../../page/customer/login/LoginModal';

const NavBarComponent = () => {
    const navigate = useNavigate()
    const account = JSON.parse(localStorage.getItem('account_user'));
    const handleLogout = () => {
        axios.post("http://127.0.0.1:8000/api/logout").then(() => {
            localStorage.removeItem('account_user')
            window.location.reload(true)
        })
    }
    return (
        <nav class="navbar nav-bar-customer navbar-expand-lg navbar-light p-3">
            <div class="container-fluid">
                <a class="text-success fw-bold navbar-brand" href="#">EAT CLEAN</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item  ">
                            <a class="text-dark fw-bold nav-link mx-2 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-dark fw-bold nav-link mx-2" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-dark fw-bold nav-link mx-2" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="text-dark fw-bold nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Blog</a></li>
                                <li><a class="dropdown-item" href="#">About Us</a></li>
                                <li><a class="dropdown-item" href="#">Contact us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                        <li class="nav-item dropdown">
                            <a class="text-dark fw-bold nav-link mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {account?.user.name ? account?.user.name : <LoginModal />}
                            </a>
                            {account?.user.name ?
                                <ul class="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
                                    <li><a onClick={handleLogout} class="dropdown-item">Logout</a></li>
                                </ul> : ''
                            }
                        </li>
                        <li class="nav-item mx-2">
                            <div class="nav-link text-dark"  >
                                <i class="fas fa-cart-plus"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;
