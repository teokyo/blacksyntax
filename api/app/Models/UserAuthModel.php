<?php
    namespace app\Models;

    class UserAuthModel extends Models {
        function login($usuario){$data = $this->bds('texto');

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
            }//}
            return $result;
        
        }

        function register($usuario){
            $result  = $this->db->update('usuario',
                [
                    "password" => $usuario['password'],
                    "nombre_us" => $usuario['nombre_us'] 
                ]
            );
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return $result;
        
        }



    }
?>