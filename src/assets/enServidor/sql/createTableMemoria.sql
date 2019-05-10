
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
    activo bit,
    
    FOREIGN KEY (emailPaciente) REFERENCES paciente(email)
    ON DELETE CASCADE


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

    id numeric(30,0)  primary key,
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


INSERT INTO `profesional` (`id`, `nombre`, `apellido`, `email`, `password`, `salt`, `activo`, `token`) VALUES
(NULL, 'Profesor', NULL, 'profesor@ucm.es', '$2y$10$Qcj//qMbN4hsGXI0ZVMbJeSfFI1Xwq2ozluvU3b7mIk6wCRmWaJTi', '515916187', b'1', 'c4c0bcad1e41a6172d304ff3892c1b52e1ace947');


INSERT INTO `paciente` (`id`, `nombre`, `apellido`, `apellido2`, `edad`, `sexo`, `email`, `password`, `activo`, `emailProfesional`, `salt`, `token`) VALUES
(NULL, 'Adrian', 'Lopez', 'Lazaro', '24', 'h', 'adrianlopez@ucm.es', '$2y$10$M3dof6lHCY3GG.D6mXbaaOFyOva/j8nPoj8SHbUaXviNWS46sT9CK', b'1', 'profesor@ucm.es', '315219754', '4969bdca4bcb116c8dba2e397fd3cf964dd2643d'),
(NULL, 'Ana', 'Nadal', 'Alonso', '38', 'm', 'ananadal@ucm.es', '$2y$10$eLpO5wael1Tw71AUuIUkTebZYJyLjUGj3SA.hhj1bMexW.S.hXT4y', b'1', 'profesor@ucm.es', '312635441', '266e3989b1ef1e062b8eac8f4851b444873d07b3'),
(NULL, 'Ana', 'Ramos', 'Casado', '18', 'm', 'anaramos@ucm.es', '$2y$10$iRoOoA4fwCtxdpPdOCh3g.5RgiuB2Iged4PbGAOO5x4qQR75xQOj.', b'1', 'profesor@ucm.es', '730868763', '266e3989b1ef1e062b8eac8f4851b444873d07b3'),
(NULL, 'Ivan', 'Canas', 'Ramos', '28', 'h', 'icanas@ucm.es', '$2y$10$btQTD6QEC7w71AntHXkFoOussJHGwVTxdWWXLShK8UaahcuYvVHgu', b'1', 'profesor@ucm.es', '221082226', 'ecb523f3eb1ccff7fa68b14873d5c86d12066ac2'),
(NULL, 'Julio', 'Hernandez', 'Ramos', '45', 'h', 'juliohernandez@ucm.es', '$2y$10$WcLqphtqffqe6wSFYt.TaesIYKsLXWsuAhHn07rJ7foB9ueBJpLYW', b'0', 'profesor@ucm.es', '987324294', '3d486e937e5fefaa241f521fd46523e010cb6d1b'),
(NULL, 'Natalia', 'Hristova', 'Migdalova', '26', 'm', 'nataliah@ucm.es', '$2y$10$/ZySupUaCWc3VvjMLXvmMudwmgvONHMgYi3UJoFgKdYMtjOxMhHsm', b'1', 'profesor@ucm.es', '641399613', '15c8381003ddbebbc58f73731dd6b81f0ecb8f40');



