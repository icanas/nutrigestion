
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
INSERT INTO profesional (nombre, email, password, activo, token)
                VALUES ('Profesional','a', 'a', 1, '7e240de74fb1ed08fa08d38063f6a6a91462a815');

create table codigoregistro(

    codigo varchar(10) primary key
);
INSERT INTO codigoregistro (codigo)
VALUES ('123');

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
    token varchar (60) null
);
INSERT INTO paciente (nombre, apellido, apellido2, edad, sexo, email, password, emailProfesional, activo, token)
                VALUES ('Ivan', 'Canas', 'Ramos',
                28, 'h', 'b', 'b', 'a', 1, '220a31725a58542d927cb0f2d52e6861a59ad8f8');

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
INSERT INTO anatomia (
                            email, peso, altura, PLtriceps,
                            PLsubescapular, PLbiceps, PLcrestaIliaca,
                            PLsupraespinal, PLabdominal, PLmuslo, PLpierna,
                            PRbrazoRelajado, PRbrazoFlexionado, PRcintura,
                            PRcadera, PRpierna, Dmuneca,
                            Dhumero, DbiepicondilarFemur, fechaModificacion, activo
                        )
                VALUES ('b', 74.700, 179.800, 11.000,
                        10.500, 3.500, 16.000,
                        9.000, 21.000, 15.000,
                        7.000, 33.000, 34.900,
                        81.500, 92.000, 38.000, 14.000,
                        6.900, 10.100,
                        NOW(), 1 );

create table cita(

    email varchar(60),
    fecha datetime,
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
    email varchar(60),
    nombre varchar(50)


);

insert into patologia(id,email,nombre) values (0,'all','diabetes');
insert into patologia(id,email,nombre) values (1,'all','hipertension');
insert into patologia(id,email,nombre) values (2,'all','obesidad');
insert into patologia(id,email,nombre) values (3,'all','ovario poliquistico');

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

INSERT INTO metrica (
                            email,Imc,RatioCinturaCadera,Suma6Pliegues,Suma8Pliegues,PorcentGrasa,
                            PorcentOsea,PorcentMuscular,PorcentResidual,MasaGrasa,MasaOsea,MasaMuscular,
                            MasaResidual,Somatotipo,Endomorfo,Mesomorfo,Ectomorfo,fechaModificacion,activo
                        )
                VALUES ('b',22.488217658726,0.69615384615385,69.5,
                        92,9.88945,4.4467195372174,61.563830462783,
                        24.1,7.18963015,3.232765103557,44.756904746443,
                        17.5207,'Mesomorfo',1.0331654392211,83.8753,
                        2.954743160704,NOW(),1);

