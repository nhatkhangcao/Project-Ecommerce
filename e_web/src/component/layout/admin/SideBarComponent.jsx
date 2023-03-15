import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SideBarComponent(props) {
    return (
        <div className="sidebar pb-3 ">
            <nav className="navbar nav-bg">
                <a href="index.html" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-success fw-bold">EAT CLEAN</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="" />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink to="dashboard" className={({ isActive }) =>
                        isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'
                    }><i className="fa fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                    <div className="nav-item dropdown">
                        <Link to="ecommerce" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fas fa-utensils me-2"></i>Meals</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    <Link to="order" className="nav-item nav-link"><i className="fas fa-cart-plus me-2"></i>Order</Link>
                    <Link to="customer-management" className="nav-item nav-link"><i className="fas fa-users me-2"></i>Customer</Link>
                    <NavLink to="user-management" className={({ isActive }) =>
                        isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'
                    }><i className="fas fa-user-cog me-2"></i>User</NavLink>
                    <Link to="mail" className="nav-item nav-link"><i className="fas fa-envelope me-2"></i>Mail</Link>
                    <Link to="chat" className="nav-item nav-link"><i class="fas fa-comment-dots me-2"></i>Chat</Link>
                </div>
            </nav>
        </div>
    );
}

export default SideBarComponent;