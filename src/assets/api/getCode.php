<?php
include 'config.php';

// crea conexion
$conn = new mysqli($servername, $username, $password, $dbname);
// Test Conexion
if ($conn->connect_error) {
    die("Fallo conexion " . $conn->connect_error);
}

$sql = "SELECT * FROM codigoRegistro";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["codigo"];
    }
} else {
    echo "0 results";
}
$conn->close();
?>
