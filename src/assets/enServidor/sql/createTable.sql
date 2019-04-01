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
    apellido2 varchar(20) null,
    edad numeric(4,0) null,
    sexo varchar(1) null,
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

    peso numeric(8,3) null,
    altura numeric(8,3) null,
    PLtriceps numeric(8,3) null,
    PLcrestaIliaca numeric(8,3) null,
    PLsubescapular numeric(8,3) null,
    PLbiceps numeric(8,3) null,
    PLsupraespinal numeric(8,3) null,
    PLabdominal numeric(8,3) null,
    PLmuslo numeric(8,3) null,
    PLpierna numeric(8,3) null,
    PRbrazoRelajado numeric(8,3) null,
    PRbrazoFlexionado numeric(8,3) null,
    PRcintura numeric(8,3) null,
    PRcadera numeric(8,3) null,
    PRpierna numeric(8,3) null,
    Dmuneca numeric(8,3) null,
    Dhumero numeric(8,3) null,
    DbiepicondilarFemur numeric(8,3) null,

    fechaModificacion datetime null,
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
    calorias numeric(8,2) null,
    unidades varchar(30) null

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

    nombre varchar(35) null,
    fecha datetime,
    activo bit


);

create table patologia(

    id numeric(10,0) primary key,
    nombre varchar(50)


);

create table patologia_paciente(

    id numeric(10,0),
    email varchar(60)


);


create table metrica(

    email varchar(60),

    Imc numeric(8,3) null,
    RatioCinturaCadera numeric(8,3) null,
    Suma6Pliegues numeric(8,3) null,
    Suma8Pliegues numeric(8,3) null,
    PorcentGrasa numeric(8,3) null,
    PorcentOsea numeric(8,3) null,
    PorcentMuscular numeric(8,3) null,
    PorcentResidual numeric(8,3) null,
    MasaGrasa numeric(8,3) null,
    MasaOsea numeric(8,3) null,
    MasaMuscular numeric(8,3) null,
    MasaResidual numeric(8,3) null,

    Somatotipo varchar(15) null,
    Endomorfo numeric(8,3) null,
    Mesomorfo numeric(8,3) null,
    Ectomorfo numeric(8,3) null,

    fechaModificacion datetime,
    activo bit


);

