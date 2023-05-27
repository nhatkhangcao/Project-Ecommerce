<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;

class RegisterRepository
{

    public function getAccountByMember($request)
    {
        $data = MstUser::where('account', $request->account)->first();
        return $data;
    }
}
