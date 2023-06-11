<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use App\Models\Order;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MonthlyDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 50; $i++) {
            $month = $i % 12 + 1; // Generate month from 1 to 12

            Order::create([
                'order_code' => $faker->unique()->randomNumber(5),
                'order_name' => $faker->sentence(3),
                'order_price' => $faker->randomFloat(2, 10, 1000),
                'payment_method' => $faker->randomElement(['COD', 'VNPAY']),
                'account' => $faker->word,
                'address' => $faker->address,
                'email' => $faker->email,
                'customer_name' => $faker->name,
                'note' => $faker->sentence(5),
                'phone' => $faker->phoneNumber,
                'detail' => $faker->text,
                'status' => $faker->randomElement(['2', '1']),
                'created_at' => $faker->dateTimeBetween("-{$month} months", 'now')
            ]);
        }
    }
}