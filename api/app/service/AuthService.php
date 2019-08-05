<?php
    namespace app\service;

    class AuthService extends Service{

        public function login($user){
            print_r($user);
            $result=$this->UserAuthModel->login($user);
            if(!empty($result['error'])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            } else if (!empty($result['notFound'])){
                return array('notFound'=>true,'description'=>'El usuario no existe');
            }
            print_r($result);
            if(!isset($result[0]['description'])){
                $isValid = $this->loginHelpers->validarPassword($user['password'], $result[0]['password']);
            }
            if($isValid){
                $token = $this->loginHelpers->encoder($result);
                print_r($token);
                return array('token'=>$token);
                
            }
            return null;
        }

        public function register($usuario){
            $usuario['password'] = $this->loginHelpers->encodear($usuario['password']);
            $result = $this->UserAuthModel->register($usuario);
            return array('success'=>true,'description'=>$result);
        }

        public function validar($token){
            $datos=$this->loginHelpers->decoder($token['token']);
            $datos=json_encode($datos);
            print_r($datos);
            $result=$this->UserAuthModel->login($datos);

            if(!empty($result['error'])){
                return false;
            } else if (!empty($result['notFound'])){
                return false;
            }
            $isValid = $this->loginHelpers->validarPassword($datos['password'], $result[0]['password']);

            if($isValid && hora($datos['fecha'])){
                return true;
            }
            return null;
        }


        public function horas($hora){
            $tI=time($hora);
            $tU=time();
            $y=$tU-$tI;
            $a=$y/3600000;
            return(Math.trunc($a)<2);
        }

    }
?>