INSERT INTO `anatomia` (`email`, `peso`, `altura`, `PLtriceps`, `PLcrestaIliaca`, `PLsubescapular`, `PLbiceps`, `PLsupraespinal`, `PLabdominal`, `PLmuslo`, `PLpierna`, `PRbrazoRelajado`, `PRbrazoFlexionado`, `PRcintura`, `PRcadera`, `PRpierna`, `Dmuneca`, `Dhumero`, `DbiepicondilarFemur`, `fechaModificacion`, `activo`) VALUES
('icanas@ucm.es', '74.700', '179.800', '10.800', '16.000', '10.500', '3.500', '9.000', '21.000', '15.000', '7.000', '33.000', '34.900', '81.500', '92.000', '38.000', '14.000', '6.900', '10.100', '2019-05-10 18:04:54', b'0'),
('icanas@ucm.es', '76.800', '179.800', '11.800', '17.000', '12.500', '4.500', '11.000', '23.000', '17.000', '9.000', '32.000', '31.900', '89.500', '92.000', '39.000', '14.000', '6.900', '11.100', '2019-05-10 18:06:22', b'0'),
('icanas@ucm.es', '80.900', '179.800', '14.800', '20.000', '16.500', '10.500', '15.000', '28.000', '19.000', '11.000', '30.000', '37.900', '95.500', '92.000', '40.000', '14.000', '9.900', '11.100', '2019-05-10 18:07:41', b'0'),
('icanas@ucm.es', '75.900', '179.800', '9.800', '9.000', '10.500', '5.500', '10.000', '10.000', '8.000', '4.000', '38.000', '45.200', '75.500', '92.000', '34.000', '15.000', '9.900', '11.100', '2019-05-10 18:09:30', b'0'),
('icanas@ucm.es', '72.900', '179.800', '7.800', '3.000', '6.500', '5.500', '6.000', '8.000', '5.000', '3.000', '40.000', '49.200', '70.500', '92.000', '39.000', '15.000', '9.900', '11.100', '2019-05-10 18:10:46', b'1'),
('nataliah@ucm.es', '55.100', '165.500', '19.000', '20.000', '13.500', '5.000', '13.000', '32.000', '28.000', '15.000', '26.000', '25.800', '66.800', '98.800', '33.500', '12.000', '5.800', '8.600', '2019-05-10 18:16:10', b'0'),
('nataliah@ucm.es', '50.100', '165.500', '17.000', '15.000', '9.500', '2.000', '8.000', '15.000', '17.000', '14.000', '15.000', '22.800', '40.800', '98.800', '33.500', '12.000', '5.800', '8.600', '2019-05-10 18:17:28', b'0'),
('nataliah@ucm.es', '60.100', '165.500', '10.000', '10.000', '5.500', '2.500', '4.000', '10.000', '12.000', '9.000', '2.000', '29.800', '42.800', '98.800', '33.500', '12.000', '5.800', '8.600', '2019-05-10 18:18:27', b'1'),
('ananadal@ucm.es', '72.300', '171.200', '9.000', '13.000', '8.000', '5.000', '9.000', '15.000', '16.000', '7.000', '34.000', '34.700', '79.500', '96.000', '38.000', '11.000', '6.800', '9.700', '2019-05-10 18:21:09', b'0'),
('ananadal@ucm.es', '70.300', '178.200', '1.000', '4.000', '2.000', '3.000', '2.000', '5.000', '3.000', '2.000', '39.000', '67.700', '70.500', '96.000', '38.000', '11.000', '6.800', '9.700', '2019-05-10 18:22:03', b'1'),
('adrianlopez@ucm.es', '48.300', '157.200', '14.000', '13.000', '9.000', '4.000', '9.000', '10.800', '18.000', '8.500', '25.000', '25.500', '67.000', '91.000', '32.000', '9.000', '5.800', '8.400', '2019-05-10 18:23:51', b'0'),
('adrianlopez@ucm.es', '55.300', '157.200', '20.000', '18.000', '15.000', '12.000', '16.000', '22.800', '25.000', '16.500', '32.000', '33.500', '76.000', '91.000', '38.000', '12.000', '9.800', '13.400', '2019-05-10 18:25:24', b'0'),
('adrianlopez@ucm.es', '70.300', '157.200', '40.000', '28.000', '33.000', '23.000', '32.000', '40.800', '39.000', '26.500', '50.000', '58.500', '102.000', '91.000', '58.000', '15.000', '29.800', '23.400', '2019-05-10 18:26:46', b'1');



