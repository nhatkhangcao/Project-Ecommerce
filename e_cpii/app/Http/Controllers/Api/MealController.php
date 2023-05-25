<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\MealRepository;
use Illuminate\Http\Request;

class MealController extends Controller
{
    private $repo;
    public function __construct(MealRepository $mealRepository)
    {
        $this->repo = $mealRepository;
    }
    public function index()
    {
        return $this->repo->index();
    }
    public function add(Request $request)
    {
        $checkExist = $this->repo->checkExistCombo($request->combo_name);
        if ($checkExist) {
            return response()->json(
                [
                    'message' => 'Combo already exist',
                    'status'  => false
                ]
            );
        } else {
            $this->repo->add($request);
            return response()->json(
                [
                    'message' => 'Combo added successfully',
                    'status'  => true
                ]
            );
        }
    }
    public function edit($id, Request $request)
    {
        $dataUpdate = $this->repo->edit($id, $request);
        return response()->json(
            $dataUpdate
        );
    }
    public function delete($id)
    {
        $dataDelete = $this->repo->delete($id);
        return response()->json(
            ['message' => 'Meal is deleted']
        );
    }
    public function searchCombo(Request $request)
    {
        return $dataSearch = $this->repo->searchCombo($request);
    }
}
