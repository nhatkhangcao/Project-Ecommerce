import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AddUserModal from './modal/AddUserModal';
import EditUserModal from './modal/EditUserModal';
import Swal from 'sweetalert2';
import axios from 'axios';

function UserManagementComponent(props) {
    const getUserData = props.getUserData
    const userData = props.userData
    const paginate = props.paginate
    const searchUser = props.searchUser
    const handleDeleteUser = props.handleDeleteUser
    const clearSearch = props.clearSearch
    const setRole = props.setRole

    function blockUser(user) {
        let lock = '';
        if (!user.deleted) {
            lock = 'BLOCK';
        }
        else {
            lock = 'UNBLOCK';
        }
        Swal.fire({
            title: 'Bạn chắc chắn chứ?',
            text: "Bạn muốn " + lock + " [" + user.account + "]",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: lock
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://127.0.0.1:8000/api/admin/user-deleted/' + user.id,)
                    .then(response => {
                        getUserData()
                    })
                Swal.fire(
                    'Thực hiện thao tác thành công!',
                    '.....',
                    'success'
                )
            }
        })
    }
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    useEffect(() => {
        getUserData()
    }, []);
    return (
        <div className='container-fluid'>
            <div className="card shadow-style">
                <div className="card-header bg-white">
                    <form onSubmit={handleSubmit(searchUser)}>
                        <div className="row row-cols-auto">
                            <div className="col-3">
                                <span className='fw-bold'>Họ Và Tên</span>
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
                            Từ {paginate && paginate.from}~{paginate && paginate.to} trong tổng số:&nbsp;<div className='text-danger'>{paginate && paginate.total}&nbsp;Tài khoản</div>
                        </div>
                    }
                    <div className='table-responsive'>
                        <table className="table table-bordered table-striped">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Họ Và Tên</th>
                                    <th scope="col">Tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Quyền hạn</th>
                                    <th className='text-center' scope="col">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData && userData.data && userData.data.length > 0 ? userData.data.map((item, index) =>
                                        <tr key={item.id}>
                                            <th scope="row">{(userData.current_page - 1) * userData.per_page + index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.account}</td>
                                            <td>{item.email}</td>
                                            <td>{setRole(item.role)}</td>
                                            <td className='text-center' >
                                                <EditUserModal item={item} getUserData={getUserData} />
                                                <i onClick={() => blockUser(item)} class="ms-2 fas fa-user-lock text-secondary"></i>
                                            </td>
                                        </tr>
                                    ) :
                                        <tr><td className='text-danger text-center'>Không có dữ liệu!</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example" className=''>
                        <ul className="pagination d-flex justify-content-center">
                            {paginate && paginate.last_page >= 2 && paginate.links && paginate.links.map((link) => {
                                let url = link.url === null ? paginate.links[1].url : link.url;
                                let className = link.active === true ? "page-item active" : "page-item"
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