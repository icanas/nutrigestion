<?php
include 'config.php';
include 'createProfesionalSpace.php';
$conn = new mysqli($servername, $username, $password, $dbname);

$data = file_get_contents("php://input");

$request = json_decode($data); // ,true


$correo = $request->correo;
$pass = $request->pass;

$sql = "INSERT INTO profesional (email, password) VALUES('$correo', '$pass');";

////////////////////////////////////////
// Creacion de espacio profesional
///////////////////////////////////////
$create = new CreateProfesionalSpace($servername, $username, $password,$correo);
$create->execute();
////////////////////////////////////////
// Fin de creacion de espacio profesional
///////////////////////////////////////


if ($conn->query($sql) === TRUE) {
    echo "1";
} else {
    echo "-1";
}
$conn->close();

?>