<?php
include 'config.php';

$data = file_get_contents("php://input");
var_dump($data);

$request = json_decode($data); // ,true
var_dump($request);



if(true){

    $correo = $request->correo;
    $pass = $request->pass;
    var_dump($correo);
    var_dump($pass);

}

?>