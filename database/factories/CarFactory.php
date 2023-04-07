<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $brands = ['GoldyCars', 'MarioCars', 'Bolbo', 'Audio','Mercy','LaraCars'];
        $fuels = ['diesel', 'gasoil','electric'];
        
        return [
            'brand' => $brands[array_rand($brands)],
            'model' => Str::random(10),
            'type' => Str::random(4),
            'year' => rand(1973, 2023),
            'doors' => rand(1, 8),
            'fuel' => $fuels[array_rand($fuels)], 
        ];
    }
}
