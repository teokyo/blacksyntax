<?php
$app->get('/products', 'ProductsController:getproducts');
$app->get('/products/{name}', 'ProductsController:getproducts_get');
$app->post('/products', 'ProductsController:insertproducts');
localhost:81/products/1058
?>