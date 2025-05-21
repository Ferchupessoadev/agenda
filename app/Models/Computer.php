<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Computer extends Model
{
    protected $table = 'computers';


    protected $casts = [
        'date_time_arrival' => 'date:d-m-Y',
        'date_time_finish' => 'date:d-m-Y',
    ];
}
