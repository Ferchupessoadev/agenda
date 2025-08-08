<?php

use App\Models\User;
use Spatie\Permission\Models\Role;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('guests are redirected to the login page', function () {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users with admin role can visit the dashboard', function () {
    Role::create(['name' => 'admin']);
    $this->actingAs($user = User::factory()->create());

    $user->assignRole('admin');

    $this->get('/dashboard')->assertOk();
});
