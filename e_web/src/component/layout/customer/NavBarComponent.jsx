import axios from 'axios';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import FormModal from '../../page/customer/form-modal/Modal/FormModal';

const NavBarComponent = () => {
    const navigate = useNavigate();
    const account = JSON.parse(localStorage.getItem('account_user'));
    const handleLogout = () => {
        axios.post("http://127.0.0.1:8000/api/logout").then(() => {
            localStorage.removeItem('account_user')
            window.location.reload(true)
        })
    }
    const handleHistory = () => {
        navigate('/history')
    }
    return (
        <nav className="navbar nav-bar-customer navbar-expand-lg navbar-light p-3">
            <div className="container-fluid">
                <Link to="" className="text-success fw-bold navbar-brand" href="#">EAT CLEAN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <NavLink to="" className={({ isActive }) => isActive ? 'active nav-item nav-link text-success' : 'text-dark nav-item nav-link'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="meals" className={({ isActive }) => isActive ? 'active nav-item nav-link text-success' : 'text-dark nav-item nav-link'}>Meals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="calculator" className={({ isActive }) => isActive ? 'active nav-item nav-link text-success' : 'text-dark nav-item nav-link'}>TDEE</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="text-dark nav-link mx-2" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item">Blog</a></li>
                                <li><a className="dropdown-item">About Us</a></li>
                                <li><a className="dropdown-item">Contact us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                        <li className="nav-item dropdown">
                            <a className="text-dark fw-bold nav-link mx-2" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {account?.user.name ? account.user.name : <FormModal />}
                            </a>
                            {account?.user.name && (
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink1">
                                    <li><a onClick={handleHistory} className="dropdown-item">Lịch sử mua hàng</a></li>
                                    <li><a onClick={handleLogout} className="dropdown-item">Đăng xuất</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item mx-2">
                            <div className="nav-link text-dark"  >
                                <i className="fas fa-cart-plus"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;
