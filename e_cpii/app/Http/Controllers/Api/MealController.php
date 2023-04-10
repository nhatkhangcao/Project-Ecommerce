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
        return $this->repo->add($request);
    }
    public function delete($id)
    {
        $dataDelete = $this->repo->delete($id);
        return response()->json(
            ['message' => 'Meal is deleted']
        );
    }
}
