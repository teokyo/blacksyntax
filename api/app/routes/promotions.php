<?php

    $app->get('/promotions', 'PromotionsController:getPromotions');
    $app->get('/promotions/lab/{id}', 'PromotionsController:getPromotionsByLab');
    $app->get('/promotions/pro/{id}', 'PromotionsController:getPromotionsByPro');
   
?>