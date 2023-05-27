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
            'account' => $request->account,
            'password' => $request->password,
        ];
        if (Auth::attempt($account)) {
            $token = $this->repo->createTokenUser($request);
            return response()->json(
                [
                    'user'      => [
                        'name' => auth()->user()->name,
                        'role' => auth()->user()->role,
                        'account'   => auth()->user()->account
                    ],
                    'message'   => 'Login Successfully',
                    'token'     => $token,
                    'status'    => true
                ]
            );
        }
        return response()->json(
            [
                'message' => 'Password or Email is Wrong',
                'status'  => false
            ]
        );
        // $setting = $this->repo->login();
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json(
            ['message' => 'Logout Successfully',]
        );
    }
}
