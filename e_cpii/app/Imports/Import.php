<?php

namespace App\Imports;

use App\Models\Meal;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class Import implements ToCollection
{
    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        $rows = $collection->toArray();
        $headerRow = array_shift($rows);
        $baseUrl = 'A:\Image_Test\\';
        // dd($rows);
        foreach ($rows  as $row) {
            $imageFilePath = $baseUrl . $row[3];
            $combo_type = $row[0];
            $meal_name = $row[1];
            $meal_detail = $row[2];
            $img = $row[3];
            $newFilename = '';
            if (file_exists($imageFilePath) && !empty($row[3])) {
                $newFilename = 'uploads/' . date('YmdHi') . $row[3];
                copy($imageFilePath, $newFilename);
            }
            Meal::create([
                "meal_name"     => $meal_name,
                "meal_image"    =>  $newFilename,
                "meal_detail"   =>  $meal_detail,
                "combo_type"    =>  $combo_type,
            ]);
        }
    }
}