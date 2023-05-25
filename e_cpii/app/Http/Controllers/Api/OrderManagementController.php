<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\OrderManagementRepository;
use Illuminate\Http\Request;

class OrderManagementController extends Controller
{
    private $repo;
    public function __construct(OrderManagementRepository $orderManagementRepository)
    {
        $this->repo = $orderManagementRepository;
    }
    public function index()
    {
        return $data = $this->repo->index();
    }
    public function edit($id, Request $request)
    {
        return $this->repo->edit($id, $request);
    }
}
