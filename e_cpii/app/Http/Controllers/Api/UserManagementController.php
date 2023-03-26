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
            ['message' => 'User is deleted']
        );
    }
    public function search(Request $request)
    {
        $dataSearch = $this->repo->search($request->all());
        return $dataSearch;
    }
}
