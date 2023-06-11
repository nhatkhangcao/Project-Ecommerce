<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        "order_code",
        "order_name",
        "order_price",
        "payment_method",
        "account",
        "address",
        "email",
        "customer_name",
        "note",
        "phone",
        "detail",
        "status",
        "created_at"
    ];
}