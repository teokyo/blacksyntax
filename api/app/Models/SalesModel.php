<?php
    namespace app\Models;
    class SalesModel extends Models {

        function getSales(){ 
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
            "SELECT <A.id_venta> as 'No. Venta', <A.numero_productos> as 'Cantidad de productos', <A.fecha_venta> as Fecha, b.nombre_desc as Sucursal, <b.rfc> as RFC_Sucursal, d.nombre as Nombre_Empleado,  d.apellidoPaterno as Apellido_Paterno, d.apellidoMaterno as Apellido_Materno
             from 
             ventas A
             join sucursales B on b.id_sucursal = a.id_sucursal
             join empleado c on c.id_empleado = a.id_empleado
             join persona d on d.id_persona = c.id_persona order by A.fecha_venta desc"
               
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'desciption'=>'The sales were found','result'=>array_merge($result[0]));
        
        }

        function getSalesByDate($date){
            //return array(['data'=> 'Si llegué']);
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT <A.id_venta> as 'No. Venta', <A.numero_productos> as 'Cantidad de productos',  <A.fecha_venta> as Fecha, <B.nombre_desc> as Sucursal, <B.rfc> as RFC_Sucursal, <d.nombre> as Nombre_Empleado, <d.apellidoPaterno> as Apellido_Paterno, <d.apellidoMaterno> as Apellido_Materno
            from 
            <ventas> A
            join <sucursales> B on <B.id_sucursal> = <A.id_sucursal>
            join <empleado> c on <c.id_empleado> = <A.id_empleado>
            join <persona> d on <d.id_persona> = <c.id_persona>
            where <A.fecha_venta> > :ini and <A.fecha_venta> < :fin ",
                [
                    ":ini" => $date['inicio'],
                    ":fin" => $date['final']
                    
                ]
            )->fetchAll(\PDO::FETCH_ASSOC);
        
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'desciption'=>'The sales were found','result'=>array_merge($result[0]));
        
        }

        function getSalesRecent(){
            //return array(['data'=> 'Si llegué']);
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT <A.id_venta> as 'No. Venta', <A.numero_productos> as 'Cantidad de productos',  <A.fecha_venta> as Fecha, <B.nombre_desc> as Sucursal, <B.rfc> as RFC_Sucursal, <d.nombre> as Nombre_Empleado, <d.apellidoPaterno> as Apellido_Paterno, <d.apellidoMaterno> as Apellido_Materno
             from 
             ventas A
             join sucursales B on B.id_sucursal = A.id_sucursal
             join empleado c on c.id_empleado = A.id_empleado
             join persona d on d.id_persona = c.id_persona order by A.fecha_venta desc limit 20"
                 
             )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'desciption'=>'The sales were found','result'=>array_merge($result[0]));
        
        }


        function getSalesById($id){
            //return array(['data'=> 'Si llegué']);
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT <D.id_venta> AS Venta, <B.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE, <B.precio_publico> AS PRECIO, <D.fecha_venta> AS Fecha
             FROM <productos_ventas> A
             JOIN <producto> B ON <B.id_producto> = <A.id_producto>
             JOIN <claves_producto> C ON <C.id_clave> = <B.id_clave>
             JOIN <ventas> D ON <A.id_venta> = <D.id_venta>
             WHERE A.id_venta = :id",
                 [
                    ":id" => $id
                ]
             )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'desciption'=>'The sales were found','result'=>array_merge($result[0]));
        
        }
    }
?>