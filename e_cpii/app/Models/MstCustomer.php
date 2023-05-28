<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Customer as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class MstCustomer extends Model
{
    use HasFactory;
    protected $table = 'mst_customers';
    protected $fillable = [
        "account",
        "email",
        "name",
        "phone",
        "body_weight",
        "height",
        "goal",
        "calories_in",
        "remember_token",
        "role",
        "deleted"
    ];
}
