<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        DB::table('mst_users')->insert([
            'name' => 'Kay C',
            'email' => 'kayc@gmail.com',
            'password' => Hash::make('123456'),
        ]);
        // DB::table('combos')->insert([
        //     'combo_name'    => 'Monster',
        //     'combo_image'   => 'uploads/monster.jpg',
        //     'combo_price'   => 200000,
        //     'type'          => 1,
        //     'description'   => 'Description',
        //     'detail'        => 'High Protein and Calories - 2000',
        //     'deleted'       => 0,
        // ]);
        // DB::table('meals')->insert([
        //     'meal_name'    => 'Chicken',
        //     'meal_image'   => 'uploads/monster.jpg',
        //     'combo_type'   => 1,
        //     'meal_detail'  => 'Good for health',
        //     'deleted'       => 0,
        // ]);
    }
}