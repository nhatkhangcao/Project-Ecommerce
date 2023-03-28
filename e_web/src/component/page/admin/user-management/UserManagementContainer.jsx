import axios from 'axios';
import React, { useState } from 'react';
import UserManagementComponent from './UserManagementComponent';
import Swal from "sweetalert2";
import { set } from 'react-hook-form';

function UserManagementContainer(props) {
    const [userData, setUserData] = useState();
    const [paginate, setPaginate] = useState();

    const getUserData = (url) => {
        if (!url) {
            url = 'http://127.0.0.1:8000/api/admin/user-management'
        }
        axios.get(url).then((response) => {
            setUserData(response.data)
            pagination(response)
        });
    }
    const pagination = (response) => {
        setPaginate(response.data)
    }

    const searchUser = (data) => {
        axios.post('http://127.0.0.1:8000/api/admin/search-user', data).then((response) => {
            setUserData(response.data)
            pagination(response)
        });
    }

    const clearSearch = (data) => {
        getUserData();
    }

    const handleDeleteUser = (item, e) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete " + "[" + item.name + "]",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://127.0.0.1:8000/api/admin/user-deleted/' + item.id)
                    .then((response) => {
                        getUserData()
                    })
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            }
        })
    }

    const setRole = (role) => {
        if (role === 2) {
            return 'Admin';
        } else if (role === 1) {
            return 'User';
        } else {
            return 'Customer';
        }

    }

    return (
        <UserManagementComponent
            getUserData={getUserData}
            userData={userData}
            handleDeleteUser={handleDeleteUser}
            paginate={paginate}
            searchUser={searchUser}
            clearSearch={clearSearch}
            setRole={setRole}
        />
    );
}

export default UserManagementContainer;