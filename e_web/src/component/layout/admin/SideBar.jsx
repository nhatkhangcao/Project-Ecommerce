import React from 'react';
import { MdSpaceDashboard, MdOutlineManageAccounts } from 'react-icons/md';
import { GrWorkshop, GrChat } from 'react-icons/gr';

function SideBar(props) {
    return (
        <div>
            <div class="container-fluid font-link ">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 bg-light">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-danger text-decoration-none">
                                <span class="fs-1 pb-3 d-none d-sm-inline">Logo</span>
                            </a>
                            <ul class="nav has-submenu nav-pills flex-column mb-sm-auto mb-0" id="menu">
                                <li>
                                    <a class="nav-link text-dark">
                                        <MdSpaceDashboard /> <span class="ms-1 d-none d-sm-inline fw-bold">Dashboard</span>
                                    </a>
                                    <ul class="nav nav-pills flex-column text-dark ms-5">
                                        <li>
                                            <a>Today</a>
                                        </li>
                                        <li>
                                            <a>Analyst</a>
                                        </li>
                                        <li>
                                            <a>Daily Sale</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="nav-link text-dark">
                                        <GrWorkshop /> <span class="ms-1 d-none d-sm-inline fw-bold">Ecommerce</span>
                                    </a>
                                    <ul class="nav nav-pills flex-column text-dark  ms-5">
                                        <li>
                                            <a>Meals</a>
                                        </li>
                                        <li>
                                            <a>Combo</a>
                                        </li>
                                        <li>
                                            <a>Order List</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="nav-link text-dark">
                                        <MdOutlineManageAccounts /> <span class="ms-1 d-none d-sm-inline fw-bold">Management</span>
                                    </a>
                                    <ul class="nav nav-pills flex-column text-dark  ms-5">
                                        <li>
                                            <a>Users</a>
                                        </li>
                                        <li>
                                            <a>Customer</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="nav-link text-dark">
                                        <GrChat /> <span class="ms-1 d-none d-sm-inline fw-bold">App</span>
                                    </a>
                                    <ul class="nav nav-pills flex-column text-dark ms-5">
                                        <li>
                                            <a>Mail</a>
                                        </li>
                                        <li>
                                            <a>Chat</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="dropdown pb-4">
                                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle" />
                                    <span class="d-none d-sm-inline mx-1 text-dark">Admin</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a class="dropdown-item" href="#">New project...</a></li>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3">
                        <h3>Left Sidebar with Submenus</h3>
                        <p class="lead">
                            An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                            menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                        <ul class="list-unstyled">
                            <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;