INSERT INTO `metrica` (`email`, `Imc`, `RatioCinturaCadera`, `Suma6Pliegues`, `Suma8Pliegues`, `PorcentGrasa`, `PorcentOsea`, `PorcentMuscular`, `PorcentResidual`, `MasaGrasa`, `MasaOsea`, `MasaMuscular`, `MasaResidual`, `Somatotipo`, `Endomorfo`, `Mesomorfo`, `Ectomorfo`, `fechaModificacion`, `activo`) VALUES
('icanas@ucm.es', '23.107', '0.886', '73.300', '92.800', '10.289', '25.476', '40.135', '24.100', '7.686', '19.031', '29.981', '18.003', 'Mesomorfo', '2.978', '5.300', '2.671', '2019-05-10 18:04:54', b'0'),
('icanas@ucm.es', '23.756', '0.973', '84.300', '105.800', '11.445', '26.503', '37.952', '24.100', '8.790', '20.354', '29.147', '18.509', 'Mesomorfo', '3.520', '5.447', '2.383', '2019-05-10 18:06:22', b'0'),
('icanas@ucm.es', '25.025', '1.038', '104.300', '134.800', '13.547', '25.160', '37.194', '24.100', '10.959', '20.354', '30.090', '19.497', 'Mesomorfo', '4.671', '9.221', '1.851', '2019-05-10 18:07:41', b'0'),
('icanas@ucm.es', '23.478', '0.821', '52.300', '66.800', '8.082', '28.732', '39.086', '24.100', '6.134', '21.808', '29.666', '18.292', 'Mesomorfo', '2.978', '9.834', '2.505', '2019-05-10 18:09:30', b'0'),
('icanas@ucm.es', '22.550', '0.766', '36.300', '44.800', '6.400', '29.915', '39.585', '24.100', '4.666', '21.808', '28.857', '17.569', 'Mesomorfo', '1.847', '11.445', '2.926', '2019-05-10 18:10:46', b'1'),
('nataliah@ucm.es', '20.117', '0.676', '120.500', '145.500', '22.233', '22.370', '34.497', '20.900', '12.251', '12.326', '19.008', '11.516', 'Endomorfo', '4.992', '2.610', '3.256', '2019-05-10 18:16:10', b'0'),
('nataliah@ucm.es', '18.291', '0.413', '80.500', '97.500', '16.041', '24.602', '38.456', '20.900', '8.037', '12.326', '19.267', '10.471', 'Ectomorfo', '3.752', '2.099', '4.282', '2019-05-10 18:17:28', b'0'),
('nataliah@ucm.es', '21.942', '0.433', '50.500', '63.000', '11.397', '20.509', '47.194', '20.900', '6.850', '12.326', '28.364', '12.561', 'Mesomorfo', '1.950', '3.628', '2.348', '2019-05-10 18:18:27', b'1'),
('ananadal@ucm.es', '24.668', '0.828', '64.000', '82.000', '13.487', '18.219', '47.394', '20.900', '9.751', '13.172', '34.266', '15.111', 'Mesomorfo', '2.647', '6.097', '1.502', '2019-05-10 18:21:09', b'0'),
('ananadal@ucm.es', '22.138', '0.734', '15.000', '22.000', '5.902', '20.301', '52.897', '20.900', '4.149', '14.271', '37.187', '14.693', 'Mesomorfo', '-0.040', '11.615', '3.026', '2019-05-10 18:22:03', b'1'),
('adrianlopez@ucm.es', '19.545', '0.736', '69.300', '86.300', '9.868', '16.981', '49.051', '24.100', '4.766', '8.202', '23.691', '11.640', 'Endomorfo', '3.659', '3.478', '3.017', '2019-05-10 18:23:51', b'0'),
('adrianlopez@ucm.es', '22.378', '0.835', '115.300', '145.300', '14.703', '27.576', '33.621', '24.100', '8.131', '15.250', '18.592', '13.327', 'Mesomorfo', '5.893', '12.143', '1.623', '2019-05-10 18:25:24', b'0'),
('adrianlopez@ucm.es', '28.448', '1.121', '211.300', '262.300', '24.793', '40.327', '10.780', '24.100', '17.429', '28.350', '7.579', '16.942', 'Mesomorfo', '12.864', '42.696', '0.100', '2019-05-10 18:26:46', b'1');



INSERT INTO `patologia_paciente` (`id`, `email`) VALUES
('0', 'icanas@ucm.es'),
('1', 'icanas@ucm.es'),
('5', 'nataliah@ucm.es'),
('2', 'adrianlopez@ucm.es');


INSERT INTO `cita` (`email`, `fecha`, `activo`) VALUES
('nataliah@ucm.es', '2019-05-21 07:15:00', b'0'),
('icanas@ucm.es', '2019-05-20 07:30:00', b'0'),
('icanas@ucm.es', '2019-05-21 09:45:00', b'0'),
('icanas@ucm.es', '2019-05-22 14:30:00', b'0'),
('icanas@ucm.es', '2019-06-16 13:20:00', b'1'),
('nataliah@ucm.es', '2019-06-18 16:10:00', b'1');












