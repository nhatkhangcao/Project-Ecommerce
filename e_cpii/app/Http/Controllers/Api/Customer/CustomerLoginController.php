<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Repositories\Customer\CustomerLoginRepository;
use Illuminate\Http\Request;

class CustomerLoginController extends Controller
{
    private $repo;

    public function __construct(CustomerLoginRepository $loginRepository)
    {
        $this->repo = $loginRepository;
    }
    public function login()
    {
        $this->repo->createTokenUser();
    }
}
