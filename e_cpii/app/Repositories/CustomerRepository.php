<?php

namespace App\Repositories;

use App\Mail\SendMail;
use App\Models\Combo;
use App\Models\Meal;
use App\Models\MstCustomer;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class CustomerRepository
{
    public function index()
    {
        return Meal::get();
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
        $recommend =  $this->comboRecommend(round($goal));
        if (!empty($request['account'])) {
            $customer = MstCustomer::where('account', $request['account'])->first();
            $goalText = 'Tăng cân';
            if ($request['goal'] == 0) {
                $goalText = 'Giảm cân';
            } elseif ($request['goal'] == 1) {
                $goalText = 'Giữ cân';
            }
            if ($customer) {
                $customer->height       = $request['height'];
                $customer->body_weight  = $request['weight'];
                $customer->goal         = $goalText;
                $customer->calories_in  = round($goal);
                $customer->save();
            }
        }
        return [
            'goal'         => round($goal),
            'marco'        => $marco,
            'recommend'    => $recommend,
        ];
    }
    public function comboRecommend($calories = 0)
    {
        $range = 250;

        $minValue = $calories - $range;
        $maxValue = $calories + $range;

        $recommend = Combo::whereBetween('calories', [$minValue, $maxValue])
            ->get();
        return $recommend;
    }
    public function comboList()
    {
        return Combo::get();
    }

    public function getDataByCombo($request)
    {
        $data = Meal::where('combo_type', $request->input('combo_name'))->get();

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
        $orderCode = $this->generateOrderCode();
        $url = '';
        if ($request['paymentMethod'] === "VNPAY") {
            $url = $this->vnPay($request, $orderCode);
        }
        $order = Order::create([
            'order_code'        => $orderCode,
            'order_name'        => $request['order_name'],
            'order_price'       => $request['totalFee'],
            'payment_method'    => $request['paymentMethod'],
            'address'           => $request['address'],
            'email'             => $request['email'],
            'customer_name'     => $request['name'],
            'status'            => 0,
            'note'              => $request['note'],
            'phone'             => $request['phone'],
            'account'           => $request['account'] ?? 'Not Member'
        ]);
        //Send Mail 
        $this->sendMail($order);

        return response()->json(
            [
                'status'    => true,
                'url'       => $url,
            ]
        );
    }

    public function generateOrderCode()
    {
        $timestamp = Carbon::now()->format('YmdHis');
        $orderCode = 'EATCLEAN' . '_' . $timestamp;
        return $orderCode;
    }
    public function sendMail($order)
    {
        Mail::to('caonhatkhang2001@gmail.com')->send(new SendMail($order));
    }

    public function vnPay($request, $orderCode = '')
    {
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://localhost:3000/";
        $vnp_TmnCode = "7UQF7KY0";
        $vnp_HashSecret = "MZTMGCIIEQKHEMGJPOHAKIUTMIYPKUQM";

        $vnp_TxnRef = $orderCode;  // Product code
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
            ->orderByDesc('created_at')
            ->get();
        return response()->json(
            [
                'data'      => $orderHistory
            ]
        );
    }

    public function getCustomerInformation($account)
    {
        $customer = MstCustomer::where('account', $account)->first();
        return $customer;
    }
    public function updateInfoCustomer($id, $request)
    {
        $dataUpdate = MstCustomer::find($id)->update([
            'phone' => $request->phone,
            'name'  => $request->name
        ]);
        return $dataUpdate;
    }
    public function cancelOrder($orderId)
    {
        $dataCancel = Order::find($orderId)->update([
            'status' => 3
        ]);
    }
}
