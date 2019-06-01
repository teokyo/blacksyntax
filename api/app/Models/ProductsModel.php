<?php
    namespace app\Models;
    class ProductsModel extends Models{

        function getProducts(){
            // $result  = $this->db->select('products',
            //     ['[><] tabla_a_buscar '],
            //     ['productCode','productName', 'productLine']
            // );

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
            return array('success'=>true, 'desciption'=>'The products were found','products'=>$result);
        }

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
            )->fetchAll(\PDO::FETHC_ASSOC);
            
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

    }
?>