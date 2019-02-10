create table profesional(

    id number(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(20) primary key,
    password varbinary,
    salt varchar(60) null,
    ultimaconexion date null
)

create table codigoregistro(

    codigo varchar(10) primary key,
    email varchar(20) null,
    fecha_activacion date null
)