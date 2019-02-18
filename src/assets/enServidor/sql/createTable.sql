create table profesional(

    id numeric(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(60) primary key,
    password varchar(64),
    salt varchar(60) null,
    activo bit null,
    token varchar (60) null,
    ultimaconexion date null
);

create table codigoregistro(

    codigo varchar(10) primary key,
    email varchar(20) null,
    fecha_activacion date null
);

create table paciente(

    id numeric(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(60) primary key,
    password varchar(64),
    activo bit,
    emailProfesional varchar(60),
    salt varchar(60) null,
    token varchar (60) null,
    ultimaconexion date null
);

create table anatomia(

    email varchar(60) primary key,
    peso numeric(4,2),
    altura numeric(4,2) null,
    fecha_activacion date null,
    fecha_modificacion date null,
    activo bit,

    FOREIGN KEY (email) REFERENCES paciente(email)
            ON DELETE CASCADE
);

create table cita(

    email varchar(60),
    fecha_cita datetime,
    activo bit

)