<?php

namespace App\Http\Controllers\Users;


use App\Models\User;
use Sihq\Facades\Controller;

use Illuminate\Support\Facades\Hash;


class Create extends Controller
{

    public User $user;

    public $rules = [
        'user.first_name'=> 'required',
        'user.last_name'=> 'required',
        'user.email'=> 'required|email'
    ];

    public function onMount(){
        $this->user = new User();
    }

    public function save(){
        $this->validate();
        $this->user->password = Hash::make('1234');
        $this->user->save();

   
        $this->redirect('/users/'.$this->user->id);

    }

    
}