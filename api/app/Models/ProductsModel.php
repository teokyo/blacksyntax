<?php
    namespace app\Models;
    class ProductsModel extends Models{

        function getProducts(){
//            print_r($this->db);
            $data = $this->bds('texto');
            $result = [];
//            print_r($data);
            for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
                $result[$i]  = $data[$i]->query(
                "SELECT <A.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE_PRODUCTO, <B.nombre> AS LABORATORIO, <A.estatus> AS ESTATUS_PRODUCTO, <A.ultimo_costo> AS COSTO_PRODUCTO, <A.fecha_registro> AS REGISTRO, <A.precio_venta> AS PRECIO_VENTA
                FROM <producto> A
                JOIN <laboratorio> B ON B.id_laboratorio = A.id_laboratorio
                JOIN <claves_producto> C ON C.id_clave = A.id_clave"
                )->fetchAll(\PDO::FETCH_ASSOC);

                if(!is_null($data[$i]->error()[1])){
                    return array('error'=>true,'description'=>$data[$i]->error()[2]);
                }else if(empty($result[$i])){
                    return array('notFound'=>true,'description'=>'The result is empty');
                }
//                print_r($result[$i]);
            }

            //$res=$respuesta['result'];
            $res=array_merge($result[0],$result[1],$result[2]);
            $final=[];
            for($i=0;$i<(count($res));$i++){
                if(!isset($final[$res[$i]['ID_PRODUCTO']-1])){
                    $final[$res[$i]['ID_PRODUCTO']-1]['ID_PRODUCTO']=$res[$i]['ID_PRODUCTO'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['NOMBRE_PRODUCTO']=$res[$i]['NOMBRE_PRODUCTO'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['LABORATORIO']=$res[$i]['LABORATORIO'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['ESTATUS_PRODUCTO']=$res[$i]['ESTATUS_PRODUCTO'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['COSTO_PRODUCTO']=$res[$i]['COSTO_PRODUCTO'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['REGISTRO']=$res[$i]['REGISTRO'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['PRECIO_VENTA']=$res[$i]['PRECIO_VENTA'];
                    $final[$res[$i]['ID_PRODUCTO']-1]['CANTIDAD']=rand(1 , 200);
                }
            }
            //print_r(/*$respuesta = */json_encode(array('success'=>true, 'description'=>'The products were found','result'=>$final)));
            return array('success'=>true, 'description'=>'The products were found','result'=>$final);
            //print_r($res);
//            return array('success'=>true, 'desciption'=>'The products were found','result'=>$this->bds('texto'));
        }


        function getProductsByCode($code){
            $data = $this->bds('texto');
            $result = [];
//            print_r($data);
            for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
                $result[$i]  = $data[$i]->query(
                    "SELECT <A.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE_PRODUCTO, <B.nombre> AS LABORATORIO, <A.estatus> AS ESTATUS_PRODUCTO, <A.ultimo_costo> AS COSTO_PRODUCTO, <A.fecha_registro> AS REGISTRO, <A.precio_venta> AS PRECIO_VENTA
                FROM <producto> A
                JOIN <laboratorio> B ON B.id_laboratorio = A.id_laboratorio
                JOIN <claves_producto> C ON C.id_clave = A.id_clave
                where <id_producto> = :code ",
                [
                    ":code" => $code
                   // ":dihiu" => $dihiu
                ]
                )->fetchAll(\PDO::FETCH_ASSOC);

            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$this->$data[$i]->error()[2]);
            }else if(empty($result[$i])){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
           }
           $res=array_merge($result[0],$result[1],$result[2]);
            $final=[];
            for($i=0;$i<(count($res));$i++){
                if(!isset($final[0])){
                    $final[0]['ID_PRODUCTO']=$res[$i]['ID_PRODUCTO'];
                    $final[0]['NOMBRE_PRODUCTO']=$res[$i]['NOMBRE_PRODUCTO'];
                    $final[0]['LABORATORIO']=$res[$i]['LABORATORIO'];
                    $final[0]['ESTATUS_PRODUCTO']=$res[$i]['ESTATUS_PRODUCTO'];
                    $final[0]['COSTO_PRODUCTO']=$res[$i]['COSTO_PRODUCTO'];
                    $final[0]['REGISTRO']=$res[$i]['REGISTRO'];
                    $final[0]['PRECIO_VENTA']=$res[$i]['PRECIO_VENTA'];
                    $final[0]['CANTIDAD']=rand(1 , 200);
                }
            }
            //print_r(/*$respuesta = */json_encode(array('success'=>true, 'description'=>'The products were found','result'=>$final)));
            return array('success'=>true, 'description'=>'The products were found','result'=>$final[0]);
       }


       function getProductsIEPS(){
        $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT <A.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE_PRODUCTO, <B.nombre> AS LABORATORIO, <A.estatus> AS ESTATUS_PRODUCTO, <A.ultimo_costo> AS COSTO_PRODUCTO, <A.fecha_registro> AS REGISTRO, <A.precio_venta> AS PRECIO_VENTA
                FROM <producto> A
                JOIN <laboratorio> B ON B.id_laboratorio = A.id_laboratorio
                JOIN <claves_producto> C ON C.id_clave = A.id_clave
                where <paga_IEPS> is not null"
                )->fetchAll(\PDO::FETCH_ASSOC);

            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result[$i])){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
        }
        $res=array_merge($result[0],$result[1],$result[2]);
        $final=[];
        for($i=0;$i<(count($res));$i++){
            if(!isset($final[$res[$i]['ID_PRODUCTO']-1])){
                $final[$res[$i]['ID_PRODUCTO']-1]['ID_PRODUCTO']=$res[$i]['ID_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']-1]['NOMBRE_PRODUCTO']=$res[$i]['NOMBRE_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']-1]['LABORATORIO']=$res[$i]['LABORATORIO'];
                $final[$res[$i]['ID_PRODUCTO']-1]['ESTATUS_PRODUCTO']=$res[$i]['ESTATUS_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']-1]['COSTO_PRODUCTO']=$res[$i]['COSTO_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']-1]['REGISTRO']=$res[$i]['REGISTRO'];
                $final[$res[$i]['ID_PRODUCTO']-1]['PRECIO_VENTA']=$res[$i]['PRECIO_VENTA'];
                $final[$res[$i]['ID_PRODUCTO']-1]['CANTIDAD']=rand(1 , 200);
            }
        }
        //print_r(/*$respuesta = */json_encode(array('success'=>true, 'description'=>'The products were found','result'=>$final)));
        return array('success'=>true, 'description'=>'The products were found','result'=>$final);
        }


        function getProductsByCat($cat){
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT <A.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE_PRODUCTO, <B.nombre> AS LABORATORIO, <A.estatus> AS ESTATUS_PRODUCTO, <A.ultimo_costo> AS COSTO_PRODUCTO, <A.fecha_registro> AS REGISTRO, <A.precio_venta> AS PRECIO_VENTA
                FROM <producto> A
                JOIN <laboratorio> B ON B.id_laboratorio = A.id_laboratorio
                JOIN <claves_producto> C ON C.id_clave = A.id_clave
                where <tipo_producto> = :cat ",
                [
                    ":cat" => $cat
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);

           if(!is_null($data[$i]->error()[1])){
               return array('error'=>true,'description'=>$data[$i]->error()[2]);
           }else if(empty($result[$i])){
               return array('notFound'=>true,'description'=>'The result is empty');
           }}
           $res=array_merge($result[0],$result[1],$result[2]);
        $final=[];
        for($i=0;$i<(count($res));$i++){
            if(!isset($final[$res[$i]['ID_PRODUCTO']])){
                $final[$res[$i]['ID_PRODUCTO']]['ID_PRODUCTO']=$res[$i]['ID_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']]['NOMBRE_PRODUCTO']=$res[$i]['NOMBRE_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']]['LABORATORIO']=$res[$i]['LABORATORIO'];
                $final[$res[$i]['ID_PRODUCTO']]['ESTATUS_PRODUCTO']=$res[$i]['ESTATUS_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']]['COSTO_PRODUCTO']=$res[$i]['COSTO_PRODUCTO'];
                $final[$res[$i]['ID_PRODUCTO']]['REGISTRO']=$res[$i]['REGISTRO'];
                $final[$res[$i]['ID_PRODUCTO']]['PRECIO_VENTA']=$res[$i]['PRECIO_VENTA'];
                $final[$res[$i]['ID_PRODUCTO']]['CANTIDAD']=rand(1 , 200);
            }
        }
        //print_r(/*$respuesta = */json_encode(array('success'=>true, 'description'=>'The products were found','result'=>$final)));
        return array('success'=>true, 'description'=>'The products were found','result'=>$final);
       }


        function getProductsCat(){
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT DISTINCT <tipo_producto> FROM <PRODUCTO>"
            )->fetchAll(\PDO::FETCH_ASSOC);

           if(!is_null($data[$i]->error()[1])){
               return array('error'=>true,'description'=>$data[$i]->error()[2]);
           }else if(empty($result[$i])){
               return array('notFound'=>true,'description'=>'The result is empty');
           }}
           return array('success'=>true, 'desciption'=>'The products were found','result'=>array_merge($result[0],$result[1],$result[2]));
        }
