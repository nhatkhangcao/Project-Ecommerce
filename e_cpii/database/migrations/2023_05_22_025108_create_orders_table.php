<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_code');
            $table->string('order_name');
            $table->integer('order_price');
            $table->integer('account');
            $table->string('payment_method');
            $table->string('address');
            $table->string('email');
            $table->string('customer_name');
            $table->string('note');
            $table->integer('phone');
            $table->tinyInteger('deleted')->default(0)->comment('0=active, 1=deleted');
            $table->tinyInteger('status')->default('0')->comment('0=on-sale, 1=stop-selling, 2=sold-out');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
