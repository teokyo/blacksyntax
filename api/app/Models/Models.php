<?php

namespace app\Models;

$contexto_app = __DIR__;
$contexto_app = str_replace("app\Models", "", $contexto_app);
require $contexto_app . '/vendor/autoload.php';

use Medoo\Medoo;

class Models
{
    public function __construct($container)
    {
        $this->container = $container;
    }

    public function __get($property)
    {
        if ($this->container->{$property}) {
            return $this->container->{$property};
        }
    }

    public function bds($data)
    {
        $bds = array(
           /* 0 => [
                'database_type' => 'mysql',
                'database_name' => 'far',
                'server' => '192.168.0.2',
                'username' => 'teo',
                'password' => '0',
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_general_ci',
                'port' => 3306
            ],*/
            //1 => [
              //  'database_type' => 'mysql',
                //'database_name' => 'far',
                //'server' => '192.168.0.6',
                //'username' => 'Pacheco',
                //'password' => '123456',
                //'charset' => 'utf8mb4',
                //'collation' => 'utf8mb4_general_ci',
                //'port' => 3306
            //],
//            0 => [
//                'database_type' => 'mysql',
//                'database_name' => 'far',
//                'server' => 'localhost',
//                'username' => 'root',
//                'password' => '',
//                'charset' => 'utf8mb4',
//                'collation' => 'utf8mb4_general_ci',
//                'port' => 3306
//            ],
            0 => [
                'database_type' => 'mysql',
                'database_name' => 'far',
                'server' => 'localhost',
                'username' => 'root',
                'password' => '',
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_general_ci',
                'port' => 3307
            ]
            //,
//            0 =>[
//                'database_type' => 'mysql',
//                'database_name' => 'blacksyn_via',
//                'server' => 'mx24.hostgator.mx',
//                'username' => 'blacksyn_via',
//                'password' => 'cuernavaca123',
//                'charset' => 'utf8mb4',
//                'collation' => 'utf8mb4_general_ci',
//                'port' => 3306
//            ],
        );
        $database = [];
        for ($i = 0; $i < count($bds); $i++) {
            $database[$i] = new Medoo([
                // required
                'database_type' => $bds[$i]['database_type'],
                'database_name' => $bds[$i]['database_name'],
                'server' => $bds[$i]['server'],
                'username' => $bds[$i]['username'],
                'password' => $bds[$i]['password'],

                // [optional]
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_general_ci',
                'port' => $bds[$i]['port'],

//            // [optional] Table prefix
//            'prefix' => 'PREFIX_',
//
//            // [optional] Enable logging (Logging is disabled by default for better performance)
//            'logging' => true,
//
//            // [optional] MySQL socket (shouldn't be used with server and port)
//            'socket' => '/tmp/mysql.sock',

                // [optional] driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
//            'option' => [
//                \PDO::ATTR_CASE => PDO::CASE_NATURAL
//            ],

                // [optional] Medoo will execute those commands after connected to the database for initialization
//            'command' => [
//                'SET SQL_MODE=ANSI_QUOTES'
//            ]
            ]);
        }
//        print_r($database);

        return ($database);
    }
}

?>
