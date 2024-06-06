"use strict";

// Objetivo: Manejar los errores de la aplicación
const httpError = function (res, msj) {
  let estado = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
  return res.status(estado).json({
    "ok": false,
    "msj": msj
  });
};
// Exportamos la funcion
module.exports = {
  httpError
};