<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;

class UserManagementRepository
{

    public function index()
    {
        $data = MstUser::where('deleted', 0)->select('id', 'name', 'email', 'role', 'deleted', 'phone', 'password')->get();
        return $data;
    }
    public function delete($id)
    {
        $dataDelete = MstUser::find($id)->update(['deleted' => 1]);
        return $dataDelete;
    }
}