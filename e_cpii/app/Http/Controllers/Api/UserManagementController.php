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
    public function delete($id)
    {
        $dataDelete = $this->repo->delete($id);
        return response()->json(
            ['message' => 'User is deleted',]
        );;
    }
}