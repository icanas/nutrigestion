<?php

class Profesional {
    private $correo;
    private $pass;
    private $conn;
    private $dbName;


    function __construct($conn, $data) {
        $this->correo = $data->correo;
        $this->pass = $data->pass;
        $this->conn = $conn;
        $correoTrim = str_replace("@","",$this->correo);
        $correoTrim = str_replace(".","",$correoTrim);
        $this->dbName = $correoTrim;

    }

    function createSpace(){

        //creo la base de datos con el nombre del correo
        $sql = "CREATE DATABASE $this->dbName;";

        $executionStatus = $this->conn->query($sql);

        if($executionStatus === FALSE){
            return FALSE;
        }

        //Me conecto a la base de datos nueva y genero todas sus tablas
        $this->conn->select_db($this->dbName);

        $sqlFileToExecute = file_get_contents("../sql/createProfesionalDatabase.sql");
        $sqlFile = $sqlFileToExecute;
        $sqlArray = explode(';',$sqlFile);

        foreach ($sqlArray as $sql) {
            $this->conn->query($sql);
        }

        return TRUE;

    }

    function newProfessional(){

        $sql = "INSERT INTO profesional (email, password, db_name)
                VALUES ('$this->correo', '$this->pass', '$this->dbName');";
        return $this->conn->query($sql);

    }
}

?>
