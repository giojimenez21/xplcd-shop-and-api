-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-05-2023 a las 00:23:01
-- Versión del servidor: 10.5.19-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `xplcd_shop_local`
--
CREATE DATABASE IF NOT EXISTS `xplcd_shop_local` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `xplcd_shop_local`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compatibility_of_models`
--

CREATE TABLE `compatibility_of_models` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `notes` text NOT NULL,
  `id_product_by_list` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_by_list`
--

CREATE TABLE `products_by_list` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `quality` varchar(100) NOT NULL,
  `color` varchar(255) NOT NULL,
  `base` float NOT NULL,
  `base_irving` float NOT NULL,
  `xp3` float NOT NULL,
  `xp4` float NOT NULL,
  `xp5` float NOT NULL,
  `public` float NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `stock_odoo` tinyint(1) NOT NULL DEFAULT 0,
  `id_brand` int(11) NOT NULL,
  `id_odoo` int(11) NOT NULL,
  `url_image` varchar(255) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_of_sales`
--

CREATE TABLE `products_of_sales` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_sale` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `total` float NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'OPEN',
  `payment_method` varchar(50) NOT NULL DEFAULT 'CASH',
  `id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock_by_date`
--

CREATE TABLE `stock_by_date` (
  `id` int(11) NOT NULL,
  `initial100P` int(11) DEFAULT NULL,
  `final100P` int(11) DEFAULT NULL,
  `initial320P` int(11) NOT NULL,
  `final320P` int(11) NOT NULL,
  `initialWh` int(11) NOT NULL,
  `finalWh` int(11) NOT NULL,
  `initialGar` int(11) NOT NULL,
  `finalGar` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `access_to_lists` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `versions_by_product`
--

CREATE TABLE `versions_by_product` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `id_product_by_list` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compatibility_of_models`
--
ALTER TABLE `compatibility_of_models`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_by_list_compatibility` (`id_product_by_list`) USING BTREE;

--
-- Indices de la tabla `products_by_list`
--
ALTER TABLE `products_by_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_brand` (`id_brand`);

--
-- Indices de la tabla `products_of_sales`
--
ALTER TABLE `products_of_sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sale` (`id_sale`) USING BTREE;

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_client` (`id_client`);

--
-- Indices de la tabla `stock_by_date`
--
ALTER TABLE `stock_by_date`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `versions_by_product`
--
ALTER TABLE `versions_by_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_by_list` (`id_product_by_list`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compatibility_of_models`
--
ALTER TABLE `compatibility_of_models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products_by_list`
--
ALTER TABLE `products_by_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products_of_sales`
--
ALTER TABLE `products_of_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stock_by_date`
--
ALTER TABLE `stock_by_date`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `versions_by_product`
--
ALTER TABLE `versions_by_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compatibility_of_models`
--
ALTER TABLE `compatibility_of_models`
  ADD CONSTRAINT `fk_products_by_list_compatibility	` FOREIGN KEY (`id_product_by_list`) REFERENCES `products_by_list` (`id`);

--
-- Filtros para la tabla `products_by_list`
--
ALTER TABLE `products_by_list`
  ADD CONSTRAINT `fk_brand` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`id`);

--
-- Filtros para la tabla `products_of_sales`
--
ALTER TABLE `products_of_sales`
  ADD CONSTRAINT `fk_sale` FOREIGN KEY (`id_sale`) REFERENCES `sales` (`id`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `fk_client` FOREIGN KEY (`id_client`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `versions_by_product`
--
ALTER TABLE `versions_by_product`
  ADD CONSTRAINT `fk_products_by_list` FOREIGN KEY (`id_product_by_list`) REFERENCES `products_by_list` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
