
create database nutriGestion2;
use nutriGestion2;

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
    activo bit,
    
    FOREIGN KEY (emailPaciente) REFERENCES paciente(email)
    ON DELETE CASCADE


);

CREATE INDEX indiceDieta
ON dieta (lunes, martes, miercoles, jueves, viernes, sabado, domingo);



create table dia(

    id numeric(30,0) not null,
    desayuno  numeric(30,0) not null,
    postdesayuno  numeric(30,0) not null,
    comida  numeric(30,0) not null,
    merienda  numeric(30,0) not null,
    cena  numeric(30,0) not null

);

CREATE INDEX indiceDia
ON dia (id, desayuno, postdesayuno, comida, merienda, cena);


create table comida(

    id numeric(30,0)  primary key,
    idAlimento  numeric(30,0) not null,
    cantidad numeric(8,2)

);

CREATE INDEX indiceComida
ON comida (idAlimento);


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
('4', 'a', 'celiaco');




create table patologia_paciente(

    id numeric(10,0),
    email varchar(60),

    FOREIGN KEY (id) REFERENCES patologia(id)
    ON DELETE CASCADE,
    FOREIGN KEY (email) REFERENCES paciente(email)
    ON DELETE CASCADE

);






ALTER TABLE `dieta`

    ADD CONSTRAINT `dieta_ibfk_2` FOREIGN KEY (`lunes`) REFERENCES `dia` (`id`) on delete cascade,
    ADD CONSTRAINT `dieta_ibfk_3` FOREIGN KEY (`martes`) REFERENCES `dia` (`id`) on delete cascade,
    ADD CONSTRAINT `dieta_ibfk_4` FOREIGN KEY (`miercoles`) REFERENCES `dia` (`id`) on delete cascade,
    ADD CONSTRAINT `dieta_ibfk_5` FOREIGN KEY (`jueves`) REFERENCES `dia` (`id`) on delete cascade,
    ADD CONSTRAINT `dieta_ibfk_6` FOREIGN KEY (`viernes`) REFERENCES `dia` (`id`) on delete cascade,
    ADD CONSTRAINT `dieta_ibfk_7` FOREIGN KEY (`sabado`) REFERENCES `dia` (`id`) on delete cascade,
    ADD CONSTRAINT `dieta_ibfk_8` FOREIGN KEY (`domingo`) REFERENCES `dia` (`id`) on delete cascade;

ALTER TABLE `dia`

  ADD CONSTRAINT `dia_ibfk_1` FOREIGN KEY (`desayuno`) REFERENCES `comida` (`id`) on delete cascade,
  ADD CONSTRAINT `dia_ibfk_2` FOREIGN KEY (`postdesayuno`) REFERENCES `comida` (`id`) on delete cascade,
  ADD CONSTRAINT `dia_ibfk_3` FOREIGN KEY (`comida`) REFERENCES `comida` (`id`) on delete cascade,
  ADD CONSTRAINT `dia_ibfk_4` FOREIGN KEY (`merienda`) REFERENCES `comida` (`id`) on delete cascade,
  ADD CONSTRAINT `dia_ibfk_5` FOREIGN KEY (`cena`) REFERENCES `comida` (`id`) on delete cascade;


ALTER TABLE `comida`

  ADD CONSTRAINT `comida_ibfk_1` FOREIGN KEY (`idAlimento`) REFERENCES `alimento` (`id`) on delete cascade;






INSERT INTO `profesional` (`id`, `nombre`, `apellido`, `email`, `password`, `salt`, `activo`, `token`) VALUES
(0, 'centinela', 'centinela', 'centinela', 'centinela', 'centinela', b'1', 'centinela');

INSERT INTO `paciente` (`id`, `nombre`, `apellido`, `apellido2`, `edad`, `sexo`, `email`, `password`, `activo`, `emailProfesional`, `salt`, `token`) VALUES 
(0, 'centinela', 'centinela', 'centinela', '0', 'm', 'centinela', '0', b'0', 'centinela', '0', '0');



INSERT INTO `alimento` (`id`, `nombre`, `calorias`, `unidades`) VALUES
('0', '', NULL, '');

INSERT INTO `comida` (`id`, `idAlimento`, `cantidad`) VALUES
('0', '0', '0');

INSERT INTO `dia` (`id`, `desayuno`, `postdesayuno`, `comida`, `merienda`, `cena`) VALUES
('0', '0', '0', '0', '0', '0');

INSERT INTO `dieta` (`id`, `emailPaciente`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`, `nombre`, `fecha`, `activo`) VALUES
('0', 'centinela', '0', '0', '0', '0', '0', '0', '0', '', '', b'0');


















