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
        Schema::create('combos', function (Blueprint $table) {
            $table->id();
            $table->string('combo_name');
            $table->string('combo_image');
            $table->integer('combo_price');
            $table->integer('type');
            $table->string('detail');
            $table->string('description');
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
        Schema::dropIfExists('combos');
    }
};
