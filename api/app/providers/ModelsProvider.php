<?php
    //se agregan los controlers al contecxto de la app (container)
    $container['ProductsModel'] = function($container){
        return new app\Models\ProductsModel($container);
    };

    $container['SalesModel'] = function($container){
        return new app\Models\SalesModel($container);
    };

    $container['AdminsModel'] = function($container){
        return new app\Models\AdminsModel($container);
    };

    $container['PlatformModel'] = function($container){
        return new app\Models\PlatformModel($container);
    };

    $container['DoctorsModel'] = function($container){
        return new app\Models\DoctorsModel($container);
    };

    $container['BranchesModel'] = function($container){
        return new app\Models\BranchesModel($container);
    };

    $container['PromotionsModel'] = function($container){
        return new app\Models\PromotionsModel($container);
    };

    $container['EmployeesModel'] = function($container){
        return new app\Models\EmployeesModel($container);
    };
    
    $container['UserAuthModel'] = function($container){
        return new app\Models\UserAuthModel($container);
    };
?>