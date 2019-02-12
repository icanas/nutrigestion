create table paciente(

    id numeric(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(60) primary key,
    password varchar(64),
    activo bit,
    salt varchar(60) null,
    ultimaconexion date null
);

create table anatomia(

    email varchar(60) primary key,
    peso numeric(4,2),
    altura numeric(4,2) null,
    fecha_activacion date null,
    activo bit,

    FOREIGN KEY (email) REFERENCES paciente(email)
            ON DELETE CASCADE
)