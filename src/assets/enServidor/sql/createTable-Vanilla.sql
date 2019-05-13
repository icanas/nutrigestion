
create database nutriGestion;
use nutriGestion;

create table profesional(

    id numeric(10,0) null,
    nombre varchar(20) null,
    apellido varchar(20) null,
    email varchar(60) primary key,
    password varchar(64),
    salt varchar(60) null,
    activo bit null,
    token varchar (60) null
);



create table codigoregistro(

    codigo varchar(30) primary key
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

    FOREIGN KEY (emailProfesional) REFERENCES profesional(email)
    ON DELETE CASCADE

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
    activo bit,

    FOREIGN KEY (email) REFERENCES paciente(email)
    ON DELETE CASCADE

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
    activo bit,

    FOREIGN KEY (email) REFERENCES paciente(email)
    ON DELETE CASCADE


);


create table cita(

    email varchar(60),
    fecha datetime,
    activo bit,

    FOREIGN KEY (email) REFERENCES paciente(email)
    ON DELETE CASCADE

);



create table dieta(

    id numeric(30,0) primary key,
    emailPaciente varchar(60),
    lunes numeric(30,0) not null,
    martes numeric(30,0) not null,
    miercoles numeric(30,0) not null,
    jueves numeric(30,0) not null,
    viernes numeric(30,0) not null,
    sabado numeric(30,0) not null,
    domingo numeric(30,0) not null,

    nombre varchar(35) null,
    fecha datetime,
    activo bit


);



create table dia(

    id numeric(30,0) primary key,
    desayuno  numeric(30,0) not null,
    postdesayuno  numeric(30,0) not null,
    comida  numeric(30,0) not null,
    merienda  numeric(30,0) not null,
    cena  numeric(30,0) not null


);



create table comida(

    id numeric(30,0)  not null,
    idAlimento  numeric(30,0) not null,
    cantidad numeric(8,2)

);



create table alimento(

    id numeric(30,0) primary key,
    nombre varchar(40),
    calorias numeric(8,2) null,
    unidades varchar(30) null

);


create table patologia(

    id numeric(10,0) primary key,
    email varchar(60),
    nombre varchar(50)

);

INSERT INTO `patologia` (`id`, `email`, `nombre`) VALUES
('0', 'all', 'diabetes'),
('1', 'all', 'hipertension'),
('2', 'all', 'obesidad'),
('3', 'all', 'ovario poliquistico'),
('4', 'a', 'celiaco'),
('5', 'profesor@ucm.es', 'celiaco');




create table patologia_paciente(

    id numeric(10,0),
    email varchar(60),

    FOREIGN KEY (id) REFERENCES patologia(id)
    ON DELETE CASCADE,
    FOREIGN KEY (email) REFERENCES paciente(email)
    ON DELETE CASCADE

);



INSERT INTO codigoregistro (codigo)
VALUES ('123');

