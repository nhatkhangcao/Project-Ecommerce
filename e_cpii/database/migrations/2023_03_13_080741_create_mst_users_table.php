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
        Schema::create('mst_users', function (Blueprint $table) {
            $table->id();
            $table->string('email', 255);
            $table->string('password', 255);
            $table->tinyInteger('role')->default(0)->comment('0=customer, 1=user, 2=admin');
            $table->tinyInteger('deleted')->default(0)->comment('0=active, 1=deleted');
            $table->string('name', 255);
            $table->string('phone', 20)->nullable();
            $table->string('remember_token')->default(0);
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
        Schema::dropIfExists('mst_users');
    }
};