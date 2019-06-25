<?php
    namespace app\Models;

    class PromotionsModel extends Models {
        function getPromotions(){
            $result  = $this->db->query(
                "SELECT * from <promociones_list>"
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'description'=>'The admins were found','result'=>$result);
        
        }

        function getPromotionsByLab($id){
            $result  = $this->db->query(
                "SELECT * from <promociones_list> where id_laboratorio=:id",
                [
                    ":id"=>$id
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'description'=>'The admins were found','result'=>$result);
        
        }

        function getPromotionsByPro($id){
            $result  = $this->db->query(
                "SELECT * from <promociones_list> where id_promocion=:id",
                [
                    ":id"=>$id
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'description'=>'The admins were found','result'=>$result);
        
        }
    }
?>