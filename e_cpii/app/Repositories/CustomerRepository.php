<?php

namespace App\Repositories;

use Illuminate\Http\Response;

class CustomerRepository
{
    public function caloriesCalculate($request)
    {
        $goal = '';
        if ($request['gender'] === "male") {
            $bmr = 66 + 13.7*$request['weight'] + 5*$request['height'] - 6.8*$request['age'];
        } else {
            $bmr = 655 + 9.6*$request['weight'] + 1.8*$request['height'] - 4.7*$request['age'];
        }
        $tdee = $bmr*$request['activity'];
        if ($request['goal'] == 0) {
            $goal = $tdee - 500;
        } elseif ($request['goal'] == 2) {
            $goal = $tdee + 500;
        } else {
            $goal = $tdee;
        }
        return $goal;
    }
}
