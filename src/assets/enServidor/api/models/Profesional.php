<?php

class Profesional {
    private $email;
    private $pass;
    private $conn;
    private $dbName;


    function __construct($conn, $data) {
        $this->email = $data->email;
        $this->conn = $conn;

        if (array_key_exists('password', $data)) {
            $this->pass = $data->pass;
        }

        if (array_key_exists('dbName', $data)) {
            $this->dbName = $data->dbName;
            $this->conn->select_db($this->dbName);
        }

    }

    function createSpace($conn){

        $this->conn = $conn;
        $correoTrim = str_replace("@","",$this->email);
        $correoTrim = str_replace(".","",$correoTrim);
        $this->dbName = $correoTrim;

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

    function newProfessional(){ // inserta un  nuevo profesional en db

        $correoTrim = str_replace("@","",$this->email);
        $correoTrim = str_replace(".","",$correoTrim);
        $this->dbName = $correoTrim;

        $sql = "INSERT INTO profesional (email, password, dbName)
                VALUES ('$this->email', '$this->pass', '$this->dbName');";

        return $this->conn->query($sql);

    }

    function newPaciente($paciente){

        $sql = "INSERT INTO paciente (nombre, email, password)
                VALUES ('$paciente->nombre', '$paciente->email', '$paciente->password');";

        return $this->conn->query($sql);

    }

}

?>
