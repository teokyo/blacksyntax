<?php

namespace app\Controllers;

class SalesController extends Controllers{

    function getSales($request, $response){
        $message = $this->SalesModel->getSales();
        return json_encode( $message );
        //return json_encode( array(['data'=> 'Si llegué']) );
    }
    
    function getSalesByDate($request, $response){
        $temp = $request->getParsedBody();
        $message = $this->SalesModel->getSalesByDate($temp);
        return json_encode( $message );
    }

    function getSalesRecent($request, $response){
        $message = $this->SalesModel->getSalesRecent();
        return json_encode( $message );
    }

    function getSalesById($request, $response){
        $temp = $request->getAttribute('id');
        $message = $this->SalesModel->getSalesById($temp);
        return json_encode( $message );
    }
}

?>