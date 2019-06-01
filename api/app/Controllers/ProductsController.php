<?php

namespace app\Controllers;

class ProductsController extends Controllers{

    function getProducts($request, $response){
        // var_dump('controller');die();
        $message = $this->ProductsModel->getProducts();
        return json_encode( $message );
    }

    function getproducts_get($request, $response){
        $temp = $request-getAttribute('name');
        $message = $this->ProductsModel->getProducts_get($temp);
        return json_encode( $message );
    }

    function insertproduct($request, $response){
        $temp = $request->getPasedBody();
        $message = $this->ProductsModel->insertproduct($temp);
        return json_encode( $message );
    }
    
}

?>