<?php
namespace app\Controllers;
class ProductsController extends Controllers{
    function getProducts($request, $response){
        // var_dump('controller');die();
        $message = $this->ProductsModel->getProducts();
        return json_encode($message);
    }

    function getproducts_get($request,$response){// solo al pasar un parametro para más se usa post
        $temp = $request-getAttribute('name');
        $message = $this->ProductsModel->getProducts($temp);
        return json_encode($message);
    }

    function insertproduct($request,$response){
        $temp = $request->getPasedBody();
        $message = $this->ProductsModel->insertproduct($temp);
        return json_encode($message);
    }

    function getProductsCat($request, $response){
        $message = $this->ProductsModel->getProductsCat();
        return json_encode( $message );
    }
}
?>
