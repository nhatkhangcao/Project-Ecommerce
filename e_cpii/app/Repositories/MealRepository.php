<?php

namespace App\Repositories;

use App\Models\Meal;
use Illuminate\Http\Response;

class MealRepository
{
    public function index()
    {
        return Meal::where('deleted', 0)->paginate(5);
    }
    public function add($request)
    {
        $dataCreate = [
           'meal_name' => $request->meal_name,
           'meal_price' => $request->meal_price,
           'meal_detail' => $request->meal_detail,
           'status' => $request->status,
        ];
        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = 'uploads/' . date('YmdHi') . $file->getClientOriginalName();
            $file->move(('uploads/'), $filename);
            $dataCreate['meal_image']  =  $filename;
        }
        return Meal::create($dataCreate);
    }
}
