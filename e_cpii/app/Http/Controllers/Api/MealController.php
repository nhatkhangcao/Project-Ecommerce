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
    }
}
