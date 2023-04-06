<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;
    protected $table = 'meals';
    protected $fillable = [
        "meal_name",
        "meal_image",
        "meal_price",
        "meal_detail",
        "status",
        "role",
        "deleted"
    ];
}
