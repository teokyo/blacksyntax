<?php
    namespace app\Models;
    class SalesModel extends Models {

        function getSales(){ 
            $result  = $this->db->query("SELECT a.id_venta, b.nombre_desc as Sucursal, d.nombre as Nombre_Empleado, d.apellidoMaterno as Apellido_Materno, d.apellidoPaterno as Apellido_Paterno, <A.fecha_venta> as Fecha, <A.numero_productos> as Productos
             from 
             ventas A
             join sucursales B on b.id_sucursal = a.id_sucursal
             join empleado c on c.id_empleado = a.id_empleado
             join persona d on d.id_persona = c.id_persona order by A.fecha_venta desc"
               
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
        
        }

        function getSalesByDate($date){
            //return array(['data'=> 'Si llegué']);
            
             $result  = $this->db->query("SELECT <b.registroSAA> as Registro_Sucursal, <b.encargado> as Encargado_Sucursal, <b.rfc> as RFC_Sucursal, <d.nombre> as Nombre_Empleado, <d.apellidoMaterno> as Apellido_Materno, <d.apellidoPaterno> as Apellido_Paterno
             from 
             <ventas> A
             join <sucursales> B on <b.id_sucursal> = <A.id_sucursal>
             join <empleado> c on <c.id_empleado> = <A.id_empleado>
             join <persona> d on <d.id_persona> = <A.id_persona>
             where <A.fecha_venta> > :ini and <A.fecha_venta> < :fin ",
                 [
                     ":ini" => $date['inicio'],
                     ":fin" => $date['final']
                     
                 ]
             )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
        
        }

        function getSalesRecent(){
            //return array(['data'=> 'Si llegué']);
            
             $result  = $this->db->query("SELECT A.id_venta, b.nombre_desc as Sucursal, d.nombre as Nombre_Empleado, d.apellidoMaterno as Apellido_Materno, d.apellidoPaterno as Apellido_Paterno, <A.fecha_venta> as Fecha, <A.numero_productos> as Productos
             from 
             ventas A
             join sucursales B on b.id_sucursal = a.id_sucursal
             join empleado c on c.id_empleado = a.id_empleado
             join persona d on d.id_persona = c.id_persona order by A.fecha_venta desc limit 20"
                 
             )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($this->db->error()[1])){
                return array('error'=>true,'description'=>$this->db->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }
            return array('success'=>true, 'desciption'=>'The products were found','result'=>$result);
        
        }


        function getSalesById($id){
            //return array(['data'=> 'Si llegué']);
            
             $result  = $this->db->query("SELECT <B.id_producto> AS ID_PRODUCTO, <C.desc_nombre> AS NOMBRE, <B.precio_publico> AS PRECIO
             FROM <productos_ventas> A
             JOIN <producto> B ON <B.id_producto> = <A.id_producto>
             JOIN <claves_producto> C ON <C.id_clave> = <B.id_clave>
             WHERE A.id_venta = :id",
                 [
                    ":id" => $id
                ]
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
