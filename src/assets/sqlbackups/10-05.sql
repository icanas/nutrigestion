-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-05-2019 a las 12:57:26
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nutriGestion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimento`
--

CREATE TABLE `alimento` (
  `id` decimal(30,0) NOT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `calorias` decimal(8,2) DEFAULT NULL,
  `unidades` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alimento`
--

INSERT INTO `alimento` (`id`, `nombre`, `calorias`, `unidades`) VALUES
('1', 'manzana', NULL, 'unidades'),
('2', 'fresas', NULL, 'gramos'),
('3', 'leche', NULL, 'litros'),
('4', 'galleta', NULL, 'unidades'),
('5', 'arroz', NULL, 'gramos'),
('6', 'pollo', NULL, 'gramos'),
('7', 'fresa', NULL, 'unidades'),
('8', 'platano', NULL, 'gramos'),
('9', 'kiwi', NULL, 'gramos'),
('10', 'aguacate', NULL, 'unidades'),
('11', 'lentejas', NULL, 'gramos'),
('12', 'carne', NULL, 'gramos'),
('13', 'yogurt', NULL, 'unidades'),
('14', 'pavo', NULL, 'gramos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anatomia`
--

CREATE TABLE `anatomia` (
  `email` varchar(60) DEFAULT NULL,
  `peso` decimal(8,3) DEFAULT NULL,
  `altura` decimal(8,3) DEFAULT NULL,
  `PLtriceps` decimal(8,3) DEFAULT NULL,
  `PLcrestaIliaca` decimal(8,3) DEFAULT NULL,
  `PLsubescapular` decimal(8,3) DEFAULT NULL,
  `PLbiceps` decimal(8,3) DEFAULT NULL,
  `PLsupraespinal` decimal(8,3) DEFAULT NULL,
  `PLabdominal` decimal(8,3) DEFAULT NULL,
  `PLmuslo` decimal(8,3) DEFAULT NULL,
  `PLpierna` decimal(8,3) DEFAULT NULL,
  `PRbrazoRelajado` decimal(8,3) DEFAULT NULL,
  `PRbrazoFlexionado` decimal(8,3) DEFAULT NULL,
  `PRcintura` decimal(8,3) DEFAULT NULL,
  `PRcadera` decimal(8,3) DEFAULT NULL,
  `PRpierna` decimal(8,3) DEFAULT NULL,
  `Dmuneca` decimal(8,3) DEFAULT NULL,
  `Dhumero` decimal(8,3) DEFAULT NULL,
  `DbiepicondilarFemur` decimal(8,3) DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `anatomia`
--

INSERT INTO `anatomia` (`email`, `peso`, `altura`, `PLtriceps`, `PLcrestaIliaca`, `PLsubescapular`, `PLbiceps`, `PLsupraespinal`, `PLabdominal`, `PLmuslo`, `PLpierna`, `PRbrazoRelajado`, `PRbrazoFlexionado`, `PRcintura`, `PRcadera`, `PRpierna`, `Dmuneca`, `Dhumero`, `DbiepicondilarFemur`, `fechaModificacion`, `activo`) VALUES
('icanas@ucm.es', '74.700', '180.000', '10.000', '10.000', '16.000', '9.000', '12.000', '16.000', '8.000', '7.000', '33.000', '34.000', '81.000', '92.000', '38.000', '14.000', '7.000', '10.000', '2019-05-03 13:27:31', b'0'),
('icanas@ucm.es', '90.700', '180.000', '20.000', '20.000', '26.000', '19.000', '22.000', '26.000', '18.000', '17.000', '53.000', '54.000', '101.000', '112.000', '58.000', '34.000', '37.000', '40.000', '2019-05-03 13:28:59', b'0'),
('icanas@ucm.es', '80.700', '180.000', '25.000', '28.000', '24.000', '16.000', '20.000', '24.000', '16.000', '12.000', '59.000', '64.000', '90.000', '120.000', '50.000', '30.000', '31.000', '45.000', '2019-05-07 19:03:31', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `email` varchar(60) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`email`, `fecha`, `activo`) VALUES
('anaNadal@ucm.es', '2019-08-03 07:30:00', b'0'),
('icanas@ucm.es', '2019-05-22 10:00:00', b'0'),
('anaNadal@ucm.es', '2019-07-03 08:00:00', b'1'),
('icanas@ucm.es', '2019-05-04 08:00:00', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigoregistro`
--

CREATE TABLE `codigoregistro` (
  `codigo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comida`
--

CREATE TABLE `comida` (
  `id` decimal(30,0) DEFAULT NULL,
  `idAlimento` decimal(30,0) DEFAULT NULL,
  `cantidad` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comida`
--

INSERT INTO `comida` (`id`, `idAlimento`, `cantidad`) VALUES
('2', '1', '2.00'),
('2', '2', '200.00'),
('3', '1', '2.00'),
('4', '3', '2.00'),
('5', '4', '3.00'),
('6', '5', '500.00'),
('7', '6', '2000.00'),
('8', '4', '3.00'),
('9', '5', '500.00'),
('10', '6', '2000.00'),
('10', '3', '2.00'),
('11', '7', '2.00'),
('11', '4', '200.00'),
('11', '3', '0.50'),
('12', '6', '300.00'),
('12', '5', '100.00'),
('13', '8', '0.00'),
('14', '9', '0.00'),
('15', '7', '2.00'),
('15', '4', '200.00'),
('15', '3', '0.50'),
('16', '6', '300.00'),
('16', '5', '100.00'),
('17', '10', '2.00'),
('17', '3', '0.20'),
('18', '11', '600.00'),
('18', '12', '1000.00'),
('18', '13', '2.00'),
('19', '14', '200.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dia`
--

CREATE TABLE `dia` (
  `id` decimal(30,0) NOT NULL,
  `desayuno` decimal(30,0) DEFAULT NULL,
  `postdesayuno` decimal(30,0) DEFAULT NULL,
  `comida` decimal(30,0) DEFAULT NULL,
  `merienda` decimal(30,0) DEFAULT NULL,
  `cena` decimal(30,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dia`
--

INSERT INTO `dia` (`id`, `desayuno`, `postdesayuno`, `comida`, `merienda`, `cena`) VALUES
('2', '2', '0', '0', '0', '0'),
('3', '3', '4', '0', '0', '0'),
('4', '5', '0', '6', '0', '7'),
('5', '8', '0', '9', '0', '10'),
('6', '11', '0', '12', '0', '0'),
('7', '13', '0', '0', '0', '0'),
('8', '14', '0', '0', '0', '0'),
('9', '15', '0', '16', '0', '0'),
('10', '17', '0', '18', '0', '19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dieta`
--

CREATE TABLE `dieta` (
  `id` decimal(30,0) NOT NULL,
  `emailPaciente` varchar(60) DEFAULT NULL,
  `lunes` decimal(30,0) DEFAULT NULL,
  `martes` decimal(30,0) DEFAULT NULL,
  `miercoles` decimal(30,0) DEFAULT NULL,
  `jueves` decimal(30,0) DEFAULT NULL,
  `viernes` decimal(30,0) DEFAULT NULL,
  `sabado` decimal(30,0) DEFAULT NULL,
  `domingo` decimal(30,0) DEFAULT NULL,
  `nombre` varchar(35) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dieta`
--

INSERT INTO `dieta` (`id`, `emailPaciente`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`, `nombre`, `fecha`, `activo`) VALUES
('2', 'icanas@ucm.es', '2', '0', '0', '0', '0', '0', '0', 'Hipertrofia', '2019-05-03 13:11:42', b'0'),
('3', 'icanas@ucm.es', '3', '0', '0', '0', '0', '0', '0', 'Hipertrofia', '2019-05-03 13:13:35', b'0'),
('4', 'a', '4', '0', '0', '0', '0', '0', '0', 'Musculacion 1', '2019-05-03 13:15:23', b'0'),
('5', 'icanas@ucm.es', '5', '0', '0', '0', '0', '0', '0', 'Musculacion Ivan', '2019-05-03 13:31:08', b'0'),
('6', 'icanas@ucm.es', '6', '0', '0', '0', '0', '0', '0', 'Hipertrofia', '2019-05-08 13:12:14', b'0'),
('7', 'a', '7', '0', '0', '0', '0', '0', '0', 'Hipertrofia 1', '2019-05-08 13:50:46', b'0'),
('8', 'a', '8', '0', '0', '0', '0', '0', '0', 'Diabetes', '2019-05-08 13:51:04', b'1'),
('9', 'icanas@ucm.es', '9', '10', '0', '0', '0', '0', '0', ' ', '2019-05-08 14:34:36', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metrica`
--

CREATE TABLE `metrica` (
  `email` varchar(60) DEFAULT NULL,
  `Imc` decimal(8,3) DEFAULT NULL,
  `RatioCinturaCadera` decimal(8,3) DEFAULT NULL,
  `Suma6Pliegues` decimal(8,3) DEFAULT NULL,
  `Suma8Pliegues` decimal(8,3) DEFAULT NULL,
  `PorcentGrasa` decimal(8,3) DEFAULT NULL,
  `PorcentOsea` decimal(8,3) DEFAULT NULL,
  `PorcentMuscular` decimal(8,3) DEFAULT NULL,
  `PorcentResidual` decimal(8,3) DEFAULT NULL,
  `MasaGrasa` decimal(8,3) DEFAULT NULL,
  `MasaOsea` decimal(8,3) DEFAULT NULL,
  `MasaMuscular` decimal(8,3) DEFAULT NULL,
  `MasaResidual` decimal(8,3) DEFAULT NULL,
  `Somatotipo` varchar(15) DEFAULT NULL,
  `Endomorfo` decimal(8,3) DEFAULT NULL,
  `Mesomorfo` decimal(8,3) DEFAULT NULL,
  `Ectomorfo` decimal(8,3) DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `metrica`
--

INSERT INTO `metrica` (`email`, `Imc`, `RatioCinturaCadera`, `Suma6Pliegues`, `Suma8Pliegues`, `PorcentGrasa`, `PorcentOsea`, `PorcentMuscular`, `PorcentResidual`, `MasaGrasa`, `MasaOsea`, `MasaMuscular`, `MasaResidual`, `Somatotipo`, `Endomorfo`, `Mesomorfo`, `Ectomorfo`, `fechaModificacion`, `activo`) VALUES
('icanas@ucm.es', '23.056', '0.880', '69.000', '88.000', '9.837', '25.353', '40.710', '24.100', '7.348', '18.939', '30.411', '18.003', 'Mesomorfo', '3.803', '5.145', '2.706', '2019-05-03 13:27:31', b'0'),
('icanas@ucm.es', '27.994', '0.902', '129.000', '168.000', '16.143', '136.068', '-76.311', '24.100', '14.642', '123.414', '-69.214', '21.859', 'Mesomorfo', '6.863', '55.546', '0.919', '2019-05-03 13:28:59', b'0'),
('icanas@ucm.es', '24.907', '0.750', '121.000', '165.000', '15.302', '146.742', '-86.144', '24.100', '12.349', '118.421', '-69.518', '19.449', 'Mesomorfo', '6.964', '53.982', '1.910', '2019-05-07 19:03:31', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` decimal(10,0) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `apellido2` varchar(20) DEFAULT NULL,
  `edad` decimal(4,0) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(64) DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL,
  `emailProfesional` varchar(60) DEFAULT NULL,
  `salt` varchar(60) DEFAULT NULL,
  `token` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `nombre`, `apellido`, `apellido2`, `edad`, `sexo`, `email`, `password`, `activo`, `emailProfesional`, `salt`, `token`) VALUES
(NULL, 'Ana', 'Nadal', 'Alonso', '39', 'm', 'anaNadal@ucm.es', '$2y$10$dNiwpHTx743Ori6/NXq5fOui0Ijcf2h5zZY7E29HmLiiC7DU6YpTe', b'1', 'a', '220206411', 'd9c99e47ad1b4701d7dcdfe83f0f98764bb91126'),
(NULL, 'Ana', 'Ramos', ' Ramos', '23', 'm', 'anaramos@ucm.es', '$2y$10$n2dwrtpudapGqNQwMOWsS.6FlCXTwklXw55DS2gxbb3epzh0U9.X.', b'1', 'a', '573516847', 'd9c99e47ad1b4701d7dcdfe83f0f98764bb91126'),
(NULL, 'Ivan', 'Canas', 'Ramos', '28', 'h', 'icanas@ucm.es', '$2y$10$4BOJ1i3gpszGSzA/KP1dp.ShAwk2Mo7MRgtqF57ZQL3fcUQyZdRhW', b'1', 'a', '491396450', '220a31725a58542d927cb0f2d52e6861a59ad8f8'),
(NULL, 'Natalia', 'Migdalova', 'stoilova', '26', 'm', 'nat', '$2y$10$PRv8Xhmd00/eVchUUrHgMuO.lyFx4iNftqzaFVQK0aCd.gLR06am6', b'1', 'a', '331803456', 'a5a9c34a295328412e4338cfe664e60dbfb31610'),
(NULL, 'Natalia', 'Hristova', 'Migdalova', '25', 'm', 'natalia@ucm.es', '$2y$10$.LLDdqMtf/FaYoxE79mXBuvUJpeIv.tWavJz.OFrAcZK0g.1jbCUO', b'1', 'a', '207366365', 'a5a9c34a295328412e4338cfe664e60dbfb31610');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patologia`
--

CREATE TABLE `patologia` (
  `id` decimal(10,0) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `patologia`
--

INSERT INTO `patologia` (`id`, `email`, `nombre`) VALUES
('0', 'all', 'diabetes'),
('1', 'all', 'hipertension'),
('2', 'all', 'obesidad'),
('3', 'all', 'ovario poliquistico'),
('4', 'a', 'celiaco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patologia_paciente`
--

CREATE TABLE `patologia_paciente` (
  `id` decimal(10,0) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `patologia_paciente`
--

INSERT INTO `patologia_paciente` (`id`, `email`) VALUES
('4', 'icanas@ucm.es');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesional`
--

CREATE TABLE `profesional` (
  `id` decimal(10,0) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(64) DEFAULT NULL,
  `salt` varchar(60) DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL,
  `token` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesional`
--

INSERT INTO `profesional` (`id`, `nombre`, `apellido`, `email`, `password`, `salt`, `activo`, `token`) VALUES
(NULL, 'Ivan', 'Canas', 'a', '$2y$10$8ru1tBfh./RZ1MDPfNVoouh7AhuWY5sGxyuyzE1oze/1YYK7oXgcS', '992004248', b'1', '7e240de74fb1ed08fa08d38063f6a6a91462a815');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alimento`
--
ALTER TABLE `alimento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `codigoregistro`
--
ALTER TABLE `codigoregistro`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `dia`
--
ALTER TABLE `dia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `dieta`
--
ALTER TABLE `dieta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `patologia`
--
ALTER TABLE `patologia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesional`
--
ALTER TABLE `profesional`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
