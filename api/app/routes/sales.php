<?php

    $app->get('/sales', 'SalesController:getSales');
    $app->post('/sales', 'SalesController:getSalesByDate');
    $app->get('/sales/recent', 'SalesController:getSalesRecent');
    $app->get('/sales/venta/{id}', 'SalesController:getSalesById');
?>