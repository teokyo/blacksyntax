<?php

namespace app\Helpers;

class JWT
{
    private $jwt;
    private $private_key = 'gLX6KGrU8P';

    public function encodear($user_id)
    {
        //print_r('llego');
        $jwt = $jwt = new \Firebase\JWT\JWT();
        $dat = [];
        $dat['iat'] = time();
        $dat['exp'] = time() + (60 * 60 * 1);
        $dat['sub'] = $user_id;
        return $jwt->encode($dat,'gLX6KGrU8P');
    }

    public function decode($encodedJwt)
    {
        try{
            $jwt = $jwt = new \Firebase\JWT\JWT();
            $decodedJwt = $jwt->decode($encodedJwt, 'gLX6KGrU8P', array('HS256'));
            //print_r($decodedJwt);
            return($decodedJwt);
        } catch (\Exception $eJwtE){
            // var_dump($message); die();
            return null;
        }
    }
}

?>