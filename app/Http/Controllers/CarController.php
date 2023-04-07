<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use Inertia\Inertia;

class CarController extends Controller
{
    
    public function index()
    {
        $cars = Car::all()->random(10);
        return Inertia::render('Project/CarProject/CarIndex',["cars" => $cars]);
        
        //
    }
}
