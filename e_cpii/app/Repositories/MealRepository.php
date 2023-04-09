<?php

namespace App\Repositories;

use App\Models\Meal;
use Illuminate\Http\Response;

class MealRepository
{
    public function index()
    {
        return Meal::where('deleted', 0)->get();
    }
}
