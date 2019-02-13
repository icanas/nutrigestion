<?php

include 'config.php';
include './models/Profesional.php';
$conn = new mysqli($servername, $username, $password, $dbname);
$data = file_get_contents("php://input");
$data = json_decode($data); // ,true

$email = $data->email;
$passUser = $data->password;

//$salt=0;
//$pepper=696903431;

//decrypt pass

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM profesional where email = '$email';";
$result = $conn->query($sql);
$fetch = $result->fetch_assoc(); //Tengo en fetch la respuesta de db

if ($passUser == $fetch["password"]){ //loginCorrecto
    echo json_encode($fetch);
} else {
    return false;
}

/*
$correcto = $conn->query("select salt from usuarios where nombre = '$nombre'");
$datos = $correcto->fetch_assoc(); // Aqui ya tengo la sal
$salt = $datos["salt"];

$passUser .= strval($salt);
$passUser .= strval($pepper);


//Fin decrypt

if(password_verify($passUser,$passdatabase)){

	session_start(); //////Inicio sesion y guardo datos del usuario en un array de _session


	header("Location: principal.html");


}else{
	echo "Pass incorrecta, no entras";
}

$conn->close();

*/