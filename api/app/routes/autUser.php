<?php

    $app->post('/login', 'AutUserController:login')->setName('login');
    $app->post('/validar', 'AutUserController:valsesion')->setName('validar');
    $app->post('/register', 'AutUserController:register')->setName('register');
   
?>