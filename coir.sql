-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-07-2023 a las 09:05:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coir`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `ID` int(3) NOT NULL,
  `titulo` varchar(15) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`ID`, `titulo`, `descripcion`, `imagen`) VALUES
(1, 'Vidrios', 'Carpintería de vidrios: ventanas y mamparas', 'https://mamparas-oficina.com/wp-content/uploads/2022/08/vidrio-para-fachada.jpg'),
(2, 'granito y cuarz', 'Tablero de granito, cuarzo y mármol para cocinas y baños', 'https://www.ameriquartzusa.com/'),
(3, 'drywall', 'Sistema de drywall', 'https://plasmarquitectura.com/?p=2494'),
(4, 'Puertas', 'Puertas principales y secundarias en madera y/o contraplacadas', 'https://jaconstructores.wordpress.com/2015/10/16/puertas-diseno-para-tu-vivienda/'),
(5, 'escaleras', 'Escaleras de madera', 'https://www.infobae.com/new-resizer/9ZqGJZMiTrZKBzOjO12N0jDmYa8=/992x744/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/4UMY4JERGFCN3CIOTOPM5WAZYA.jpg'),
(6, 'carpinteria', 'Closets, cocina y muebles de baño', 'https://mueblesdemelaminaperu.com/wp-content/uploads/2019/01/Muebles-a-medida-de-melamina-Peru-cocinas-1024x606.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `confirmado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `token`, `confirmado`, `createdAt`, `updatedAt`) VALUES
(2, 'Pedro', 'pedro@pedro.com', '$2b$10$Qqt05YnIZlHugXzSDg1AROJUmYbSTQBPNA0lr7lyRfIp3Haor5tI.', NULL, 1, '2023-07-21 06:14:29', '2023-07-21 06:15:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
