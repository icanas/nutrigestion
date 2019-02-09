<?php

class Conexion {
    private $servername;
    private $username;
    private $password;
    private $dbname;

    function __construct($servername, $username, $password , $dbname) {
        this.$servername = $servername;
        this.$username = $username;
        this.$password = $password;
        this.$dbname = $dbname;
    }

    function getConnection(){

        return new mysqli(this.$servername, this.$username, this.$password, this.$dbname);

    }
}



?>