<?php

use App\Http\Controllers\Api\Customer\CustomerLoginController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\MealController;
use App\Http\Controllers\Api\RegisterController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/user-management', [UserManagementController::class, 'index']);
        Route::post('/user-deleted/{id}', [UserManagementController::class, 'delete']);
        Route::post('/user-edited/{id}', [UserManagementController::class, 'edit']);
        Route::post('/user-added', [UserManagementController::class, 'add']);
        Route::post('/search-user', [UserManagementController::class, 'search']);
        Route::get('/get-email', [UserManagementController::class, 'getEmailByMember']);
        Route::get('/meals-list', [MealController::class, 'index']);
        Route::post('/add-meal', [MealController::class, 'add']);
        Route::post('/edit-meal/{id}', [MealController::class, 'edit']);
        Route::post('/delete-meal/{id}', [MealController::class, 'delete']);
    });
});

Route::prefix('customer')->group(function () {
    Route::get('/list', [CustomerController::class, 'index']);
    Route::get('/combo-list', [CustomerController::class, 'comboList']);
    Route::get('/order-history', [CustomerController::class, 'getOrderHistory']);
    Route::get('/register', [RegisterController::class, 'register']);
    Route::post('/calories-calculate', [CustomerController::class, 'caloriesCalculate']);
    Route::post('/get-data-by-combo', [CustomerController::class, 'getDataByCombo']);
    Route::post('/payment', [CustomerController::class, 'payment']);
});