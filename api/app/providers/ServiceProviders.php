<?php
    $container['loginService']=function($container){
        return new app\service\AuthService($container);
    };
    /*$container['validarService']=function($container){
        return new app\service\AuthService($container);
    };*/

?>