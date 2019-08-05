<?php

namespace app\Controllers;

class EmployeesController extends Controllers{

    function getEmployees($request, $response){
        // var_dump('controller');die();
        $message = $this->EmployeesModel->getEmployees();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>