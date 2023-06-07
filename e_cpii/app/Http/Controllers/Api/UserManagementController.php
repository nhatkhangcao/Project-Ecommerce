<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\UserManagementRepository;
use Illuminate\Http\Request;

class UserManagementController extends Controller
{
    private $repo;
    public function __construct(UserManagementRepository $userManagementRepository)
    {
        $this->repo = $userManagementRepository;
    }
    public function index()
    {
        $data = $this->repo->index();
        return $data;
    }
    public function getEmailByMember(Request $request)
    {
        $data = $this->repo->getEmailByMember($request->email);
        $account = $this->repo->getAccountByMember($request->account);
        if ($account) {
            return response()->json(
                [
                    'type'      => 'account',
                    'message'   => 'Tài khoản đã tồn tại',
                    'status'    => false,
                ]
            );
        } elseif ($data) {
            return response()->json(
                [
                    'type'      => 'email',
                    'message' => 'Email đã tồn tại!',
                    'status' => false,
                ]
            );
        } else {
            return response()->json(
                [
                    'message' => 'Tạo người dùng thành công!',
                    'status' => true,
                ]
            );
        }
    }

    public function edit($id, Request $request)
    {
        $updated = $this->repo->edit($id, $request->all());
        if ($updated) {
            return response()->json(
                ['message' => 'User is edited']
            );
        } else {
            return response()->json(
                ['message' => 'Edit user fail']
            );
        }
    }
    public function delete($id)
    {
        $dataDelete = $this->repo->delete($id);
        return response()->json(
            ['message' => 'Thao toán thành công!']
        );
    }
    public function search(Request $request)
    {
        $dataSearch = $this->repo->search($request->all());
        return $dataSearch;
    }
    public function add(Request $request)
    {
        $dataAdd = $this->repo->add($request->all());
        return response()->json(
            [
                'message' => 'Member has been added'
            ]
        );
    }
}
