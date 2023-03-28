<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;

class UserManagementRepository
{

    public function index()
    {
        $data = MstUser::where('deleted', 0)->select('id', 'name', 'email', 'role', 'deleted', 'phone')->orderBy('id', 'DESC')->paginate(10);
        return $data;
    }
    public function getEmailByMember($request)
    {
        $data = MstUser::where('email', $request)->first();
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
    public function search($request)
    {
        $data = MstUser::where('deleted', 0);
        if (isset($request['name'])) {
            $data->where('name', 'LIKE', '%' . $request['name'] . '%');
        }
        if (isset($request['email'])) {
            $data->where('email', 'LIKE', '%' . $request['email'] . '%');
        }
        return $data->orderBy('id', 'DESC')->paginate(10);
    }
}
