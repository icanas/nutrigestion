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

    case 'getPaciente':

    $executionStatus = getPaciente($conn, $data);
        break;

    case 'getPacientesList':


    $executionStatus = getPacientesList($conn, $data);
        break;

    case 'addCita':

    $executionStatus = addCita($conn, $data);
        break;

    case 'getCitaPacienteAll':

    $executionStatus = getCitaPacienteAll($conn, $data);
        break;

    case 'getCitaPacienteActiva':

    $executionStatus = getCitaPacienteActiva($conn, $data);
        break;

    case 'cancelCita':

    $executionStatus = cancelCita($conn, $data);
        break;

    case 'desactivaPaciente':

    $executionStatus = desactivaPaciente($conn, $data);
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

    $token = sha1($paciente->nombre. $profesional->email);

    // Comprobar si ya existe, poner su bit a 1
    $sql = "SELECT * FROM paciente
            WHERE email = '$paciente->email' AND
            emailProfesional = '$profesional->email';";

    $result = $conn->query($sql);
    if ($result->num_rows === 0){   // Si no existe, lo creo

        $sql = "INSERT INTO paciente (nombre, email, password, emailProfesional, activo, token)
                VALUES ('$paciente->nombre', '$paciente->email', '$paciente->password', '$profesional->email', 1, '$token');";
    } else{ // Si ya existe le coloco el bit a 1

        $sql = "UPDATE paciente
        SET activo = 1
        WHERE email = '$paciente->email';";

    }

    $succes = $conn->query($sql);

    if (!$succes) return FALSE;
    return TRUE;

}


function getProfesional($conn, $data){
    $token = $data->token;
    $sql = "SELECT * FROM profesional WHERE token = '$token';";
    $result =  $conn->query($sql)->fetch_assoc();

    return json_encode($result);


}

function getPaciente($conn, $data){
    $token = $data->token;
    $sql = "SELECT * FROM paciente WHERE token = '$token';";
    $result =  $conn->query($sql)->fetch_assoc();

    return json_encode($result);


}


function getPacientesList($conn, $data){

    $profesional = $data->Profesional;
    $sql = "SELECT * FROM paciente WHERE emailProfesional = '$profesional->email';";
    $result =  $conn->query($sql);


    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    if($result->num_rows === 0){
        return false;
    }

    $salida = json_encode($json);
    return $salida;


}


function addCita($conn, $data){
    $paciente = $data->Paciente;
    $cita = $data->Cita;
    $timezone = ",'+00:00','+01:00'";

    $sql = "UPDATE cita SET activo = 0
            WHERE email = '$paciente->email';";

    $result =  $conn->query($sql);

    $sql = "INSERT INTO cita (email, fecha_cita, activo)
                VALUES ('$paciente->email', CONVERT_TZ('$cita->fecha'$timezone), 1);";

    $result =  $conn->query($sql);
    if (!$result) return FALSE;
    return TRUE;


}


function cancelCita($conn, $data){

    $cita = $data->Cita;

    $sql = "UPDATE cita SET activo = 0
            WHERE email = '$cita->email'
            and fecha_cita = '$cita->fecha_cita';";
    $result =  $conn->query($sql);

    if (!$result) return FALSE;
    return TRUE;


}

function getCitaPacienteAll($conn, $data){

    $paciente = $data->Paciente;
    $sql = "SELECT * FROM cita WHERE email = '$paciente->email';";
    $result =  $conn->query($sql);

    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    if ($result->num_rows == 0) {
        return FALSE;
    }

    return json_encode($json);


}

function getCitaPacienteActiva($conn, $data){

    $paciente = $data->Paciente;
    $sql = "SELECT * FROM cita WHERE email = '$paciente->email'
                                and activo = 1;";
    $result =  $conn->query($sql);
    $row = $result->fetch_assoc();

    if ($result->num_rows == 0) {
        return FALSE;
    }

    return json_encode($row);


}


function desactivaPaciente($conn, $data){

    $paciente = $data->Paciente;
    $sql = "UPDATE paciente
            SET activo = 0
            WHERE email = '$paciente->email';";

    $result =  $conn->query($sql);

    if(!$result){
        return false;
    }else{  // Desactivo sus citas tambien

        $sql = "UPDATE cita
                SET activo = 0
                WHERE email = '$paciente->email';";
        $result =  $conn->query($sql);
    }

    return true;

}



?>