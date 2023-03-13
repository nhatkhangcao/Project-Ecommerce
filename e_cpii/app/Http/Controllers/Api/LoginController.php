<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\LoginRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    private $repo;

    public function __construct(LoginRepository $loginRepository)
    {
        $this->repo = $loginRepository;
    }
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password,      
        ];
        if (Auth::attempt($data)) {
            dd(123);
        }
        dd(1);
        // $setting = $this->repo->login();
    }
}
