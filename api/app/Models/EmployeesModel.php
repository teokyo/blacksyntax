<?php
    namespace app\Models;

    class EmployeesModel extends Models {
        function getEmployees(){
            $result  = $this->db->query(
                "SELECT <A.id_empleado>, <B.nombre>, <B.seg_nombre>, <B.apellidoMaterno>, <B.apellidoPaterno>, <B.sexo>, <B.telefonoCelular>, <B.telefonoParticular>, <B.direccion>, <B.correo_electronico>, <D.colonia>, <E.municipio>, <F.estado>, <G.ciudad>, <B.codigoPostal>, <B.noInterno>, <B.noExterno>, <C.id_sucursal>, <C.clasificacion>, <C.nombre_desc>, <C.registroSAA>, <H.id_medico>, <H.cedulaProfesional>, <I.especialidad>, <J.nombre> AS nombre_med, <J.seg_nombre> AS seg_nombre_med, <J.apellidoMaterno> AS apellido_mat_med, <J.apellidoPaterno> AS apellido_pat_med, <J.sexo> AS sexo_med, <J.telefonoCelular> AS tel_med, <J.telefonoParticular> AS tel_par_med, <J.direccion> AS direccion_med, <J.correo_electronico> AS email_med, <K.colonia> AS col_med, <L.municipio> AS municipio_med, <m.estado> AS estado_med, <N.ciudad> AS ciudad_med, <J.codigoPostal> AS cp_med, <J.noInterno> AS num_int_med, <J.noExterno> AS num_ext_med, <C.rfc>, <C.direccion>, <O.colonia> AS col_suc, <P.municipio> AS municipio_suc, <Q.estado> AS estado_suc, <R.ciudad> AS ciudad_suc, <C.codigoPostal>, <C.telefono>, <C.nom_servidor>, <C.encargado>, <C.cantidad_empleados>, <C.hora_apertura>, <C.hora_cirre>, <C.almacen>, <C.almacen_medicamentos>, <C.noExterior> AS num_ext_suc, <C.noInterior> AS num_int_suc, <C.codigoCentroCosto>, <C.numEstablecimiento>
                FROM <empleado> A 
                JOIN <persona> B ON <B.id_persona> = <A.id_persona>
                JOIN <sucursales> C ON <C.id_sucursal> = <A.id_sucursal>
                JOIN <colonia> D ON <D.id_colonia> = <B.id_colonia>
                JOIN <municipio> E ON <E.id_municipio> = <B.id_municipio>
                JOIN <estado> F ON <F.id_estado> = <B.id_estado>
                JOIN <ciudad> G ON <G.id_ciudad> = <B.id_ciudad>
                JOIN <medico> H ON <H.id_medico> = <C.id_medico>
                JOIN <especialidad_medicas> I ON <I.id_especialidad> = <H.id_especialidad>
                JOIN <persona> J ON <J.id_persona> = <H.id_persona>
                JOIN <colonia> K ON <K.id_colonia> = <J.id_colonia>
                JOIN <municipio> L ON <L.id_municipio> = <J.id_municipio>
                JOIN <estado> M ON <M.id_estado> = <J.id_estado>
                JOIN <ciudad> N ON <N.id_ciudad> = <J.id_ciudad>
                JOIN <colonia> O ON <O.id_colonia> = <C.id_colonia>
                JOIN <municipio> P ON <P.id_municipio> = <C.id_municipio>
                JOIN <estado> Q ON <Q.id_estado> = <C.id_estado>
                JOIN <ciudad> R ON <R.id_ciudad> = <C.id_ciudad>"
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