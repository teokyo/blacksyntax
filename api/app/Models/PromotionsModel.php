<?php
    namespace app\Models;

    class PromotionsModel extends Models {
        function getPromotions(){
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT * from <promociones_list>"
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'description'=>'The admins were found','result'=>array_merge($result[0]));
        
        }

        function getPromotionsByLab($id){
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT * from <promociones_list> where id_laboratorio=:id",
                [
                    ":id"=>$id
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'description'=>'The admins were found','result'=>array_merge($result[0]));
        
        }

        function getPromotionsByPro($id){
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT * from <promociones_list> where id_promocion=:id",
                [
                    ":id"=>$id
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'description'=>'The admins were found','result'=>array_merge($result[0]));
        
        }
    }
?>