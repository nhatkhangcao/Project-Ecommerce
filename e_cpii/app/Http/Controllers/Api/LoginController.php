<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\LoginRepository;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $repo;

    public function __construct(LoginRepository $loginRepository)
    {
        $this->repo = $loginRepository;
    }
    public function login(Request $request) {
        $data = $this->repo->login();
    }
}
