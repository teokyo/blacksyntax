<?php

    $app->get('/products', 'ProductsController:getproducts');
    $app->get('/products/{name}', 'ProductsController:getproducts_get');
    $app->post('/products', 'ProductsController:insertproduct');
    localhost:80/products/1058
?>