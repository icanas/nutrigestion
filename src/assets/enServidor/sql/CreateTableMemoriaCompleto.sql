
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



INSERT INTO codigoregistro (codigo) VALUES
('123'),
('124'),
('125'),
('126'),
('127');


INSERT INTO `profesional` (`id`, `nombre`, `apellido`, `email`, `password`, `salt`, `activo`, `token`) VALUES
(NULL, 'Profesor', NULL, 'profesor@ucm.es', '$2y$10$Qcj//qMbN4hsGXI0ZVMbJeSfFI1Xwq2ozluvU3b7mIk6wCRmWaJTi', '515916187', b'1', 'c4c0bcad1e41a6172d304ff3892c1b52e1ace947');


INSERT INTO `paciente` (`id`, `nombre`, `apellido`, `apellido2`, `edad`, `sexo`, `email`, `password`, `activo`, `emailProfesional`, `salt`, `token`) VALUES
(NULL, 'Adrian', 'Lopez', 'Lazaro', '24', 'h', 'adrianlopez@ucm.es', '$2y$10$M3dof6lHCY3GG.D6mXbaaOFyOva/j8nPoj8SHbUaXviNWS46sT9CK', b'1', 'profesor@ucm.es', '315219754', '4969bdca4bcb116c8dba2e397fd3cf964dd2643d'),
(NULL, 'Ana', 'Nadal', 'Alonso', '38', 'm', 'ananadal@ucm.es', '$2y$10$eLpO5wael1Tw71AUuIUkTebZYJyLjUGj3SA.hhj1bMexW.S.hXT4y', b'1', 'profesor@ucm.es', '312635441', '266e3989bqrte56yshbeac8f4851b444873d07a2'),
(NULL, 'Ana', 'Ramos', 'Casado', '18', 'm', 'anaramos@ucm.es', '$2y$10$iRoOoA4fwCtxdpPdOCh3g.5RgiuB2Iged4PbGAOO5x4qQR75xQOj.', b'1', 'profesor@ucm.es', '730868763', '266e3989b1ef1e062b8eac8f4851b444873d07b3'),
(NULL, 'Ivan', 'Canas', 'Ramos', '28', 'h', 'icanas@ucm.es', '$2y$10$btQTD6QEC7w71AntHXkFoOussJHGwVTxdWWXLShK8UaahcuYvVHgu', b'1', 'profesor@ucm.es', '221082226', 'ecb523f3eb1ccff7fa68b14873d5c86d12066ac2'),
(NULL, 'Julio', 'Hernandez', 'Ramos', '45', 'h', 'juliohernandez@ucm.es', '$2y$10$MJ3CkUd4yBVoz/JMGW7rWuOOU3lpgeNNmdL/IiPy4ysLiroEylsse', b'0', 'profesor@ucm.es', '137927849', 'e8c154a095d32ac7ba16982d57d0f62380e00824'),
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





INSERT INTO `alimento` (`id`, `nombre`, `calorias`, `unidades`) VALUES
('1', 'naranja', NULL, 'litros'),
('2', 'leche', NULL, 'litros'),
('3', 'pan', NULL, 'gramos'),
('4', 'aguacate', NULL, 'gramos'),
('5', 'platano', NULL, 'gramos'),
('6', 'cafe', NULL, 'unidades'),
('7', 'judias blancas', NULL, 'gramos'),
('8', 'pimiento', NULL, 'gramos'),
('9', 'yogurt', NULL, 'unidades'),
('10', 'merluza', NULL, 'gramos'),
('11', 'patata', NULL, 'gramos'),
('12', 'fresa', NULL, 'gramos'),
('13', 'leche desnatada', NULL, 'litros'),
('14', 'muesli', NULL, 'gramos'),
('15', 'tomate', NULL, 'gramos'),
('16', 'lechuga', NULL, 'gramos'),
('17', 'mermelada', NULL, 'gramos'),
('18', 'champiÃ±ones', NULL, 'gramos'),
('19', 'huevo', NULL, 'unidades'),
('20', 'pavo', NULL, 'gramos'),
('21', 'queso', NULL, 'gramos'),
('22', 'avena', NULL, 'gramos'),
('23', 'judia verde', NULL, 'gramos'),
('24', 'arroz', NULL, 'gramos'),
('25', 'setas', NULL, 'gramos'),
('26', 'galleta', NULL, 'unidades'),
('27', 'calabacin', NULL, 'unidades'),
('28', 'maiz', NULL, 'gramos'),
('29', 'tostada', NULL, 'unidades'),
('30', 'miel', NULL, 'gramos'),
('31', 'salmon', NULL, 'gramos'),
('32', 'brocoli', NULL, 'gramos'),
('33', 'jamon', NULL, 'gramos'),
('34', 'berenjena', NULL, 'unidades'),
('35', 'pollo', NULL, 'gramos'),
('36', 'guisante', NULL, 'gramos'),
('37', 'gazpacho', NULL, 'litros'),
('38', 'caballa', NULL, 'gramos');




