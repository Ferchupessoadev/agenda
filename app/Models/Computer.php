<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Computer extends Model
{
    protected $table = 'computers';

    protected $fillable = [
        'name',
        'description',
        'possible_failures',
        'image',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
