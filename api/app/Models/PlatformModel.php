<?php
    namespace app\Models;

    class PlatformModel extends Models {
        function getPlatform($arreglo){
            $sel="";
            //return array(['data'=> 'Si llegué']);
            $recibe = JSON.parse($arreglo);
            foreach($recibe as $e){
                if ($e<$recibe.length){
                    $sel=$sel.$e.',';
                }else{
                    $sel=$sel.$e;
                }

                
                
            }
            

            /* $result = $this->db->select('admins',
                 ['[><] usuario ','[><] contra ']//,
                 //['productCode','productName', 'productLine']
             );

            // $result  = $this->db->query("select productCode, <productName>, productLine from <products> 
            // where <productCode> = :name ",
            //     [
            //         ":name" => $name,
            //         ":dihiu" => $dihiu
            //     ]
            // )->fetchAll(\PDO::FETHC_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'description'=>'The admins were found','admins'=>$result);*/
        }
    }
?>