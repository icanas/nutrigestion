<?php
include 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

$data = file_get_contents("php://input");


$sql = "SELECT codigo FROM codigoRegistro where codigo = '$data';";
$result = $conn->query($sql);
$row = $result->fetch_assoc();


if ($result->num_rows > 1 || $result->num_rows == 0) {
    echo "-1";
} else {
    echo $row["codigo"];
}
$conn->close();
?>
