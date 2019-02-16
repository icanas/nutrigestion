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

if ($passUser == $fetch["password"]){ //loginCorrecto
    echo json_encode($fetch);
} else {
    return false;
}
