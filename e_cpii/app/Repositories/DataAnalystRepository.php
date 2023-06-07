<?php

namespace App\Repositories;

use App\Models\MstUser;
use App\Models\Order;

class DataAnalystRepository
{
    public function index()
    {
        //Order today
        $today = now()->format('Y-m-d');
        $order = Order::whereDate('created_at', $today)
            ->where('status', '!=', 3);
        $memberCount = MstUser::whereDate('created_at', $today)->count();
        $orderInfo = $order->get();
        $totalSale = 0;
        foreach ($orderInfo as $price) {
            $totalSale += $price['order_price'];
        }
        //
        return response()->json([
            'orderToday'    => $order->count(),
            'newMember'     => $memberCount,
            'totalSale'     => $totalSale
        ]);
    }
}
