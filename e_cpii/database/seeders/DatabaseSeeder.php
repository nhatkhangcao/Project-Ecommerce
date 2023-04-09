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
        $imagePath = Storage::putFile('public/images', public_path('images/structure.png'));
        DB::table('meals')->insert([
            'meal_name' => 'Chicken',
            'meal_price' => '100',
            'meal_detail' => 'perfect',
            'meal_image' => $imagePath,
        ]);
    }
}