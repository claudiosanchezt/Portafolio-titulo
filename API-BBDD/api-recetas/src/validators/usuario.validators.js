// Objetivo: Validar los datos que se envian desde el cliente para crear un usuario
const { check, validationResult } = require('express-validator');
const { httpError } = require('./../utils/error');
// Validar los datos que se envian desde el cliente para crear un usuario
const validadorUsuario = [
    check('nombres')
        .exists().withMessage("Favor debe ir el atributo nombre y apellido")
        .notEmpty().withMessage("Favor este campo debe venir con informacion"),
    check('user')
        .exists().withMessage("Favor debe ir el atributo nombre de usuario")
        .notEmpty().withMessage("Favor este campo debe venir con informacion"),
    check('password')
        .exists().withMessage("Favor debe ir el atributo password")
        .notEmpty().withMessage("Favor este campo debe venir con informacion")
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

module.exports = {
    validadorUsuario
}