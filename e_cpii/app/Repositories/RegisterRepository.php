<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;

class RegisterRepository
{

    public function getEmailByMember($request)
    {
        $data = MstUser::where('email', $request->email)->first();
        return $data;
    }
}
