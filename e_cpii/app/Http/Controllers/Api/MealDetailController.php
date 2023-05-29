<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ComboOptionResource;
use App\Http\Resources\MealDetailResource;
use App\Repositories\MealDetailRepository;
use Illuminate\Http\Request;

class MealDetailController extends Controller
{
    private $repo;
    public function __construct(MealDetailRepository $mealDetailRepository)
    {
        $this->repo = $mealDetailRepository;
    }
    public function index()
    {
        $data = $this->repo->index();
        return $data;
    }
    public function getOption()
    {
        $option = $this->repo->getOptionCombo();
        // return $option;
        return ComboOptionResource::collection($option);
    }
    public function add(Request $request)
    {
        $checkExist = $this->repo->checkExistMeal($request->meal_name);
        if ($checkExist) {
            return response()->json(
                [
                    'message' => 'Meal already exist',
                    'status'  => false
                ]
            );
        } else {
            $this->repo->add($request);
            return response()->json(
                [
                    'message' => 'Meal added successfully',
                    'status'  => true
                ]
            );
        }
    }
    public function edit($id, Request $request)
    {
        $dataUpdate = $this->repo->edit($id, $request);
        return $dataUpdate;
    }
    public function delete($id)
    {
        $dataDelete = $this->repo->delete($id);
        return response()->json(
            ['message' => 'Meal is deleted']
        );
    }
    public function searchMeal(Request $request)
    {
        $dataSearch = $this->repo->searchMeal($request);
        return $dataSearch;
    }
}
