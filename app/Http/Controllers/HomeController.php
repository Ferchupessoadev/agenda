<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        if (!Auth::check()) {
            return Inertia::render('welcome');
        }

        $user = Auth::user();

        $InertiaView = match (true) {
            $user->hasRole('admin') => ['view' => 'admin/home'],
            $user->hasRole('teacher') => ['view' => 'teacher/home'],
            $user->hasRole('student') => ['view' => 'student/home'],
            $user->hasRole('user') => ['view' => 'home'],
            default => ['view' => 'home'],
        };

        return Inertia::render($InertiaView['view']);
    }
}
