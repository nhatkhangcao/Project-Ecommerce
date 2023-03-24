import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditUserModal from './modal/EditUserModal';

function UserManagementComponent(props) {
    const getUserData = props.getUserData
    const userData = props.userData
    const paginate = props.paginate
    const handleDeleteUser = props.handleDeleteUser

    useEffect(() => {
        getUserData()
    }, []);
    return (
        <div>
            <div className="card ">
                <div className="card-header bg-white">
                    <form>
                        <div class="row row-cols-auto">
                            <div class="col-3">
                                <span className='fw-bold'>Name</span>
                                <input class="form-control" />
                            </div>
                            <div class="col-3">
                                <span className='fw-bold'>Email</span>
                                <input class="form-control" />
                            </div>
                        </div>
                        <div class="row row-cols-auto d-flex justify-content-end">
                            <div class="col">
                                <button type='button' className="btn bg-dark  text-white">
                                    <i class="px-4 fas fa-search"></i>
                                </button>
                            </div>
                            <div class="col">
                                <button type='reset' className="btn bg-secondary text-white">
                                    <i class="px-4 fas fa-eraser"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    {userData && userData.data && userData.data.length > 0 &&
                        <div className="d-flex justify-content-start pb-2">
                            From {paginate && paginate.from}~{paginate && paginate.to} out of {paginate && paginate.total}&nbsp;<div className='text-danger'>User</div>
                        </div>
                    }
                    <table className="table table-striped">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th className='text-center' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData && userData.data && userData.data.length > 0 ? userData.data.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role && (item.role === 2 ? "Admin" : "User")}</td>
                                        <td className='text-center' >
                                            <EditUserModal item={item} getUserData={getUserData} />
                                            <i onClick={(e) => handleDeleteUser(item, e)} role="button" className="fas fa-user-times text-danger pe-auto" title="delete"></i>
                                        </td>
                                    </tr>
                                ) :
                                    <tr><td className='text-danger'>NO DATA!</td></tr>
                            }
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example" className=''>
                        <ul className="pagination d-flex justify-content-center">
                            {paginate && paginate.last_page >= 2 && paginate.links && paginate.links.map((link) => {
                                let url = link.url == null ? paginate.links[1].url : link.url;
                                let className = link.active == true ? "page-item active" : "page-item"
                                return (
                                    <li className={className} key={link.label}>
                                        <button className="page-link" onClick={e => getUserData(url)}>{link.label}</button>
                                    </li>
                                )})
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default UserManagementComponent;