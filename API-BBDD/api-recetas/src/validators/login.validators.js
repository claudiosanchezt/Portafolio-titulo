// Objetivo: Validar los datos que se envian desde el cliente para crear un usuario
const { check, validationResult } = require('express-validator');
const { httpError } = require('../utils/error');
// Validar los datos que se envian desde el cliente
const validadorLogin = [
    check('correo')
        .exists().withMessage("Favor debe ir el atributo correo Ejemplo: correo@gmail.com")
        .notEmpty().withMessage("Favor ingrese un correo valido")
        .isLength({ min: 5 }).withMessage("El minimo de caracteres son 5"),
    check('password')
        .exists().withMessage("Favor debe ir el atributo password")
        .notEmpty().withMessage("Favor Ingrese una contraseña valida")
        .isLength({ min: 8, max: 16 }).withMessage("El minimo de caracteres son 8 y el maximo son 16"),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            next();
        } catch (error) {
            return httpError(res, error.array());
        }
    }
];
// Exportamos la funcion
module.exports = {
    validadorLogin
}