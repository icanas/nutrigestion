<?php

class Conexion {
    private $servername;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    function __construct($servername, $username, $password , $dbname) {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
        $this->conn = new mysqli(this.$servername, this.$username, this.$password, this.$dbname);
    }

    function getConnection(){

        return $this->conn;

    }
}



?>