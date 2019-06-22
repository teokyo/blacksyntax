<?php

namespace app\Controllers;

class PromotionsController extends Controllers{

    function getPromotions($request, $response){
        // var_dump('controller');die();
        $message = $this->PromotionsModel->getPromotions();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

    function getPromotionsByLab($request, $response){
        $temp = $request->getAttribute('id');
        $message = $this->PromotionsModel->getPromotionsByLab($temp);
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

    function getPromotionsByPro($request, $response){
        $temp = $request->getAttribute('id');
        $message = $this->PromotionsModel->getPromotionsByPro($temp);
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>