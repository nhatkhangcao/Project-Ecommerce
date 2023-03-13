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
        Schema::create('mst_customers', function (Blueprint $table) {
            $table->id();
            $table->string('member_id')->unique();
            $table->string('email')->unique();
            $table->string('name');
            $table->string('password');
            $table->integer('body_weight');
            $table->integer('height');
            $table->integer('body_fat');
            $table->integer('age');
            $table->integer('phone');
            $table->integer('point');
            $table->dateTime('birthday');
            $table->string('avatar');   
            $table->string('remember_token');
            $table->tinyInteger('is_delete')->default(0)->comment('0=active, 1=deleted');

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
        Schema::dropIfExists('mst_customers');
    }
};
