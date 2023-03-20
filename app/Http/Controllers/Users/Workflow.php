<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Sihq\Facades\Controller;
class Workflow extends Controller
{

    public $users;

    public function onDispatch(){
        echo "wefwefwef";
        exit;
        $this->users = User::all();
    }
}