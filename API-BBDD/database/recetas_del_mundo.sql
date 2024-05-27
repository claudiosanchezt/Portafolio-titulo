-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para recetas_del_mundo
CREATE DATABASE IF NOT EXISTS `recetas_del_mundo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `recetas_del_mundo`;

-- Volcando estructura para tabla recetas_del_mundo.carrusel
CREATE TABLE IF NOT EXISTS `carrusel` (
  `id_caru` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `url_imagen` varchar(300) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 0,
  `id_usr` int(11) NOT NULL,
  PRIMARY KEY (`id_caru`),
  KEY `FK1_idusuario_carrusel` (`id_usr`),
  CONSTRAINT `FK1_idusuario_carrusel` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla recetas_del_mundo.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id_cat` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 0,
  `fecha_creacion` datetime NOT NULL,
  `Comentario` text DEFAULT NULL,
  `id_usr` int(11) NOT NULL,
  PRIMARY KEY (`id_cat`) USING BTREE,
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla recetas_del_mundo.pais
CREATE TABLE IF NOT EXISTS `pais` (
  `id_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `url_imagen` varchar(300) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 0,
  `fecha_creacion` datetime NOT NULL,
  `Comentario` int(11) DEFAULT NULL,
  `id_usr` int(11) NOT NULL,
  PRIMARY KEY (`id_pais`) USING BTREE,
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla recetas_del_mundo.receta
CREATE TABLE IF NOT EXISTS `receta` (
  `id_receta` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `url_imagen` varchar(300) NOT NULL,
  `ingrediente` text NOT NULL,
  `preparacion` text NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `id_cat` int(11) NOT NULL,
  `id_pais` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `id_usr` int(11) NOT NULL,
  PRIMARY KEY (`id_receta`) USING BTREE,
  UNIQUE KEY `nombre` (`nombre`),
  KEY `FK1_categorias` (`id_cat`),
  KEY `FK2_pais` (`id_pais`),
  KEY `FK3_receta` (`id_usr`),
  CONSTRAINT `FK1_categorias` FOREIGN KEY (`id_cat`) REFERENCES `categoria` (`id_cat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_pais` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK3_receta` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla recetas_del_mundo.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usr` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) DEFAULT NULL,
  `apellido` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `correo` varchar(16) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`id_usr`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
