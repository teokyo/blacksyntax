<?php
    //Configuraciondes de la base de datos
    $db = require $contexto_app.'/app/database/config.php';
    
    //key de encriptacion
    $jwt=array('key'=>'gr6s*3kNHSAzQV^Y','algrithms'=>('HS256'));

    //configuracion de la app 
    $settings =array(
        'displayErrorDetails'=>true,
        'determineRouteBeforeAppMiddleware'=>true,
        'db'=>$db,
        'jwt'=>$jwt
    );

    //se agrega el contexto de la app
    $settings['contexto'] = $contexto_app;
    // var_dump($settings); die();
    return $settings;
?>