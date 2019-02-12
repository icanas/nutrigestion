<?php

class Profesional {
    private $correo;
    private $pass;
    private $conn;
        ////////////////////// Añadir database name del profesional como campo de un profesional
    ////////////////////// en la base de datos raiz de nutrigestion

    function __construct($conn, $data) {
        $this->correo = $data->correo;
        $this->pass = $data->pass;
        $this->conn = $conn;

    }

    function createSpace(){

        //creo la base de datos con el nombre del correo
        $correoTrim = str_replace("@","",$this->correo);
        $correoTrim = str_replace(".","",$correoTrim);
        $sql = "CREATE DATABASE $correoTrim;";

        $executionStatus = $this->conn->query($sql);

        if($executionStatus === FALSE){
            return FALSE;
        }

        //Me conecto a la base de datos nueva y genero todas sus tablas
        $this->conn->select_db($correoTrim);

        $sqlFileToExecute = file_get_contents("../sql/createProfesionalDatabase.sql");
        $sqlFile = $sqlFileToExecute;
        $sqlArray = explode(';',$sqlFile);

        foreach ($sqlArray as $sql) {
            $this->conn->query($sql);
        }

        return TRUE;

    }

    function newProfessional(){

        $sql = "INSERT INTO profesional (email, password)
                VALUES ('$this->correo', '$this->pass');";
        return $this->conn->query($sql);

    }
}

?>
