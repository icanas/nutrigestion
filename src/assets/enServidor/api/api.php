<?php
include 'config.php';
include './models/Profesional.php';
$conn = new mysqli($servername, $username, $password, $dbname);
$data = file_get_contents("php://input");
$data = json_decode($data); // ,true

$executionStatus = TRUE;

if (!array_key_exists('action', $data)) {
    $executionStatus = FALSE;
    $action = "fallo";
}else{
    $action =  $data->action;
}



switch ($action) {

    case 'creaProfesional':

    $executionStatus = creaProfesional($conn, $data);
        break;

    case 'validateCode':

    $executionStatus = validateCode($conn, $data);
        break;

    case 'insertaPaciente':

    $executionStatus = insertPaciente($conn, $data);
        break;

    case 'isLogin':

    $executionStatus = isLogin($conn, $data);
        break;

    case 'getProfesional':

    $executionStatus = getProfesional($conn, $data);
        break;

    case 'getPacientesList':

    $executionStatus = getPacientesList($conn, $data);
        break;

}

echo $executionStatus;
$conn->close();



function validateCode($conn, $data){

    $sql = "SELECT codigo FROM codigoRegistro where codigo = '$data->codigo';";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    if ($result->num_rows > 1 || $result->num_rows == 0) {

        return False;
    } else {
        return $row["codigo"];
    }

}



function creaProfesional($conn, $data){

    $profesional = new Profesional($conn, $data);
    $succes = $profesional->newProfessional();
    if (!$succes) return FALSE;
    return true;

}


function insertPaciente($conn, $data){
    $paciente = $data->Paciente;
    $profesional = $data->Profesional;
    $sql = "INSERT INTO paciente (nombre, email, password, emailProfesional)
                VALUES ('$paciente->nombre', '$paciente->email', '$paciente->password', '$profesional->email');";
    $succes = $conn->query($sql);

    if (!$succes) return FALSE;
    return TRUE;

}


function getProfesional($conn, $data){
    $token = $data->token;
    $sql = "SELECT * FROM profesional WHERE token = $token;";
    $result =  $conn->query($sql)->fetch_assoc();

    return json_encode($result);


}


function getPacientesList($conn, $data){

    $paciente = $data->Paciente;
    $sql = "SELECT * FROM profesional WHERE emailProfesional = '$paciente->emailProfesional';";
    $result =  $conn->query($sql);

    while($row = $result->fetch_assoc()){
    }

    var_dump($row);
    die();

    return json_encode($result);


}



?>