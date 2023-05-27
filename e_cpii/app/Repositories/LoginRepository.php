<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;

class LoginRepository
{

    public function createTokenUser($request)
    {
        $token = MstUser::where('account', $request->account)->first();
        return $token->createToken('token')->plainTextToken;
    }
}
