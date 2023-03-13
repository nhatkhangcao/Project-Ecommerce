<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class MstUser extends Authenticatable
{
    use HasFactory;
    protected $table = 'mst_users';
    protected $fillable = [
        "name",
        "email",
        "password",
    ];
}
