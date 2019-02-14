<?php

class Paciente {
    private $correo;
    private $nombre;
    private $apellido;
    private $dbName;
    private $conn;


    function __construct($conn, $data) {
        $this->correo = $data->correo;
        $this->nombre = $data->nombre;
        $this->apellido = $data->nombre;
        $this->conn = $conn;
        $this->dbName = $data->dbName;

    }


}

?>
