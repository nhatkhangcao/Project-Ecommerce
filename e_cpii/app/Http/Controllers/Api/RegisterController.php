<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MstUser;
use App\Repositories\LoginRepository;
use App\Repositories\RegisterRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    private $repo;

    public function __construct(RegisterRepository $registerRepository)
    {
        $this->repo = $registerRepository;
    }

    public function register(Request $request)
    {

        $data = $this->repo->getAccountByMember($request);
        if ($data) {
            return response()->json(
                [
                    'message'   => 'Tài khoản đã tồn tại!',
                    'status'    => false
                ]
            );
        } else {
            MstUser::create([
                'name' => $request->name,
                'account' => $request->account,
                'password' => Hash::make($request->password),
            ]);
            return response()->json(
                [
                    'message'   => 'Đăng ký tài khoản thành công',
                    'status'    => true
                ]
            );
        }
    }
}
