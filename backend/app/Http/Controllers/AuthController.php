<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignInRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller {
    /**
     * sign in
     * 
     * @param SignInRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    function signin(SignInRequest $request) {
        return response()->json($request);
    }

    /**
     * sign up
     * 
     * @param SignUpRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    function signup(SignUpRequest $request) {
        /**
         * @var User $user
         */
        $user = User::create([
            'name'     => $request['name'],
            'password' => $request['password'],
            'email'    => $request['email'],
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user'  => $user,
            'token' => $token
        ]);
    }

    /**
     * sign out
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    function signout(Request $request) {
        return response()->json([
            'logout' => 'done'
        ]);
    }
}