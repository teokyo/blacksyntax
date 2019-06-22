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
        /*
        function getProducts_get($name){
            // $result  = $this->db->select('products',
            //     ['[><] tabla_a_buscar '],
            //     ['productCode','productName', 'productLine']
            // );

            $result  = $this->db->query("select productCode, <productName>, productLine from <products> 
            where <productCode> = :productCode ",
                [
                    ":productCode" => $name
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'desciption'=>'The products were found','products'=>$result);
        }

        function insertproduct($product){
            $result  = $this->db->insert('products',
                [
                    'productCode' => $product['productCode'],
                    'productName' => $product ['productName'],
                    'productLine' => $product ['productLine'],
                    'productScale' => $product ['productScale'],
                    'productVendor' => $product ['productVendor'],
                    'productDescription' => $product ['productDescription'],
                    'quantityInStock' => $product ['quantityInStock'],
                    'buyPrice' => $product ['buyPrice'],
                    'MSRP' => $product ['MSRP']
                ]
            );

            foreach ($product as $key) {
                $result  = $this->db->query("insert into products(productCode, productName) 
                values (:productCode, :productName)",
                    [
                        ":productCode" => $key['productCode'],
                        ":productName" => $key['productName'],
                    ]
                )->fetchAll(\PDO::FETHC_ASSOC);   
            }

            array_map(
                function($data){
                    $result  = $this->db->query("insert into products(productCode, productName) 
                    values (:productCode, :productName)",
                        [
                            ":productCode" => $data['productCode'],
                            ":productName" => $data['productName'],
                        ]
                    )->fetchAll(\PDO::FETHC_ASSOC);  
                },
                $product
            );

            if(!is_null($this->db->error()[1])){
                return array('success'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'desciption'=>'The products were found','products'=>$result);
        }
        */
    }
?>