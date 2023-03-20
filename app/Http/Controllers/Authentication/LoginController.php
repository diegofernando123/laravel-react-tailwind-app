<?php

namespace App\Http\Controllers\Authentication;

use Illuminate\Http\Request;

use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Illuminate\Auth\Events\Registered;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Password;

use App\Models\User;

use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    /**
     * Login // standard
     * Login via username & password
     *
     * @group Authentication\Login
     * @unauthenticated
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if ($request->isMethod("post")) {
            if (RateLimiter::tooManyAttempts(Str::lower($request->input("email")) . "|" . $request->ip(), 5)) {
                event(new Lockout($this));
                $seconds = RateLimiter::availableIn(Str::lower($request->input("email")) . "|" . $request->ip());
                throw ValidationException::withMessages([
                    "email" => trans("auth.throttle", [
                        "seconds" => $seconds,
                        "minutes" => ceil($seconds / 60),
                    ]),
                ]);
            }

            if (!Auth::attempt($request->only("email", "password"), $request->filled("remember"))) {
                RateLimiter::hit(Str::lower($request->input("email")) . "|" . $request->ip());
                throw ValidationException::withMessages([
                    "email" => __("auth.failed"),
                ]);
            }
            RateLimiter::clear(Str::lower($request->input("email")) . "|" . $request->ip());
            $request->session()->regenerate();

            return redirect("workflow");
        }
        return view("pages.authentication.login");
    }

    /**
     * Login // sso
     * Login via sso
     *
     * @group Authentication\Login
     * @unauthenticated
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login_sso(Request $request)
    {
    }

    /**
     * Login // app connect
     * Connect to a third party application
     *
     * @group Authentication\Login
     * @unauthenticated
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function app_connect(Request $request)
    {
        if ($request->isMethod("post")) {
        }
        return view("pages.authentication.app-connect");
    }

    /**
     * Login // reconfirm
     * Reconfim login
     *
     * @group Authentication\Login
     * @authenticated
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function reconfirm(Request $request)
    {
        if ($request->isMethod("post")) {
            echo "Test";
            exit;
            if (
                !Auth::guard("web")->validate([
                    "email" => $request->user()->email,
                    "password" => $request->password,
                ])
            ) {
                throw ValidationException::withMessages([
                    "password" => __("auth.password"),
                ]);
            }
            $request->session()->put("auth.password_confirmed_at", time());
            return redirect("workflow");
        }
        return view("pages.authentication.confirm-password");
    }
}
