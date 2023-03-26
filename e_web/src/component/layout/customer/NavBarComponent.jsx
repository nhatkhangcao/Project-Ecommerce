import React from 'react';
import LoginModal from '../../page/customer/login/LoginModal';

const NavBarComponent = () => {
    return (
        <nav class="navbar nav-bar-customer navbar-expand-lg navbar-light p-3">
            <div class="container-fluid">
                <a class="text-light navbar-brand" href="#">EAT CLEAN</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item  ">
                            <a class="text-light nav-link mx-2 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-light nav-link mx-2" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-light nav-link mx-2" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="text-light nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <li class="nav-item mx-2">
                            <div class="nav-link text-white" >
                                <LoginModal />

                            </div>
                        </li>
                        <li class="nav-item mx-2">
                            <div class="nav-link text-white"  >
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
