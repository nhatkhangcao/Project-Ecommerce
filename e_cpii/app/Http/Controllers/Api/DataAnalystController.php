<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\DataAnalystRepository;

class DataAnalystController extends Controller
{
    private $repo;

    public function __construct(DataAnalystRepository $dataAnalystRepository)
    {
        $this->repo = $dataAnalystRepository;
    }
    public function index()
    {
        return $this->repo->index();
    }
}
