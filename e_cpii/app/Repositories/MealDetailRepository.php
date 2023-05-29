<?php

namespace App\Repositories;

use App\Models\Combo;
use App\Models\Meal;
use Illuminate\Http\Response;

class MealDetailRepository
{
    public function index()
    {
        return Meal::orderBy('id', 'DESC')->paginate(10);
    }
    public function add($request)
    {
        $comboType = Combo::where('id', $request->combo_type)->first()->combo_name;
        $dataCreate = [
            'meal_name'     => $request->meal_name,
            'meal_detail'   => $request->meal_detail,
            'combo_type'    => $comboType
        ];
        if ($request->file('meal_image')) {
            $file = $request->file('meal_image');
            $filename = 'uploads/' . date('YmdHi') . $file->getClientOriginalName();
            $file->move(('uploads/'), $filename);
            $dataCreate['meal_image']  =  $filename;
        }
        return Meal::create($dataCreate);
    }
    public function checkExistMeal($mealName)
    {
        $existCombo = Meal::where('meal_name', $mealName)->exists();
        if ($existCombo) {
            return true;
        } else {
            return false;
        }
    }
    public function edit($id, $request)
    {
        $dataUpdate = [
            'meal_name'     => $request->meal_name,
            'meal_detail'   => $request->meal_detail,
        ];
        if ($request->file('meal_image')) {
            $file = $request->file('meal_image');
            $filename = 'uploads/' . date('YmdHi') . $file->getClientOriginalName();
            $file->move(('uploads/'), $filename);
            $dataUpdate['meal_image']  =  $filename;
        }
        $mealData = Meal::find($id)->update($dataUpdate);
        return $mealData;
    }
    public function delete($id)
    {
        $dataDelete = Meal::find($id)->delete();
        return $dataDelete;
    }

    public function searchMeal($request)
    {
        if (isset($request['meal_name'])) {
            $dataSearch = Meal::where('meal_name', 'LIKE', '%' . $request['meal_name'] . '%');
        }
        return $dataSearch->orderBy('id', 'DESC')->paginate(10);
    }
    public function getOptionCombo()
    {
        return Combo::get();
    }
}