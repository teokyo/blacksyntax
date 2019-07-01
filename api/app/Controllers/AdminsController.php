<?php

namespace app\Controllers;

class AdminsController extends Controllers{

    function getAdmins($request, $response){
        // var_dump('controller');die();
        $message = $this->AdminsModel->getAdmins();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>