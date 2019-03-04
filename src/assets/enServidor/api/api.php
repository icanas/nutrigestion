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

    case 'getAnatomia':

    $executionStatus = getAnatomia($conn, $data);
        break;

    case 'actualizaMedidas':

    $executionStatus = actualizaMedidas($conn, $data);
        break;

    case 'guardarDieta':

    $executionStatus = guardarDieta($conn, $data);
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

        $sql = "INSERT INTO paciente (nombre, apellido, email, password, emailProfesional, activo, token)
                VALUES ('$paciente->nombre', '$paciente->apellido', '$paciente->email', '$paciente->password', '$profesional->email', 1, '$token');";
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
    $sql = "SELECT * FROM cita WHERE email = '$paciente->email'
            order by activo desc;";
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

function getAnatomia($conn, $data){

    $paciente = $data->Paciente;
    $sql = "SELECT * FROM
            anatomia where email = '$paciente->email'
            ORDER BY activo DESC";

    $result =  $conn->query($sql);
    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    if ($result->num_rows == 0) {
        return FALSE;
    }

    return json_encode($json);


}


function actualizaMedidas($conn, $data){
    $paciente = $data->Paciente;
    $anatomia = $data->Anatomia;

    $sql = "UPDATE anatomia SET activo = 0
            WHERE email = '$paciente->email';";

    $result =  $conn->query($sql);

    $sql = "INSERT INTO anatomia (email, peso, altura, cintura, brazo, fecha_modificacion, activo)
                VALUES ('$paciente->email', '$anatomia->peso', '$anatomia->altura', '$anatomia->cintura', '$anatomia->brazo',
                        NOW(), 1 );";

    $result =  $conn->query($sql);
    if (!$result) return FALSE;
    return TRUE;


}


function guardarDieta($conn, $data){
    $paciente = $data->Paciente;
    $dieta = $data->Dieta;

    $sqlDieta = "SELECT MAX(id) as maxId from dieta;";
    $sqlDia= "SELECT MAX(id) as maxId from dia;";
    $sqlComida = "SELECT MAX(id) as maxId from comida;";
    $sqlAlimento = "SELECT MAX(id) as maxId from alimento;";

    $resultDieta =  $conn->query($sqlDieta);
    $resultDia =  $conn->query($sqlDia);
    $resultComida =  $conn->query($sqlComida);
    $resultAlimento =  $conn->query($sqlAlimento);


    $dietaId;
    $diaId;
    $comidaId;
    $alimentoId;

    $diaArray = [
        "desayuno" => 0,
        "postdesayuno" => 0,
        "comida" => 0,
        "merienda" => 0,
        "cena" => 0
    ];

    $dietaArray = [
        "Lunes" => 0,
        "Martes" => 0,
        "Miercoles" => 0,
        "Jueves" => 0,
        "Viernes" => 0,
        "Sabado" => 0,
        "Domingo" => 0
    ];

///////////////////////
//Recupero los maxID
/////////////////////
    if ($resultDieta->num_rows == 0) {
        $dietaId = 1;
    }else{
        $resultDieta = $resultDieta->fetch_assoc();
        $dietaId = intval($resultDieta["maxId"]) + 1;    // Ya tengo mi proximo dietaId
    }

    if ($resultDia->num_rows == 0) {
        $diaId = 1;
    }else{
        $resultDia = $resultDia->fetch_assoc();
        $diaId = intval($resultDia["maxId"]) + 1;    // Ya tengo mi proximo diaId
    }

    if ($resultComida->num_rows == 0) {
        $comidaId = 0;
    }else{
        $resultComida = $resultComida->fetch_assoc();
        $comidaId = intval($resultComida["maxId"]);    // Ya tengo mi proximo diaId
    }

    if ($resultAlimento->num_rows == 0) {
        $alimentoId = 1;
    }else{
        $resultAlimento = $resultAlimento->fetch_assoc();
        $alimentoId = intval($resultAlimento["maxId"]) + 1;    // Ya tengo mi proximo diaId
    }


    /////////////Inserto Alimentos///////////////

    $franjaAnterior = "";

    foreach ($dieta as  $key=>$valor) {
        //var_dump($key);

        foreach ($valor as $valor2) {

            $franja = $valor2->franja;

            if($franja != $franjaAnterior) $comidaId++;
            $franjaAnterior = $franja;

            //Meto el alimento que toque
            $sqlAlimento = "INSERT INTO alimento (id, nombre)
                            VALUES($alimentoId, '$valor2->nombre');";

            $alimentoId = $alimentoId +1 ;

            $conn->query($sqlAlimento);    //Ejecuto sql alimentos

            $sqlComida= "INSERT INTO comida (id, idAlimento, cantidad)
                            VALUES($comidaId, $alimentoId, $valor2->cantidad);";

            $conn->query($sqlComida);   //Ejecuto sql de comida pero no incremento su idComida

            //Meto en un array con keys desayuno comida cena los ids de mis comidas segun sea

            switch($valor2->franja){
                case "desayuno":
                $diaArray["desayuno"] = $comidaId;
                break;
                case "postdesayuno":
                $diaArray["postdesayuno"] = $comidaId;
                break;
                case "comida":
                $diaArray["comida"] = $comidaId;
                break;
                case "merienda":
                $diaArray["merienda"] = $comidaId;
                break;
                case "cena":
                $diaArray["cena"] = $comidaId;
                break;
            }
            $diaArray['desayuno'];
            $sqlDia= "INSERT INTO dia (id, desayuno, postdesayuno, comida, merienda, cena)
                        VALUES($diaId, $diaArray[desayuno],$diaArray[postdesayuno],
                        $diaArray[comida],$diaArray[merienda],$diaArray[cena]);";

            $conn->query($sqlDia);   //Ejecuto sql de dia pero no incremento su idDia

            //Lo meto en comida
            //Con el id de la comida lo pongo en su franja en el dia
            //($valor2->nombre);

        }

        ////////////Meto el dia en su array de dieta////////////

        if(empty($valor2)) $diaId = 0;

        switch($key){
            case "Lunes":
            $dietaArray["Lunes"] = $diaId;
            break;
            case "Martes":
            $dietaArray["Martes"] = $diaId;
            break;
            case "Miercoles":
            $dietaArray["Miercoles"] = $diaId;
            break;
            case "Jueves":
            $dietaArray["Jueves"] = $diaId;
            break;
            case "Viernes":
            $dietaArray["Viernes"] = $diaId;
            break;
            case "Sabado":
            $dietaArray["Sabado"] = $diaId;
            break;
            case "Domingo":
            $dietaArray["Domingo"] = $diaId;
            break;
        }

        unset($valor2);
    }
    unset($valor); // rompe la referencia con el último elemento


    $sqlDieta= "INSERT INTO dieta (id, emailPaciente, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo)
    VALUES($dietaId, '$paciente->email', $dietaArray[Lunes],$dietaArray[Martes],
    $dietaArray[Miercoles], $dietaArray[Jueves], $dietaArray[Viernes],
    $dietaArray[Sabado] ,$dietaArray[Domingo]);";
    var_dump($sqlDieta);
    //die();

    $conn->query($sqlDieta);   //Ejecuto sql de Dieta

    die();




}

?>