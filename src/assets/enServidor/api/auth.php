<?php

include 'config.php';
include './models/Profesional.php';
$conn = new mysqli($servername, $username, $password, $dbname);
$data = file_get_contents("php://input");
$data = json_decode($data); // ,true

$email = $data->email;
$passUser = $data->password;


$sql = "SELECT * FROM profesional where email = '$email';";
$result = $conn->query($sql);
$fetch = $result->fetch_assoc(); //Tengo en fetch la respuesta de db

if( $result->num_rows == 1){ //Es un email profesional

    if ($passUser == $fetch["password"]){ //loginCorrecto
        $fetch["rol"] = "profesional";      //Le paso el rol que tiene el login
        echo json_encode($fetch);
        return;
    } else {
        return false;
    }

}

$sql = "SELECT * FROM paciente where email = '$email';";
$result = $conn->query($sql);
$fetch = $result->fetch_assoc();

if( $result->num_rows == 1){ //Es un email paciente

    if ($passUser == $fetch["password"]){
        $fetch["rol"] = "paciente";
        echo json_encode($fetch);
        return;
    } else {
        return false;
    }

}else{

    return false;

}
