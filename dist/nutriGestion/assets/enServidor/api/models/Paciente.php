<?php

class Paciente {
    private $correo;
    private $nombre;
    private $apellido;


    function __construct($conn, $data) {
        $this->correo = $data->correo;
        $this->nombre = $data->nombre;
        $this->apellido = $data->nombre;


    }


}

?>
