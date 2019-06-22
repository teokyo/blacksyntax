<?php
    namespace app\Models;

    class AdminsModel extends Models {
        function getAdmins(){
            

            $result  = $this->db->query(
                "SELECT * from <usuario>"
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