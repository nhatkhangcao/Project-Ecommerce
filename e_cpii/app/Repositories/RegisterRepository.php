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
    public function getEmailByMember($request)
    {
        $data = MstUser::where('email', $request->email)->first();
        return $data;
    }
}
