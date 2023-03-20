<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Sihq\Facades\Controller;
class ModalSteps extends Controller
{

    public $users;

    public $rules = [
        'user.first_name'=> 'required',
        'user.last_name'=> 'required',
        'user.email'=> 'required|email'
    ];

    public function save(){
        $this->redirect('/login');

    }

}