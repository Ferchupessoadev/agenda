<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Seeders\ClassroomSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach (['admin', 'teacher', 'student', 'user'] as $role) {
            Role::firstOrCreate(['name' => $role]);
        }

        Permission::create(
            ['name' => 'create orders', 'guard_name' => 'web']
        );

        Permission::create(
            ['name' => 'update orders', 'guard_name' => 'web']
        );

        Permission::create(
            ['name' => 'delete orders', 'guard_name' => 'web']
        );

        Permission::create(
            ['name' => 'view orders', 'guard_name' => 'web']
        );

        Role::findByName('admin')->givePermissionTo(Permission::all());

        Role::findByName('teacher')->givePermissionTo(['view orders', 'create orders', 'update orders', 'delete orders']);
        Role::findByName('student')->givePermissionTo(['view orders']);

        $admin = User::factory()->create([
            'name' => 'Fernando',
            'email' => 'fernandomatiaspessoa471@gmail.com',
            'password' => Hash::make('password'),
            'image' => 'default-user.jpg'
        ]);

        $admin->assignRole('admin');

        User::factory(5)->create();

        $this->call([
            ClassroomSeeder::class,
        ]);
    }
}
