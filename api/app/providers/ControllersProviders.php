<?php
    //se agregan los controlers al contecxto de la app (container)
    $container['ProductsController'] = function($container){
        return new app\Controllers\ProductsController($container);
    };

    $container['SalesController'] = function($container){
        return new app\Controllers\SalesController($container);
    };

    $container['AdminsController'] = function($container){
        return new app\Controllers\AdminsController($container);
    };

    $container['PlatformController'] = function($container){
        return new app\Controllers\PlatformController($container);
    };

    $container['DoctorsController'] = function($container){
        return new app\Controllers\DoctorsController($container);
    };

    $container['BranchesController'] = function($container){
        return new app\Controllers\BranchesController($container);
    };

    $container['PromotionsController'] = function($container){
        return new app\Controllers\PromotionsController($container);
    };

    $container['EmployeesController'] = function($container){
        return new app\Controllers\EmployeesController($container);
    };
?>