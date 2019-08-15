<?php
    namespace app\service;

    class AuthService extends Service{

        public function login($user){
            $result=$this->UserAuthModel->login($user);
            //print_r($result);
            if(!empty($result['error'])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            } else if (!empty($result['notFound'])){
                return array('notFound'=>true,'description'=>'El usuario no existe');
            }
            $isValid = $this->loginHelpers->validarPassword($user['password'], $result[0]['password']);
            if($isValid){
                $token = $this->loginHelpers->encoder($result);
                return array('token'=>$token);
            }
            if(!isset($result[0]['description'])){
                $isValid = $this->loginHelpers->validarPassword($user['password'], $result[0]['password']);
            }
            if($isValid){
                $token = $this->loginHelpers->encoder($result);
                return array('token'=>$token);
                
            }
        }


        public function validar($token){
            $datos=$this->loginHelpers->decoder($token['token']);
            //$datos=json_decode($datos);
            $data=($datos->sub);
            //print_r($datos->nombre_us);
            $info=[];
            $info['nombre_us']=($data->nombre_us);
            if(($data->fecha)>(time()-3600)){
                return true;
            }
            return null;
        }


     

    }
?>