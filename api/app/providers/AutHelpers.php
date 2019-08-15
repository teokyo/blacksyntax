<?php
    $container['loginHelpers']=function($container){
        return new app\Helpers\AutUserHelpers($container);
    };

    $container['jwt']=function($container){
        return new app\Helpers\JWT($container);
    };
?>