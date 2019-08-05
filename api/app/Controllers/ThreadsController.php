<?php
namespace app\Controllers;
class ThreadsController extends Thread{
    
    function proceso($tiempo, $resultado) {
        usleep($tiempo);
        exit($resultado);
    }
     
    
    function getNume($request, $response){
        
        // var_dump('controller');die();
        //$message = $this->BranchesModel->getBranches();
        //return json_encode( $message );
        //return json_encode( array(['data'=>'Si llega']) );
    }

    /*function getBranchesByFilters($request, $response){
        $temp = $request->getParsedBody();
        $message = $this->BranchesModel->getBranchesByFilters($temp);
        return json_encode( $message );
    }*/

}

/*require "thread.php";
 
function proceso($tiempo, $resultado) {
    usleep($tiempo);
    exit($resultado);
}
 
$thread1 = new Thread('proceso');
$thread2 = new Thread('proceso');
$thread3 = new Thread('proceso');
 
$thread1->start(3, 10);
$thread2->start(2, 40);
$thread3->start(1, 30);
 
while ($thread1->isAlive() || $thread2->isAlive() || $thread3->isAlive());
 
echo "Resultado del hilo 1 (debe ser 3): " . $thread1->getExitCode() . "\n";
echo "Resultado del hilo 2 (debe ser 2): " . $thread2->getExitCode() . "\n";
echo "Resultado del hilo 3 (debe ser 1): " . $thread3->getExitCode() . "\n";*/
?>