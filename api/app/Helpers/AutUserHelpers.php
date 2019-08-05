<?php
namespace app\Helpers;

class AutUserHelpers extends Util{

    public function validarPassword($loginPassword, $savedPassword){
        $hash = sha1($loginPassword);
        $isValid = false;
        if ($hash == sha1($savedPassword)) $isValid = true;
        return $isValid;
    }

    public function encodear($RegistrerPassword){
        print_r('$RegistrerPassword');
        $encode = sha1($RegistrerPassword);
        return $encode;
    }


    public function encoder($data){
        $fecha = time();
        $token = $this->jwt->encodear(array('id'=>$data[0]['id_usuario'],'nombre'=>$data[0]['nombre_us'],'fecha'=>$fecha));
        return $token;

    }

    public function decoder($token){
        $data = $this->jwt->decode($token,'gLX6KGrU8P');
        print_r($data);
        return $data;
    }

}

?>