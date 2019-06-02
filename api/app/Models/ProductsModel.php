<?php
namespace app\Models;
class ProductsModel extends Models{

    function getProducts(){
        $result = $this->db->select('products',
        ['productCode','productName','productLine']);

        $result =$this->db->query("select productCode, <productName>, productLine from <products> where <productCode> = :name",
        [

            ":name" => $name,
            ":dihiu" => $dihiu

        ]
    )fetchAll(\PDO::FETCH_ASSOC);//Al utilizar un query es necesario agregar un fetch(sirve para retornar solo el resultado deseado y no informacion interna [registros])

        if(!is_null($this->db->error()[1])){
            return array('error'=>true,'description'=>$this->db->error()[2]);
        }else if(empty($return)){
            return array('notFound'=>true,'description'=>'The result is empty');
        }
        return array('success'=>true, 'description'=>'The products were found','products'=>$result);
    }

    

    
}
?>