<?php
    namespace app\Helpers;

    class Util{
        //private $jwt;
        //private $private_key = 'g1X6KGrU8P';

        private function confJWT(){
            $jwt = $jwt = new \Firebase\JWT\JWT();
            $jwt->iat = time();
            $jwt->exp = time() + (60 * 60 * 1);
        }

        public function __construct($container){
            $this->confJWT();
            $this->container = $container;
        }

        public function __get($property){
            if($this->container->{$property}){
                return $this->container->{$property};
            }
        }

    }
?>