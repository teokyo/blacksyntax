<?php

namespace app\Controllers;

class Prueba extends Controllers{

    function getPrueba($request, $response){
        return json_encode( array(['data'=> 'Si llegué']) );
    }
    
}

?>