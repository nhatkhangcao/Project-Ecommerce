<?php

namespace App\Repositories;

use App\Models\MstUser;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class UserManagementRepository
{

    public function index()
    {
        $data = MstUser::whereBetween('role', [0, 1])->select('id', 'name', 'email', 'role', 'deleted', 'phone', 'account')->orderBy('id', 'DESC')->paginate(10);
        return $data;
    }
    public function getEmailByMember($request)
    {
        $data = MstUser::where('email', $request)->first();
        return $data;
    }

    public function getAccountByMember($request)
    {
        $data = MstUser::where('account', $request)->first();
        return $data;
    }
    public function edit($id, $request)
    {
        $data = MstUser::find($id)->update($request);
        return $data;
    }
    public function delete($id)
    {
        $dataDelete = MstUser::find($id);
        if ($dataDelete->deleted == 1) {
            $dataDelete = MstUser::find($id)->update(['deleted' => 0]);
        } else {
            $dataDelete = MstUser::find($id)->update(['deleted' => 1]);
        }
    }
    public function search($request)
    {
        $data = MstUser::whereBetween('role', [0, 1]);
        if (isset($request['name'])) {
            $data->where('name', 'LIKE', '%' . $request['name'] . '%');
        }
        if (isset($request['email'])) {
            $data->where('email', 'LIKE', '%' . $request['email'] . '%');
        }
        return $data->orderBy('id', 'DESC')->paginate(10);
    }
    public function add($request)
    {
        $dataAdd = MstUser::create([
            'name'      => $request['name'],
            'email'     => $request['email'],
            'account'   => $request['account'],
            'role'      => 1,
            'password'  => Hash::make($request['password']),
        ]);
        return $dataAdd;
    }
}
