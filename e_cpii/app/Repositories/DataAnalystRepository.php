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
    public function getChart()
    {
        $chartData = Order::selectRaw("DATE_FORMAT(created_at, '%M') AS month, COUNT(*) AS total_orders, SUM(order_price) AS total_sales")
            ->groupBy('month')
            ->orderByRaw("MONTH(created_at)")
            ->get();

        $labels = $chartData->pluck('month');
        $totalOrders = $chartData->pluck('total_orders');
        $totalSales = $chartData->pluck('total_sales');
        $data = [
            'month'             => $labels,
            'label'             => 'Total Sales (VND)',
            'data'              => $totalSales,
            'backgroundColor'   => 'rgb(0,128,255)',
            'borderColor'       => 'rgb(0,128,255)',
            'borderWidth'       => 1,
            //order
            'labelOrder'        => 'Total Order',
            'backgroundColorOrder'   => 'rgb(255,128,0)',
            'borderColorOrder'       => 'rgb(255,128,0)',
            'dataOrder'         => $totalOrders,
        ];

        return response()->json($data);
    }
}