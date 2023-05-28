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
    public function index()
    {
        $data = $this->repo->index();
        return $data;
    }

    public function caloriesCalculate(Request $request)
    {
        $goal = $this->repo->caloriesCalculate($request->all());
        return $goal;
    }

    public function comboList()
    {
        $data = $this->repo->comboList();
        return $data;
    }

    public function getDataByCombo(Request $request)
    {
        return $data = $this->repo->getDataByCombo($request);
    }

    public function payment(Request $request)
    {
        return $data = $this->repo->payment($request->all());
    }
    public function getOrderHistory(Request $request)
    {
        return $this->repo->getOrderHistoryByAccount($request->all());
    }
    public function getInfoCustomer(Request $request)
    {
        return $this->repo->getCustomerInformation($request->params['account']);
    }
    public function updateInfoCustomer($id, Request $request)
    {
        return $this->repo->updateInfoCustomer($id, $request);
    }
}
