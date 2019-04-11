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

        $token = sha1($this->email. $this->pass. $correoTrim);

        $sql = "INSERT INTO profesional (nombre, email, password, activo, token)
                VALUES ('$this->nombre','$this->email', '$this->pass', 1, '$token');";

                // var_dump($sql);
                // die();

        return $this->conn->query($sql);

    }

    function newPaciente($paciente){

        $sql = "INSERT INTO paciente (nombre, email, password)
                VALUES ('$paciente->nombre', '$paciente->email', '$paciente->password');";

        return $this->conn->query($sql);

    }


}

?>
