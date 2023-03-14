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
        $account = [
            'email' => $request->email,
            'password' => $request->password,    
        ];
        if (Auth::attempt($account)) {
            $token = $this->repo->createTokenUser($request);
            return response()-> json(
                [
                'message' => 'Login Successfully',
                'user' => [
                    'name' => auth()->user()->name,
                    'role' => auth()->user()->role,
                ],
                'token' => $token
                ]
            );
        }
        return response()-> json(
            ['message' => 'Password or Email is Wrong',]
        );
        // $setting = $this->repo->login();
    }
}
