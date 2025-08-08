<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        return Inertia::render('home', [
            'users' => User::all(),
        ]);
    }

    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/dashboard', fn() => Inertia::render('dashboard'))->name('dashboard');
    });

    Route::get('/technical', fn() => Inertia::render('technical', ['users' => User::all()]))->name('technical');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
