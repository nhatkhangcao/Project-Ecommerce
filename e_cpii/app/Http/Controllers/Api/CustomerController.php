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
        $response = $this->repo->caloriesCalculate($request->all());
        return response($response)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'POST');
    }
}