<?php
namespace app\Models;
class ProductsModel extends Models{


        function getProducts(){
            $result  = $this->db->query(
                "SELECT <A.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE_PRODUCTO, <B.nombre> AS LABORATORIO, <A.estatus> AS ESTATUS_PRODUCTO, <A.ultimo_costo> AS COSTO_PRODUCTO, <A.fecha_registro> AS REGISTRO, <A.precio_venta> AS PRECIO_VENTA
                FROM <producto> A
                JOIN <laboratorio> B ON B.id_laboratorio = A.id_laboratorio
                JOIN <claves_producto> C ON C.id_clave = A.id_clave"
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
        }

        
        function getProductsByCode($code){
            $result  = $this->db->query("SELECT * from <producto> 
            where <id_producto> = :code ",
                [
                    ":code" => $code
                   // ":dihiu" => $dihiu
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
           
           if(!is_null($this->db->error()[1])){
               return array('error'=>true,'description'=>$this->db->error()[2]);
           }else if(empty($result)){
               return array('notFound'=>true,'description'=>'The result is empty');
           }
           return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
       }


       function getProductsIEPS(){
        $result  = $this->db->query("SELECT <C.desc_nombre> as Nombre, <P.paga_IEPS> as Pago from <producto> P 
        inner join <claves_producto> C on <P.id_clave>=<C.id_clave>
        where <paga_IEPS> is not null"
           /* [
                ":IEPS" => $IEPS
               // ":dihiu" => $dihiu
            ]*/
        )->fetchAll(\PDO::FETCH_ASSOC);
       
       if(!is_null($this->db->error()[1])){
           return array('error'=>true,'description'=>$this->db->error()[2]);
       }else if(empty($result)){
           return array('notFound'=>true,'description'=>'The result is empty');
       }
       return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
        }


        function getProductsByCat($cat){
            $result  = $this->db->query("select * from <producto> 
            where <tipo_producto> = :cat ",
                [
                    ":cat" => $cat
                   // ":dihiu" => $dihiu
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
           
           if(!is_null($this->db->error()[1])){
               return array('error'=>true,'description'=>$this->db->error()[2]);
           }else if(empty($result)){
               return array('notFound'=>true,'description'=>'The result is empty');
           }
           return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
       }


        function getProductsCat(){
            $result  = $this->db->query(
                "SELECT DISTINCT <tipo_producto> FROM <PRODUCTO> "
            )->fetchAll(\PDO::FETCH_ASSOC);
           
           if(!is_null($this->db->error()[1])){
               return array('error'=>true,'description'=>$this->db->error()[2]);
           }else if(empty($result)){
               return array('notFound'=>true,'description'=>'The result is empty');
           }
           return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
        }
  
}
?>