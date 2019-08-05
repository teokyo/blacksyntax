<?php

namespace app\Controllers;

class PlatformController extends Controllers{

    function getPlatform($request, $response){
        // var_dump('controller');die();
        $message = $this->PlatformModel->getPlatform();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>