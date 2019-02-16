<?php

class Profesional {
    private $email;
    private $pass;
    private $conn;

    function __construct($conn, $data) {
        $this->email = $data->email;
        $this->conn = $conn;
        $this->pass = $data->pass;

    }


    function newProfessional(){ // inserta un  nuevo profesional en db

        $correoTrim = str_replace("@","",$this->email);
        $correoTrim = str_replace(".","",$correoTrim);

        $sql = "INSERT INTO profesional (email, password)
                VALUES ('$this->email', '$this->pass');";

        return $this->conn->query($sql);

    }

    function newPaciente($paciente){

        $sql = "INSERT INTO paciente (nombre, email, password)
                VALUES ('$paciente->nombre', '$paciente->email', '$paciente->password');";

        return $this->conn->query($sql);

    }

    function getProfesional($token){

        $sql = "SELECT * FROM profesional WHERE token = $token;";

        return $this->conn->query($sql);

    }

}

?>
