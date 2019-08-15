<?php

namespace app\Controllers;

class EmployeesController extends Controllers{

    function getEmployees($request, $response){
        // var_dump('controller');die();
        $message = $this->EmployeesModel->getEmployees();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

    function getEmployeesByBranch($request, $response){
        // var_dump('controller');die();
        $temp=$request->getAttribute('id');
        $message = $this->EmployeesModel->getEmployeesByBranch($temp);
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>