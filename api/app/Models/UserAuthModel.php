<?php
    namespace app\Models;

    class UserAuthModel extends Models {
        function login($usuario){
            $data = $this->bds('texto');
            $result = $data[0]->select('usuario',
                [
                    "password",
                    "nombre_us",
                    "id_usuario"
                ],
                [
                    "nombre_us"=>$usuario['nombre_us'],
                    "estatus"=>1
                ]
            );
            if(!is_null($data[0]->error()[1])){
                return array('error'=>true,'description'=>$data[0]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }else{
                return $result;}    

        
        }

        function loginV($usuario){
            $data = $this->bds('texto');
            $result = $data[0]->select('usuario',
                [
                    "password",
                    "nombre_us",
                    "id_usuario"
                ],
                [
                    "nombre_us"=>$usuario->nombre_us,
                    "estatus"=>1
                ]
            );
            if(!is_null($data[0]->error()[1])){
                return array('error'=>true,'description'=>$data[0]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }else{
                return $result;}    

        
        }



    }
?>