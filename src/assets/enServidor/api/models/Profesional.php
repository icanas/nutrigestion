<?php


class Profesional {
    private $email;
    private $pass;
    private $nombre;
    private $conn;

    function __construct($conn, $data) {
        $this->email = $data->email;
        $this->conn = $conn;
        $this->pass = $data->pass;
        $this->nombre = $data->nombre;

    }


    function newProfessional(){ // inserta un  nuevo profesional en db

        $correoTrim = str_replace("@","",$this->email);
        $correoTrim = str_replace(".","",$correoTrim);

        //salt and pepper
        $salt = rand(100000000,999999999);
        $pepper = "jje[)=836!43¿Ç0´Ç1";
        $passUser = $this->pass;
        $passUser .= strval($salt);
        $passUser .= strval($pepper);
        $passUser = password_hash($passUser,PASSWORD_DEFAULT);
        //end salt and pepper

        var_dump($salt);
        var_dump($passUser);
        die();

        $token = sha1($this->email. $this->pass. $correoTrim);

        $sql = "INSERT INTO profesional (nombre, email, password, salt, activo, token)
                VALUES ('$this->nombre','$this->email', '$passUser','$salt' , 1, '$token');";


        return $this->conn->query($sql);

    }

    function newPaciente($paciente){

        $sql = "INSERT INTO paciente (nombre, email, password)
                VALUES ('$paciente->nombre', '$paciente->email', '$paciente->password');";

        return $this->conn->query($sql);

    }


}

?>
