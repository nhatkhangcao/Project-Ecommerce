<?php

namespace App\Repositories;

use App\Mail\SendMail;
use App\Models\Combo;
use App\Models\Meal;
use App\Models\Order;
use Illuminate\Support\Facades\Mail;

class CustomerRepository
{
    public function index()
    {
        return Meal::where('deleted', 0)->get();
    }
    public function caloriesCalculate($request)
    {
        $goal = '';
        if ($request['gender'] === "male") {
            $bmr = 66 + 13.7 * $request['weight'] + 5 * $request['height'] - 6.8 * $request['age'];
        } else {
            $bmr = 655 + 9.6 * $request['weight'] + 1.8 * $request['height'] - 4.7 * $request['age'];
        }
        $tdee = $bmr * $request['activity'];
        if ($request['goal'] == 0) {
            $goal = $tdee - 500;
        } elseif ($request['goal'] == 2) {
            $goal = $tdee + 500;
        } else {
            $goal = $tdee;
        }
        // marco
        $moderateCarb = [
            'protein' => round(($goal * 30 / 100) / 4),
            'carb'    => round(($goal * 35 / 100) / 4),
            'fat'     => round(($goal * 35 / 100) / 9),
        ];
        $lowCarb = [
            'protein' => round(($goal * 40 / 100) / 4),
            'carb'    => round(($goal * 30 / 100) / 4),
            'fat'     => round(($goal * 30 / 100) / 9),
        ];
        $higherCarb = [
            'protein' => round(($goal * 30 / 100) / 4),
            'carb'    => round(($goal * 50 / 100) / 4),
            'fat'     => round(($goal * 20 / 100) / 9),
        ];
        $marco = [
            'moderateCarb' => $moderateCarb,
            'lowerCarb' => $lowCarb,
            'higherCarb' => $higherCarb,
        ];
        return [
            'goal' => round($goal),
            'marco' => $marco
        ];
    }
    public function comboList()
    {
        return Combo::where('deleted', 0)->get();
    }

    public function getDataByCombo($request)
    {
        $data = Meal::where('combo_type', $request->input('type'))
            ->whereIn('day', [1, 2, 3, 4, 5, 6])
            ->orderBy('day')
            ->get()
            ->groupBy('day')
            ->map(function ($items) {
                return $items;
            });
        if ($data->isNotEmpty()) {
            return response()->json(
                [
                    'status'    => true,
                    'message'   => 'Get Data Successfully',
                    'data'      => $data
                ]
            );
        } else {
            return response()->json(
                [
                    'status'    => false,
                    'message' => 'Get Data Fail',
                ]
            );
        }
    }

    public function payment($request)
    {
        $url = '';
        if ($request['paymentMethod'] === "vnPay") {
            $url = $this->vnPay($request);
        }
        $order = Order::create([
            'order_code'        => 123,
            'order_name'        => $request['order_name'],
            'order_price'       => $request['totalFee'],
            'payment_method'    => $request['paymentMethod'],
            'address'           => $request['address'],
            'email'             => $request['email'],
            'customer_name'     => $request['name'],
            'note'              => $request['note'],
            'phone'             => $request['phone']
        ]);
        //Send Mail 
        // $this->sendMail($order);

        return response()->json(
            [
                'status'    => true,
                'url'       => $url,
            ]
        );
    }

    public function sendMail($order)
    {
        Mail::to('caonhatkhang2001@gmail.com')->send(new SendMail($order));
    }

    public function vnPay($request)
    {
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://localhost:3000/";
        $vnp_TmnCode = "7UQF7KY0";
        $vnp_HashSecret = "MZTMGCIIEQKHEMGJPOHAKIUTMIYPKUQM";

        $vnp_TxnRef = "MB100101111";  // Product code
        $vnp_OrderInfo = 'Checkout';
        $vnp_OrderType = 'billpayment';
        $vnp_Amount = $request['totalFee'] * 100;
        $vnp_Locale = 'vn';
        $vnp_BankCode = 'NCB';

        //Billing
        $inputData = array(
            "vnp_Version"       => "2.1.0",
            "vnp_TmnCode"       => $vnp_TmnCode,
            "vnp_Amount"        => $vnp_Amount,
            "vnp_Command"       => "pay",
            "vnp_CreateDate"    => date('YmdHis'),
            "vnp_CurrCode"      => "VND",
            "vnp_Locale"        => $vnp_Locale,
            "vnp_OrderInfo"     => $vnp_OrderInfo,
            "vnp_OrderType"     => $vnp_OrderType,
            "vnp_ReturnUrl"     => $vnp_Returnurl,
            "vnp_TxnRef"        => $vnp_TxnRef,
        );
        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }

        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret); //  
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }

        return $vnp_Url;
    }
    public function getOrderHistoryByAccount($request)
    {
        $orderHistory = Order::where('account', $request['account'])
            ->where('deleted', 0)
            ->orderByDesc('created_at')
            ->get();
        return response()->json(
            [
                'data'      => $orderHistory
            ]
        );
    }
}
