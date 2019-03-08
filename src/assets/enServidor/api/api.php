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

    case 'getDietas':

    $executionStatus = getDietas($conn, $data);
        break;

    case 'getDia':

    $executionStatus = getDia($conn, $data);
        break;

    case 'getComida':

    $executionStatus = getComida($conn, $data);
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

    $nombreDieta = $dieta->nombre;
    unset($dieta->nombre);


    $sqlDietaID = "SELECT MAX(id) as maxId from dieta;";
    $sqlDiaID= "SELECT MAX(id) as maxId from dia;";
    $sqlComidaID = "SELECT MAX(id) as maxId from comida;";
    $sqlAlimentoID = "SELECT MAX(id) as maxId from alimento;";

    /////////////////////////////////
    //Doy de baja cualquiera anterior
    /////////////////////////////////
    $sql = "UPDATE dieta SET activo = 0
            WHERE emailPaciente = '$paciente->email';";

    $result =  $conn->query($sql);

    //////////////////////////////////////////

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



    $comidaId = maxID("comida", $conn);

    foreach ($dieta as  $key=>$valor) {
        //var_dump($key);
        $franjaAnterior = "0";  //Nuevo dia de la semana, esto fuerza a comida nueva

        foreach ($valor as $valor2) {

            $franja = $valor2->franja;


            if($franja != $franjaAnterior){
                $comidaId = $comidaId + 1;
            }
            $franjaAnterior = $franja;

            $alimentoId = getAlimentoId($valor2->nombre,$conn);

            //Meto el alimento que toque
            $sql = "INSERT INTO alimento (id, nombre)
                            VALUES($alimentoId, '$valor2->nombre');";

            $conn->query($sql);    //Ejecuto sql alimentos

            $sql= "INSERT INTO comida (id, idAlimento, cantidad)
                            VALUES($comidaId, $alimentoId, $valor2->cantidad);";

            $conn->query($sql);   //Ejecuto sql de comida pero no incremento su idComida

            //Meto en un array con keys desayuno comida cena los ids de mis comidas segun sea


            switch($valor2->franja){        //QUE NO SE ME OLVIDE PONERLO A 0 OTRA VEZ
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


        }

        ///////////Lo introduzco en la tabla dia///////////////
        $diaId = maxID("dia",$conn);
        $diaId = $diaId + 1;

        $sql= "INSERT INTO dia (id, desayuno, postdesayuno, comida, merienda, cena)
                    VALUES($diaId, $diaArray[desayuno],$diaArray[postdesayuno],
                    $diaArray[comida],$diaArray[merienda],$diaArray[cena]);";


        if($diaArray["desayuno"] != 0 || $diaArray["postdesayuno"]  != 0 || $diaArray["comida"]  != 0 ||
            $diaArray["merienda"]  != 0 || $diaArray["cena"]  != 0){    // Si tiene comidas ejecuto
                $conn->query($sql);   //Ejecuto sql de dia
            }

        //Reinicio el array
        $diaArray = [
            "desayuno" => 0,
            "postdesayuno" => 0,
            "comida" => 0,
            "merienda" => 0,
            "cena" => 0
        ];


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

    $dietaId = maxID("dieta",$conn) + 1;

    $sql= "INSERT INTO dieta (id, emailPaciente, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo, fecha, nombre, activo)
    VALUES($dietaId, '$paciente->email', $dietaArray[Lunes],$dietaArray[Martes],
    $dietaArray[Miercoles], $dietaArray[Jueves], $dietaArray[Viernes],
    $dietaArray[Sabado] ,$dietaArray[Domingo], NOW(),'$nombreDieta', 1);";

    $conn->query($sql);   //Ejecuto sql de Dieta



}


function getDietas($conn, $data){

    $paciente = $data->Paciente;
    $sql = "SELECT * FROM dieta WHERE emailPaciente = '$paciente->email'
            ORDER BY activo desc, fecha desc;";

    $result =  $conn->query($sql);

    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    if ($result->num_rows == 0) {
        return FALSE;
    }

    return json_encode($json);


}

function getDia($conn, $data){

    $id = $data->Id;
    $sql = "SELECT * FROM dia WHERE id = '$id'";

    $result =  $conn->query($sql);

    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    if ($result->num_rows == 0) {
        return FALSE;
    }

    return json_encode($json);


}

function getComida($conn, $data){

    $id = $data->Id;
    $sql = "SELECT c.cantidad, a.nombre
    FROM comida c, alimento a
    WHERE c.idAlimento = a.id and c.id = '$id'";

    $result =  $conn->query($sql);

    while($row = $result->fetch_assoc()){
        $json[] = $row;
    }

    if ($result->num_rows == 0) {
        return FALSE;
    }

    return json_encode($json);


}

function maxID($table, $conn){
    $sql = "SELECT MAX(id) as maxId from $table;";
    $result =  $conn->query($sql);
    $id = $result->fetch_assoc();

    if ($id["maxId"] == null) {
         return 1;
     }else{
        $valor = intval($id["maxId"]);
        return $valor;
    }
}

 function getAlimentoId($alimento, $conn){    // Devuelve su id si existe y el nuevo(max)+1 si no
     $sql = "SELECT id  from alimento where nombre = '$alimento';";
     $result =  $conn->query($sql);


     if ($result->num_rows == 0) {  // Si no existe me quedo con el maxId

        $sql = "SELECT MAX(id) as maxId from alimento;";
        $result =  $conn->query($sql);
        $max = $result->fetch_assoc();

        if ($max["maxId"] == null) {
            return 1;
        }
        $devolver = (int)$max["maxId"];

        return $devolver + 1;

      }else{    // Si existe lo devuelvo
         $id = $result->fetch_assoc();
         return (int)$id["id"];
     }




 }





?>