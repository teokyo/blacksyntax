<?php
    $container['loginService']=function($container){
        return new app\service\AuthService($container);
    };

?>