//TODO////////////////////////////
        function getMoreSelledProducts(){
            //$result = array(['data'=>'Si llega']);
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT count(<A.id_producto>) as Ventas, <A.id_producto> as 'ID_PRODUCTO', <B.tipo_producto> as 'Tipo', <C.desc_nombre> as Producto 
            FROM <productos_ventas> A 
            join <producto> B on <A.id_producto>=<B.id_producto> 
            join <claves_producto> C on <B.id_clave>=<C.id_clave> 
            group by <id_producto> ORDER by Ventas DESC limit 10"
            )->fetchAll(\PDO::FETCH_ASSOC);

           if(!is_null($data[$i]->error()[1])){
               return array('error'=>true,'description'=>$data[$i]->error()[2]);
           }else if(empty($result[$i])){
               return array('notFound'=>true,'description'=>'The result is empty');
           }}
           $res=array_merge($result[0],$result[1],$result[2]);
        $final=[];
        for($i=0;$i<(count($res));$i++){
            if(!isset($final[$res[$i]['ID_PRODUCTO']-1])){
                $final[$i]['ID_PRODUCTO']=$res[$i]['ID_PRODUCTO'];
                $final[$i]['VENTAS TOTALES']=$res[$i]['Ventas'];
                $final[$i]['LABORATORIO']=$res[$i]['Tipo'];
                $final[$i]['TIPO']=$res[$i]['Producto'];
            }
        }
        //print_r(/*$respuesta = */json_encode(array('success'=>true, 'description'=>'The products were found','result'=>$final)));
        return array('success'=>true, 'description'=>'The products were found','result'=>$final);
        }
