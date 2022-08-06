<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'job_title',
        'portfolio_url',
        'email',
        'phone',
        'about_me',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
