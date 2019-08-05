<?php

namespace app\Controllers;

class AutUserController extends Controllers{

    function login($request, $response){
        // var_dump('controller');die();
        $data = $request->getParsedBody();
        $message = $this->loginService->login($data);
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

    function register($request, $response){
        $data = $request->getParsedBody();
        $message = $this->loginService->register($data);
        return json_encode( $message );
    }

    function valsesion($request, $response){
        $data = $request->getParsedBody();
        $message = $this->loginService->validar($data);
        return json_encode( $message );
    }

}
?>