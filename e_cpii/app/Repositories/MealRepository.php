<?php

namespace App\Repositories;

use App\Models\Combo;
use App\Models\Meal;
use Illuminate\Http\Response;

class MealRepository
{
    public function index()
    {
        return Combo ::where('deleted', 0)->paginate(10);
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
    public function edit($id, $request)
    {
        $dataUpdate = [
            'combo_name' => $request->combo_name,
            'combo_price' =>$request->combo_price,
            'description' => $request->description,
            'detail' => $request->detail,
            'status' => $request->status
        ];
        if ($request->file('combo_image')) {
            $file = $request->file('combo_image');
            $filename = 'uploads/' . date('YmdHi') . $file->getClientOriginalName();
            $file->move(('uploads/'), $filename);
            $dataUpdate['combo_image']  =  $filename;
        }
        $combo = Combo::find($id)->update($dataUpdate);
        return $combo;
    }

    public function delete($id)
    {
        $dataDelete = Meal::find($id)->update(['deleted' => 1]);
        return $dataDelete;
    }
}