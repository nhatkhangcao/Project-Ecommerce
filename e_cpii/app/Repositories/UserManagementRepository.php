<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;

class UserManagementRepository
{

    public function index()
    {
        $data = MstUser::where('deleted', 0)->select('id', 'name', 'email', 'role', 'deleted', 'phone', 'password')->paginate(2);
        return $data;
    }
    public function edit($id, $request)
    {
        $data = MstUser::find($id)->update($request);
        return $data;
    }
    public function delete($id)
    {
        $dataDelete = MstUser::find($id)->update(['deleted' => 1]);
        return $dataDelete;
    }
}