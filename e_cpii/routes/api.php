<?php

use App\Http\Controllers\Api\Customer\CustomerLoginController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\UserManagementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::prefix('admin')->group(function () {
    Route::get('/user-management', [UserManagementController::class, 'index']);
    Route::post('/user-deleted/{id}', [UserManagementController::class, 'delete']);
    Route::post('/user-edited/{id}', [UserManagementController::class, 'edit']);
    Route::post('/search-user', [UserManagementController::class, 'search']);
});

Route::prefix('customer')->group(function () {
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });