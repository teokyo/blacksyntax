<?php
    //se agregan los controlers al contecxto de la app (container)
    $container['ProductsControllers'] = function($container){
        return new app\Controllers\ProductsControllers($container);
    };
    $container['Prueba'] = function($container){
        return new app\Controllers\Prueba($container);
    };
?>