INSERT INTO `comida` (`id`, `idAlimento`, `cantidad`) VALUES
('2', '1', '0.20'),
('2', '2', '0.30'),
('2', '3', '100.00'),
('2', '4', '60.00'),
('3', '5', '160.00'),
('3', '6', '1.00'),
('4', '7', '80.00'),
('4', '8', '30.00'),
('4', '3', '60.00'),
('5', '9', '1.00'),
('5', '6', '1.00'),
('6', '10', '180.00'),
('6', '11', '30.00'),
('6', '3', '20.00'),
('6', '12', '100.00'),
('7', '13', '0.20'),
('7', '14', '200.00'),
('7', '6', '1.00'),
('8', '9', '1.00'),
('8', '12', '130.00'),
('9', '15', '1.00'),
('9', '4', '100.00'),
('9', '16', '80.00'),
('10', '3', '40.00'),
('10', '17', '15.00'),
('11', '18', '50.00'),
('11', '19', '2.00'),
('11', '3', '60.00'),
('12', '3', '70.00'),
('12', '20', '30.00'),
('12', '21', '20.00'),
('13', '9', '1.00'),
('13', '6', '1.00'),
('13', '22', '80.00'),
('14', '23', '200.00'),
('14', '24', '250.00'),
('14', '25', '30.00'),
('15', '2', '0.20'),
('15', '26', '2.00'),
('16', '27', '1.00'),
('16', '19', '1.00'),
('16', '21', '50.00'),
('17', '3', '100.00'),
('17', '15', '80.00'),
('17', '1', '0.20'),
('18', '9', '1.00'),
('18', '6', '1.00'),
('18', '12', '60.00'),
('19', '16', '200.00'),
('19', '15', '30.00'),
('19', '28', '15.00'),
('20', '29', '1.00'),
('20', '6', '1.00'),
('20', '30', '10.00'),
('21', '31', '300.00'),
('21', '3', '50.00'),
('21', '12', '120.00'),
('22', '3', '150.00'),
('22', '15', '40.00'),
('23', '9', '1.00'),
('23', '6', '1.00'),
('23', '5', '60.00'),
('24', '32', '200.00'),
('24', '33', '30.00'),
('25', '9', '1.00'),
('25', '21', '40.00'),
('25', '6', '1.00'),
('26', '34', '1.00'),
('26', '8', '20.00'),
('26', '35', '200.00'),
('27', '6', '1.00'),
('27', '1', '0.20'),
('28', '5', '1.00'),
('28', '9', '2.00'),
('29', '24', '250.00'),
('29', '35', '100.00'),
('29', '6', '1.00'),
('30', '9', '1.00'),
('30', '3', '40.00'),
('30', '30', '15.00'),
('31', '10', '230.00'),
('31', '11', '50.00'),
('32', '2', '0.20'),
('32', '14', '100.00'),
('33', '6', '80.00'),
('34', '36', '150.00'),
('34', '33', '40.00'),
('35', '29', '1.00'),
('35', '17', '20.00'),
('36', '37', '0.50'),
('36', '35', '200.00'),
('36', '24', '100.00'),
('37', '1', '0.20'),
('37', '2', '0.30'),
('37', '3', '100.00'),
('37', '4', '60.00'),
('38', '5', '160.00'),
('38', '6', '1.00'),
('39', '7', '80.00'),
('39', '8', '30.00'),
('39', '3', '60.00'),
('40', '9', '1.00'),
('40', '6', '1.00'),
('40', '5', '50.00'),
('41', '10', '180.00'),
('41', '11', '30.00'),
('41', '3', '20.00'),
('41', '12', '100.00'),
('42', '13', '0.20'),
('42', '14', '200.00'),
('42', '6', '1.00'),
('43', '9', '1.00'),
('43', '12', '130.00'),
('44', '15', '1.00'),
('44', '4', '100.00'),
('44', '16', '80.00'),
('45', '3', '40.00'),
('45', '17', '15.00'),
('46', '18', '50.00'),
('46', '19', '2.00'),
('46', '3', '60.00'),
('47', '3', '70.00'),
('47', '20', '30.00'),
('47', '21', '20.00'),
('48', '9', '1.00'),
('48', '6', '1.00'),
('48', '22', '80.00'),
('49', '23', '200.00'),
('49', '24', '250.00'),
('49', '25', '30.00'),
('50', '2', '0.20'),
('50', '26', '2.00'),
('51', '27', '1.00'),
('51', '19', '1.00'),
('51', '21', '50.00'),
('52', '3', '100.00'),
('52', '15', '80.00'),
('52', '1', '0.20'),
('53', '9', '1.00'),
('53', '6', '1.00'),
('53', '12', '60.00'),
('54', '16', '200.00'),
('54', '15', '30.00'),
('54', '28', '15.00'),
('55', '29', '1.00'),
('55', '6', '1.00'),
('55', '30', '10.00'),
('56', '31', '300.00'),
('56', '3', '50.00'),
('56', '12', '120.00'),
('57', '3', '150.00'),
('57', '15', '40.00'),
('58', '9', '1.00'),
('58', '6', '1.00'),
('58', '5', '60.00'),
('59', '32', '200.00'),
('59', '33', '30.00'),
('60', '9', '1.00'),
('60', '21', '40.00'),
('60', '6', '1.00'),
('61', '34', '1.00'),
('61', '8', '20.00'),
('61', '35', '200.00'),
('62', '6', '1.00'),
('62', '1', '0.20'),
('63', '5', '1.00'),
('63', '9', '2.00'),
('64', '24', '250.00'),
('64', '35', '100.00'),
('64', '6', '1.00'),
('65', '9', '1.00'),
('65', '3', '40.00'),
('65', '30', '15.00'),
('66', '10', '230.00'),
('66', '11', '50.00'),
('67', '2', '0.20'),
('67', '14', '100.00'),
('68', '6', '80.00'),
('69', '36', '150.00'),
('69', '33', '40.00'),
('70', '29', '1.00'),
('70', '17', '20.00'),
('71', '37', '0.50'),
('71', '35', '200.00'),
('71', '24', '100.00'),
('72', '1', '0.20'),
('72', '2', '0.30'),
('72', '3', '100.00'),
('72', '4', '60.00'),
('73', '5', '160.00'),
('73', '6', '1.00'),
('74', '7', '80.00'),
('74', '8', '30.00'),
('74', '3', '60.00'),
('75', '9', '1.00'),
('75', '6', '1.00'),
('76', '10', '180.00'),
('76', '11', '30.00'),
('76', '3', '20.00'),
('76', '12', '100.00'),
('77', '13', '0.20'),
('77', '14', '200.00'),
('77', '6', '1.00'),
('78', '9', '1.00'),
('78', '12', '130.00'),
('79', '15', '1.00'),
('79', '4', '100.00'),
('79', '16', '80.00'),
('79', '38', '90.00'),
('80', '3', '40.00'),
('80', '17', '15.00'),
('81', '18', '50.00'),
('81', '19', '2.00'),
('81', '3', '60.00'),
('82', '3', '70.00'),
('82', '20', '30.00'),
('82', '21', '20.00'),
('83', '9', '1.00'),
('83', '6', '1.00'),
('83', '22', '80.00'),
('84', '23', '200.00'),
('84', '24', '250.00'),
('84', '25', '30.00'),
('85', '2', '0.20'),
('85', '26', '2.00'),
('86', '27', '1.00'),
('86', '19', '1.00'),
('86', '21', '50.00'),
('87', '3', '100.00'),
('87', '15', '80.00'),
('87', '1', '0.20'),
('88', '9', '1.00'),
('88', '6', '1.00'),
('88', '12', '60.00'),
('89', '16', '200.00'),
('89', '15', '30.00'),
('89', '28', '15.00'),
('90', '29', '1.00'),
('90', '6', '1.00'),
('90', '30', '10.00'),
('91', '31', '300.00'),
('91', '3', '50.00'),
('91', '12', '120.00'),
('92', '3', '150.00'),
('92', '15', '40.00'),
('93', '9', '1.00'),
('93', '6', '1.00'),
('93', '5', '60.00'),
('94', '32', '200.00'),
('94', '33', '30.00'),
('95', '9', '1.00'),
('95', '21', '40.00'),
('95', '6', '1.00'),
('96', '34', '1.00'),
('96', '8', '20.00'),
('96', '35', '200.00'),
('97', '6', '1.00'),
('97', '1', '0.20'),
('98', '5', '1.00'),
('98', '9', '2.00'),
('99', '24', '250.00'),
('99', '35', '100.00'),
('99', '6', '1.00'),
('100', '9', '1.00'),
('100', '3', '40.00'),
('100', '30', '15.00'),
('101', '10', '230.00'),
('101', '11', '50.00'),
('102', '2', '0.20'),
('102', '14', '100.00'),
('103', '6', '80.00'),
('104', '36', '150.00'),
('104', '33', '40.00'),
('105', '29', '1.00'),
('105', '17', '20.00'),
('106', '37', '0.50'),
('106', '35', '200.00'),
('106', '24', '100.00'),
('107', '1', '0.20'),
('107', '2', '0.30'),
('108', '5', '160.00'),
('108', '6', '1.00'),
('109', '7', '80.00'),
('109', '8', '30.00'),
('110', '9', '1.00'),
('110', '6', '1.00'),
('111', '10', '180.00'),
('111', '11', '30.00'),
('112', '13', '0.20'),
('112', '14', '200.00'),
('113', '9', '1.00'),
('113', '12', '130.00'),
('114', '15', '1.00'),
('114', '4', '100.00'),
('114', '16', '80.00'),
('115', '3', '40.00'),
('115', '17', '15.00'),
('116', '18', '50.00'),
('116', '19', '2.00'),
('116', '3', '60.00'),
('117', '3', '70.00'),
('117', '20', '30.00'),
('118', '9', '1.00'),
('118', '6', '1.00'),
('118', '22', '80.00'),
('119', '23', '200.00'),
('119', '24', '250.00'),
('119', '25', '30.00'),
('120', '2', '0.20'),
('120', '26', '2.00'),
('121', '27', '1.00'),
('121', '19', '1.00'),
('122', '3', '100.00'),
('122', '15', '80.00'),
('122', '1', '0.20'),
('123', '9', '1.00'),
('123', '6', '1.00'),
('123', '12', '60.00'),
('124', '16', '200.00'),
('124', '15', '30.00'),
('124', '28', '15.00'),
('125', '29', '1.00'),
('125', '6', '1.00'),
('126', '31', '300.00'),
('126', '3', '50.00'),
('126', '12', '120.00'),
('127', '3', '150.00'),
('127', '15', '40.00'),
('128', '9', '1.00'),
('128', '6', '1.00'),
('128', '5', '60.00'),
('129', '32', '200.00'),
('129', '33', '30.00'),
('130', '9', '1.00'),
('130', '21', '40.00'),
('130', '6', '1.00'),
('131', '34', '1.00'),
('131', '8', '20.00'),
('131', '35', '200.00'),
('132', '6', '1.00'),
('132', '1', '0.20'),
('133', '5', '1.00'),
('134', '24', '250.00'),
('134', '35', '100.00'),
('134', '6', '1.00'),
('135', '9', '1.00'),
('135', '3', '40.00'),
('136', '10', '230.00'),
('136', '11', '50.00'),
('137', '2', '0.20'),
('137', '14', '100.00'),
('138', '6', '80.00'),
('139', '36', '150.00'),
('139', '33', '40.00'),
('140', '29', '1.00'),
('141', '37', '0.50'),
('141', '35', '200.00'),
('141', '24', '100.00'),
('142', '1', '0.20'),
('142', '2', '0.30'),
('142', '3', '100.00'),
('142', '4', '60.00'),
('143', '5', '160.00'),
('143', '6', '1.00'),
('144', '7', '80.00'),
('144', '8', '30.00'),
('144', '3', '60.00'),
('145', '9', '1.00'),
('145', '6', '1.00'),
('146', '10', '180.00'),
('146', '11', '30.00'),
('146', '3', '20.00'),
('146', '12', '100.00'),
('147', '13', '0.20'),
('147', '14', '200.00'),
('147', '6', '1.00'),
('148', '9', '1.00'),
('148', '12', '130.00'),
('149', '15', '1.00'),
('149', '4', '100.00'),
('149', '16', '80.00'),
('150', '3', '40.00'),
('150', '17', '15.00'),
('151', '18', '50.00'),
('151', '19', '2.00'),
('151', '3', '60.00'),
('152', '3', '70.00'),
('152', '20', '30.00'),
('152', '21', '20.00'),
('153', '9', '1.00'),
('153', '6', '1.00'),
('153', '22', '80.00'),
('154', '23', '200.00'),
('154', '24', '250.00'),
('154', '25', '30.00'),
('155', '2', '0.20'),
('155', '26', '2.00'),
('156', '27', '1.00'),
('156', '19', '1.00'),
('156', '21', '50.00'),
('157', '3', '100.00'),
('157', '15', '80.00'),
('157', '1', '0.20'),
('158', '9', '1.00'),
('158', '6', '1.00'),
('158', '12', '60.00'),
('159', '16', '200.00'),
('159', '15', '30.00'),
('159', '28', '15.00'),
('160', '29', '1.00'),
('160', '6', '1.00'),
('160', '30', '10.00'),
('161', '31', '300.00'),
('161', '3', '50.00'),
('161', '12', '120.00'),
('162', '3', '150.00'),
('162', '15', '40.00'),
('163', '9', '1.00'),
('163', '6', '1.00'),
('163', '5', '60.00'),
('164', '32', '200.00'),
('164', '33', '30.00'),
('165', '9', '1.00'),
('165', '21', '40.00'),
('165', '6', '1.00'),
('166', '34', '1.00'),
('166', '8', '20.00'),
('166', '35', '200.00'),
('167', '6', '1.00'),
('167', '1', '0.20'),
('168', '5', '1.00'),
('168', '9', '2.00'),
('169', '24', '250.00'),
('169', '35', '100.00'),
('169', '6', '1.00'),
('170', '9', '1.00'),
('170', '3', '40.00'),
('170', '30', '15.00'),
('171', '10', '230.00'),
('171', '11', '50.00'),
('172', '2', '0.20'),
('172', '14', '100.00'),
('173', '6', '80.00'),
('174', '36', '150.00'),
('174', '33', '40.00'),
('175', '29', '1.00'),
('175', '17', '20.00'),
('176', '37', '0.50'),
('176', '35', '200.00'),
('176', '24', '100.00'),
('177', '1', '0.20'),
('177', '2', '0.30'),
('177', '3', '100.00'),
('177', '4', '60.00'),
('178', '5', '160.00'),
('178', '6', '1.00'),
('179', '7', '80.00'),
('179', '8', '30.00'),
('179', '3', '60.00'),
('180', '9', '1.00'),
('180', '6', '1.00'),
('181', '10', '180.00'),
('181', '11', '30.00'),
('181', '3', '20.00'),
('182', '13', '0.20'),
('182', '14', '200.00'),
('182', '6', '1.00'),
('183', '9', '1.00'),
('184', '15', '1.00'),
('184', '4', '100.00'),
('184', '16', '80.00'),
('185', '3', '40.00'),
('186', '18', '50.00'),
('186', '19', '2.00'),
('186', '3', '60.00'),
('187', '3', '70.00'),
('187', '20', '30.00'),
('187', '21', '20.00'),
('188', '9', '1.00'),
('188', '6', '1.00'),
('188', '22', '80.00'),
('189', '23', '200.00'),
('189', '24', '250.00'),
('189', '25', '30.00'),
('190', '2', '0.20'),
('191', '27', '1.00'),
('191', '19', '1.00'),
('191', '21', '50.00'),
('192', '3', '100.00'),
('192', '15', '80.00'),
('193', '9', '1.00'),
('193', '6', '1.00'),
('194', '16', '200.00'),
('194', '15', '30.00'),
('194', '28', '15.00'),
('195', '29', '1.00'),
('195', '6', '1.00'),
('196', '31', '300.00'),
('196', '3', '50.00'),
('197', '3', '150.00'),
('197', '15', '40.00'),
('198', '9', '1.00'),
('198', '6', '1.00'),
('199', '32', '200.00'),
('199', '33', '30.00'),
('200', '9', '1.00'),
('200', '21', '40.00'),
('200', '6', '1.00'),
('201', '34', '1.00'),
('201', '8', '20.00'),
('201', '35', '200.00'),
('202', '6', '1.00'),
('203', '5', '1.00'),
('204', '24', '250.00'),
('204', '35', '100.00'),
('204', '6', '1.00'),
('205', '9', '1.00'),
('205', '3', '40.00'),
('206', '10', '230.00'),
('206', '11', '50.00'),
('207', '2', '0.20'),
('207', '14', '100.00'),
('208', '6', '80.00'),
('209', '36', '150.00'),
('209', '33', '40.00'),
('210', '29', '1.00'),
('210', '15', '30.00'),
('211', '37', '0.50'),
('211', '35', '200.00'),
('211', '24', '100.00');




