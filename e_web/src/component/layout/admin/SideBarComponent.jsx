import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SideBarComponent(props) {
    const loginResponse = JSON.parse(localStorage.getItem('account'));
    const account = loginResponse?.user?.role;

    return (
        <div className="sidebar pb-3 ">
            <nav className="navbar nav-bg">
                <div className="navbar-brand mx-4 mb-3">
                    <h3 className="text-success fw-bold">EAT CLEAN</h3>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink to="dashboard" className={({ isActive }) => isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'}>
                        <i className="fa fa-tachometer-alt me-2"></i>
                        Dashboard
                    </NavLink>
                    {
                        account == 1 && <NavLink to="meal-management" className={({ isActive }) => isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'}>
                            <i className="fas fa-utensils me-2" />
                            Combo
                        </NavLink>
                    }
                    {
                        account == 1 &&
                        <NavLink to="meal-detail-management" className={({ isActive }) => isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'}>
                            <i class="fas fa-drumstick-bite me-2"></i>
                            Meal Detail
                        </NavLink>
                    }
                    {
                        account == 1 &&
                        <NavLink to="order-management" className={({ isActive }) => isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'}>
                            <i className="fas fa-cart-plus me-2"></i>
                            Order
                        </NavLink>
                    }
                    {/* <Link to="customer-management" className="nav-item nav-link"><i className="fas fa-users me-2"></i>Customer</Link> */}
                    {
                        account == 2 &&
                        <NavLink to="user-management" className={({ isActive }) => isActive ? 'active nav-item nav-link' : 'text-dark nav-item nav-link'}>
                            <i className="fas fa-user-cog me-2"></i>
                            User
                        </NavLink>
                    }

                    {/* <Link to="mail" className="nav-item nav-link"><i className="fas fa-envelope me-2"></i>Mail</Link> */}
                    {/* <Link to="chat" className="nav-item nav-link"><i className="fas fa-comment-dots me-2"></i>Chat</Link> */}
                </div>
            </nav>
        </div>
    );
}

export default SideBarComponent;