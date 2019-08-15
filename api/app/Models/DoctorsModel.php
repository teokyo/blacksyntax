<?php
    namespace app\Models;

    class DoctorsModel extends Models {
        function getDoctors(){
            $data = $this->bds('texto');
        $result = [];
//            print_r($data);
        for ($i = 0; $i < count($data); $i++){
//              print_r('entro');
            $result[$i]  = $data[$i]->query(
                "SELECT <C.nombre> AS NOMBRE_DOC, <C.seg_nombre> AS SEG_NOMBRE_DOC, <C.apellidoPaterno> AS APELLIDO_PAT_DOC, <C.apellidoMaterno> AS APELLIDO_MAT_DOC, <A.id_sucursal> AS ID_SUCURSAL, <D.colonia> AS COLONIA, <E.municipio> AS MUNICIPIO, <F.estado> AS ESTADO, <G.ciudad> AS CIUDAD
            FROM <sucursales> A
            JOIN <medico> B ON B.id_medico = A.id_medico
            JOIN <persona> C ON C.id_persona = B.id_persona
            JOIN <colonia> D ON D.id_colonia = A.id_colonia
            JOIN <municipio> E ON E.id_municipio = A.id_municipio
            JOIN <estado> F ON F.id_estado = A.id_estado
            JOIN <ciudad> G ON G.id_ciudad = A.id_ciudad
            JOIN <estado> H ON H.id_estado = A.id_estado"
            )->fetchAll(\PDO::FETCH_ASSOC);
            
            if(!is_null($data[$i]->error()[1])){
                return array('error'=>true,'description'=>$data[$i]->error()[2]);
            }else if(empty($result)){
                return array('notFound'=>true,'description'=>'The result is empty');
            }}
            return array('success'=>true, 'description'=>'The admins were found','result'=>array_merge($result[0],$result[1],$result[2]));
        
        }
    }
?>