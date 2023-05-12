<?php

namespace App\Repositories;

use App\Models\Meal;
use Illuminate\Http\Response;

class CustomerRepository
{
    public function index()
    {
        return Meal::where('deleted', 0)->get();
    }
    public function caloriesCalculate($request)
    {
        $goal = '';
        if ($request['gender'] === "male") {
            $bmr = 66 + 13.7 * $request['weight'] + 5 * $request['height'] - 6.8 * $request['age'];
        } else {
            $bmr = 655 + 9.6 * $request['weight'] + 1.8 * $request['height'] - 4.7 * $request['age'];
        }
        $tdee = $bmr * $request['activity'];
        if ($request['goal'] == 0) {
            $goal = $tdee - 500;
        } elseif ($request['goal'] == 2) {
            $goal = $tdee + 500;
        } else {
            $goal = $tdee;
        }
        // marco
        $moderateCarb = [
            'protein' => round(($goal * 30 / 100) / 4),
            'carb'    => round(($goal * 35 / 100) / 4),
            'fat'     => round(($goal * 35 / 100) / 9),
        ];
        $lowCarb = [
            'protein' => round(($goal * 40 / 100) / 4),
            'carb'    => round(($goal * 30 / 100) / 4),
            'fat'     => round(($goal * 30 / 100) / 9),
        ];
        $higherCarb = [
            'protein' => round(($goal * 30 / 100) / 4),
            'carb'    => round(($goal * 50 / 100) / 4),
            'fat'     => round(($goal * 20 / 100) / 9),
        ];
        $marco = [
            'moderateCarb' => $moderateCarb,
            'lowerCarb' => $lowCarb,
            'higherCarb' => $higherCarb,
        ];
        return [
            'goal' => round($goal),
            'marco' => $marco
        ];
    }
}