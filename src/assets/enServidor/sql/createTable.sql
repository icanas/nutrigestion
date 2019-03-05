create table profesional(

    id numeric(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(60) primary key,
    password varchar(64),
    salt varchar(60) null,
    activo bit null,
    token varchar (60) null,
    ultimaconexion datetime null
);

create table codigoregistro(

    codigo varchar(10) primary key,
    email varchar(20) null,
    fecha_activacion datetime null
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
    ultimaconexion datetime null
);

create table anatomia(

    email varchar(60),
    peso numeric(8,2) null,
    altura numeric(8,2) null,
    cintura numeric(8,2) null,
    brazo numeric(8,2) null,
    fecha_modificacion datetime null,
    activo bit

);

create table cita(

    email varchar(60),
    fecha_cita datetime,
    activo bit

);

create table alimento(

    id numeric(30,0) primary key,
    nombre varchar(40),
    calorias numeric(8,2) null

);

create table comida(

    id numeric(30,0),
    idAlimento  numeric(30,0),
    cantidad numeric(8,2)

);

create table dia(

    id numeric(30,0) primary key,
    desayuno  numeric(30,0) null,
    postdesayuno  numeric(30,0) null,
    comida  numeric(30,0) null,
    merienda  numeric(30,0) null,
    cena  numeric(30,0) null
);

create table dieta(

    id numeric(30,0) primary key,
    emailPaciente varchar(60),
    lunes numeric(30,0) null,
    martes numeric(30,0) null,
    miercoles numeric(30,0) null,
    jueves numeric(30,0) null,
    viernes numeric(30,0) null,
    sabado numeric(30,0) null,
    domingo numeric(30,0) null,

    fecha datetime,
    activo bit


)


