<?php

namespace app\Controllers;

class BranchesController extends Controllers{

    function getBranches($request, $response){
        // var_dump('controller');die();
        $message = $this->BranchesModel->getBranches();
        return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

}
?>