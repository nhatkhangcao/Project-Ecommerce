<?php

namespace App\Repositories;

use App\Models\Order;

class OrderManagementRepository
{
    public function index()
    {
        return Order::orderBy('id', 'DESC')->paginate(10);
    }
    public function edit($id, $request)
    {
        $dataUpdate = ['status' => $request['data']];
        $order = Order::find($id)->update($dataUpdate);
        return $order;
    }
}