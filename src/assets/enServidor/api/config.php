<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//Estas cabeceras me habilitan peticiones desde otros servidores.
//Eliminarlas en produccion.
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nutriGestion";
$pepper = "jje[)=836!43¿Ç0´Ç1";
?>