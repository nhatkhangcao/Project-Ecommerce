import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

function NavBarComponent(props) {
    const navigate = useNavigate()
    const account = JSON.parse(localStorage.getItem('account'));
    const handleLogout = () => {
        axios.post("http://127.0.0.1:8000/api/logout").then(() => {
            localStorage.removeItem('account')
            navigate('login')
        })
    }
    useEffect(() => {
        $('#toggler').click(function () {
            $('.sidebar, .content').toggleClass("open");
            return false;
        });
    }, []);
    return (
        <nav className="navbar navbar-expand bg-white navbar-light sticky-top px-4 py-0 shadow-style">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-success fw-bold mb-0">EAT CLEAN</h2>
            </a>
            <a id='toggler' className="sidebar-toggler flex-shrink-0 text-decoration-none" style={{ cursor: 'pointer' }}>
                <i className="fa fa-bars text-success"></i>
            </a>
            <div className="navbar-nav align-items-center ms-auto me-3">
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-envelope me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Message</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/user.jpg" alt="" />
                                <div className="ms-2">
                                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/user.jpg" alt="" />
                                <div className="ms-2">
                                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/user.jpg" alt="" />
                                <div className="ms-2">
                                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-center">See all message</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" />
                        <span className="d-none d-lg-inline-flex">{account.user.name}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <a onClick={handleLogout} className="dropdown-item">Log Out</a>
                    </div>
                </div>
            </div >
        </nav >
    );
}
export default NavBarComponent;         