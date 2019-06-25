<?php

    $app->get('/products', 'ProductsController:getProducts');
    $app->get('/products/code/{code}', 'ProductsController:getProductsByCode');
    $app->get('/products/imp', 'ProductsController:getProductsIEPS');
    $app->get('/products/cat', 'ProductsController:getProductsCat');
    $app->get('/products/cat/{cat}', 'ProductsController:getProductsByCat');
    /*$app->post('/products', 'ProductsController:insertproduct');
    localhost:80/products/1058*/
?>