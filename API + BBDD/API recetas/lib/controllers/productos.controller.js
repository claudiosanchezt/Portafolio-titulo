"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;
var _database = require("./../database/database");
// SELECT PROD.id_producto, PROD.nombre_producto, PROD.precio, (PROD.precio * divi.valor) AS precio_en_dolares FROM productos PROD INNER JOIN divisas DIVI ON prod.codigo_divisa = divi.codigo_divisa;

// PARA OBTENER LOS RESULTADOS
const obtenerProducto = async (req, res) => {
  try {
    const connection = await (0, _database.getConnection)();
    const [result] = await connection.query(`SELECT 
        prod.id_producto, 
        prod.sku,
        prod.nombre_producto,
        prod.precio, ROUND(prod.precio / divi.valor,2) AS precio_en_dolares 
        FROM productos prod 
        INNER JOIN divisas divi ON prod.codigo_divisa = divi.codigo_divisa;`);

    // Verificar si hay resultados
    if (result.length === 0) {
      console.log("No hay productos disponibles.");
      return res.status(404).json({
        message: "No hay productos disponibles."
      });
    }
    // console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const products = exports.products = {
  // GET 
  obtenerProducto
};