//TODO////////////////////////////
        function getMoreSelledProduct(){
            //$result = array(['data'=>'Si llega']);
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT count(<A.id_producto>) as Ventas, <A.id_producto> as 'ID_PRODUCTO', <B.tipo_producto> as 'Tipo', <C.desc_nombre> as Producto 
            FROM <productos_ventas> A 
            join <producto> B on <A.id_producto>=<B.id_producto> 
            join <claves_producto> C on <B.id_clave>=<C.id_clave> 
            group by <id_producto> ORDER by Ventas DESC limit 1"
            )->fetchAll(\PDO::FETCH_ASSOC);

           if(!is_null($data[$i]->error()[1])){
               return array('error'=>true,'description'=>$data[$i]->error()[2]);
           }else if(empty($result[$i])){
               return array('notFound'=>true,'description'=>'The result is empty');
           }}
           $res=array_merge($result[0],$result[1],$result[2]);
            $final=[];
            for($i=0;$i<(count($res));$i++){
                if(!isset($final[0])){
                $final[0]['ID_PRODUCTO']=$res[$i]['ID_PRODUCTO'];
                $final[0]['VENTAS TOTALES']=$res[$i]['Ventas'];
                $final[0]['LABORATORIO']=$res[$i]['Tipo'];
                $final[0]['TIPO']=$res[$i]['Producto'];
                }
            }
            //print_r(/*$respuesta = */json_encode(array('success'=>true, 'description'=>'The products were found','result'=>$final)));
            return array('success'=>true, 'description'=>'The products were found','result'=>$final[0]);
        }
//TODO////////////////////////////
        function getExpiredProducts(){
            //$result = array(['data'=>'Si llega']);
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT id_producto, cl.desc_nombre as Producto, tipo_producto as Tipo, caducidad as Caducidad, l.nombre as laboratorio from producto
                inner join claves_producto cl on producto.id_clave = cl.id_clave
                inner join laboratorio l on producto.id_laboratorio=l.id_laboratorio
                where caducidad <= now()"
            )->fetchAll(\PDO::FETCH_ASSOC);

           if(!is_null($data[$i]->error()[1])){
               return array('error'=>true,'description'=>$data[$i]->error()[2]);
           }else if(empty($result[$i])){
               return array('notFound'=>true,'description'=>'The result is empty');
           }}
           return array('success'=>true, 'desciption'=>'The products were found','result'=>array_merge($result[0],$result[1],$result[2]));
        }
       
    }
?>