INSERT INTO `dia` (`id`, `desayuno`, `postdesayuno`, `comida`, `merienda`, `cena`) VALUES
('2', '2', '3', '4', '5', '6'),
('3', '7', '8', '9', '10', '11'),
('4', '12', '13', '14', '15', '16'),
('5', '17', '18', '19', '20', '21'),
('6', '22', '23', '24', '25', '26'),
('7', '27', '28', '29', '30', '31'),
('8', '32', '33', '34', '35', '36'),
('9', '37', '38', '39', '40', '41'),
('10', '42', '43', '44', '45', '46'),
('11', '47', '48', '49', '50', '51'),
('12', '52', '53', '54', '55', '56'),
('13', '57', '58', '59', '60', '61'),
('14', '62', '63', '64', '65', '66'),
('15', '67', '68', '69', '70', '71'),
('16', '72', '73', '74', '75', '76'),
('17', '77', '78', '79', '80', '81'),
('18', '82', '83', '84', '85', '86'),
('19', '87', '88', '89', '90', '91'),
('20', '92', '93', '94', '95', '96'),
('21', '97', '98', '99', '100', '101'),
('22', '102', '103', '104', '105', '106'),
('23', '107', '108', '109', '110', '111'),
('24', '112', '113', '114', '115', '116'),
('25', '117', '118', '119', '120', '121'),
('26', '122', '123', '124', '125', '126'),
('27', '127', '128', '129', '130', '131'),
('28', '132', '133', '134', '135', '136'),
('29', '137', '138', '139', '140', '141'),
('30', '142', '143', '144', '145', '146'),
('31', '147', '148', '149', '150', '151'),
('32', '152', '153', '154', '155', '156'),
('33', '157', '158', '159', '160', '161'),
('34', '162', '163', '164', '165', '166'),
('35', '167', '168', '169', '170', '171'),
('36', '172', '173', '174', '175', '176'),
('37', '177', '178', '179', '180', '181'),
('38', '182', '183', '184', '185', '186'),
('39', '187', '188', '189', '190', '191'),
('40', '192', '193', '194', '195', '196'),
('41', '197', '198', '199', '200', '201'),
('42', '202', '203', '204', '205', '206'),
('43', '207', '208', '209', '210', '211');





INSERT INTO `dieta` (`id`, `emailPaciente`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`, `nombre`, `fecha`, `activo`) VALUES
('2', 'profesor@ucm.es', '2', '3', '4', '5', '6', '7', '8', 'Predefinida 1', '2019-05-11 12:12:50', b'1'),
('3', 'icanas@ucm.es', '9', '10', '11', '12', '13', '14', '15', 'Hipertrofia 1', '2019-05-11 12:32:34', b'0'),
('4', 'icanas@ucm.es', '16', '17', '18', '19', '20', '21', '22', 'Hipertrofia 2', '2019-05-11 12:33:36', b'1'),
('5', 'nataliah@ucm.es', '23', '24', '25', '26', '27', '28', '29', 'Adelgazamiento', '2019-05-11 12:34:59', b'1'),
('6', 'adrianlopez@ucm.es', '30', '31', '32', '33', '34', '35', '36', 'Sin Sal 1', '2019-05-11 12:35:28', b'1'),
('7', 'anaramos@ucm.es', '37', '38', '39', '40', '41', '42', '43', 'Sin Azucar 1', '2019-05-11 12:37:03', b'1');













