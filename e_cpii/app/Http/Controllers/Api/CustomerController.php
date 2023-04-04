<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\CustomerRepository;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    private $repo;

    public function __construct(CustomerRepository $customerRepository)
    {
        $this->repo = $customerRepository;
    }
    public function caloriesCalculate(Request $request)
    {
        $goal = $this->repo->caloriesCalculate($request->all());
        return $goal;
    }
}