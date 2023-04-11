<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use App\Models\Car;
use Inertia\Inertia;

class CarController extends Controller
{
    
    public function index()
    {
        $cars = Car::paginate(10);

        return Inertia::render('Project/CarProject/CarIndex',["cars" => $cars]);
        
        //
    }
    public function show($id)
    {
        $car = Car::where('id',$id)->get();
        
        return Inertia::render('Project/CarProject/CarShow',["car" => $car]);
        
        //
    }
}
