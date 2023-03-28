<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    function contacto(){
        return Inertia::render('Contact');
    }

    //

}