// SELECT PROD.id_producto, PROD.nombre_producto, PROD.precio, (PROD.precio * divi.tasa_cambio) AS precio_en_dolares FROM productos PROD INNER JOIN divisas DIVI ON prod.codigo_divisa = divi.codigo_divisa;


// UPDATE `divisas` SET `tasa_cambio` = '900' WHERE `divisas`.`codigo_divisa` = 'USD';
import { getConnection } from "./../database/database"