<?php

namespace App\Http\Resources;

use App\Models\Combo;
use Illuminate\Http\Resources\Json\JsonResource;

class MealDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $comboType = Combo::where('combo_name', $this->combo_type)->first()->id;
        return [
            'id'                => $this->id ?? ' ',
            'meal_name'         => $this->meal_name ?? ' ',
            'meal_image'        => $this->meal_image ?? ' ',
            'day'               => $this->day ?? ' ',
            'meal_detail'       => $this->meal_detail ?? ' ',
            'combo_type'        => $comboType ?? ' ',
            'combo_type_text'   => $this->combo_type ?? ' '
        ];
    }
}
