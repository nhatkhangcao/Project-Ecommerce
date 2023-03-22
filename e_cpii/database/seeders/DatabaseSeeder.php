<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
            'name' => 'Khang Pro',
            'email' => 'khang@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '0889066088',
            'role' => '2',
            'remember_token' => '1'
        ]);
    }
}