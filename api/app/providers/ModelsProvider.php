<?php
    //se agregan los controlers al contecxto de la app (container)
    $container['ProductsModel'] = function($container){
        return new app\Models\ProductsModel($container);
    };
?>