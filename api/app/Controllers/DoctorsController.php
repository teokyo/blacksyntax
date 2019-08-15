<?php

namespace app\Controllers;

class DoctorsController extends Controllers{

    function getDoctors($request, $response){
        // var_dump('controller');die();
        $message = $this->DoctorsModel->getDoctors();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>