import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AddUserModal from './modal/AddUserModal';
import EditUserModal from './modal/EditUserModal';

function UserManagementComponent(props) {
    const getUserData = props.getUserData
    const userData = props.userData
    const paginate = props.paginate
    const searchUser = props.searchUser
    const handleDeleteUser = props.handleDeleteUser
    const clearSearch = props.clearSearch
    const setRole = props.setRole

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    useEffect(() => {
        getUserData()
    }, []);
    return (
        <div>
            <div className="card shadow-style">
                <div className="card-header bg-white">
                    <form onSubmit={handleSubmit(searchUser)}>
                        <div className="row row-cols-auto">
                            <div className="col-3">
                                <span className='fw-bold'>Name</span>
                                <input
                                    className="form-control"
                                    {...register("name")}
                                />
                            </div>
                            <div className="col-3">
                                <span className='fw-bold'>Email</span>
                                <input
                                    className="form-control"
                                    {...register("email")}
                                />
                            </div>
                        </div>
                        <div className="row row-cols-auto d-flex justify-content-between pt-3">
                            <div className="col">
                                <button className='btn bg-primary text-white'>
                                    <AddUserModal getUserData={getUserData} />
                                </button>
                            </div>
                            <div className="col">
                                <button type='submit' className="btn bg-dark text-white me-4">
                                    <i className="px-3 fas fa-search"></i>
                                </button>
                                <button type='button' onClick={() => reset(clearSearch)} className="btn bg-secondary text-white">
                                    <i className="px-3 fas fa-eraser"></i>
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
                    <div className='table-responsive'>
                        <table className="table table-bordered table-striped">
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
                                            <th scope="row">{(userData.current_page - 1) * userData.per_page + index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{setRole(item.role)}</td>
                                            <td className='text-center' >
                                                <EditUserModal item={item} getUserData={getUserData} />
                                                <i onClick={(e) => handleDeleteUser(item, e)} role="button" className="fas fa-user-times text-danger" title="delete"></i>
                                            </td>
                                        </tr>
                                    ) :
                                        <tr><td className='text-danger text-center'>NO DATA!</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example" className=''>
                        <ul className="pagination d-flex justify-content-center">
                            {paginate && paginate.last_page >= 2 && paginate.links && paginate.links.map((link) => {
                                let url = link.url == null ? paginate.links[1].url : link.url;
                                let className = link.active == true ? "page-item active" : "page-item"
                                return (
                                    <li className={className} key={link.label}>
                                        <button className="page-link" onClick={e => getUserData(url)}>{link.label}</button>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default UserManagementComponent;