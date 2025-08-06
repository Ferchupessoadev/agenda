<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Seeders\ClassroomSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach (['admin', 'teacher', 'student'] as $role) {
            Role::firstOrCreate(['name' => $role]);
        }
        $admin = User::factory()->create([
            'name' => 'Fernando',
            'email' => 'fernandomatiaspessoa471@gmail.com',
            'password' => Hash::make('password'),
            'image' => 'default-user.jpg'
        ]);

        $admin->assignRole('student');

        User::factory(5)->create();

        $this->call([
            ClassroomSeeder::class,
        ]);
    }
}
