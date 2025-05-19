<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (auth()->check()) {
        return Inertia::render('home');
    }

    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/technical', function () {
        return Inertia::render('technical',['users' => User::all()]);
    })->name('technical');

    Route::get('/users', function () {
        return response()->json(User::all());
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
