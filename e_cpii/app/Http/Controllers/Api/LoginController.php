<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MstUser;
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
        $checkAccountBlock = MstUser::where('account', $request->account)->first();
        if ($checkAccountBlock) {
            if ($checkAccountBlock->deleted == 1) {
                return response()->json(
                    [
                        'message' => 'Tài khoản đã bị block',
                        'status'  => false
                    ]
                );
            }
        }
        if (Auth::attempt($account)) {
            $token = $this->repo->createTokenUser($request);
            return response()->json(
                [
                    'user'      => [
                        'name' => auth()->user()->name,
                        'role' => auth()->user()->role,
                        'account'   => auth()->user()->account
                    ],
                    'message'   => 'Đăng nhập thành công',
                    'token'     => $token,
                    'status'    => true
                ]
            );
        }
        return response()->json(
            [
                'message' => 'Mật khẩu hoặc tài khoản đã sai',
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