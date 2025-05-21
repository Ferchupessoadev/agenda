<?php

use App\Models\Computer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ComputerController;

Route::get('/', function () {
    if (Auth::check()) {
        return Inertia::render('home', [
            'equipments' => Computer::all(),
            'users' => User::all()
        ]);
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

    Route::get('/computers', [ComputerController::class, 'index'])->name('computers.index');

    Route::post('/computers', [ComputerController::class, 'store'])->name('computers.store');

    Route::delete('/computers/{computer}', [ComputerController::class, 'destroy'])->name('computers.destroy');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
