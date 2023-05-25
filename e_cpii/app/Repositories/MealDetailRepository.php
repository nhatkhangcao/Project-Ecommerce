<?php

namespace App\Repositories;

use App\Models\Combo;
use App\Models\Meal;
use Illuminate\Http\Response;

class MealDetailRepository
{
    public function index()
    {
        return Meal::where('deleted', 0)->paginate(10);
    }
    public function add($request)
    {
        $comboType = Combo::where('id', $request->combo_type)->first()->combo_name;
        $dataCreate = [
            'meal_name'     => $request->meal_name,
            'meal_detail'   => $request->meal_detail,
            'day'           => $request->day,
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
        $comboType = Combo::where('id', $request->combo_type)->first()->combo_name;
        $dataUpdate = [
            'meal_name'     => $request->meal_name,
            'meal_detail'   => $request->meal_detail,
            'day'           => $request->day,
            'combo_type'    => $comboType,
            'status'        => $request->status
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
        $dataDelete = Meal::find($id)->update(['deleted' => 1]);
        return $dataDelete;
    }

    public function searchMeal($request)
    {
        $dataSearch = Meal::where('deleted', 0);
        if (isset($request['meal_name'])) {
            $dataSearch->where('meal_name', 'LIKE', '%' . $request['meal_name'] . '%');
        }
        return $dataSearch->orderBy('id', 'DESC')->paginate(10);
    }
    public function getOptionCombo()
    {
        return Combo::where('deleted', 0)->get();
    }
}