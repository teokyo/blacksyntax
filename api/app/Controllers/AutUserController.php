<?php

namespace app\Controllers;

class AutUserController extends Controllers{

    function login($request, $response){
        $data = $request->getParsedBody();
        $message = $this->loginService->login($data);
        return json_encode( $message );
        
    }

    /*function register($request, $response){
        $data = $request->getParsedBody();
        $message = $this->loginService->register($data);
        return json_encode( $message );
    }*/

    function valsesion($request, $response){
        $data = $request->getParsedBody();
        $message = $this->loginService->validar($data);
        //print_r($data);
        return json_encode( $message );
    }

}
?>