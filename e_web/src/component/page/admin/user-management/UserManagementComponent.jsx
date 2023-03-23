import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditUserModal from './modal/EditUserModal';

function UserManagementComponent(props) {
    const getUserData = props.getUserData
    const userData = props.userData
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
                            <div class="col">
                                <span>Name</span>
                                <input type="text" class="form-control" placeholder="Enter email" name="email" />
                            </div>
                            <div class="col">
                                <span>Email</span>
                                <input type="password" class="form-control" placeholder="Enter password" name="pswd" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-body">
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
                                userData ? userData.map((item, index) =>
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
                </div>
            </div>
        </div>
    );
}

export default UserManagementComponent;