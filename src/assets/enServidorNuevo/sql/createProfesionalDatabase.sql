create table paciente(

    id numeric(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(20) primary key,
    password varchar(64),
    activo bit,
    salt varchar(60) null,
    ultimaconexion date null
);

create table anatomia(

    peso numeric(4,2) primary key,
    altura numeric(4,2) null,
    fecha_activacion date null
)