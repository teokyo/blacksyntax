<?php
namespace app\Controllers;
class ProductsController extends Controllers{
    function getProducts($request, $response){
        // var_dump('controller');die();
        $message = $this->ProductsModel->getProducts();

        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

    function getProductsByCode($request, $response){
        $temp = $request->getAttribute('code');
        $message = $this->ProductsModel->getProductsByCode($temp);
        return json_encode( $message );
    }
    
    function getProductsIEPS($request, $response){
        $message = $this->ProductsModel->getProductsIEPS();
        return json_encode( $message );
    }

    function getProductsByCat($request, $response){
        $temp = $request->getAttribute('cat');
        $message = $this->ProductsModel->getProductsByCat($temp);
        return json_encode( $message );
    }

    function getProductsCat($request, $response){
        $message = $this->ProductsModel->getProductsCat();
        return json_encode( $message );
    }
}
?>
