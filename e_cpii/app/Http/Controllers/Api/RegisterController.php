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

        $data = $this->repo->getEmailByMember($request);
        if ($data) {
            return response()->json(
                [
                    'message'   => 'Email Already Exist',
                    'status'    => false
                ]
            );
        } else {
            MstUser::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            return response()->json(
                [
                    'message'   => 'Account Register SuccessFully',
                    'status'    => true
                ]
            );
        }
    }
}
