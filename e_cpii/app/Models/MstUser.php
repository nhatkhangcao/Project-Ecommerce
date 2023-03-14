<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class MstUser extends Authenticatable
{
    use HasFactory, HasApiTokens;
    protected $table = 'mst_users';
    protected $fillable = [
        "name",
        "email",
        "password",
        "remember_token",
        "role"
    ];
}
