<?php

class CreateProfesionalSpace {
    private $email;
    private $servername;
    private $username;
    private $password;

    function __construct($servername, $username, $password, $email) {
        $this->servername = $servername;
        $this->email = $email;
        $this->username = $username;
        $this->password = $password;
        $this->email = str_replace("@","",$this->email);
        $this->email = str_replace(".","",$this->email);
    }

    function execute(){

        //creo la base de datos con el nombre del email
        $sql = "CREATE DATABASE $this->email;";

        $conn = new mysqli($this->servername, $this->username, $this->password);
        $conn->query($sql);
        mysqli_close($conn);

        //Me conecto a la base de datos nueva y genero todas sus tablas
        $conn= new mysqli($this->servername, $this->username, $this->password, $this->email);

        $sqlFileToExecute = file_get_contents("../sql/createProfesionalDatabase.sql");
        $sqlFile = $sqlFileToExecute;
        $sqlArray = explode(';',$sqlFile);

        foreach ($sqlArray as $sql) {
            $conn->query($sql);
        }


    }
}

?>