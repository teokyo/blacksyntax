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
        print_r($dat);
        return $jwt->encode($dat,'gLX6KGrU8P');
    }

    public function decode($encodedJwt)
    {
        try{
            //code
            
            $decodedJwt = $decodedJwt = new \Firebase\JWT\JWT();
            print_r($encodedJwt);
            $decoded = $decodedJwt->decode($encodedJwt, 'gLX6KGrU8P');
            
            //var_dump($decodedJwt->sub->email); die();
            return ($decodedJwt->verify('gLX6KGrU8P') ? $decodedJwt->sub : null);
        } catch (\Exception $eJwtE){
            // var_dump($message); die();
            return null;
        }
    }
}

?>